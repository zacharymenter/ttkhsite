// Contact page. Displays the band email, a short message, and social media links.
import { Helmet } from 'react-helmet-async';
import { SOCIAL_LINKS } from '../data/socialLinks';
import '../css/contact.css';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | TTKH</title>
        <meta property="og:image" content="https://ttkhband.com/images/ttkhfulllogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ttkhband.com/contact" />
        <meta property="og:title" content="Contact | TTKH" />
        <meta
          property="og:description"
          content="Get in touch with Through The Kitchen Hole."
        />
      </Helmet>

      <div className="container">
        <h1>Contact Through The Kitchen Hole</h1>
        <p>
          Please email us at <u>ttkhband@gmail.com</u> or message us on Facebook
          for pricing, availability, questions, or just to say hi!
        </p>

        <div className="social-block">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <img src={link.img} alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
