import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Elements
const mainHeader = document.getElementById('main-header')
const logoTrigger = document.querySelector('.logo')
const navLinks = document.querySelectorAll('nav a')
const workOverlay = document.getElementById('work-overlay')
const workTitles = document.querySelectorAll('.work-title')

// Header Adaptive Logic (Toggle collapsed class on scroll)
ScrollTrigger.create({
  trigger: ".hero",
  start: "bottom 80px",
  onEnter: () => mainHeader.classList.add('collapsed'),
  onLeaveBack: () => mainHeader.classList.remove('collapsed')
})

// Menu Toggle Logic (Consolidated to Logo)
logoTrigger.addEventListener('click', () => {
  mainHeader.classList.toggle('menu-open')
})

// Interactive Hover Effect on Nav Links (Work Overlay)
navLinks.forEach(link => {
  link.addEventListener('mouseenter', (e) => {
    if (e.target.getAttribute('href') === '#work') {
      workOverlay.classList.remove('hidden')
      workOverlay.classList.add('visible')
      gsap.to(workTitles[0], { x: '-20%', duration: 10, ease: 'linear', repeat: -1, yoyo: true })
      gsap.to(workTitles[1], { x: '20%', duration: 10, ease: 'linear', repeat: -1, yoyo: true })
      gsap.to(workTitles[2], { x: '-20%', duration: 10, ease: 'linear', repeat: -1, yoyo: true })
    }
  })
  link.addEventListener('mouseleave', (e) => {
    if (e.target.getAttribute('href') === '#work') {
      workOverlay.classList.remove('visible')
      setTimeout(() => {
        if (!workOverlay.classList.contains('visible')) {
          workOverlay.classList.add('hidden')
          gsap.killTweensOf(workTitles)
        }
      }, 500)
    }
  })
})

// --- SCROLL ANIMATIONS ---
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
  }
})

// HOME LABEL
tl.addLabel("home")

// 1. Black Portal Transition to Experiences Section
tl.to('.experiences', {
  clipPath: 'circle(150vmax at 50% 100%)',
  duration: 2,
  ease: 'power2.inOut',
  onStart: () => mainHeader.classList.add('light-header'),
  onReverseComplete: () => mainHeader.classList.remove('light-header')
})

// EXPERIENCE LABEL
tl.addLabel("experience")

tl.to('.experiences-title', { opacity: 1, duration: 1, ease: 'power3.out' })

tl.to('.experiences-title', {
  scale: 0.3,
  left: '40px',
  top: '40px',
  xPercent: 0,
  yPercent: 0,
  x: 0,
  y: 0,
  margin: 0,
  transformOrigin: 'left top',
  duration: 1.5,
  ease: 'power2.inOut'
}, "+=0.3")

