class AlgorithmInformation {
    #elementId
    #element
    #titleText = "Distância entre os pontos em (x, y):"

    constructor(elementId) {
        this.#elementId = elementId;
        this.#element = document.getElementById(elementId);
    }

    create() {
        const title = document.createElement("h3");
        title.setAttribute("id", `${this.#elementId}-title`);
        title.innerText = this.#titleText;
        title.style.color = "#c2c2c2";

        this.#element.appendChild(title);
    }

    updateDistance() {
        const { x, y } = AStar.calculateDistanceBetweenPoints();
        const title = document.getElementById(`${this.#elementId}-title`);
        title.innerHTML =
            `${this.#titleText}<br>
        - Passos (${x / 30}, ${y / 30})<br>
        - Pixels (${x}, ${y}) 
        `;
    }
}