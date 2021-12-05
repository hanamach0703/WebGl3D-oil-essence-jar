function makeEraser() {
    let obj = {};

    obj.vertices = [
    
    ];

    obj.indices = [
       
    ];

    obj.vertices = obj.vertices.map((v, i) => {
        if (i % 9 >= 6) {
            return (v - 30) / 255;
        }
        return v;
    });

    return obj;
}