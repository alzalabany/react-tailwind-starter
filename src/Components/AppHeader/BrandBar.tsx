import { Logo } from '../Logo';
import styled from 'styled-components';

export function BrandBar({ hide }: { hide: boolean }) {
  return (
    <FixedBar aria-hidden={hide} className={`${hide ? 'hide' : ''}`}>
      <div>
        <Logo aria-hidden={hide} />
        <p className="claim">
          <span>Life is for sharing.</span>
        </p>
      </div>
    </FixedBar>
  );
}

const FixedBar = styled.header`
  top: 0px;
  left: 0px;
  width: 100%;
  position: absolute;
  font-size: 1.5rem;
  height: 72px;
  display: flex;
  background-color: var(--primary);
  color: #fff;
  > div {
    width: var(--page-width);
    margin: 1px auto;
    font-size: 38px;
    display: flex;
    align-items: center;
    transform: translateY(0);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  }
  .claim {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.035em;
    line-height: 1;
    font-size: 15px;
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
    padding: 0 1em 0 1.5em;
  }

  &.hide div {
    transform: translateY(1.5rem);
    opacity: 0;
  }
  > div {
    @media (max-width: 768px) {
      transform: translateY(1.5rem);
      opacity: 0;
    }
  }
`;
