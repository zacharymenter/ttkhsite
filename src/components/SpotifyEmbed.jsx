// Wrapper for a Spotify embed iframe. Accepts a Spotify embed URL, optional height, and inline styles.
export default function SpotifyEmbed({ src, height = 80, style }) {
  return (
    <iframe
      style={style}
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
    ></iframe>
  );
}
