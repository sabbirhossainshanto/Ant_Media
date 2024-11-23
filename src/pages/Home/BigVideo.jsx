import { WebPlayer } from "@antmedia/web_player";
import { useEffect, useRef } from "react";

const BigVideo = () => {
  const bigVideo = useRef(null);
  //   const placeHolderRef = useRef(null);
  const embeddedPlayerRef = useRef(null);
  const playOrderLocal = ["webrtc", "hls", "dash"];

  useEffect(() => {
    embeddedPlayerRef.current = new WebPlayer(
      {
        streamId: "stream2",
        httpBaseURL: "https://vid1.live/live/",
        videoHTMLContent:
          '<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered"  playsinline style="width:100%;height:100%"></video>',
        playOrder: playOrderLocal,
      },
      bigVideo.current
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
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      ref={bigVideo}
    ></div>
  );
};

export default BigVideo;
