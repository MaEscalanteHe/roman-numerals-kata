export class RomanNumerals {
  fromArabic(value: number): string {
    let result: string = ""
    if (value <= 3) {
      for (let i = 1; i <= value; i++) {
        result += "I"
      }
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
IX
X 
*/
