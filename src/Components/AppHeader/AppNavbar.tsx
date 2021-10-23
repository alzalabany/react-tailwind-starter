import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo';
export function AppNavbar({ hide }: { hide: boolean }) {
  const [ihide, i] = useState(hide);
  useEffect(() => {
    setTimeout(() => i(hide), 1);
  }, [hide]);
  return (
    <Container className={`${ihide ? 'hide' : ''}`}>
      <div>
        <Logo aria-hidden={ihide} />
        <h1>Nav</h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-top: -4px;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  width: 100%;
  height: 58px;
  border-color: 1px solid #ededed;
  > div {
    max-width: var(--page-width);
    margin: 1px auto;
    display: flex;
    align-items: center;
    height: 52px;
    svg {
      color: var(--primary);
      width: 1px;
      font-size: 1.5rem;
      transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    }
  }
  &.hide {
    border-radius: 0;
    margin-top: 4px;
    svg {
      width: 88px;
    }
  }
`;
