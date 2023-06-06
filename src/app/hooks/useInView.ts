import {
  useInView as useInViewOrigin,
  IntersectionOptions,
} from "react-intersection-observer";

export function useInView(props?: IntersectionOptions) {
  return useInViewOrigin({ triggerOnce: true, ...props });
}
