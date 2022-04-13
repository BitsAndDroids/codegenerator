import {Pin} from "./Pin";


export class Board {
    name;
    leftPins = [];
    rightPins = [];
    imagePath;


    static async fetchBoard(jsonPath) {
        let board = new Board();
        await fetch('boards/jsonBoards/' + jsonPath)
            .then(response => response.json())
            .then(json => {
                board.fromJson(board, json).then(() => {
                        console.log(board.name + "A");
                    }
                )
            });
        return board;
    }

    async fromJson(board, json) {
        const jsonData = JSON.parse(JSON.stringify(json));
        for (let i = 0; i < jsonData.leftPins.length; i++) {
            this.leftPins.push(new Pin(jsonData.leftPins[i].digital, jsonData.leftPins[i].analog, jsonData.leftPins[i].extraFunctionality));
        }
        for (let i = 0; i < jsonData.rightPins.length; i++) {
            this.rightPins.push(new Pin(jsonData.rightPins[i].digital, jsonData.rightPins[i].analog, jsonData.rightPins[i].extraFunctionality));
        }
        this.name = jsonData.name;
        this.imagePath = jsonData.imagePath;
        //Object.assign(this, json);
        console.log(this.imagePath);
    }

}