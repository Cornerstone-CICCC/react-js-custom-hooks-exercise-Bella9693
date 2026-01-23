import { useEffect, useState } from "react";

type TimeFormat = "hour" | "day";

export function useTime(format: TimeFormat): string {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const now = new Date();

    if (format === "day") {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      setValue(days[now.getDay()]);
    } else if (format === "hour") {
      setValue(now.getHours().toString());
    }
  }, [format]);

  return value;
}
