function missing_no(arr){
    arr.sorted((a,b)=>a-b)
    for(let i=0;i<arr.length; i++){
        if(arr[i]!=i)
            return i;
    }
}
arr=[6,4,3,1,5,0]
console.log(missing_no(arr))  //output: 2