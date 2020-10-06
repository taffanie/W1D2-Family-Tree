const { expect } = require("@jest/globals");
const family = require("./family")

describe('Weasley Family Tree', () => {
    test("Fred is in the family tree", () => {
        expect(family[0].name).toBe("Fred")
    });
    test("His twin is in the family tree", () => {
        expect(family[1].name).toBe("George")
    });
    test("Fred should have parents", () => {
        expect(Array.isArray(family[0].parents)).toBeTruthy()
    });
    test("George should have parents", () => {
        expect(Array.isArray(family[1].parents)).toBeTruthy()
    });
    test('Fred and George parents should be Arthur and Molly', () => {
        expect(family[0].parents).toContain("Arthur")
        expect(family[0].parents).toContain("Molly")
        expect(family[1].parents).toContain("Arthur")
        expect(family[1].parents).toContain("Molly")
    });
    test('Arthur and Molly should be in the family tree', () => {
        expect(family[2].name).toBe("Arthur")
        expect(family[3].name).toBe("Molly")
    });
    test('Arthur and Molly should have parents', () => {
        expect(Array.isArray(family[2].parents)).toBeTruthy()
        expect(Array.isArray(family[3].parents)).toBeTruthy()
    });
    test('Arthur and Molly parents should be Dumbledore and Minerva', () => {
        expect(family[2].parents).toContain("Dumbledore")
        expect(family[2].parents).toContain("Minerva")
        expect(family[3].parents).toContain("Dumbledore")
        expect(family[3].parents).toContain("Minerva")
    });
    test('Dumbledore and Minerva should be in the family tree', () => {
        expect(family[4].name).toBe("Dumbledore")
        expect(family[5].name).toBe("Minerva")
    });
    test('Dumbledore and Minerva should not have parents', () => {
        expect(Array.isArray(family[4].parents)).toBeFalsy
        expect(Array.isArray(family[5].parents)).toBeFalsy
    });
});

