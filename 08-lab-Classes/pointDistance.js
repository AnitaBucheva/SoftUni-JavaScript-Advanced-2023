class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    static distance(pointA, pointB) {
        let distanceX = pointA.x - pointB.x;
        let distanceY = pointA.y - pointB.y;

        let distance = Math.sqrt(Math.pow(distanceX, 2) + (Math.pow(distanceY, 2)))
        return distance;
    }
 }

let pointA = new Point(5, 5);
let pointB = new Point(9, 8);
console.log(Point.distance(pointA, pointB)); 