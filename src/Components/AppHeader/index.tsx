import styled from 'styled-components';
import { BrandBar } from './BrandBar';
import { AppNavbar } from './AppNavbar';
import { DragEventHandler, EventHandler, UIEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';

export function AppHeader() {
  const ref = useRef<HTMLElement>(null);
  const [s, ss] = useState(document.documentElement.clientWidth < 800);
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const node = window.pageYOffset;
      const forceHide = document.documentElement.clientWidth < 800;
      if (node > 14 || forceHide) {
        console.log('hide');
        ss(true);
      } else if (node < 14) {
        console.log('show');
        ss(false);
      }
      // console.log(node);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useLayoutEffect(() => {
    function updateSize() {
      ss((s) => {
        console.log(s, document.documentElement.clientWidth < 800);
        const forceHide = document.documentElement.clientWidth < 800;
        return forceHide ? forceHide : window.pageYOffset > 15;
      });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <Container className={`${s ? 'hide' : ''}`}>
      <BrandBar hide={s} />
      <AppNavbar hide={s} />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: col nowrap;
  align-items: flex-end;
  padding-top: 68px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  position: fixed;
  top: 0;
  width: 100%;
  &.hide {
    padding-top: 4px;
  }
`;
