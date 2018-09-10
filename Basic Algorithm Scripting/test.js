function chunkArrayInGroups(arr, size) {

var arraySize  = arr.length/size;

var newArray = [];

    for (var i = 0; i < arraySize ; i++){

        var subArray= arr.splice(0,size);

        newArray.push(subArray);

    }

console.log(newArray);


}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

//return str.substr(-target.length) === target ? true : false;
