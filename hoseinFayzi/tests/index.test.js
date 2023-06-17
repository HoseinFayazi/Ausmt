const { sum } = require("../index")

test("two plus two === four", () => {
    expect(sum(2,2)).toBe(4)
})