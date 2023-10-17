'use client';

export default function ModalVimeo({ open, onClose, link }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="bg-overlay-black fixed h-screen w-screen z-60"
    >
      <div
        className="block sm:hidden absolute left-0 mx-auto right-0 top-[50%] translate-y-[-50%] h-auto w-[350px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <iframe
          src={link}
          width="350"
          height="197"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        className="hidden sm:block absolute left-0 mx-auto right-0 top-[50%] translate-y-[-50%] h-auto w-[620px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <iframe
          src={link}
          width="620"
          height="349"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        className="hidden absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-auto w-1/2"
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
      </div>
    </div>
  );
}
