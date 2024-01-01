class AStar {
    static calculateDistanceBetweenPoints() {
        const currentPositionXStartingPoint = startingPoint.currentPositionX;
        const currentPositionYStartingPoint = startingPoint.currentPositionY;
        const arrivalPointOffsetLeft = arrivalPoint.offsetLeft;
        const arrivalPointOffsetTop = arrivalPoint.offsetTop;

        const distanceX = Math.abs(currentPositionXStartingPoint - arrivalPointOffsetLeft);
        const distanceY = Math.abs(currentPositionYStartingPoint - arrivalPointOffsetTop);

        return { x: distanceX, y: distanceY };
    }
}
