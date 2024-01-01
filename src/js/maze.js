class Maze {
    #element;
    #numberOfRows;
    #numberOfColumns;
    #size0fSquare = 30;

    constructor(elementId, numberOfRows, numberOfColumns = numberOfRows) {
        this.#element = document.getElementById(elementId);
        this.#numberOfRows = numberOfRows;
        this.#numberOfColumns = numberOfColumns;
    }

    create() {
        this.#createBaseArea();
        this.#addEmptyFields();
    }

    #createBaseArea() {
        this.#element.style.display = "grid";
        this.#element.style.gridTemplateColumns = `repeat(${this.#numberOfColumns}, ${this.#size0fSquare}px)`;
        this.#element.style.width = `${this.#numberOfColumns * this.#size0fSquare}px`;
    }

    #addEmptyFields() {
        for (let i = 0; i < this.#numberOfRows * this.#numberOfColumns; i++) {
            const square = document.createElement("div");
            square.style.boxSizing = "border-box"; // Include border in width/height calculations
            square.style.border = "1px solid #c2c2c280";
            square.style.width = `${this.#size0fSquare}px`;
            square.style.height = `${this.#size0fSquare}px`;
            this.#element.appendChild(square);
        }
    }
}