import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "remixicon/fonts/remixicon.css";

import "./style.scss";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
});

gsap.to(".video__image", {
    scale: 52,
    ease: "ease",
    scrollTrigger: {
        trigger: ".video",
        scrub: 1,
        start: "top top",
        end: "bottom",
        pin: true,
    },
});

gsap.to(".right", {
    autoAlpha: 0,
    x: 500,
    duration: 1.5,
    scrollTrigger: {
        start: 1,
    },
});
gsap.to(".left", {
    autoAlpha: 0,
    x: -500,
    duration: 1.5,
    scrollTrigger: {
        start: 1,
    },
});

gsap.to(".text-bottom", {
    autoAlpha: 0,
    letterSpacing: -10,
    duration: 2,
    scrollTrigger: {
        start: 2,
    },
});

const tl = gsap.timeline();
const timeline = gsap.timeline();

timeline
    .from(".left-side div", {
        y: 150,
        opacity: 0,
        stagger: {
            amount: 0.4,
        },
    })
    .from(
        ".right-side",
        {
            opacity: 0,
            duration: 2,
        },
        0.5
    )
    .to(".wrapper", {
        x: -window.innerWidth,
    });

ScrollTrigger.create({
    animation: timeline,
    trigger: ".wrapper",
    start: "top top",
    end: "+=600",
    scrub: 1,
    pin: true,
    ease: "ease",
});

gsap.utils.toArray(".col").forEach((image) => {
    {
        gsap.fromTo(
            "image",
            {
                opacity: 0.3,
                x: 0,
            },
            {
                opacity: 1,
                x: -50,
                scrollTrigger: {
                    trigger: image,
                    start: "10%",
                    stagger: {
                        amount: 0.4,
                    },
                },
            }
        );
    }
});

tl.from(".title span", {
    y: 150,
    skewY: 7,
    duration: 3,
}).from(".text-bottom", {
    letterSpacing: -10,
    opacity: 0,
    duration: 2,
});
