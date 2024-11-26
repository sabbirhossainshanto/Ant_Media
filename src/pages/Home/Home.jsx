import { settings } from "../../api";
import BigVideo from "./BigVideo";
import SmallVideo from "./SmallVideo";
const Home = () => {
  console.log(settings.big_video_visible);

  return (
    <div id="mobile-router-root" className="UPEED">
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
                    disablepictureinpicture
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
                  style={{ "-pipwidth": "151.54px", "-pipheight": "269.41px" }}
                >
                  <div
                    id="draggablePipsGrid"
                    className="Tz0po YXV0S BGo6O Iwjyu"
                  >
                    <div
                      data-testid="pip-player-aN_ubJshDnvgYf9Nb-UxFQ"
                      className="NODDu DPZ3R"
                      style={{
                        gridArea: "pip_0_0",
                      }}
                    >
                      <video
                        disablepictureinpicture
                        playsInline
                        className="aSvNa"
                        crossOrigin="use-credentials"
                        src="/src/assets/video/1.mp4"
                        autoPlay
                        muted
                      />
                      {/* <SmallVideo /> */}
                      <div className="x3Pt5 eEVS4 pXe6i" data-testid="spinner">
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
                  <div className="LhDO6">
                    <div className="qVaRv">
                      <div className="ImTwj ICUVz">
                        <div
                          className="XKQED"
                          data-testid="mos-item-PG-b_Eo7wYvMBMCsAxOmrPNAw"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/AAFnPbmqAAAZHHcSb0t9HDI8AAAAAAAAAAA/LYuPLTJO"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                499
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-PG-3PDebUP8XyQvZ7jWM-jo9Q"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/AAFnPbowAAAZJFNo-QoGJn-pAAAAAAAAAAA/87Q0vOMJ"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                1,499
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-MIZbMy-E0hEiGdrHsPK04g"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YvDS2QAAC9KbTQJyKwlFoQ/GnZ6Q83q"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                8
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-d2S2xYdFtnec3j02HdOcBg"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YtVw7AAA-xj5b6t_CrLGeg/R4Ufidod"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                999
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-ssSY6hLfSmA2LtZcdXmNKw"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YtV4PAAA-2IbKcMyGM9B2w/xFUltUwP"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                99
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-xoyWTZnoSPniXnntiYCi_A"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YtVwDAAA-w-PvO6UgIfYxQ/xarfCP0q"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                299
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-nzZP2cjNuMJK_Unhj7S50Q"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YtVv9QAA-w69-jPp2OUmgg/EwkpfA00"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                499
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-Vw0fuExL2Do6mB-c_nbrVg"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YtV3QgAA-1hto_VrjGbFRw/aa3wDFVJ"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                199
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-tk2_RvQC9StiEkxvrBgxLA"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/Y0_VQgAAvnEZcx2HZyHOpA/xUq2TL6n"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                79
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-HR_Wyca-cxJC9wiRabV_WA"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YRaeSQAA3FkKwUsqmx_46A/nwSfXKuc"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                799
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-8oIAXhu3DTN_edF2uI0oNA"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YtV5JQAA-2vBnSKYCo7Chg/SuFhMpea"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                59
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-tBggS9Y2ky3bzIYDHlC2JQ"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/Yt65ngAAVhi7P0K0Nktn6Q/GjbxkMUl"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                129
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-dPjWIY2rUhBXGifHjQGssA"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/Y-42owAASaTBgaKyFWs93g/LpoZjTzl"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                999
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-3CMAwdiD3gWILbzhbJxigw"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/Xk1vsAAAwpoSw89ywc9wVQ/OPUtJdnZ"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                99
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-_mVUmP-kGmaacA3jNdPP0A"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YtVtKQAA-vYRkGK-SoZZqQ/xaYNIo9I"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                649
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-owjppDoD1DPDQaU_NsLznA"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/Y4YBwwAAu1JVRiCv-z-_bw/jOJtnsZi"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                979
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-iyImRzYzeTEriosi8tLQ9g"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YtVs_gAA-vSlFTYhAcbimg/9TtY9gst"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                749
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-jm2-V-CioI7ZEm1h6CvoiA"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/ZEY5DQAAA9fFEtXsKLrxfA/4nV43KDk"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                679
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-yGLoQL3dv9zQGhk8z1fwqQ"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/Yt65fwAAVhengonCudH0Lw/iYIoA56Q"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                399
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-7eWx3FBgCOYbvrFnthQmaA"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/ZRqpoAAAsPKNqVkD-CZslw/y115bvyd"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                39
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-IUcYepOKk9iSDRKiqAkG_g"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/ZXByJAAAUXpxfPrmEssMoQ/zGCEjuO8"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                149
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="XKQED"
                          data-testid="mos-item-DG-hDEGxf80irPEVfF_jM6JLA"
                          role="button"
                          tabIndex={0}
                        >
                          <img
                            src="https://cget.tango.me/contentserver/download/YaovZQAAQf0lJjJRIjjcPQ/5YwcDapL"
                            className="FQvzw"
                          />
                          <span className="HmxwW">
                            <div className="mH5FT Y3IN4 KZK_q">
                              <div
                                className="FJnYG"
                                data-testid="gift-price-coins-number"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="URuWx Bm7kF"
                                >
                                  <path
                                    fill="#FFD200"
                                    fillRule="evenodd"
                                    d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FFE749"
                                    fillRule="evenodd"
                                    d="M6 10.125a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fill="#FEBE43"
                                    fillRule="evenodd"
                                    d="M6.14 7.68a.3.3 0 0 0-.28 0l-1.211.637a.3.3 0 0 1-.435-.316l.231-1.35a.3.3 0 0 0-.086-.265l-.98-.955a.3.3 0 0 1 .166-.512l1.354-.197a.3.3 0 0 0 .226-.164l.606-1.228a.3.3 0 0 1 .538 0l.606 1.228a.3.3 0 0 0 .226.164l1.355.197a.3.3 0 0 1 .166.512l-.98.955a.3.3 0 0 0-.087.266L7.787 8a.3.3 0 0 1-.436.316z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                1,199
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="UnmsF">
                        <div className="VM6qq">
                          <button
                            className="UNPbK XXaG8 ULKNW KOHPW d5vz2 O03vi"
                            data-testid="chat-button"
                          >
                            <span className="v0w9I">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="none"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M5.043 10.983c0-2.134 1.687-3.9 3.812-3.9h14.292c2.126 0 3.813 1.766 3.813 3.9v8.4c0 2.134-1.688 3.9-3.813 3.9h-.486v3.04a.954.954 0 0 1-1.505.78l-5.393-3.82H8.855c-2.125 0-3.812-1.766-3.812-3.9zm3.812-2.4c-1.257 0-2.312 1.054-2.312 2.4v8.4c0 1.346 1.055 2.4 2.312 2.4h7.081c.198 0 .39.061.552.175l4.673 3.31v-2.53c0-.528.428-.955.955-.955h1.031c1.258 0 2.313-1.055 2.313-2.4v-8.4c0-1.346-1.056-2.4-2.313-2.4zm1.803 6.906a1.26 1.26 0 1 1 2.52 0 1.26 1.26 0 0 1-2.52 0M16 14.23a1.26 1.26 0 1 0 0 2.52 1.26 1.26 0 0 0 0-2.52m2.823 1.26a1.26 1.26 0 1 1 2.521 0 1.26 1.26 0 0 1-2.52 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                          <div
                            className="tk60f svHfe"
                            role="button"
                            tabIndex={0}
                            data-testid="streamer-info"
                          >
                            <div
                              className="luJub"
                              data-animation-active="false"
                              data-testid="tcnn-button-animation"
                              tabIndex={0}
                              role="button"
                            >
                              <div className="xPfX5" />
                            </div>
                            <span className="L1MkJ">
                              <span>Follow me</span>
                            </span>
                            <div className="_Aszc">
                              <div className="oXBcM" data-testid="name">
                                <span>Stream Name</span>
                              </div>
                              <div className="aXHkY Y3IN4 KZK_q">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="none"
                                  viewBox="0 0 12 12"
                                  className="XXjsu"
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5.187 9.83 1.219 5.099a1 1 0 0 1-.128-.198h9.818a1 1 0 0 1-.128.198L6.813 9.831c-.095.115-.219.208-.36.272a1.1 1.1 0 0 1-.906 0 1 1 0 0 1-.36-.272m5.716-5.73a1 1 0 0 0-.202-.27L9.24 2.484a1.1 1.1 0 0 0-.734-.283H3.493a1.1 1.1 0 0 0-.733.283L1.3 3.831a1 1 0 0 0-.203.269z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span data-testid="diamonds">2,206,686</span>
                              </div>
                            </div>
                            <button
                              className="UNPbK KyCum CTIeG KOHPW d5vz2 g2Ge4"
                              data-testid="follow"
                            >
                              <span className="v0w9I">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={32}
                                  height={32}
                                  fill="none"
                                  viewBox="0 0 32 32"
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M16.85 7.875a.85.85 0 0 0-1.7 0v7.275H7.875a.85.85 0 0 0 0 1.7h7.275v7.275a.85.85 0 1 0 1.7 0V16.85h7.275a.85.85 0 1 0 0-1.7H16.85z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <div
                              data-testid="avatar"
                              className="wZNAY nFiM8 lLjTz"
                            >
                              <div
                                className="iE5Dk gDmW2 sP6mf"
                                data-lazybg="https://cget.tango.me/contentserver/download/AAFnGDNxAADXqAVAlBupfjt8AAAAANK18Q8/taTndmFs/thumbnail"
                                style={{
                                  backgroundImage:
                                    'url("https://cget.tango.me/contentserver/download/AAFnGDNxAADXqAVAlBupfjt8AAAAANK18Q8/taTndmFs/thumbnail")',
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="UNPbK XXaG8 Xn5Nx KOHPW d5vz2 IPLaI"
                      data-testid="giftsDrawerButton"
                    >
                      <span className="v0w9I">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M14.935 10.499C14.3 8.825 13.517 7.87 12.793 7.38c-.862-.585-1.7-.557-2.326-.252-.653.319-1.075.933-1.113 1.555-.033.522.2 1.203 1.108 1.816zm1.095-1.273c-.667-1.466-1.49-2.474-2.395-3.087-1.308-.887-2.717-.9-3.825-.36-1.08.527-1.878 1.587-1.954 2.811-.04.658.13 1.311.515 1.909H6.814a1.77 1.77 0 0 0-1.771 1.77v2.334c0 .71.418 1.322 1.02 1.605v8.25a2.5 2.5 0 0 0 2.5 2.5H23.44a2.5 2.5 0 0 0 2.5-2.5v-8.25a1.77 1.77 0 0 0 1.02-1.605V12.27a1.77 1.77 0 0 0-1.77-1.771h-1.555a3.14 3.14 0 0 0 .522-1.904c-.069-1.223-.857-2.286-1.932-2.814-1.102-.542-2.506-.529-3.809.359-.9.613-1.72 1.62-2.385 3.086zm5.51 1.273h-4.415c.635-1.675 1.415-2.63 2.135-3.12.857-.584 1.686-.555 2.302-.252.645.317 1.061.929 1.096 1.552.03.524-.208 1.206-1.117 1.82zM7.565 16.374v8.084a1 1 0 0 0 1 1h6.687v-9.084H7.564zm7.687-1.5H6.814a.27.27 0 0 1-.271-.271V12.27a.27.27 0 0 1 .27-.271h8.438zm1.5 1.5v9.084h6.688a1 1 0 0 0 1-1v-8.084h-7.69zm0-1.5v-2.875h8.438c.15 0 .27.121.27.27v2.334a.27.27 0 0 1-.27.27h-8.44z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
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

export default Home;
