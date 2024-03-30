x1=Math.random()
console.log(x1)
x=Math.round(Math.random()*100)
console.log(x)
x11=12.21
y=Math.ceil(x11)
console.log(y)
console.log(Math.floor(x11))
console.log(Math.trunc(x11))
console.log(Math.pow(3,2))

function otp(){
    rad=Math.round(Math.random()+1*10000)
  
    
    if(rad>1000){
        // console.log(rad)
        return rad
    }
}
console.log(otp())