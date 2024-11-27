import { useState } from "react";
import { settings } from "../../api";
// import BigVideo from "./BigVideo";
import Footer from "./Footer";
import { useEffect } from "react";
// import SmallVideo from "./SmallVideo";
const Home1 = () => {
  // const [smallVideoPosition, setSmallVideoPosition] = useState("vertical");
  // const [bigVideoVisible, setBigVideoVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState("idle");

  const defineVideosPosition = () => {
    if (
      settings.big_video_visible &&
      settings.small_video_position === "vertical"
    ) {
      return "default";
    }
    // if (bigVideoVisible && smallVideoPosition === "vertical") {
    //   return "default";
    // }
  };

  useEffect(() => {
    if (animationStage === "sliding-out") {
      setAnimationStage("sliding-in");
    }
  }, [animationStage]);

  return (
    <div className="slider-wrapper">
      <div className={`slider ${animationStage}`}>
        <div
          // onClick={() => {
          //   setSmallVideoPosition("horizontal");
          //   setAnimationStage("sliding-out");
          // }}
          id="mobile-router-root"
          className="UPEED "
        >
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
                    {settings.big_video_visible && (
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
                    )}

                    {/* <BigVideo /> */}
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
                          <video
                            disablePictureInPicture
                            playsInline
                            className="aSvNa"
                            crossOrigin="use-credentials"
                            src="/src/assets/video/1.mp4"
                            autoPlay
                            muted
                          />

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
