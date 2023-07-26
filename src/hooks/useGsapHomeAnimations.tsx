import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCallback, useEffect } from 'react';
import { gsap_animation_sections } from 'src/types/enum';

const useGsapHomeAnimations = (section: gsap_animation_sections) => {
  const heroBannerSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: { duration: 1.5, ease: 'power4.out' }
    });

    timeline
      .fromTo(
        '.gsap-hero-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          delay: 1
        }
      )
      .fromTo(
        '.gsap-search-bar',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        1.5
      );
  }, []);

  const destinationSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-destination-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        }
      )
      .fromTo(
        '.gsap-destination-section-tab',
        { opacity: 0 },
        { opacity: 1 },
        0.5
      )
      .fromTo(
        '.gsap-destination-section-item',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.2 },
        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-destination-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline
    });
  }, []);

  const curatedCollectionSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-inspiration-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        }
      )
      .fromTo(
        '.gsap-inspiration-section-tab',
        { opacity: 0 },
        { opacity: 1 },
        0.5
      )
      .fromTo(
        '.gsap-inspiration-section-item',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.2 },
        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-inspiration-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline
    });
  }, []);

  const spotlightSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-spotlight-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        }
      )
      .fromTo(
        '.gsap-spotlight-section-content',
        { opacity: 0 },
        { opacity: 1 },
        0.5
      )
      .fromTo(
        '.gsap-spotlight-section-button',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-spotlight-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline
    });
  }, []);

  const journeySection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-journey-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        }
      )
      .fromTo(
        '.gsap-journey-section-button',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        0.5
      )
      .fromTo(
        '.gsap-journey-section-content',
        { opacity: 0 },
        { opacity: 1 },

        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-journey-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline
    });
  }, []);

  const listYourPropertySection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-list-your-property-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          stagger: 0.1
        }
      )
      .fromTo(
        '.gsap-list-your-property-section-content',
        { opacity: 0 },
        { opacity: 1 },
        0.5
      )
      .fromTo(
        '.gsap-list-your-property-section-button',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        '<'
      )
      .fromTo('.gsap-list-your-prop-img-1', { scale: 1.5 }, { scale: 1 }, '<')
      .fromTo('.gsap-list-your-prop-img-2', { scale: 1.5 }, { scale: 1 }, '<')
      .fromTo('.gsap-list-your-prop-img-3', { scale: 1.5 }, { scale: 1 }, '<');

    ScrollTrigger.create({
      trigger: '.gsap-list-your-property-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline
    });

    ScrollTrigger.create({
      trigger: '.gsap-list-your-property-section',
      start: 'top 100%',
      end: 'bottom 0%',
      animation: gsap.fromTo(
        '.gsap-list-your-prop-img-3-parallax',
        { y: 200 },
        { y: 0 }
      ),
      scrub: 1
    });
  }, []);

  const testimonialSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-home-testimonial-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          stagger: 0.1
        }
      )
      .fromTo(
        '.gsap-home-testimonial-section-item',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        0.5
      )
      .fromTo(
        '.gsap-home-testimonial-section-tab',
        { opacity: 0 },
        { opacity: 1 },
        '<'
      )
      .fromTo(
        '.gsap-home-testimonial-section-image',
        { scale: 1.5 },
        {
          scale: 1
        },
        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-home-testimonial-section',
      start: 'top 50%',
      end: 'bottom 50%',
      animation: timeline
    });
  }, []);

  const aboutSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-about-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        }
      )
      .fromTo(
        '.gsap-about-section-item',
        { opacity: 0, scale: 0.8, stagger: 0.3 },
        { opacity: 1, scale: 1, stagger: 0.3 },
        0.5
      )
      .fromTo(
        '.gsap-about-section-main-image',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        0.5
      )
      .fromTo(
        '.gsap-about-section-side-image',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        0.5
      )
      .fromTo(
        '.gsap-about-section-right-image',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1 },
        '<'
      )
      .fromTo(
        '.gsap-about-section-left-image',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 },
        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-about-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline
    });
  }, []);

  const featureInSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-media-listing-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        }
      )
      .fromTo(
        '.gsap-media-listing-section-item',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.2 },
        0.5
      );

    ScrollTrigger.create({
      trigger: '.gsap-media-listing-section',
      start: 'top 80%',
      end: 'bottom bottom',
      animation: timeline
    });
  }, []);

  useEffect(() => {
    switch (section) {
      case gsap_animation_sections.hero:
        heroBannerSection();
        break;
      case gsap_animation_sections.destination:
        destinationSection();
        break;
      case gsap_animation_sections.inspiration:
        curatedCollectionSection();
        break;
      case gsap_animation_sections.spotlight:
        spotlightSection();
        break;
      case gsap_animation_sections.journeys:
        journeySection();
        break;
      case gsap_animation_sections.list_your_property:
        listYourPropertySection();
        break;
      case gsap_animation_sections.testimonial:
        testimonialSection();
        break;
      case gsap_animation_sections.about:
        aboutSection();
        break;
      case gsap_animation_sections.featured_in:
        featureInSection();
        break;
      default:
        break;
    }
  }, [
    section,
    heroBannerSection,
    destinationSection,
    curatedCollectionSection,
    spotlightSection,
    journeySection,
    listYourPropertySection,
    testimonialSection,
    aboutSection,
    featureInSection
  ]);
  return null;
};

export default useGsapHomeAnimations;
