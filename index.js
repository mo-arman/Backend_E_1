const {addToCart,removedFromCart} = require("./cartModules");


console.log("Hello World!");
console.log(123+345);

let a = [12,34,56,345,45,234];
a.forEach((element,index)=>{
    return console.log(element,"=>",index);
});

console.log(addToCart());
console.log(removedFromCart());
