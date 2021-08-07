export class TwoDGame {

    private gridMaxX: number;
    private gridMaxY: number;

    constructor(gridMaxX: number, gridMaxY: number) {
        this.gridMaxX = gridMaxX;
        this.gridMaxY = gridMaxY;
    }

    public calcTargetCoordinates(currentX: number, currentY: number, numOfMoves: number): Coordinates[] {
        //Input validation
        if (currentX > this.gridMaxX - 1 || currentX < 0) throw new Error(`Bad currentX value`);
        if (currentY > this.gridMaxY - 1 || currentY < 0) throw new Error(`Bad currentY value`);
        if (numOfMoves < 0 || numOfMoves > 100) throw new Error(`Bad numOfMoves value`); //TODO: is there a max for this ?
        
        //Calculate
        let currentStack = [];
        currentStack.push({x: currentX, y: currentY});
        for(let moveCount = 1; moveCount <= numOfMoves; moveCount++) {
            while (currentStack.length > 0) {
                let moveMe = currentStack.pop();
                let nextCoordinates = this.nextMove(moveMe.x, moveMe.y);
                currentStack.push(nextCoordinates);
            }   
        }
        return currentStack;
    }

    private nextMove(currentX: number, currentY: number): Coordinates[] {
        const response: Coordinates[] = [];
        response.push({x: currentX, y: currentY - 1});
        response.push({x: currentX, y: currentY + 1});
        response.push({x: currentX + 1, y: currentY});
        response.push({x: currentX - 1, y: currentY});
        return response;
    }
}

export type Coordinates = {
    x: number;
    y: number;
}

/**
5x5, currentx=2 curry=2

t=0
   |   |   |   |
___|___|___|___|___
   |   |   |   |
___|___|___|___|___
   |   | D |   |
___|___|___|___|___
   |   |   |   |
___|___|___|___|___
   |   |   |   | 



t=1
 
   |   |   |   |
___|___|___|___|___
   |   |   |   |
___|___|_D_|___|___
   |   |   |   |
___|_D_|___|_D_|___
   |   |   |   |
___|___|_D_|___|___
   |   |   |   | 


t=2
 
   |   | D  |   |
___|___|__ _|___|___
   | D |    |  D |
___|___|__  |___|___
   |   | D  |   |
_D_|_ _|___|_D_|___
   |   |   |   |
___|_D_|_ _|___|___
   |   |   |   | 



function (currentCoordinates, numOfSteps, gridMaxX, gridMaxY): coordinate[] {

}
 */