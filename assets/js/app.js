const cl = console.log;

const btn = document.getElementById("btn");
const box = document.getElementById("box");

let flag = true;

// const hideimg = function(){
//     if(flag === true){
//         this.innerHTML = "Show Image";
//         box.style.display = "none";
//         flag = false;
//     }
// }

// const hideimg = function(){
//     if(flag === true){
//         this.innerHTML = "Show Image"
//         box.classList.add("d-none");
//         flag = false;
//     }else{
//         this.innerHTML = "Hide Image";
//         box.classList.remove("d-none");
//         flag = true;
//     }
// };

//Refactor :

// const hideimg = function(){
//     if(flag){
//         this.innerHTML = "Show Image";
//         box.classList.toggle("d-none");
//         flag = false;
//     }else{
//         this.innerHTML = "Hide Image";
//         box.classList.toggle("d-none");
//         flag = true;
//     }
// }

//Refactor : 

// const hideimg = function(){
//     if(flag){
//         this.innerHTML = "Show Image";
//     }else{
//         this.innerHTML = "Hide Image";
//     }
//     box.classList.toggle("d-none");
//     flag = !flag;
// }

//Refactor by turner operator :

const hideimg = function(){
    flag ? this.innerHTML = "Show Image" : this.innerHTML = "Hide Image";
    box.classList.toggle("d-none");
    flag = !flag;
};


btn.addEventListener("click",hideimg);

//===============================================================================

const btntwo = document.getElementById("btntwo");
const boxtwo = document.getElementById("boxtwo");

// const toggleimg = (eve) => {
//    if(flag){
//     eve.target.innerHTML = "Show Image"
//    }else{
//     eve.target.innerHTML = "Hide Image"
//    }
//   boxtwo.classList.toggle("d-none");
//   flag = !flag;
// }

//Refactor 

const toggleimg = eve => {
    flag ? eve.target.innerHTML = "Show Image" : eve.target.innerHTML = "Hide Image";
    boxtwo.classList.toggle("d-none");
    flag = !flag;
};

btntwo.addEventListener("click",toggleimg);





