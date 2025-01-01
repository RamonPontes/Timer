'use client'

import { useEffect, useState } from "react";

const initial_time_in_seconds = 10 * 60 // 10 minutos

export default function Home() {
  const [secondsAmount, setSecondsAmount] = useState(initial_time_in_seconds)

  const minutes = Math.floor(secondsAmount / 60)
  const seconds = secondsAmount % 60
  
  useEffect(() => {

    if (secondsAmount == 0) {
      alert("Tempo esgotado")
      return 
    }

    setTimeout(() => {
      setSecondsAmount(state => state - 1)
    }, 1000);
  }, [secondsAmount]);

  return (
    <div className="w-[250px] h-[250px] rounded-full flex items-center justify-center border-4 border-purple-500">
      <h1 className="font-bold text-6xl">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h1>
    </div>
  );
}
