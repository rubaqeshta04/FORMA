import { useId, useState } from "react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/cn";
import {
  hasErrors,
  validateContactValues,
  validateField,
} from "@/lib/validation";
import type { ContactErrors, ContactStatus, ContactValues } from "@/types";

const EMPTY: ContactValues = { name: "", email: "", message: "" };

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY?.trim();

const hasEndpoint = Boolean(WEB3FORMS_KEY);

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const fieldId = (field: keyof ContactValues) => `${formId}-${field}`;
  const errorId = (field: keyof ContactValues) => `${formId}-${field}-error`;

  const onChange = (field: keyof ContactValues) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = validateField(field, { ...values, [field]: value });
      if (next) return current;
      const remaining = { ...current };
      delete remaining[field];
      return remaining;
    });
    if (status !== "idle") setStatus("idle");
  };

  const onBlur = (field: keyof ContactValues) => () => {
    const message = validateField(field, values);
    setErrors((current) => {
      if (message) return { ...current, [field]: message };
      const remaining = { ...current };
      delete remaining[field];
      return remaining;
    });
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${values.name.trim()}`,
    );
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const nextErrors = validateContactValues(values);

    if (hasErrors(nextErrors)) {
      setErrors(nextErrors);
      setStatus("error");
      setSubmitError("Please fix the highlighted fields and try again.");

      const firstInvalid = (
        Object.keys(nextErrors) as (keyof ContactValues)[]
      ).find((field) => nextErrors[field] !== undefined);
      if (firstInvalid) document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setErrors({});
    setSubmitError("");

    if (!hasEndpoint) {
      openMailClient();
      return;
    }

    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_KEY as string);
    payload.append("name", values.name.trim());
    payload.append("email", values.email.trim());
    payload.append("message", values.message.trim());
    payload.append("subject", `Portfolio enquiry from ${values.name.trim()}`);
    payload.append("from_name", siteConfig.name);
    payload.append("replyto", values.email.trim());
    payload.append("botcheck", "");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || `Request failed with status ${response.status}`,
        );
      }

      setValues(EMPTY);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error instanceof Error && error.message
          ? `Could not send: ${error.message}`
          : "Could not send. Please email me directly instead.",
      );
    }
  };

  const fieldClasses = (invalid: boolean) =>
    cn(
      "w-full rounded-xl border bg-surface px-3.5 py-3 text-sm text-text",
      "placeholder:text-muted/60",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
      invalid
        ? "border-red-500/60 focus-visible:ring-red-500"
        : "border-border hover:border-border-strong focus-visible:border-accent",
    );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor={fieldId("name")}
            className="text-sm font-medium text-text"
          >
            Name
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => onChange("name")(event.target.value)}
            onBlur={onBlur("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? errorId("name") : undefined}
            placeholder="Jane Doe"
            className={fieldClasses(Boolean(errors.name))}
          />
          {errors.name ? (
            <p
              id={errorId("name")}
              role="alert"
              className="flex items-center gap-1.5 text-xs text-red-500"
            >
              <Icon name="circle-alert" className="size-3.5 shrink-0" />
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor={fieldId("email")}
            className="text-sm font-medium text-text"
          >
            Email
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => onChange("email")(event.target.value)}
            onBlur={onBlur("email")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errorId("email") : undefined}
            placeholder="jane@example.com"
            className={fieldClasses(Boolean(errors.email))}
          />
          {errors.email ? (
            <p
              id={errorId("email")}
              role="alert"
              className="flex items-center gap-1.5 text-xs text-red-500"
            >
              <Icon name="circle-alert" className="size-3.5 shrink-0" />
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={fieldId("message")}
          className="text-sm font-medium text-text"
        >
          Message
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => onChange("message")(event.target.value)}
          onBlur={onBlur("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={
            [
              errors.message ? errorId("message") : null,
              `${formId}-message-hint`,
            ]
              .filter(Boolean)
              .join(" ") || undefined
          }
          placeholder="What are you working on, and where could I help?"
          className={cn(
            fieldClasses(Boolean(errors.message)),
            "resize-y min-h-32",
          )}
        />
        {errors.message ? (
          <p
            id={errorId("message")}
            role="alert"
            className="flex items-center gap-1.5 text-xs text-red-500"
          >
            <Icon name="circle-alert" className="size-3.5 shrink-0" />
            {errors.message}
          </p>
        ) : (
          <p id={`${formId}-message-hint`} className="text-xs text-muted">
            At least 20 characters.
            {hasEndpoint
              ? " It goes straight to my inbox."
              : " This opens your email client."}
          </p>
        )}
      </div>

      <div
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor={`${formId}-botcheck`}>Bot check</label>
        <input
          id={`${formId}-botcheck`}
          name="botcheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          icon={status === "submitting" ? "loader" : "send"}
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>

        <p className="text-xs leading-relaxed text-muted">
          {hasEndpoint
            ? "Sent via Web3Forms."
            : "No endpoint configured. The form opens your mail client."}
        </p>
      </div>

      <div role="status" aria-live="polite" className="min-h-5">
        {submitError ? (
          <p className="flex items-center gap-1.5 text-xs text-red-500">
            <Icon name="circle-alert" className="size-3.5 shrink-0" />
            {submitError}
          </p>
        ) : null}
        {status === "success" ? (
          <p className="flex items-center gap-1.5 text-xs text-accent">
            <Icon name="circle-check" className="size-3.5 shrink-0" />
            {hasEndpoint
              ? "Message sent. I will get back to you soon."
              : "Your email client should be open with the message ready to send."}
          </p>
        ) : null}
      </div>
    </form>
  );
}
