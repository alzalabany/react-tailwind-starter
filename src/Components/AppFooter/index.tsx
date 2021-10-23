import { Logo } from 'Components';
import styled from 'styled-components';

export function AppFooter({ links }: { links: { name: string; href: string }[] }) {
  return (
    <Container>
      <div className="page">
        <div className="flex text-[26px] ">
          <Logo /> <span className="claim">{'ERLEBEN, WAS VERBINDET.'}</span>
        </div>
        <div className="md:flex">
          <span className="min-width[82px] block md:inline pt-4">© {new Date().getFullYear()} Deutsche Telekom AG</span>
        </div>
        <nav className="flex-1">
          <ul className="flex flex-wrap pb-4">
            {links.map(({ name, href }) => (
              <li key={href}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  z-index: -1;
  margin-top: -8px;
  background: #262626;
  color: #fff;
  margin-right: auto;
  margin-left: auto;
  font-size: 16px;
  padding: 1px var(--space-2);
  .claim {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.035em;
    line-height: 2;
    font-size: 12px;
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
    padding: 0 1em 0 1.5em;
  }
  > div {
    padding: 18px 12px 4px 12px;
    > div {
      padding: 1px;
    }
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    li a {
      min-width: 80px;
      font-size: 14px;
      line-height: 1.125;
      font-weight: 800;
      padding: 9px 12px 8px 1px;
      color: inherit;
      display: inline-block;
      white-space: nowrap;
      position: relative;
      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }
  @media (max-width: 811px) {
    > div > div > .flex {
      flex-flow: column nowrap;
    }
    nav {
      display: block;
    }
    nav ul {
      justify-content: flex-start;
    }
  }
`;
