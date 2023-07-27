import { Elastic, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useCallback, useEffect } from 'react';
import { gsap_property_details_animation_sections } from 'src/types/enum';

const animation_durarion = 1;
const scale_easing = Elastic.easeOut.config(0.9, 1);
const show_easing = 'power4.out';
const heading_tween_from = {
  y: 100,
  skewY: 7,
  opacity: 0
};
const heading_tween_to = {
  y: 0,
  skewY: 0,
  opacity: 1,
  ease: show_easing,
  stagger: 0.3
};

const useGsapPropertyDetailsAnimatons = (
  section: gsap_property_details_animation_sections
) => {
  const heroBannerSection = useCallback(() => {
    gsap.fromTo(
      '.gsap-pd-hero-section-button',
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        ease: scale_easing,
        duration: animation_durarion,
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      }
    );
  }, []);

  const propertyOverviewSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        '.gsap-pd-overview-section-action-button',
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, stagger: 0.1, ease: show_easing }
      )
      .fromTo(
        '.gsap-pd-overview-section-heading-text',
        heading_tween_from,
        heading_tween_to,
        0.5
      )
      .fromTo(
        '.gsap-pd-overview-section-info-text',
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, ease: show_easing }
      )
      .fromTo(
        '.gsap-pd-overview-section-sub-heading-text',
        heading_tween_from,
        heading_tween_to,
        1
      )
      .fromTo(
        '.gsap-pd-overview-section-para-text',
        { opacity: 0 },
        { opacity: 1, ease: show_easing },
        '<'
      )
      .fromTo(
        '.gsap-pd-overview-section-bottom-action-button',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: scale_easing
        }
      )
      .fromTo(
        '.gsap-pd-overview-section-calendar',
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2,
          ease: show_easing
        },
        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-overview-section',
      start: 'top 80%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });
  }, []);

  const reserveSection = useCallback(() => {
    ScrollTrigger.create({
      trigger: '.gsap-pd-reserve-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: gsap.fromTo(
        '.gsap-pd-reserve-section-content',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          ease: scale_easing,
          duration: animation_durarion,
          onComplete: () => {
            ScrollTrigger.refresh();
          }
        }
      ),
      toggleActions: 'play none none none'
    });
  }, []);

  const locationSection = useCallback(() => {
    ScrollTrigger.create({
      trigger: '.gsap-pd-location-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: gsap.fromTo(
        '.gsap-pd-location-section-content',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          ease: scale_easing,
          duration: animation_durarion,
          onComplete: () => {
            ScrollTrigger.refresh();
          }
        }
      ),
      toggleActions: 'play none none none'
    });
  }, []);

  const roomsSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        '.gsap-pd-rooms-section-heading-text',
        heading_tween_from,
        heading_tween_to
      )
      .fromTo(
        '.gsap-pd-rooms-section-card',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          ease: scale_easing,
          stagger: 0.2
        }
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-rooms-section',
      start: 'top 60%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });
  }, []);

  const amenitiesSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        '.gsap-pd-amenities-section-heading-text',
        heading_tween_from,
        heading_tween_to
      )
      .fromTo(
        '.gsap-pd-amenities-section-item',
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2,
          ease: show_easing
        }
      )
      .fromTo(
        '.gsap-pd-amenities-section-img-1',
        {
          opacity: 0,
          scale: 0
        },
        { opacity: 1, scale: 1, ease: scale_easing },
        '<'
      )
      .fromTo(
        '.gsap-pd-amenities-section-img-2',
        {
          opacity: 0,
          scale: 0
        },
        { opacity: 1, scale: 1, ease: scale_easing },
        1
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-amenities-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });

    ScrollTrigger.create({
      trigger: '.gsap-pd-amenities-section',
      start: 'top 50%',
      end: 'bottom 0%',
      animation: gsap.fromTo(
        '.gsap-pd-amenities-section-img-2',
        { y: -200 },
        { y: 0, ease: show_easing, duration: animation_durarion }
      ),
      scrub: 1
    });
  }, []);

  const includedExcludedServicesSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        '.gsap-pd-inclusions-exclusions-section-heading-text',
        heading_tween_from,
        heading_tween_to
      )
      .fromTo(
        '.gsap-pd-inclusions-exclusions-section-item',
        { opacity: 0 },
        { opacity: 1, stagger: 0.2, ease: show_easing }
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-inclusions-exclusions-section',
      animation: timeline,
      start: 'top 50%',
      end: 'bottom bottom',
      toggleActions: 'play none none none'
    });
  }, []);

  const storySection = useCallback((tweenName: string) => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        `.${tweenName}-container`,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, ease: scale_easing }
      )
      .fromTo(
        `.${tweenName}-heading-text`,
        heading_tween_from,
        heading_tween_to,
        0.2
      )
      .fromTo(
        `.${tweenName}-content`,
        { opacity: 0 },
        { opacity: 1, stagger: 0.3, ease: show_easing }
      );

    ScrollTrigger.create({
      trigger: `.${tweenName}`,
      start: 'top 80%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });
  }, []);

  const beforeYouBookSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        '.gsap-pd-before-you-book-section-heading-text',
        heading_tween_from,
        heading_tween_to
      )
      .fromTo(
        '.gsap-pd-before-you-book-section-action',
        { opacity: 0 },
        { opacity: 1, ease: show_easing },
        '<'
      )
      .fromTo(
        '.gsap-pd-before-you-book-section-content',
        { opacity: 0 },
        { opacity: 1, stagger: 0.3, ease: show_easing }
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-before-you-book-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });
  }, []);

  const guestExperienceSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });
    timeline
      .fromTo(
        '.gsap-pd-guest-experience-section-heading-text',
        heading_tween_from,
        heading_tween_to
      )
      .fromTo(
        '.gsap-pd-guest-experience-section-content',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.3,
          ease: scale_easing
        }
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-guest-experience-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });
  }, []);

  const faqSection = useCallback(() => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        '.gsap-pd-faq-section-heading-text',
        heading_tween_from,
        heading_tween_to
      )
      .fromTo(
        '.gsap-pd-faq-section-content',
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.3,
          ease: show_easing
        }
      )
      .fromTo(
        '.gsap-pd-faq-image-1',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, ease: scale_easing },
        1
      )
      .fromTo(
        '.gsap-pd-faq-image-2',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, ease: scale_easing },
        1.2
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-faq-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });

    ScrollTrigger.create({
      trigger: '.gsap-pd-faq-section',
      start: 'top 80%',
      end: 'bottom 0%',
      animation: gsap.fromTo(
        '.gsap-pd-faq-image-2',
        { y: -100 },
        { y: 0, duration: animation_durarion, ease: show_easing }
      ),
      scrub: 1
    });
  }, []);

  const sliderSection = useCallback((tweenName: string) => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        `.${tweenName}-heading-text`,
        heading_tween_from,
        heading_tween_to
      )
      .fromTo(
        `.${tweenName}-content`,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.3,
          ease: scale_easing
        }
      );
    ScrollTrigger.create({
      trigger: `.${tweenName}`,
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });
  }, []);

  const accordianSection = useCallback((tweenName) => {
    let timeline = gsap.timeline({
      defaults: { duration: animation_durarion },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });

    timeline
      .fromTo(
        `.${tweenName}-heading-text`,
        heading_tween_from,
        heading_tween_to
      )
      .fromTo(
        `.${tweenName}-action`,
        {
          opacity: 0
        },
        {
          opacity: 1,
          ease: show_easing
        },
        '<'
      );

    ScrollTrigger.create({
      trigger: `.${tweenName}`,
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline,
      toggleActions: 'play none none none'
    });
  }, []);

  useEffect(() => {
    switch (section) {
      case gsap_property_details_animation_sections.hero:
        heroBannerSection();
        break;
      case gsap_property_details_animation_sections.property_overview:
        propertyOverviewSection();
        break;
      case gsap_property_details_animation_sections.reserve:
        reserveSection();
        break;
      case gsap_property_details_animation_sections.location:
        locationSection();
        break;
      case gsap_property_details_animation_sections.rooms:
        roomsSection();
        break;
      case gsap_property_details_animation_sections.amenities:
        amenitiesSection();
        break;
      case gsap_property_details_animation_sections.included_excluded_services:
        includedExcludedServicesSection();
        break;
      case gsap_property_details_animation_sections.home_truths:
        storySection('gsap-pd-home-truths-section');
        break;
      case gsap_property_details_animation_sections.before_you_book:
        beforeYouBookSection();
        break;
      case gsap_property_details_animation_sections.story:
        storySection('gsap-pd-story-section');
        break;
      case gsap_property_details_animation_sections.detailed_description:
        storySection('gsap-pd-detailed-description-section');
        break;
      case gsap_property_details_animation_sections.guest_experience:
        guestExperienceSection();
        break;
      case gsap_property_details_animation_sections.faq:
        faqSection();
        break;
      case gsap_property_details_animation_sections.experiences:
        sliderSection('gsap-pd-experiences-section');
        break;
      case gsap_property_details_animation_sections.stay_longer:
        sliderSection('gsap-pd-stay-longer-section');
        break;
      case gsap_property_details_animation_sections.similar_stays:
        sliderSection('gsap-pd-similar-stays-section');
        break;
      case gsap_property_details_animation_sections.included_services_mobile:
        accordianSection('gsap-pd-included-services-mobile-section');
        break;
      case gsap_property_details_animation_sections.available_services_mobile:
        accordianSection('gsap-pd-available-services-mobile-section');
        break;
      case gsap_property_details_animation_sections.home_truths_mobile:
        accordianSection('gsap-pd-home-truths-mobile-section');
        break;
      case gsap_property_details_animation_sections.story_mobile:
        accordianSection('gsap-pd-story-mobile-section');
        break;
      case gsap_property_details_animation_sections.detailed_description_mobile:
        accordianSection('gsap-pd-detailed-description-mobile-section');
        break;
      default:
        break;
    }
  }, [
    section,
    heroBannerSection,
    propertyOverviewSection,
    reserveSection,
    locationSection,
    roomsSection,
    amenitiesSection,
    includedExcludedServicesSection,
    storySection,
    beforeYouBookSection,
    guestExperienceSection,
    faqSection,
    sliderSection,
    accordianSection
  ]);

  return <div>useGsapPropertyDetailsAnimatons</div>;
};

export default useGsapPropertyDetailsAnimatons;
