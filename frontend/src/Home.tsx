import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import { fetchYearlyData } from "./helper/api";
import { getCurrentYear } from "./helper/dates";
import { Day } from "./types";

function Home() {
  const [yearData, setYearData] = useState<{ [key: string]: Day[] } | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(getCurrentYear());
  async function fetchCalendarData(currentYear: number) {
    const data = await fetchYearlyData(currentYear.toString());
    setYearData(data);
  }

  useEffect(() => {
    fetchCalendarData(currentYear);
  }, [currentYear]);

  return (
    <>
      <Calendar yearData={yearData} setCurrentYear={setCurrentYear} currentYear={currentYear} />
    </>
  );
}

export default Home;
