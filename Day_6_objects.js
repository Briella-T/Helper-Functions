const myArray = [1,2,3,4,5,6];

function sumAllValues(arr){
    sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

//objects

const car = {
    make: "Ford",
    model: "Mustang",
    color: "hotpink",
    engine: {
        cylinders: 6,
    },
    getCylinders: function(){
        return this.engine.cylinders
    }
}
