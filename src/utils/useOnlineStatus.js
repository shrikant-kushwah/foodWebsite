import { useEffect, useState } from "react";

const useOnlineSatus = () => {
  const [onlineStatus, SetOnlineStatus] = useState(true);
  // check if online logic:
  useEffect(() => {
    window.addEventListener("offline", () => {
      SetOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      SetOnlineStatus(true);
    });
  }, []);
  
  // onlineStatus return a boolean value:
  return onlineStatus;
}

export default useOnlineSatus;