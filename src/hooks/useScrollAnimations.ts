import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.reveal-up', {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
          );
        },
        start: 'top 85%',
        once: true,
      });

      ScrollTrigger.batch('.reveal-left', {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
          );
        },
        start: 'top 85%',
        once: true,
      });

      ScrollTrigger.batch('.reveal-right', {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
          );
        },
        start: 'top 85%',
        once: true,
      });

      ScrollTrigger.batch('.reveal-scale', {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { scale: 0.85, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.4)' }
          );
        },
        start: 'top 85%',
        once: true,
      });

      gsap.utils.toArray<HTMLElement>('.parallax-slow').forEach((el) => {
        gsap.to(el, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.parallax-fast').forEach((el) => {
        gsap.to(el, {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.parallax-reverse').forEach((el) => {
        gsap.to(el, {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

export function useCountUp(target: number, duration = 2) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString();
          },
        });
      },
    });
  }, [target, duration]);

  return ref;
}

export function useTilt3D() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
