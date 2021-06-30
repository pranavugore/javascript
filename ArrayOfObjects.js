/*function getCount(objects) {
    var count = 0;
    objects.forEach(element => {
        if (element['x'] === element['y']){ count++;}
    });
    return count;
}*/

function getCount(objects) {
    return objects.filter(o => o.x === o.y).length
}

const objects = [
    {x: 1, y:1},
    {x: 2, y:3},
    {x: 3, y:3},
    {x: 3, y:4},
    {x: 4, y:5}
];


console.log(getCount(objects));