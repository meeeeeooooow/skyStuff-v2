"use client";
import { useState, useEffect } from "react";
import { getElectionTimestamps, formatTimeRemaining } from "@/lib/skyblockTime";

export default function ElectionTimer({ targetYear }: { targetYear: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getTimerState = () => {
    let currentYear = targetYear;
    let { boothOpenTime, boothCloseTime } = getElectionTimestamps(currentYear);

    while (Date.now() > boothCloseTime) {
      currentYear += 1;
      ({ boothOpenTime, boothCloseTime } = getElectionTimestamps(currentYear));
    }

    const isWaiting = Date.now() < boothOpenTime;
    const activeTarget = isWaiting ? boothOpenTime : boothCloseTime;
    const label = isWaiting ? "Election booth opens in:" : "Election booth closes in:";

    return { label, timeData: formatTimeRemaining(activeTarget) };
  };

  const [timer, setTimer] = useState(getTimerState());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getTimerState());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-end gap-1 text-orange-400 mt-auto text-sm tabular-nums opacity-0">
        <span>Election booth closes in:</span>
        <span className="flex"><span className="w-[2ch] text-right">--</span>d</span>
        <span className="flex"><span className="w-[2ch] text-right">--</span>h</span>
        <span className="flex"><span className="w-[2ch] text-right">--</span>m</span>
        <span className="flex"><span className="w-[2ch] text-right">--</span>s</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-end gap-1 text-orange-400 mt-auto text-sm tabular-nums">
      <span>{timer.label}</span>
      <span className="flex"><span className="w-[2ch] text-right">{timer.timeData.days}</span>d</span>
      <span className="flex"><span className="w-[2ch] text-right">{timer.timeData.hours}</span>h</span>
      <span className="flex"><span className="w-[2ch] text-right">{timer.timeData.minutes}</span>m</span>
      <span className="flex"><span className="w-[2ch] text-right">{timer.timeData.seconds}</span>s</span>
    </div>
  );
}