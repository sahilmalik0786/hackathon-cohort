import React, { useState } from 'react';

const CustomytEmbed = ({ videoId = 'xKoE-pJxwx8' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = `https://ik.imagekit.io/sf0ybmgwy/lttsotre/screwdrivers/transparent/Transparent_1_816b64e4-e995-4bb2-a58a-3ac9c3fb7c23.png?updatedAt=1753114480645`; // fallback: hqdefault.jpg

  return (
    <div className=" w-full relative aspect-video rounded overflow-hidden p-4 ">
      {!isPlaying ? (
        <div
          className="w-full h-full  cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full rounded-2xl bg-gradient-to-tr from-pink-400 to-pink-800 via-purple-400 object-contain transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full "
        />
      )}
    </div>
  );
};

export default CustomytEmbed;
