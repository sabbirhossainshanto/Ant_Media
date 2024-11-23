import { WebPlayer } from "@antmedia/web_player";
import { useEffect, useRef } from "react";

const SmallVideo = () => {
  const videoRef = useRef(null);
  //   const placeHolderRef = useRef(null);
  // https://vid1.live/live/
  const embeddedPlayerRef = useRef(null);
  const playOrderLocal = ["webrtc", "hls", "dash"];

  useEffect(() => {
    embeddedPlayerRef.current = new WebPlayer(
      {
        streamId: "stream1",
        httpBaseURL: "/src/assets/video/1.mp4",
        videoHTMLContent:
          '<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered"  playsinline style="width:100%;height:100%"></video>',
        playOrder: playOrderLocal,
      },
      videoRef.current
      //   placeHolderRef.current
    );

    embeddedPlayerRef.current
      .initialize()
      .then(() => {
        embeddedPlayerRef.current.play();
        console.log("Ok");
      })
      .catch((error) => {
        console.error("Error while initializing embedded player: " + error);
      });
  }, [playOrderLocal]);
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "0",
          height: "120px",
          width: "120px",
          zIndex: 9999,
        }}
        // id="videoContainer"
        ref={videoRef}
      ></div>
    </div>
  );
};

export default SmallVideo;
