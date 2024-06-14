export class RomanNumerals {
  fromArabic(value: number): string {
    let result: string = ""

    if (value <= 3) {
      for (let i = 1; i <= value; i++) {
        result += "I"
      }
    }

    if (value === 4) {
      result = "IV"
    }

    if (value === 5) {
      result = "V"
    }

    if (value === 6) {
      result = "VI"
    }

    return result
  }
}

/*
Ref:
I
II
III
IV
V
VI
VII
VIII
IX
X 
*/
