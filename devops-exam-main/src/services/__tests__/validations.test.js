const { isEmpty } = require("../validations");
const { validationGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("validations tests for the gamerTag Length", () => {
    test("should return true as the gamertag has 5 characters", () => {
        const gamerTagValue = "micka";
        expect(validationGamerTag(gamerTagValue)).toBe(true);
    });
});

describe("validations tests for the gamerTag Length", () => {
    test("should return false as the gamertag has 10 characters", () => {
        const gamerTagValue = "Michaelles";
        expect(validationGamerTag(gamerTagValue)).toBe(false);
    });
});
