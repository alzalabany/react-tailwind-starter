import { useEffect, useRef, useState } from 'react';

export function useStickyHeader({ defaultValue = false, space = 68 }) {
  const [isSticky, setIsSticky] = useState(defaultValue);
  const ref = useRef<HTMLElement>(null);
  const cb = useRef(console.log);
  cb.current = () => {
    if (!ref.current) return;
    const { top, bottom } = ref.current.getBoundingClientRect();
    if (top <= 0 && bottom > 2 * space) {
      setIsSticky(() => true);
    } else {
      setIsSticky(() => false);
    }
  };
  useEffect(() => {
    const handleScroll = () => cb.current();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return [ref, isSticky];
}
