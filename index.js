const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");
let counter = 1;
let rotateAngle = "360deg"
let rotateAngle2 = "-360deg"


bg3.addEventListener("click", ()=>{
    if(counter === 3){
        counter = 0
    };
    rotateAngle = rotateAngle === "360deg" ? "-360deg":"360deg"
    rotateAngle2 = rotateAngle2 === "-360deg" ? "360deg":"-360deg"
    console.log(rotateAngle)
    counter++;
    bg3.style.backgroundImage = `url('images/bg_${counter}.jpg')`
    bg3.style.rotate = `${rotateAngle}`
    bg2.style.backgroundImage = `url('images/bg_${counter}.jpg')`
    bg2.style.rotate = `${rotateAngle2}`
    bg1.style.backgroundImage = `url('images/bg_${counter}.jpg')`
})