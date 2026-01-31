// Dynamically loads the Bandsintown widget script on mount to display upcoming events.
import { useEffect, useRef } from 'react';

export default function BandsintownWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.charset = 'utf-8';
    script.async = true;
    containerRef.current.prepend(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <a
        className="bit-widget-initializer"
        data-artist-name="id_15590459"
        data-background-color="rgba(0,0,0,1)"
        data-separator-color="rgba(255,255,255,1)"
        data-text-color="rgba(255,255,255,1)"
        data-auto-style="true"
        data-button-label-capitalization="uppercase"
        data-header-capitalization="uppercase"
        data-location-capitalization="capitalize"
        data-venue-capitalization="capitalize"
        data-local-dates-position="aboveUpcoming"
        data-display-details="false"
        data-display-lineup="true"
        data-display-past-date="true"
        data-display-start-time="true"
        data-social-share-icon="true"
        data-display-limit="all"
        data-date-format="MMM. D, YYYY"
        data-date-orientation="vertical"
        data-date-border-color="#4A4A4A"
        data-date-border-width="1px"
        data-date-capitalization="capitalize"
        data-date-border-radius="10px"
        data-event-ticket-cta-size="medium"
        data-event-custom-ticket-text=""
        data-event-ticket-text="TICKETS"
        data-event-ticket-icon="false"
        data-event-ticket-cta-text-color="rgba(255,255,255,1)"
        data-event-ticket-cta-bg-color="rgb(188, 46, 46)"
        data-event-ticket-cta-border-color="rgba(255,255,255,1)"
        data-event-ticket-cta-border-width="0px"
        data-event-ticket-cta-border-radius="2px"
        data-sold-out-button-text-color="rgba(255,255,255,1)"
        data-sold-out-button-background-color="rgba(74,74,74,1)"
        data-sold-out-button-border-color="rgba(74,74,74,1)"
        data-sold-out-button-clickable="false"
        data-event-rsvp-position="left"
        data-event-rsvp-cta-size="medium"
        data-event-rsvp-only-show-icon="false"
        data-event-rsvp-text="RSVP"
        data-event-rsvp-icon="false"
        data-event-rsvp-cta-text-color="rgba(0,0,0,1)"
        data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
        data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
        data-event-rsvp-cta-border-width="1px"
        data-event-rsvp-cta-border-radius="2px"
        data-follow-section-position="top"
        data-follow-section-alignment="center"
        data-follow-section-header-text="Get updates on new shows, new music, and more"
        data-follow-section-cta-size="medium"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-icon="true"
        data-follow-section-cta-text-color="rgba(255,255,255,1)"
        data-follow-section-cta-bg-color="rgb(188, 46, 46);"
        data-follow-section-cta-border-color="rgba(255,255,255,1)"
        data-follow-section-cta-border-width="0px"
        data-follow-section-cta-border-radius="2px"
        data-play-my-city-position="bottom"
        data-play-my-city-alignment="center"
        data-play-my-city-header-text="Don't see a show near you?"
        data-play-my-city-cta-size="medium"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-icon="false"
        data-play-my-city-cta-text-color="rgba(0,0,0,1)"
        data-play-my-city-cta-bg-color="rgba(255,255,255,1)"
        data-play-my-city-cta-border-color="rgba(74,74,74,1)"
        data-play-my-city-cta-border-width="0px"
        data-play-my-city-cta-border-radius="2px"
        data-layout-breakpoint="900"
        data-app-id="5c937360d242ff7ad8ca9e25a89a90c4"
        data-affil-code=""
      ></a>
    </div>
  );
}
