const Video = () => {
  return (
    <div className="w-full h-full relative brightness-50 overflow-hidden">
      <video
        src="../../../public/videos/maquina.mp4"
        autoPlay
        loop
        muted
        width="100%"
        height="auto"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Video;
