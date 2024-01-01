class Point {
    #maze
    #size0fSquare = 30;

    constructor() {
        this.#maze = document.getElementById("maze");
    }

    get maze() {
        return this.#maze;
    }

    get size0fSquare() {
        return this.#size0fSquare;
    }

    createBase(id, backgroundColor) {
        const square = document.createElement("div");
        square.setAttribute("id", id);
        square.style.backgroundColor = backgroundColor;
        square.style.position = "absolute";
        square.style.width = `${this.#size0fSquare}px`;
        square.style.height = `${this.#size0fSquare}px`;
        this.#maze.appendChild(square);
    }
}
