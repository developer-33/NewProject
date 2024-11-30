import React from "react";

const VideoBackground = ({ videoSrc, className = "video", overlayColor = "red-700" }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Optional Overlay */}
      {overlayColor && (
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: overlayColor, mixBlendMode: "multiply" }}
        ></div>
      )}
      {/* Content */}
      <div className="relative z-10">{/* Your content here */}</div>
    </div>
  );
};

export default VideoBackground;
