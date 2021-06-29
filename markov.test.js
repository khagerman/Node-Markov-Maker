const { MarkovMachine } = require("./markov");

let mm;
beforeEach(() => {
  mm = new MarkovMachine("the cat in the hat");
  //   console.log(`test! ${mm.makeText((numWord = 10))}`);
});
describe("should return:", function () {
  test("should return an object", function () {
    expect(mm).toEqual(expect.any(Object));
  });

  test(".makeText should return a string", function () {
    expect(mm.makeText()).toEqual(expect.any(String));
  });
  test("should not be null", function () {
    expect(mm.makeText()).not.toBeNull();
  });
  test("should return max number or less", function () {
    expect(mm.makeText().length).toBeLessThanOrEqual(50);
  });
});
