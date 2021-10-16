let box = document.querySelector(".box");
let button = document.getElementsByTagName("button")[0];

button.addEventListener('click', ()=>{
    setInterval(()=>{
        box.style.backgroundColor =
          box.style.backgroundColor == "#FFAF5F" ? "green" : "#FFAF5F";
          console.log(box.style.backgroundColor);
    }, 1000);
});

button.addEventListener('click', ()=>{
    setInterval(()=>{
        box.style.backgroundColor =
          box.style.backgroundColor == "yellow" ? "pink" : "yellow";
          console.log(box.style.backgroundColor);
    }, 1000);
});
