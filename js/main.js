
let tween = gsap.to(".square", {
    duration: 3,
    x: 300,
    ease: "linear",
    paused: true
});

// event listeners

document.getElementById("play").onclick = () => tween.play(); // destructured, curly braces removed - only one line.
document.getElementById("pause").onclick = () => tween.pause(); 
document.getElementById("reverse").onclick = () => tween.reverse(); 
document.getElementById("restart").onclick = () => tween.restart();

console.log('hey muthafucka!')