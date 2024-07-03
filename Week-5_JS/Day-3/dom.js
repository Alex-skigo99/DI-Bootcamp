/* DOM */


let div_1 = document.getElementById("first_div");
console.log(div_1)

let h2 = document.getElementById('h2_firstdiv')
console.log(h2)

let divs = document.getElementsByTagName('div')
console.log(divs)

let class_elements = document.getElementsByClassName('colorred')
console.log(class_elements)

let body = document.getElementsByTagName('body')[0];
body.appendChild(h2);
