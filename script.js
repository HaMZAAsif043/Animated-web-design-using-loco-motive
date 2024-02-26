function loading(){
    let tl = gsap.timeline();
tl.to(".yellow1",{
    top:"-100%",
    delay:"0.5",
    duration:"1",
    ease:"expo.out"
})
tl.from(".yellow2",{
    top:"100%",
    delay:"0.5",
    duration:"1",
    ease:"expo.out"
},"anim")
tl.to(".loader h1",{
    color:"#111",
    delay:"0.2"
},"anim")
tl.to(".loader",{
display:"none",})
}
loading();
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elem =document.querySelectorAll(".elem");
let page2 =document.querySelector(".page2")
elem.forEach((el)=>{
    el.addEventListener("mouseenter",()=>{
        let bgimg = el.getAttribute("data-img");
        page2.style.backgroundImage =`url(${bgimg})`;
    })
});
elem.forEach((el)=>{
    el.addEventListener("mouseleave",()=>{
        let bgimg = el.getAttribute("data-img");
        page2.style.backgroundImage =``;
    })
});

let height =()=>{
    // Select all the .image divs
    const imageDivs = document.querySelectorAll('.img-container .image');

    // Function to generate a random height
    function getRandomHeight() {
        // Generate a random number between 300 and 600 (adjust as needed)
        return Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    }

    // Loop through each .image div and set a random height and margin
    imageDivs.forEach(function(div) {
        // Get a random height
        const randomHeight = getRandomHeight();
        // Apply the random height to the div
        div.style.height = `${randomHeight}px`;
        // Calculate the bottom margin between 15 to 20 pixels
        const bottomMargin = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
        // Apply the margin to the div
        div.style.margin = `0 20px ${bottomMargin}px`;
    });
}
height();
document.querySelector(".footer h2").addEventListener("click",()=>{
scroll.scrollTo(".page1");
});