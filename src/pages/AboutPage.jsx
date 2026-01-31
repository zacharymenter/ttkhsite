// About page. Shows the band bio, Spotify embeds, and individual member profiles.
import { Helmet } from 'react-helmet-async';
import InfoBox from '../components/InfoBox';
import SpotifyEmbed from '../components/SpotifyEmbed';
import { MEMBER_PROFILES } from '../data/memberProfiles';
import '../css/about.css';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | TTKH</title>
        <meta property="og:image" content="https://ttkhband.com/images/ttkhfulllogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ttkhband.com/about" />
        <meta property="og:title" content="About | TTKH" />
        <meta property="og:description" content="About Through The Kitchen Hole." />
      </Helmet>

      <div className="container">
        <img
          className="about-img"
          src="/images/TTKH-5.jpg"
          alt="TTKH performing at The Plus"
        />
        <div className="about-ttkh">
          <h1>About Through The Kitchen Hole</h1>
          <p>
            Through The Kitchen Hole is a rock band based out of Eau Claire, WI.
            Currently comprised of four members, the band formed in early 2018 as
            a cover band, but has since begun adding their own original music to
            their repertoire. After releasing an original track alongside covers
            of four of their favorite songs in the summer of 2018, they wrote,
            recorded, and released <em>Snake Eyes</em> in August 2022.{' '}
            <em>Snake Eyes</em> is their first full length album of all original
            material.
          </p>
          <br />
          <p>
            TTKH can be found playing live at many venues across the Chippewa
            Valley, including The Plus, Jake&apos;s Supper Club, and Pioneer Grill.
            They also competed in the Rockonsin garage band competition at
            Summerfest in 2018, and the Bitter Jester Music Festival in 2019. The
            band has recently broken into the music scene in Madison and is
            excited to continue broadening their audience across Wisconsin.
          </p>
          <SpotifyEmbed
            src="https://open.spotify.com/embed/album/3TCH3HlYiAtIADgvqckTll?utm_source=generator"
            height={380}
            style={{ borderRadius: '12px' }}
          />
          <SpotifyEmbed
            src="https://open.spotify.com/embed/track/5pjdJ4ztlxmM2tvd9alHBt"
          />
        </div>

        <div className="member-about">
          {MEMBER_PROFILES.map((member) => (
            <InfoBox
              key={member.name}
              variant={member.variant}
              title={member.name}
              titleTag="h1"
              text={member.bio}
              imgSrc={member.imgSrc}
              imgAlt={member.imgAlt}
              imagePosition={member.imagePosition}
            />
          ))}
        </div>
      </div>
    </>
  );
}
