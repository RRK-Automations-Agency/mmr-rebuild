import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import * as lucide from 'lucide';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Certifications from './pages/Certifications.jsx';
import Transformations from './pages/Transformations.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';

gsap.registerPlugin(ScrollTrigger);



export default function App() {
  const location = useLocation();
  const lenisRef = useRef(null);
  const cursorRef = useRef({ cursor: null, dot: null });

  const icons = useMemo(() => ({
    Menu: lucide.Menu,
    X: lucide.X,
    ArrowRight: lucide.ArrowRight,
    ArrowLeft: lucide.ArrowLeft,
    Check: lucide.Check,
    Zap: lucide.Zap,
    TrendingDown: lucide.TrendingDown,
    Dumbbell: lucide.Dumbbell,
    Activity: lucide.Activity,
    Utensils: lucide.Utensils,
    Trophy: lucide.Trophy,
    Award: lucide.Award,
    MessageCircle: lucide.MessageCircle,
    Instagram: lucide.Instagram,
    Facebook: lucide.Facebook,
    Twitter: lucide.Twitter,
    Youtube: lucide.Youtube,
    Send: lucide.Send,
    CheckCircle: lucide.CheckCircle,
    Star: lucide.Star,
    Scale: lucide.Scale,
    Sun: lucide.Sun,
    Box: lucide.Box,
    Brain: lucide.Brain,
    Move: lucide.Move,
    AlertCircle: lucide.AlertCircle,
    Loader2: lucide.Loader2
  }), []);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    lenisRef.current = lenis;
  }, []);

  useEffect(() => {
    lucide.createIcons({ icons });

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    gsap.from('header h1, .hero-content > *', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power3.out',
      delay: 0.2
    });

    const revealElements = [
      { selector: '.reveal-left', x: -100 },
      { selector: '.reveal-right', x: 100 },
      { selector: '.reveal-up', y: 50 }
    ];

    revealElements.forEach((item) => {
      gsap.utils.toArray(item.selector).forEach((el) => {
        gsap.from(el, {
          x: item.x || 0,
          y: item.y || 0,
          opacity: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
    });

    const statsElements = document.querySelectorAll('.stat-number');
    statsElements.forEach((stat) => {
      const targetValue = parseInt(stat.getAttribute('data-target') || '0', 10);
      const suffix = stat.getAttribute('data-suffix') || '+';
      const obj = { value: 0 };

      gsap.to(obj, {
        value: targetValue,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stat,
          start: 'top 95%',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          stat.textContent = `${Math.floor(obj.value).toLocaleString()}${suffix}`;
        }
      });
    });

    const track = document.getElementById('testimonial-track');
    if (track) {
      gsap.to(track, {
        x: () => -(track.scrollWidth - track.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '#testimonials',
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1
        }
      });
    }

    ScrollTrigger.refresh();
  }, [location.pathname, icons]);

  useEffect(() => {
    if (window.innerWidth <= 1024 || cursorRef.current.cursor) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .custom-cursor {
            width: 40px;
            height: 40px;
            border: 1px solid #45F0B5;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        }
        .cursor-dot {
            width: 8px;
            height: 8px;
            background: #45F0B5;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
        }
    `;
    document.head.appendChild(cursorStyle);

    const onMove = (event) => {
      gsap.to(cursor, { x: event.clientX - 20, y: event.clientY - 20, duration: 0.3 });
      gsap.to(cursorDot, { x: event.clientX - 4, y: event.clientY - 4, duration: 0.1 });
    };

    window.addEventListener('mousemove', onMove);

    document.querySelectorAll('a, button, .glass-card, .stat-card').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 1.5, backgroundColor: 'rgba(69, 240, 181, 0.2)', duration: 0.3 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
      });
    });

    cursorRef.current = { cursor, dot: cursorDot, onMove, cursorStyle };

    return () => {
      window.removeEventListener('mousemove', onMove);
      cursor.remove();
      cursorDot.remove();
      cursorStyle.remove();
    };
  }, []);

  const showNewsletter = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/transformations" element={<Transformations />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer showNewsletter={showNewsletter} />
      <FloatingWhatsApp />
    </>
  );
}
