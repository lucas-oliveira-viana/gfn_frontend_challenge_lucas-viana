import { useRef } from "react";

export default (callback: (value: string) => void, delay: number) => {
  const timeoutRef = useRef<number | undefined>(undefined);

  const debouncedCallback = (value: string) => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      callback(value);
    }, delay);
  };

  return debouncedCallback;
};
