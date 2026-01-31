// Photo grid with a full-screen lightbox modal. Clicking a thumbnail opens it in the modal overlay.
import { useState, useCallback } from 'react';
import { GALLERY_IMAGES } from '../data/galleryImages';

export default function Gallery() {
  // Single state object avoids two separate setState calls per interaction (rerender-derived-state)
  const [modalImg, setModalImg] = useState(null);

  const openModal = useCallback((img, e) => {
    e.preventDefault();
    e.stopPropagation();
    setModalImg(img);
  }, []);

  const closeModal = useCallback(() => {
    setModalImg(null);
  }, []);

  return (
    <>
      <div className="gallery" id="gallery">
        {GALLERY_IMAGES.map((img) => (
          <img
            key={img.src}
            className="gallery-img"
            src={img.src}
            alt={img.alt}
            loading="lazy"
            onClick={(e) => openModal(img, e)}
          />
        ))}
      </div>

      <div
        id="my-modal"
        className={modalImg ? 'modal on' : 'modal'}
        onClick={closeModal}
      >
        <span className="close-cursor" onClick={closeModal}>
          &times;
        </span>
        {/* Explicit ternary instead of && for conditional rendering (rendering-conditional-render) */}
        {modalImg ? (
          <img
            className="modal-content"
            id="modal-img"
            src={modalImg.src}
            alt={modalImg.alt}
            onClick={(e) => e.stopPropagation()}
          />
        ) : null}
      </div>
    </>
  );
}
