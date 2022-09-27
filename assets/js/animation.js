gsap.to('.bg-kansha', { x: -200, y: -200, duration: 3, repeat: -1, ease: 'none' });
gsap.to('.kansha-gallery', { x: -2000, duration: 20, repeat: -1, ease: 'none' });

ScrollTrigger.defaults({ scroller: ".container" });

const tlTop = gsap.timeline();

gsap.set(
    ['.kansha-birth'],
    {
        rotateX: -90,
        transformOrigin: '0% 70%'
    }
);
gsap.set(
    ['.scroll-prompt-top'],
    {
        opacity: 0,
        y: -30,
    }
);

tlTop.to(".bg-curtain img", {
    scale: 2,
    duration: 2,
    repeat: 1,
    ease: SteppedEase.config(2),
}).to(".bg-curtain", {
    opacity: 0,
    duration: 1,
}).to(".bg-kansha", {
    rotate: -400,
    skewX: 20,
    scale: 1.3,
    duration: 2,
    ease: "Back.easeOut",
}, "same").to(".bg-niji", {
    rotate: 300,
    scale: 2,
    duration: 1,
    ease: "power2.inOut"
}, "same").to(".kansha-birth", {
    rotateX: 0,
    duration: 2,
    ease: SteppedEase.config(20),
}, "-=0.3").to(".scroll-prompt-top", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4",
}, "-=0.3");

const tlMessage = gsap.timeline({
    scrollTrigger: {
        trigger: "#message",
        start: "top top",
        end: '+=' + window.innerHeight * 2,
        scrub: 1,
        markers: true,
    },
});
const tlMessageTeleIn = gsap.timeline({
    scrollTrigger: {
        trigger: "#message-tele",
        start: "top top",
        end: '+=' + window.innerHeight * 4,
        scrub: 1,
        markers: true,
    },
});
const tlMessageTeleOut = gsap.timeline({
    scrollTrigger: {
        trigger: "#message-tele",
        start: "top top",
        end: '+=' + window.innerHeight * 5,
        scrub: 1,
        markers: true,
    },
});
const tlComment = gsap.timeline({
    scrollTrigger: {
        trigger: "#comment",
        start: "top top",
        end: '+=' + window.innerHeight * 1,
        scrub: 1,
        markers: true,
    },
});
const tlCommentScroll = gsap.timeline({
    scrollTrigger: {
        trigger: "#comment",
        start: "top top",
        end: '+=' + window.innerHeight * 4,
        scrub: 1,
        markers: true,
    },
});

gsap.set(
    ['.message-box', '.message-tele-box', '.comment-box'],
    {
        opacity: 0
    }
);

tlMessage.to(".message-box", {
    opacity: 1,
    duration: 20,
    ease: "power4.easeOut",
}).to(".message-box", {
    opacity: 0,
    duration: 20,
    ease: "power4.inOut",
    onComplete: () => {
        tlCommentScroll.to(".comment-move", {
            x: '-300vw',
            duration: "random(10, 50)",
            ease: "power0.inOut",
            stagger: {
                each: 0.01, // ばらす間隔（秒）
                from: "random" // ランダムに開始
            },
        });
    }
});

tlMessageTeleIn.to(".message-tele-box", {
    opacity: 1,
    duration: 1,
    ease: "power4.easeOut",
    stagger: {
        each: 1,
    }
});
tlMessageTeleOut.to(".message-tele-box", {
    duration: 1,
    ease: "power4.inOut",
}).to(".message-tele-box", {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
    stagger: {
        each: 1,
    }
});

tlComment.to(".comment-box", {
    opacity: 1,
    duration: 20,
    ease: "power4.easeOut"
});
// }).to(".bg-history", {
//     y: 0,
//     duration: 1,
//     ease: "none"
// });

// gsap.set(
//     ['.bg-history'],
//     {
//         y: '100vh'
//     }
// );

// const tlHistoryUp = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".bg-history-transparent-100vh",
//         start: "top top",
//         end: '+=' + window.innerHeight,
//         scrub: 1,
//         markers: true,
//     },
// });

// tlHistoryUp.to(".bg-history", {
//     y: 0,
//     duration: 1,
//     ease: "none"
// });

// const tlHrizontalScroll = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".bg-history-transparent",
//         start: "top top",
//         end: '+=' + window.innerHeight * 5,
//         scrub: 1,
//         markers: true,
//     },
// });

// tlHrizontalScroll.to(".player-scroll", {
//     x: -2000,
//     duration: 10,
//     ease: "none"
// }, "player-scroll").to(".sequence-bar", {
//     width: '500px',
//     duration: 10,
//     ease: "none"
// }, "player-scroll");