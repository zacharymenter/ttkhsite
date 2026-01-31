// Events page. Embeds the Bandsintown widget to display upcoming and past shows.
import { Helmet } from 'react-helmet-async';
import BandsintownWidget from '../components/BandsintownWidget';
import '../css/events.css';

export default function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Events | TTKH</title>
        <meta property="og:image" content="https://ttkhband.com/images/ttkhfulllogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ttkhband.com/events" />
        <meta property="og:title" content="Events | TTKH" />
        <meta
          property="og:description"
          content="Stay up to date on Through The Kitchen Hole's upcoming events."
        />
      </Helmet>

      <div className="container">
        <BandsintownWidget />
      </div>
    </>
  );
}
