import { useEffect, useRef, useState } from "react";

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const VideoPlayer = ({ src, poster, className = "" }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const sliderRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seeking, setSeeking] = useState(false);

  // fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false);

  // hover preview
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverXPercent, setHoverXPercent] = useState(0);
  const [isHoveringBar, setIsHoveringBar] = useState(false);

  // controls visibility
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimer = useRef(null);

  const showControls = () => {
    setControlsVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setControlsVisible(false);
    }, 2000);
  };

  // Reset on src/poster changes
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    showControls();
  }, [src, poster]);

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    setDuration(v.duration || 0);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || seeking) return;
    setCurrentTime(v.currentTime);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    showControls();

    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const stopVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setCurrentTime(0);
    setPlaying(false);
    showControls();
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    togglePlay();
  };

  const handleSeekChange = (e) => {
    const v = videoRef.current;
    if (!v || !duration) return;

    showControls();

    const pct = Number(e.target.value);
    const newTime = (pct / 100) * duration;

    setCurrentTime(newTime);
    v.currentTime = newTime;
  };

  const handleSeekStart = () => {
    setSeeking(true);
    showControls();
  };

  const handleSeekEnd = () => {
    setSeeking(false);
    showControls();
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  // --- Hover preview ---
  const handleSliderMouseMove = (e) => {
    if (!duration) return;

    showControls();

    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const clamped = Math.max(0, Math.min(rect.width, x));
    const pct = clamped / rect.width;

    setHoverXPercent(pct * 100);
    setHoverTime(pct * duration);
    setIsHoveringBar(true);
  };

  const handleSliderMouseLeave = () => {
    setIsHoveringBar(false);
    setHoverTime(null);
  };

  // --- Fullscreen ---
  const toggleFullscreen = async () => {
    const player = playerRef.current;
    if (!player) return;

    showControls();

    try {
      if (!document.fullscreenElement) {
        await player.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  useEffect(() => {
    const onFullChange = () => {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      showControls();
    };
    document.addEventListener("fullscreenchange", onFullChange);
    return () => document.removeEventListener("fullscreenchange", onFullChange);
  }, []);

  // Show controls on mouse move inside player
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const handleMove = () => showControls();

    player.addEventListener("mousemove", handleMove);

    return () => player.removeEventListener("mousemove", handleMove);
  }, []);

  // show controls on pause
  useEffect(() => {
    if (!playing) showControls();
  }, [playing]);

  return (
    <div
      ref={playerRef}
      className={`
        group relative w-full overflow-hidden rounded-2xl
        border border-slate-300/70 bg-slate-900
        dark:border-slate-800 dark:bg-slate-950
        shadow-[0_18px_40px_rgba(15,23,42,0.75)]
        ${className}
      `}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="
          w-full h-auto cursor-pointer object-cover
          relative z-10
        "
        onClick={togglePlay}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
      />

      {/* PLAY OVERLAY */}
      {!playing && (
        <button
          type="button"
          onClick={handleOverlayClick}
          aria-label="Play video"
          className="
            absolute inset-0 flex items-center justify-center
            bg-black/20 backdrop-blur-[1px]
            z-20 cursor-pointer
          "
        >
          <div
            className="
              h-20 w-20 rounded-full flex items-center justify-center
              bg-slate-700/40 border border-slate-300/40
              shadow-[0_0_40px_rgba(129,140,248,0.7)]
              hover:shadow-[0_0_60px_rgba(129,140,248,1)]
              transition
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-12 w-12 ml-1"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {/* CONTROLS BAR — auto-hide */}
      <div
        className={`
          absolute inset-x-0 bottom-0 z-30
          px-3 pb-3 pt-2
          transition-opacity duration-300
          ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="
            flex items-center gap-3 px-3 py-2
            text-xs text-slate-100
            rounded-2xl
            border border-slate-500/40
            bg-slate-900/80 dark:bg-slate-900/80
            backdrop-blur-md
            shadow-[0_0_25px_rgba(79,70,229,0.55)]
          "
        >
          {/* Play / Pause */}
          <button
            type="button"
            onClick={togglePlay}
            className="
              inline-flex items-center justify-center
              h-7 w-7 rounded-full border border-slate-500/60
              bg-slate-800/80 hover:bg-slate-700
            "
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Stop button */}
          <button
            type="button"
            onClick={stopVideo}
            className="
              inline-flex items-center justify-center
              h-7 w-7 rounded-full border border-slate-500/60
              bg-slate-800/80 hover:bg-slate-700
            "
            aria-label="Stop video"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-current"
            >
              <path d="M6 6h12v12H6z" />
            </svg>
          </button>

          {/* Time + progress */}
          <div className="flex-1 flex items-center gap-2">
            <span className="tabular-nums text-[11px] text-slate-300 min-w-[40px] text-right">
              {formatTime(currentTime)}
            </span>

            <div className="relative flex-1">
              {/* Hover preview */}
              {isHoveringBar && hoverTime != null && (
                <div
                  className="
                    absolute -top-6
                    px-2 py-0.5 rounded-full
                    bg-slate-900/95 border border-slate-500/70
                    text-[10px] text-slate-100
                    shadow-[0_0_12px_rgba(79,70,229,0.6)]
                    transform -translate-x-1/2
                  "
                  style={{ left: `${hoverXPercent}%` }}
                >
                  {formatTime(hoverTime)}
                </div>
              )}

              <input
                ref={sliderRef}
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progressPercent}
                onChange={handleSeekChange}
                onMouseDown={handleSeekStart}
                onMouseUp={handleSeekEnd}
                onMouseLeave={handleSliderMouseLeave}
                onMouseMove={handleSliderMouseMove}
                onTouchStart={handleSeekStart}
                onTouchEnd={handleSeekEnd}
                className="
                  w-full h-1.5 rounded-full bg-slate-700/80 accent-brand-soft
                  cursor-pointer
                "
              />
            </div>

            <span className="tabular-nums text-[11px] text-slate-400 min-w-[40px]">
              {formatTime(duration)}
            </span>
          </div>

          {/* Fullscreen */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="
              inline-flex items-center justify-center
              h-7 w-7 rounded-full border border-slate-500/60
              bg-slate-800/80 hover:bg-slate-700
            "
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M9 9H5V5h2v2h2v2zm6 0V7h2V5h2v4h-4zM9 15v2H7v2H5v-4h4zm10 0v4h-2v-2h-2v-2h4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M7 7h4V5H5v6h2V7zm6-2v2h4v4h2V5h-6zm4 12h-4v2h6v-6h-2v4zm-10-4H5v6h6v-2H7v-4z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;