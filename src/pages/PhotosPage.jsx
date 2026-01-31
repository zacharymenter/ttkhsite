// Photos page. Shows a YouTube video embed and a thumbnail gallery with a lightbox modal.
import { Helmet } from 'react-helmet-async';
import YouTubeEmbed from '../components/YouTubeEmbed';
import Gallery from '../components/Gallery';
import '../css/photos.css';

export default function PhotosPage() {
  return (
    <>
      <Helmet>
        <title>Photos | TTKH</title>
        <meta property="og:image" content="https://ttkhband.com/images/ttkhfulllogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ttkhband.com/photos" />
        <meta property="og:title" content="Photos | TTKH" />
        <meta
          property="og:description"
          content="Photos of Through The Kitchen Hole."
        />
      </Helmet>

      <div className="photo-block">
        <div className="carousel">
          <YouTubeEmbed videoId="DA9DsL9NqtM" />
        </div>

        <Gallery />
      </div>
    </>
  );
}
