import Link from 'next/link';
import Search from './search';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.a`
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

function Layout({ children }) {
  return (
    <div>
      <Header>
        <Link href="/" passHref>
          <Logo>Screen Scouter</Logo>
        </Link>
        <Search />
      </Header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;