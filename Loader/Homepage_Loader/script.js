//background animation
let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 850,
});

tl.add({
  targets: "section .item",
  width: "100%",
  backgroundColor: "#050404",
  delay: anime.stagger(100),
});

tl.add({
  targets: "section .item",
  delay: anime.stagger(70),
  width: "97%",
  backgroundColor: "#E2EBD5",
});

tl.add({
  targets: "section .item",
  backgroundColor: "#FFFFFF",
  delay: anime.stagger(50, { from: "center" }),
});
tl.add({
  targets: "section .item",
  width: "100%",
  backgroundColor: "#caf0f8",
  delay: anime.stagger(100),
});

tl.add(
  {
    targets: ".text",
    top: "49%",
    duration: 4500,
    opacity: 1,
  },
  "-=500"
);
tl.add(
  {
    targets: ".text2",
    top: "60%",
    duration: 1500,
    opacity: 1,
  },
  "-=700"
);

//text animation

//wrap every letter in a span
var textWrapper = document.querySelector(".effect1");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^.\s]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add(
  {
    targets: ".effect1 .letter",
    scale: [5, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1350,
    delay: function (el, i) {
      return 70 * i;
    },
  },
  1500
);

setTimeout(function () {
  window.location.href = "#";
}, 7000);
