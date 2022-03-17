new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    showActiveTooltip: true,
    navigationPosition: 'left',
    normalScrollElements: '.bio-content, .desc',
    navigationTooltips: ['Welcome', 'Bio', 'Work Experience', 'Gallery', 'Contact'],
});

// animation for welcome section
const logo = document.querySelector("#introduction img");
const s1 = document.querySelector(".introtext .s1");
const s2 = document.querySelector(".introtext .s2");
const s3 = document.querySelector(".introtext .s3");
const tl = new TimelineMax();

tl.fromTo(logo, 1, {opacity: 0, x: -100}, {opacity: 1, x:0})
.fromTo(s1, 1, {opacity: 0, x: 100}, {opacity: 1, x:0}, "-=1")
.fromTo(s2, 1, {opacity: 0, x: 100}, {opacity: 1, x:0}, "-=0.5")
.fromTo(s3, 1, {opacity: 0, x: 100}, {opacity: 1, x:0}, "-=0.5");

for (let i=1; i < 12; i++) {
    var img_elem = document.createElement('img');
    if (i == 2 || i == 7 || i == 10 ) {
        img_elem.src = "/slideshow/" + i + ".gif";
    } else {
        img_elem.src = "/slideshow/" + i + ".jpeg";
    }
    document.getElementById("gallery").appendChild(img_elem);
}

