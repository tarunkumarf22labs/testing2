import { Elastic, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useCallback, useEffect } from 'react';
import { gsap_property_details_animation_sections } from 'src/types/enum';

const useGsapPropertyDetailsAnimatons = (
  section: gsap_property_details_animation_sections
) => {
  const heroBannerSection = useCallback(() => {
    gsap.fromTo(
      '.gsap-pd-hero-section-button',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 }
    );
  }, []);

  const propertyOverviewSection = useCallback(() => {
    let timeline = gsap.timeline();

    timeline
      .fromTo(
        '.gsap-pd-overview-section-action-button',
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, stagger: 0.1 }
      )
      .fromTo(
        '.gsap-pd-overview-section-heading-text',
        {
          y: 100,
          skewY: 10,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        },
        0.5
      )
      .fromTo(
        '.gsap-pd-overview-section-info-text',
        { opacity: 0 },
        { opacity: 1, stagger: 0.1 }
      )
      .fromTo(
        '.gsap-pd-overview-section-sub-heading-text',
        {
          y: 100,
          skewY: 10,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        },
        1
      )
      .fromTo(
        '.gsap-pd-overview-section-para-text',
        { opacity: 0 },
        { opacity: 1 }
      )
      .fromTo(
        '.gsap-pd-overview-section-bottom-action-button',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: Elastic.easeOut.config(1.1, 0.6)
        }
      )
      .fromTo(
        '.gsap-pd-overview-section-calendar',
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2
        },
        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-overview-section',
      start: 'top 50%',
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
        { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 1) }
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
        { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 1) }
      ),
      toggleActions: 'play none none none'
    });
  }, []);

  const roomsSection = useCallback(() => {
    let timeline = gsap.timeline();

    timeline
      .fromTo(
        '.gsap-pd-rooms-section-heading-text',
        {
          y: 100,
          skewY: 10,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          stagger: 0.3
        }
      )
      .fromTo(
        '.gsap-pd-rooms-section-card',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          ease: Elastic.easeOut.config(1, 1),
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
    let timeline = gsap.timeline();

    timeline
      .fromTo(
        '.gsap-pd-amenities-section-heading-text',
        {
          y: 100,
          skewY: 10,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          stagger: 0.3
        }
      )
      .fromTo(
        '.gsap-pd-amenities-section-item',
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2
        }
      )
      .fromTo(
        '.gsap-pd-amenities-section-img-1',
        {
          opacity: 0,
          scale: 0
        },
        { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 1) },
        '<'
      )
      .fromTo(
        '.gsap-pd-amenities-section-img-2',
        {
          opacity: 0,
          scale: 0
        },
        { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 1) },
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
        { y: 0 }
      ),
      scrub: 1
    });
  }, []);

  const includedExcludedServicesSection = useCallback(() => {
    let timeline = gsap.timeline();

    timeline
      .fromTo(
        '.gsap-pd-inclusions-exclusions-section-header-text',
        {
          y: 100,
          skewY: 10,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          stagger: 0.3
        }
      )
      .fromTo(
        '.gsap-pd-inclusions-exclusions-section-item',
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 }
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-inclusions-exclusions-section',
      animation: timeline,
      start: 'top 50%',
      end: 'bottom bottom',
      toggleActions: 'play none none none'
    });
  }, []);

  const homeTruthsSection = useCallback(() => {
    let timeline = gsap.timeline();

    timeline
      .fromTo(
        '.gsap-pd-home-truths-section-container',
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 1) }
      )
      .fromTo(
        '.gsap-pd-home-truths-section-heading-text',
        {
          y: 100,
          opacity: 0,
          stagger: 0.3,
          skewY: 7
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          skewY: 0
        },
        0.2
      )
      .fromTo(
        '.gsap-pd-home-truths-section-content',
        { opacity: 0 },
        { opacity: 1 }
      );

    ScrollTrigger.create({
      trigger: '.gsap-pd-home-truths-section',
      start: 'top 80%',
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
        homeTruthsSection();
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
    homeTruthsSection
  ]);

  return <div>useGsapPropertyDetailsAnimatons</div>;
};

export default useGsapPropertyDetailsAnimatons;
