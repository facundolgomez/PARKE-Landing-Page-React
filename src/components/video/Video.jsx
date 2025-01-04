const Video = () => {
  return (
    <div className="w-full h-full relative brightness-50 ">
      <video
        src="../../../public/videos/maquina.mp4"
        autoPlay
        loop
        muted
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default Video;
