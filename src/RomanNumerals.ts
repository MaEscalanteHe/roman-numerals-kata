const ArabicToRomanNumbers: { [key: number]: string } = {
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
}
export class RomanNumerals {
  fromArabic(value: number): string {
    let result: string = ""

    for (const arabicNumber of Object.keys(ArabicToRomanNumbers)
      .map(Number)
      .sort((a, b) => b - a)) {
      while (value >= arabicNumber) {
        result += ArabicToRomanNumbers[arabicNumber]
        value -= arabicNumber
      }
    }

    return result
  }
}
