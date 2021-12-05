
function makeBatchIndices(a, b, length){
    let temp = []
    for (let i = 0; i < length - 1; i++){
        temp.push(a + i);
        temp.push(a + i + 1);
        temp.push(b + i + 1);
        temp.push(a + i);
        temp.push(b + i + 1);
        temp.push(b + i);
    }
    return temp;
}

function makeBatchIndicesSimultaneously(a, b, length){
    let temp = []
    for (let i = 0; i < length - 1; i++) {
        temp.push(a + i + 0);
        temp.push(a + i + 2);
        temp.push(b + i + 2);
        temp.push(b + i + 2);
        temp.push(b + i + 0);
        temp.push(a + i + 0);
    }
    return temp;
}

function makeFaces(numFaces) {
    let temp = [];
    for (let i = 0;i < numFaces;i++) {
        temp.push(i + 0);
        temp.push(i + 1);
        temp.push(i + 2);
        temp.push(i + 2);
        temp.push(i + 3);
        temp.push(i + 0);
    }
    return temp;
}

function resizeObj(obj, scale){
    obj.vertices = obj.vertices.map((x, i) => {
        if (i % 6 >= 3) {
            return x;
        }
        return x * scale;
    });
}

function lerp(source, target, ratio) {
    return source + (target - source) * ratio;
}

function lerpVec3(source, target, ratio) {
    return [
        lerp(source[0], target[0], ratio),
        lerp(source[1], target[1], ratio),
        lerp(source[2], target[2], ratio),
    ];
}

function makeCord2(x, y){
    return [x, y, 0.0]
}

function makeCord3(x, y, z){
    return [y, z, x];
}