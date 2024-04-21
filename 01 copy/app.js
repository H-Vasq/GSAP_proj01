// gsap.to(".box", {
//     // x: -100,
//     y: 200,
//     duration: 2,
//     repeat: 2
// })

gsap.set(".box", {
    opacity: 0,
    background: "yellow",
});

gsap.to(".box", {
    opacity: 1,
    background: "crimson",
    duration: 3,
    y: 100,
    repeat: -1,
    yoyo: true
})