'use client';

export default function ModalVimeo({ open, onClose, link }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="bg-overlay-black fixed h-screen w-screen z-60"
    >
      <div
        className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-auto w-1/2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <iframe
          src={link}
          width="940"
          height="529"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://vimeo.com/527463835">Sempre DISTRIBUIDOR</a> from{' '}
          <a href="https://vimeo.com/sempretecnologiabr">Sempre Tecnologia</a>{' '}
          on <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </div>
    </div>
  );
}