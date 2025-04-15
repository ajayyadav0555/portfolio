import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProfileModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative bg-white/20 border border-white/10 backdrop-blur-xl rounded-3xl p-8 w-96 text-center shadow-2xl ring-1 ring-white/30"
      >
        {/* Glowing Ring (using a pseudo-element with Tailwind) */}
        <div className="absolute -inset-1 z-[-1] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-70" />

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl transition-transform transform hover:scale-125"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Profile Image */}
        <img
          src="/images/photo.png"
          alt="Ajay Yadav"
          className="w-28 h-28 mx-auto rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]"
        />
        <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">Ajay Yadav</h2>
        <p className="mt-1 text-gray-200">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default ProfileModal;
