import { useCallback } from "react";
import { useSyncExternalStore } from "react";

export function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query],
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useDeviceType() {
  return [
    useMediaQuery("only screen and (max-width : 768px)"),
    useMediaQuery(
      "only screen and (min-width : 769px) and (max-width : 992px)",
    ),
    useMediaQuery(
      "only screen and (min-width : 993px) and (max-width : 1200px)",
    ),
    useMediaQuery("only screen and (min-width : 1201px)"),
  ];
}
