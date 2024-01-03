import { useEffect, useRef, useState } from "react";

const useCounterInterval = () => {
  const [counterInterval, setCounterInterval] = useState(1134147814);
  const intervalIDRef = useRef<number | null>(null);

  useEffect(() => {
    intervalIDRef.current = setInterval(() => {
      setCounterInterval((prev) => (prev += 1));
    }, 1000);

    return () => {
      intervalIDRef.current && clearInterval(intervalIDRef.current);
    };
  }, []);

  return counterInterval;
};

export default useCounterInterval;
