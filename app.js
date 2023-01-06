const scores = [5,7,9,44,64,69,73,77,79,88,89,95,99];

//scores that is not equal to 0 because in JS 0 is a even number, and find all "a" number that is even.Literally the first number that is even. All the rest of the even number is not shown. If you want it to be shown you can use the .filter method

scores.find(function(score){
    return score !== 0 && score % 2 === 0;
});

//if you want a list of even number and not just one value of a even number. Do the .filter method
scores.filter(function(val){
    return val % 2 === 0;
});
// for the above code. You can put it in a const variable if you want to make it easier to save it in something

//FindIndex
//this code will find the first even number that is not zero. It will print out its index. Then you can confirm the index by console.logging the array[i] to see if the index IS the first even number on the array.
const firstEven = scores.findIndex(function(score){
    return score !== 0 && score % 2 === 0;
});

//now if you want to create a point where the array is split into two array within one array. Do this:
function splitArr(arr,cut){
    const cutIdx = arr.findIndex(function(el){
        return el > cut;
    });
/*
    console.log(cutIdx);
*/
    
    const leftSideCut = arr.slice(0,cutIdx);
    const rightSideCut = arr.slice(cutIdx);
    return [leftSideCut, rightSideCut];
    
}