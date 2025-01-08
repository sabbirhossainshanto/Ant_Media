import { useRef, useState } from "react";
// import { settings } from "../../api";
// import BigVideo from "./BigVideo";
// import SmallVideo from "./SmallVideo";
import Footer from "./Footer";
import { useEffect } from "react";
import { useVideoFormatQuery } from "../../redux/features/video/videoApi";
import BigVideo from "./BigVideo";
const Home1 = () => {
  const isInitialLoad = useRef(true);
  const [animationStage, setAnimationStage] = useState("idle");
  const [smallVideoPosition, setSmallVideoPosition] = useState(null);
  const [smallVideoVisible, setSmallVideoVisible] = useState(null);
  const [bigVideoVisible, setBigVideoVisible] = useState(null);
  const { data } = useVideoFormatQuery(undefined, { pollingInterval: 1000 });

  // console.log(data);

  const defineVideosPosition = () => {
    if (bigVideoVisible && smallVideoPosition === "vertical") {
      return "default";
    }
  };

  useEffect(() => {
    if (data?.success) {
      setBigVideoVisible(data.result.settings.big_video?.visible);
      setSmallVideoPosition(data.result.settings.small_video?.position);
      setSmallVideoVisible(data.result.settings.small_video?.visible);

      if (!isInitialLoad.current) {
        setAnimationStage("sliding-out");
      }
      isInitialLoad.current = false;
    }
  }, [data]);

  useEffect(() => {
    if (animationStage === "sliding-out") {
      setAnimationStage("sliding-in");
    }
  }, [animationStage]);

  return (
    <div className="slider-wrapper">
      <div className={`slider ${animationStage}`}>
        <div id="mobile-router-root" className="UPEED ">
          <div className="PfEVi">
            <div className="tXrqB">
              <div
                className="nL7zf"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="UMivW"
                  data-testid="stream-ph-4_sRlBV1td_eD2aqTib7Vg"
                >
                  <div
                    className="J5OQF J5YEm Wq_Xx"
                    data-testid="mobile-stream"
                    id="stream-4_sRlBV1td_eD2aqTib7Vg"
                  >
                    {/* {bigVideoVisible && (
                      <video
                        style={{
                          top:
                            defineVideosPosition() === "default" ? "0" : "35%",
                          transition: "top 0.5s ease-in-out",
                        }}
                        disablePictureInPicture
                        playsInline
                        className="KPCas Rl_wI"
                        crossOrigin="use-credentials"
                        src="/src/assets/video/1.mp4"
                        autoPlay
                        muted
                      />
                    )} */}

                    <BigVideo />

                    {/* <iframe src="https://1app.live/live/play.html?id=football2"></iframe> */}

                    <div
                      className="Q60zq"
                      style={{
                        "-pipwidth": "151.54px",
                        "-pipheight": "269.41px",
                      }}
                    >
                      <div
                        id="draggablePipsGrid"
                        className={`Tz0po YXV0S BGo6O ${
                          defineVideosPosition() === "default"
                            ? "Iwjyu"
                            : "horizontal_position"
                        }`}
                      >
                        <div
                          data-testid="pip-player-aN_ubJshDnvgYf9Nb-UxFQ"
                          className="NODDu DPZ3R"
                          style={{
                            gridArea: "pip_0_0",
                            width:
                              defineVideosPosition() === "default"
                                ? ""
                                : "100%",
                            transition: "width 0.5s ease-in-out",
                            height: "100%",
                          }}
                        >
                          {/* {smallVideoVisible && (
                            <video
                              disablePictureInPicture
                              playsInline
                              className="aSvNa"
                              crossOrigin="use-credentials"
                              src="/src/assets/video/1.mp4"
                              autoPlay
                              muted
                            />
                          )} */}

                          <div
                            className="x3Pt5 eEVS4 pXe6i"
                            data-testid="spinner"
                          >
                            <div
                              className="ORE05"
                              data-testid="progress"
                              style={{ width: "40px", height: "40px" }}
                            >
                              <svg
                                className="itzfA"
                                style={{ width: "40px", height: "40px" }}
                              >
                                <circle
                                  className="lgT0d"
                                  cx={20}
                                  cy={20}
                                  fill="transparent"
                                  r={18}
                                  strokeWidth={2}
                                />
                                <circle
                                  className="SBwqi SutaG"
                                  cx={20}
                                  cy={20}
                                  fill="transparent"
                                  r={18}
                                  strokeWidth={2}
                                  strokeDasharray="113.09733552923255"
                                  strokeDashoffset="28.274333882308138"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
