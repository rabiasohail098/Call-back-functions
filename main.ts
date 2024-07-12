// call back functions
function loop(){
        for (let i = 1; i <=5 ; i++){
            setTimeout(() => {
                console.log(i);
            },i* 1000);      
    }

    for (let i = 6 ; i <= 10 ; i++){
        setTimeout(() => {
            console.log(i);
            
        }, i * 1000);
        
    }
    for (let i = 11 ; i <= 15 ; i++){
        setTimeout(() => {
            console.log(i);
            
        }, i * 1000);
        
    }
    for (let i = 16 ; i <= 20 ; i++){
        setTimeout(() => {
            console.log(i);
            
        }, i * 1000);
        
    }
    for (let i = 1 ; i <= 5 ; i++){
        setTimeout(() => {
            console.log(i);
            
        }, i * 1000);
        
    }

}
loop()

type F = ()=>void
function order(cb:F,cb2:F,cb3:F,cb4:F) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Please placed your order")
            wait()
            daough()
            topping()
            ready()
        }, 5000);
     
    })
}
function wait():void {
    setTimeout(() => {
   console.log("Your order is placed.Please wait for 30 seconds");
    },5000);
   
}
function daough() {
            setTimeout(() => {
           console.log("Your pizza dough is ready.");
}, 10000);
    }


function topping() {
    setTimeout(() => {
       
        console.log("Your Pizza topping is ready");
    }, 15000);
   
}

function ready() {
    setTimeout(() => {
       
        console.log("Finally your pizza is ready.Enjoy your meal.");
        
    }, 20000);
}

order(wait,daough,topping,ready)
.then(res=>console.log(res))

console.log("Thanks for Watching");
