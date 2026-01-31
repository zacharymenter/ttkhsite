// Reusable black/white alternating content box with an image and text. Used on Home and About pages.
import { Link } from 'react-router-dom';

export default function InfoBox({
  variant,
  title,
  titleTag: TitleTag = 'h2',
  text,
  linkText,
  linkHref,
  linkExternal,
  linkClass,
  imgSrc,
  imgAlt,
  imagePosition,
}) {
  const boxClass = variant === 'black' ? 'info-box-black' : 'info-box-white';

  const textBlock = (
    <div className="info-box-text">
      <TitleTag>{title}</TitleTag>
      <p className="info-p">{text}</p>
      {linkText &&
        (linkExternal ? (
          <a className={linkClass} target="_blank" rel="noreferrer" href={linkHref}>
            {linkText}
          </a>
        ) : (
          <Link className={linkClass} to={linkHref}>
            {linkText}
          </Link>
        ))}
    </div>
  );

  const imgBlock = (
    <img className="info-img" src={imgSrc} alt={imgAlt} />
  );

  return (
    <div className={boxClass}>
      {imagePosition === 'left' ? (
        <>
          {imgBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imgBlock}
        </>
      )}
    </div>
  );
}
