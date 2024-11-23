import MainLayout from "./components/Layout/MainLayout";

const App = () => {
  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span>Ant Media Embedded Player</span>
        <div
          style={{ display: "flex", height: "360px", width: "640px" }}
          id="videoContainer"
          ref={videoRef}
        ></div>
        <div
          id="placeHolder"
          ref={placeHolderRef}
          className="placeholder"
          style={{
            height: "360px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          The streaming will begin shortly...
        </div>
      </div> */}
      <MainLayout />
    </div>
  );
};

export default App;
