import Link from 'next/link';
import Header from '../components/Header';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Header />
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;