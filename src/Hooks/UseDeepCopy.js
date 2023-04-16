import { useRef } from "react";

function useDeepCopy(object) {
  const objectRef = useRef();

  if (objectRef.current === undefined) {
    objectRef.current = JSON.parse(JSON.stringify(object));
  }

  return objectRef.current;
}

export default useDeepCopy;
