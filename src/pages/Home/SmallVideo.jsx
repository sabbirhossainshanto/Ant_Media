import { WebPlayer } from "@antmedia/web_player";
import { useEffect, useRef } from "react";

const SmallVideo = () => {
  const smallVideoRef = useRef(null);
  const embeddedSmallPlayerRef = useRef(null);
  const smallPlayOrderLocal = ["webrtc", "hls", "dash"];
  // https://vid1.live/live/

  useEffect(() => {
    embeddedSmallPlayerRef.current = new WebPlayer(
      {
        streamId: "stream3",
        httpBaseURL: "/src/assets/video/1.mp4",
        videoHTMLContent:
          '<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered"  playsinline style="width:100%;height:100%;object-fit:cover"></video>',
        playOrder: smallPlayOrderLocal,
      },
      smallVideoRef.current
    );

    embeddedSmallPlayerRef.current
      .initialize()
      .then(() => {
        embeddedSmallPlayerRef.current.play();
        console.log("Ok");
      })
      .catch((error) => {
        console.error("Error while initializing embedded player: " + error);
      });
  }, [smallPlayOrderLocal]);
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "0",
        height: "200px",
        width: "120px",
        zIndex: 9999,
      }}
      ref={smallVideoRef}
    ></div>
  );
};

export default SmallVideo;
