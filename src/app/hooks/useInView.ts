import { useInView as useInViewOrigin } from "react-intersection-observer";

export function useInView() {
  return useInViewOrigin({ triggerOnce: true });
}
