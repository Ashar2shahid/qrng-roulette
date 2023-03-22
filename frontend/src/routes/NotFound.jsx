import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <inner-column>
          <h1 className="loud-voice">NotFound</h1>
        </inner-column>
      </header>
      <main>
        <h2 className="attetion-voice">You are lost</h2>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
      <footer>
        <inner-column>
          <h2 className="attention-voice">Footer</h2>
        </inner-column>
      </footer>
    </>
  );
}
