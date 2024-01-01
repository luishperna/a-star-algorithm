class StartingPoint extends Point {
    #elementId = "starting-point";
    #backgroundColor = "#c2c2c2";
    #currentPositionX = 0;
    #currentPositionY = 0;

    constructor() {
        super();
    }

    get currentPositionX() {
        return this.#currentPositionX;
    }

    get currentPositionY() {
        return this.#currentPositionY;
    }

    create() {
        this.createBase(this.#elementId, this.#backgroundColor);
        this.#movement();
    }

    #standardizeKey(key) {
        const keyMap = {
            'w': 'ArrowUp',
            's': 'ArrowDown',
            'a': 'ArrowLeft',
            'd': 'ArrowRight'
        };

        return keyMap[key] || key;
    }

    #movement() {
        document.body.addEventListener('keydown', (event) => {
            const keyPressed = this.#standardizeKey(event.key);

            if (!keyPressed.includes("Arrow")) return;

            const point = document.getElementById(this.#elementId);
            const step = this.size0fSquare;
    
            const keyMap = {
                "ArrowUp": () => {
                    if (this.#currentPositionY - step >= 0) {
                        this.#currentPositionY -= step;
                    }
                },
                "ArrowDown": () => {
                    if (this.#currentPositionY + step <= this.maze.offsetHeight - point.offsetHeight) {
                        this.#currentPositionY += step;
                    }
                },
                "ArrowLeft": () => {
                    if (this.#currentPositionX - step >= 0) {
                        this.#currentPositionX -= step;
                    }
                },
                "ArrowRight": () => {
                    if (this.#currentPositionX + step <= this.maze.offsetWidth - point.offsetWidth) {
                        this.#currentPositionX += step;
                    }
                },
            };
    
            keyMap[keyPressed]();  // Chama a função correspondente ao código da tecla
    
            point.style.left = `${this.#currentPositionX}px`;
            point.style.top = `${this.#currentPositionY}px`;

            algorithmInformation.updateDistance()
        });
    }
}