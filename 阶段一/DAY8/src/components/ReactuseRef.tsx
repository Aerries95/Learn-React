import { useRef, useEffect } from "react";

export default function ReactuseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Focus on me when component mounts"
    />
  );
}
