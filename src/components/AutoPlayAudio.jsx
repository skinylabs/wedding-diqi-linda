"use client";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

const AutoPlayAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    // Function to play audio
    const playAudio = () => {
      audio.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    };

    // Event listener to loop audio
    const handleEnded = () => {
      audio.play();
    };

    // Try to autoplay the audio on mount
    playAudio();
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute flex z-50">
      <audio ref={audioRef} src="public/audio/audio.mp3" loop={false} />
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default AutoPlayAudio;
