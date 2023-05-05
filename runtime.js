const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}




const sizes = [10, 100, 1000, 10000, 100000];
const functions = [doublerAppend, doublerInsert];

for (let size of sizes) {
  const array = getSizedArray(size);
  console.log(`Results for the ${size}-element array:`);
  for (let func of functions) {
    perf.start();
    func(array);
    let results = perf.stop();
    console.log(`${func.name}: ${results.preciseWords}`);
  }
  console.log();
}