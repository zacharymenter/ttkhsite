// Home page. Displays the parallax hero banner and four info boxes for music, about, events, and merch.
import { Helmet } from 'react-helmet-async';
import InfoBox from '../components/InfoBox';
import { HOME_INFO_BOXES } from '../data/homeInfoBoxes';
import '../css/index.css';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>TTKH | Rock Band</title>
        <meta property="og:image" content="https://ttkhband.com/images/ttkhfulllogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ttkhband.com" />
        <meta property="og:title" content="TTKH | Rock Band" />
        <meta
          property="og:description"
          content="Through The Kitchen Hole is a rock band based out of Eau Claire, WI."
        />
      </Helmet>

      <main>
        <div className="parallax"></div>
        <img
          className="logo"
          src="/images/ttkhlogotransparent.png"
          alt="TTKH Logo"
        />

        <div className="border">
          {HOME_INFO_BOXES.map((box) => (
            <InfoBox key={box.title} {...box} />
          ))}
        </div>
      </main>
    </>
  );
}
