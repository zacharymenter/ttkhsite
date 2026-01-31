// Wrapper for a privacy-enhanced YouTube embed iframe. Accepts a video ID.
export default function YouTubeEmbed({ videoId }) {
  return (
    <iframe
      className="video"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowFullScreen
    ></iframe>
  );
}
