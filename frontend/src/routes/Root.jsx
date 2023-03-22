import { Outlet, Link, useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <header>
        <inner-column>
          <nav className="site-menu">
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
            </ul>
          </nav>
        </inner-column>
      </header>
      <main id={location.pathname}>
        <Outlet key={location.pathname} />
      </main>
      <footer>
        <inner-column>
          <h2 className="attention-voice">Footer</h2>
        </inner-column>
      </footer>
    </>
  );
}
