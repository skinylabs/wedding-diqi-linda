"use client";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

const AutoPlayAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      audio
        .play()
        .then(() => {
          console.log("Audio is playing");
        })
        .catch((error) => {
          console.error("Failed to play audio:", error);
        });
    };

    playAudio();

    return () => {
      audio.pause();
    };
  }, []);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Failed to play audio:", error);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="absolute flex z-50">
      <audio
        ref={audioRef}
        src="https://wedding-of-diqi-linda.vercel.app/public/audio/audio.MP3"
        loop={false}
      />
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default AutoPlayAudio;
