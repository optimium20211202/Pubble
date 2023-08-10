import { useState, useEffect } from "react";

export const useUserInfo = () => {
  const [userName, setUserName] = useState("");
  const [userIcon, setUserIcon] = useState("");

  useEffect(() => {
    const _userName = localStorage.getItem("userName") || "";
    setUserName(_userName);
    const _userIcon = localStorage.getItem("userIcon") || "";
    setUserIcon(_userIcon);
  }, []);

  return { userName, userIcon };
};
