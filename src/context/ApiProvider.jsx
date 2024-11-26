import { createContext, useEffect, useState } from "react";
import { getSetApis } from "../api/config";
import notice from "../../notice.json";
export const ApiContext = createContext(null);
const ApiProvider = ({ children }) => {
  const [noticeLoaded, setNoticeLoaded] = useState(false);
  const baseUrl = notice?.result?.settings?.baseUrl;

  useEffect(() => {
    const callApi = () => {
      getSetApis(setNoticeLoaded, baseUrl);
    };
    callApi();

    const intervalId = setInterval(callApi, 1000);
    return () => clearInterval(intervalId);
  }, [noticeLoaded, baseUrl]);

  if (!noticeLoaded) {
    return;
  }

  const stateInfo = {};
  return (
    <ApiContext.Provider value={stateInfo}>{children}</ApiContext.Provider>
  );
};

export default ApiProvider;
