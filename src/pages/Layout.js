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
          <li>
            <Link to="/use-ref-examples">useRefExamples</Link>
          </li>
          <li>
            <Link to="/use-reducer-examples">useReducerExamples</Link>
          </li>
          <li>
            <Link to="/use-callback-examples">useCallbackExamples</Link>
          </li>
          <li>
            <Link to="/use-memo-examples">useMemoExamples</Link>
          </li>
          <li>
            <Link to="/use-fetch-examples">useFetchExamples</Link>
          </li>                                                                                            
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
