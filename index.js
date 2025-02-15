const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");
let counter = 1;

bg3.addEventListener("click", ()=>{
    if(counter === 3){
        counter = 0
    };
    counter++;
    bg3.style.backgroundImage = `url('images/bg_${counter}.jpg')`
    bg3.style.rotate = "360deg"
    bg2.style.backgroundImage = `url('images/bg_${counter}.jpg')`
    bg2.style.rotate = "-360deg"
    bg1.style.backgroundImage = `url('images/bg_${counter}.jpg')`
})