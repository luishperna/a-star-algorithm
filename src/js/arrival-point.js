class ArrivalPoint extends Point {
    #elementId = "arrival-point";
    #backgroundColor = "#48ee55";
    #currentPositionX = 60;
    #currentPositionY = 60;
    #offsetLeft;
    #offsetTop;

    constructor() {
        super();
        this.#offsetLeft = document.getElementById(this.#elementId)
        this.#offsetTop = document.getElementById(this.#elementId)
    }

    get offsetLeft() {
        return this.#offsetLeft;
    }

    get offsetTop() {
        return this.#offsetTop;
    }

    create() {
        this.createBase(this.#elementId, this.#backgroundColor);
    }
}