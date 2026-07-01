import { useState, useEffect } from "react";
import { type Olympic } from "../models/interfaces";
import olympicsData from "../data/olympicsData.mock";

const useOlympicData = (): { data: Array<Olympic>; isLoaded: boolean } => {
  const [data, setData] = useState<Array<Olympic>>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(olympicsData);
      setIsLoaded(true);
    }, 500); // I keep setTimeout & useEffect to mock backend call
  }, []);

  return { data, isLoaded };
};

export { useOlympicData };
