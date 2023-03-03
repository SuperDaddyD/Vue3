
//JS VERSION
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
let startCount = 0
const count = document.querySelector("#count");


add.addEventListener("click", () => {
    startCount +=1
    count.innerText = startCount ;
});
subtract.addEventListener("click", () => {
  if(startCount >=1){
    startCount -= 1
  }
  count.innerText = startCount
});

//console.log((count.value = 9));
