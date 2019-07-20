import Link from "next/link";

const linkStyle = {
  marginRight: 15
};
const navStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Nav = () => (
  <nav style={navStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </nav>
);

export default Nav;
