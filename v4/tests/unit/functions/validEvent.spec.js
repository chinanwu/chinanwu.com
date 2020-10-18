import validEvent from "@/functions/validEvent";

describe("validEvent", () => {
  it("returns true for valid event", () => {
    const event = {
      key: "Enter",
      shiftKey: false,
      ctrlKey: false,
      altKey: false,
      metaKey: false
    };
    expect(validEvent(event, ["Enter"])).toBeTruthy();
    expect(validEvent(event, ["Enter", "Space"])).toBeTruthy();
    expect(validEvent(event, [])).toBeTruthy();
  });

  it("returns false for invalid event", () => {
    const event = {
      key: "Enter",
      shiftKey: false,
      ctrlKey: false,
      altKey: false,
      metaKey: false
    };
    expect(validEvent(event, ["Space"])).toBeFalsy();
    expect(validEvent(null, ["Space"])).toBeFalsy();
    expect(validEvent({}, ["Space"])).toBeFalsy();
    expect(validEvent({ key: "Space", shiftKey: true }, ["Space"])).toBeFalsy();
  });
});
