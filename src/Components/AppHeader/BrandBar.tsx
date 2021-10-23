import styled from 'styled-components';

export function BrandBar({ hide, ref }: { hide: boolean; ref?: any }) {
  return (
    <FixedBar ref={ref} className={`${hide ? 'hide' : ''}`}>
      <div>
        <svg height="1em" aria-hidden="true" focusable="false" role="img" viewBox="0 0 73 36" fill="currentColor">
          <g>
            <path d="M0 24v-7h7v7H0zM22 24v-7h7v7h-7zM44 24v-7h7v7h-7zM66 24v-7h7v7h-7z"></path>
            <path d="M12 1.74c-2.94.09-5.56 1.09-7.22 2.98-1.57 1.8-2.55 4.6-2.91 8.32L0 12.71.36 0h28.29L29 12.71l-1.87.33c-.36-3.76-1.34-6.52-2.91-8.32-1.66-1.89-4.28-2.89-7.22-2.98V28.3c0 2.31.57 3.82 1.25 4.51.56.6 1.41.96 2.75 1.08.42.03 1.05.06 2 .06V36H6v-2.04c.95 0 1.58-.03 2-.06 1.34-.12 2.18-.48 2.75-1.08.68-.69 1.25-2.19 1.25-4.51V1.74z"></path>
          </g>
        </svg>
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