tl.to('.experiences-details', { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' })

tl.to('.experience-list', {
  y: '-70%',
  duration: 3,
  ease: 'none',
})

tl.to(['.experiences-details', '.experiences-title'], {
  opacity: 0,
  duration: 0.5,
  ease: 'power2.inOut',
  onStart: () => {
    document.querySelector('.experiences').style.pointerEvents = 'none';
  }
})

// Experiences section closure - Turn logo back to black
tl.to('.experiences', {
  clipPath: 'circle(0px at 50% 0%)',
  duration: 1.5,
  ease: 'power2.inOut',
  onStart: () => mainHeader.classList.remove('light-header'),
  onReverseComplete: () => mainHeader.classList.add('light-header')
})

// PROJECTS LABEL
tl.addLabel("projects")

// Reveal the projects section (hidden by default to prevent mobile bleed-through)
tl.to('.projects', {
  opacity: 1,
  pointerEvents: 'auto',
  duration: 0.5,
  ease: 'power2.inOut'
})

tl.to('.projects-title', { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' })

tl.to('.projects-title', {
  scale: 0.3,
  left: '40px',
  top: '40px',
  xPercent: 0,
  yPercent: 0,
  x: 0,
  y: 0,
  margin: 0,
  transformOrigin: 'left top',
  duration: 1.5,
  ease: 'power2.inOut'
}, "projectsSlide")

// Fade in and slide the first card into view while title shrinks
tl.fromTo('.projects-wrapper',
  { opacity: 0, x: '50vw' },
  { opacity: 1, x: '25vw', duration: 1.5, ease: 'power2.out' },
  "projectsSlide"
)

tl.addLabel("projectsScroll")

// Scroll through the remaining projects slowly
tl.to('.projects-wrapper', {
  x: '-4500px',
  duration: 6,
  ease: 'none'
}, "projectsScroll")

// --- CERTIFICATES TRANSITION ---
// 1. Proje içerikleri TAMAMEN sola kayıp yok olsun
tl.to('.projects-wrapper', {
  x: '-5500px',
  opacity: 0,
  duration: 2.5,
  ease: 'power2.in'
})

// 2. Proje yok olduğu ANDA "PROJECTS" yazısı "CERTIFICATES" e dönüşsün
tl.to('.projects-title', {
  onStart: () => {
    document.querySelector('.projects-title').innerText = 'CERTIFICATES';
  },
  onReverseComplete: () => {
    document.querySelector('.projects-title').innerText = 'PROJECTS';
  },
  duration: 0.01
})

// CERTIFICATES LABEL
tl.addLabel("certificates")



// 3. Yeni oluşan "Certificates" başlığı aşağı smooth kaysın VE aynı anda sertifikalar belirtsin/kaymaya başlasın
tl.to('.projects-title', {
  y: '80vh',
  opacity: 0,
  duration: 4,
  ease: 'power2.inOut'
}, "certMove")

tl.to('.certificates', {
  opacity: 1,
  pointerEvents: 'auto',
  duration: 0.5
}, "certMove")

tl.to('.projects', {
  pointerEvents: 'none',
  duration: 0.01
}, "certMove")

tl.to('.certificate-item', {
  className: 'certificate-item light-up',
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
}, "certMove+=0.3")

// 5. Sertifikalar listesini yukarı doğru kaydır
tl.to('.certificates-list', {
  y: '-70%',
  duration: 6,
  ease: 'none'
}, "certMove")

// ========== HOBBIES SECTION ANIMATIONS ==========

// All stars
const stars = document.querySelectorAll('.star');

// Pre-compute random spread positions for all stars
const starPositions = [];
stars.forEach((star) => {
  // Start clustered at center with slight offset
  const startX = (Math.random() - 0.5) * 80;
  const startY = (Math.random() - 0.5) * 80;
  gsap.set(star, { x: startX, y: startY });

  // Final spread position (random across viewport)
  const angle = Math.random() * Math.PI * 2;
  const distance = 20 + Math.random() * 40;
  starPositions.push({
    x: Math.cos(angle) * distance + 'vw',
    y: Math.sin(angle) * distance + 'vh',
  });
});

// Pick 4 cardinal positions for hobby card origins (Wind Rose: N, E, S, W)
// All cards start at true center (0,0) for an explosion effect
const cardOrigins = [
  { x: '0', y: '0', },
  { x: '0', y: '0', },
  { x: '0', y: '0', },
  { x: '0', y: '0', },
];

// 1. Fade out certificates
tl.to('.certificates', {
  opacity: 0,
  pointerEvents: 'none',
  duration: 1,
  ease: 'power2.inOut'
})

// 2. Reveal hobbies section
tl.to('.hobbies', {
  opacity: 1,
  pointerEvents: 'auto',
  duration: 0.8,
  ease: 'power2.inOut',
  onStart: () => mainHeader.classList.add('light-header'),
  onReverseComplete: () => mainHeader.classList.remove('light-header')
})

// HOBBIES LABEL
tl.addLabel("hobbies")

// 3. HOBBIES title fades in
tl.to('.hobbies-title', {
  opacity: 1,
  duration: 1.5,
  ease: 'power3.out'
})

// 4. Stars spread, Cards fly out, and Title fades out together for a unified explosion
tl.addLabel("explosion");

stars.forEach((star, i) => {
  let targetOpacity = 0.4;
  if (star.classList.contains('star-md')) targetOpacity = 0.6;
  if (star.classList.contains('star-lg')) targetOpacity = 0.85;

  tl.to(star, {
    x: starPositions[i].x,
    y: starPositions[i].y,
    opacity: targetOpacity,
    duration: 5,
    ease: 'power4.out',
  }, "explosion-=1");
});

// Title hides quickly as explosion happens
tl.to('.hobbies-title', {
  opacity: 0,
  scale: 0.3,
  duration: 1,
  ease: 'power2.inOut'
}, "explosion");

// 6. Grid Animation for All Cards Together (Wind Rose Style)
const hobbyCards = document.querySelectorAll('.hobby-card');
const screenWidth = window.innerWidth;
const isSmallScreen = screenWidth < 1200;
const gridPositions = [
  { x: isSmallScreen ? '-28vw' : '-16vw', y: isSmallScreen ? '-27vh' : '-22vh' }, // top-left
  { x: isSmallScreen ? '28vw' : '16vw', y: isSmallScreen ? '-27vh' : '-22vh' },  // top-right
  { x: isSmallScreen ? '-28vw' : '-16vw', y: isSmallScreen ? '27vh' : '22vh' },   // bottom-left
  { x: isSmallScreen ? '28vw' : '16vw', y: isSmallScreen ? '27vh' : '22vh' },    // bottom-right
];

// Initialize all cards at origins
hobbyCards.forEach((card, index) => {
  const origin = cardOrigins[index];
  gsap.set(card, {
    opacity: 0,
    scale: 0,
    rotation: origin.rotation,
    xPercent: -50,
    yPercent: -50,
    x: origin.x,
    y: origin.y,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  });
});

// Animate all cards into grid together
hobbyCards.forEach((card, index) => {
  const pos = gridPositions[index];

  tl.to(card, {
    x: pos.x,
    y: pos.y,
    scale: 1,
    opacity: 1,
    rotation: 0,
    duration: 3,
    ease: 'power4.out',
  }, "explosion");
});

// Hold the grid for viewing
//tl.to({}, { duration: 4 }, "cardsEnter+=3");

// Shrink all cards AND stars back to the center as the user scrolls further
//tl.to({}, { duration: 2 }); // Small pause before exit

tl.addLabel("cardsExit");

// Reveal Contact section instantly behind hobbies before hobbies shrinks
tl.to('.contact', {
  opacity: 1,
  pointerEvents: 'auto',
  duration: 0.1,
  onStart: () => mainHeader.classList.remove('light-header'),
  onReverseComplete: () => mainHeader.classList.add('light-header')
}, "cardsExit");

// Shrink the entire Hobbies black screen
tl.to('.hobbies', {
  clipPath: 'circle(0px at 50% 50%)',
  duration: 3,
  ease: 'power3.inOut',
  onComplete: () => {
    document.querySelector('.hobbies').style.pointerEvents = 'none';
  },
  onReverseComplete: () => {
    document.querySelector('.hobbies').style.pointerEvents = 'auto';
  }
}, "cardsExit");

hobbyCards.forEach((card, index) => {
  tl.to(card, {
    scale: 0,
    opacity: 0,
    x: 0,
    y: 0,
    duration: 3,
    ease: 'power3.in',
  }, "cardsExit");
});

// Also shrink stars to center
stars.forEach((star) => {
  tl.to(star, {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0,
    duration: 3,
    ease: 'power3.in',
  }, "cardsExit");
});

tl.to('.contact-title', {
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 1.5,
  ease: 'power3.out'
}, "cardsExit+=1.5")

tl.to('.contact-btn', {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out'
}, "cardsExit+=2")

// NAVIGATION CLICK HANDLER
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();

      // Close menu if open
      mainHeader.classList.remove('menu-open');

      // Map href to timeline labels
      let label = "";
      if (href === "#app") label = "home";
      if (href === "#deneyimler") label = "experience";
      if (href === "#projeler") label = "projects";
      if (href === "#sertifikalar") label = "certificates";
      if (href === "#hobiler") label = "hobbies";
      if (href === "#iletisim") label = "cardsExit"; // Use cardsExit for Contact to show the reveal

      if (label && tl.scrollTrigger) {
        ScrollTrigger.refresh();
        let scrollPos = tl.scrollTrigger.labelToScroll(label);

        if (label !== "home") {
          scrollPos += 200;
        }

        if (label === "projects" || label === "cardsExit") {
          scrollPos += 450;
        }

        if (label === "cardsExit") {
          scrollPos += 650;
        }

        gsap.to(window, {
          scrollTo: scrollPos,
          duration: 1.5,
          ease: 'power2.inOut'
        });
      }
    }
  });
});