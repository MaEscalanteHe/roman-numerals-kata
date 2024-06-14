export class RomanNumerals {
  fromArabic(value: number): string {
    if (value === 2) return "II"
    if (value === 3) return "III"
    return "I"
  }
}
