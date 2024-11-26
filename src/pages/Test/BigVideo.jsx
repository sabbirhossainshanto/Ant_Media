import { WebPlayer } from "@antmedia/web_player";
import { useEffect, useRef } from "react";

const BigVideo = () => {
  const bigVideo = useRef(null);
  const embeddedPlayerRef = useRef(null);
  const playOrderLocal = ["webrtc", "hls", "dash"];

  useEffect(() => {
    embeddedPlayerRef.current = new WebPlayer(
      {
        streamId: "stream1",
        httpBaseURL: "https://vid1.live/live/",
        videoHTMLContent:
          '<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered"  playsinline style="width:100%;height:100%;object-fit:cover"></video>',
        playOrder: playOrderLocal,
      },
      bigVideo.current
    );

    embeddedPlayerRef.current
      .initialize()
      .then(() => {
        embeddedPlayerRef.current.play();
      })
      .catch((error) => {
        console.error("Error while initializing embedded player: " + error);
      });
  }, [playOrderLocal]);
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
      }}
      ref={bigVideo}
    ></div>
  );
};

export default BigVideo;
