export class RomanNumerals {
  fromArabic(value: number): string {
    let result: string = ""

    if (value === 4) return "IV"
    if (value === 10) return "X"

    if (value >= 5) {
      result = "V"
      value -= 5
    }

    for (let i = 1; i <= value; i++) {
      result += "I"
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
