"use client";
import { useState, useEffect } from "react";

export const useUserScore = () => {
  const [userScore, setScore] = useState(0);

  useEffect(() => {
    const _score = Number(localStorage.getItem("userScore"));
    setScore(_score);
  }, []);

  return userScore;
};
