 const mario = document.querySelector(".mario");
 const pipe = document.querySelector(".pipe");
 const jump = () => {
mario.classList.add("jump")
setTimeout(() => {
   
 mario.classList.remove("jump")

},500);
 }
  
 const loop = setInterval(() => {
 
  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom;

  console.log(pipePosition);
  if( pipePosition <= 120 ){
    pipe.style.animation = "none";
    pipe.style.Left = `${pipePosition}px`; 
  }



 }, 10);
 
 
document.addEventListener("keydown", jump); 