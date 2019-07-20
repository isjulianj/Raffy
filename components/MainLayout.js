import Header from "./Header";
import Nav from "./Nav";

const layoutStyle = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Nav />
    <Header />
    {props.children}
  </div>
);

export default Layout;
