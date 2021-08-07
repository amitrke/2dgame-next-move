import { TwoDGame } from "../src/main";

describe("Main Program", () => {
    it("Should work for one step", () => {
        const twoDGame = new TwoDGame(5, 5);
        let resp = twoDGame.calcTargetCoordinates(2, 2, 1);
        console.log(resp);
    })
});