import Link from "next/link";

const linkStyle = {
  marginRight: 15
};
const linkStyle = {
  marginRight: 15
};

const Nav = () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </nav>
);

export default Nav;
