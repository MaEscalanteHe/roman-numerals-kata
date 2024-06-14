import { describe, it, expect } from "vitest"
import { RomanNumerals } from "./RomanNumerals.js"
import { before, beforeEach } from "node:test"

describe("Roman Numerals", () => {
  const romanNumerals = new RomanNumerals()

  it("should be first roman number", () => {
    expect(romanNumerals.fromArabic(1)).toBe("I")
  })

  it("should be second roman number", () => {
    expect(romanNumerals.fromArabic(2)).toBe("II")
  })

  it("should be third roman number", () => {
    expect(romanNumerals.fromArabic(3)).toBe("III")
  })

  it("should be fourth roman number", () => {
    expect(romanNumerals.fromArabic(4)).toBe("IV")
  })

  it("should be fifth roman number", () => {
    expect(romanNumerals.fromArabic(5)).toBe("V")
  })

  it("should be sixth roman number", () => {
    expect(romanNumerals.fromArabic(6)).toBe("VI")
  })

  it("should be tenth roman number", () => {
    expect(romanNumerals.fromArabic(10)).toBe("X")
  })
})
