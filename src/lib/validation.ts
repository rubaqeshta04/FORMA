import type { ContactErrors, ContactValues } from '@/types'


const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const NAME_MIN = 2
const NAME_MAX = 60
const MESSAGE_MIN = 20
const MESSAGE_MAX = 2000

export function validateName(value: string): string | undefined {
  const trimmed = value.trim()
  if (trimmed.length === 0) return 'Please enter your name.'
  if (trimmed.length < NAME_MIN) return `Name must be at least ${NAME_MIN} characters.`
  if (trimmed.length > NAME_MAX) return `Name must be under ${NAME_MAX} characters.`
  return undefined
}

export function validateEmail(value: string): string | undefined {
  const trimmed = value.trim()
  if (trimmed.length === 0) return 'Please enter your email address.'
  if (!EMAIL_PATTERN.test(trimmed)) return 'Please enter a valid email address.'
  return undefined
}

export function validateMessage(value: string): string | undefined {
  const trimmed = value.trim()
  if (trimmed.length === 0) return 'Please enter a message.'
  if (trimmed.length < MESSAGE_MIN) {
    return `Message must be at least ${MESSAGE_MIN} characters — tell me a little about the work.`
  }
  if (trimmed.length > MESSAGE_MAX) return `Message must be under ${MESSAGE_MAX} characters.`
  return undefined
}

export function validateContactValues(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  const name = validateName(values.name)
  if (name) errors.name = name

  const email = validateEmail(values.email)
  if (email) errors.email = email

  const message = validateMessage(values.message)
  if (message) errors.message = message

  return errors
}


export function validateField(
  field: keyof ContactValues,
  values: ContactValues,
): string | undefined {
  switch (field) {
    case 'name':
      return validateName(values.name)
    case 'email':
      return validateEmail(values.email)
    case 'message':
      return validateMessage(values.message)
  }
}

export function hasErrors(errors: ContactErrors): boolean {
  return Object.values(errors).some((value) => value !== undefined)
}
