// Problem 28) Rotate an array to the right 1 position

// okay let's do that
// for example -> arr = [2,4,6,8] so expected output will be, arr = [8,2,4,6]

const rotate_arr = (arr) =>{
    let last_item = arr.pop();  //will remove the last item
    arr.unshift(last_item);  //will add the item to the first index (which is 0)
    return arr;
}

let result = rotate_arr([2,4,6,8]);
console.log(result);