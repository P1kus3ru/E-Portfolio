import { useEffect, useMemo, useState, type RefObject } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement>) : boolean {

    const [isIntersecting, setIntersecting] = useState<boolean>(false)
  
    const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => {
        if (entry) {
            setIntersecting(entry.isIntersecting)
        }
      }
    ), [])
  
  
    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
        }
      return () => observer.disconnect()
    }, [observer, ref])
  
    return isIntersecting
}