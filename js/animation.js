//title animation
gsap.from(".main__title", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay: 0,
    ease: "expo.out"
})

//index.html animations
gsap.from(".main__profil", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0,
    ease: "expo.out"
});

gsap.from(".main__infos__presentation", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "expo.out"
});

//skills.html animations
gsap.from(".main__competences", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0,
    ease: "expo.out"
});

gsap.from(".main__formation", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "expo.out" });

gsap.from(".main__professionnal-projects", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "expo.out" });

//projects.html animations
gsap.from(".main__projects", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0,
    ease: "expo.out",
    stagger: {
        amount: 0.5
    }
});

//contact.html animations
gsap.from(".main__contact", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0,
    ease: "expo.out"
});
