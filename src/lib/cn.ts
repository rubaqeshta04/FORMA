export type ClassValue = string | false | null | undefined

export function cn(...classes: ClassValue[]): string {
  let result = ''
  for (const value of classes) {
    if (!value) continue
    result = result ? `${result} ${value}` : value
  }
  return result
}
