import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/use-effect-examples">useEffectExamples</Link>
          </li>
          <li>
            <Link to="/use-context-examples">useContextExamples</Link>
          </li>                                         
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
