import { describe, it, expect } from "vitest"
import { RomanNumerals } from "./RomanNumerals.js"
import { before, beforeEach } from "node:test"

describe("Roman Numerals", () => {
  const romanNumerals = new RomanNumerals()

  it("should be first roman number", () => {
    expect(romanNumerals.fromArabic(1)).toBe("I")
  })
})
