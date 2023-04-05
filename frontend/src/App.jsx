import TitleSign from "./components/TitleSign";
import ConnectButton from "./components/ConnectButton";
import Roulette from "./components/Roulette";
import Loading from "./components/Loading";

import { useAccount } from "wagmi";

function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <header>
        <ConnectButton />
      </header>
      <main className="App page-content">
        <section className="page-section">
          {isConnected && (
            <inner-column>
              <TitleSign />
              <Roulette />
            </inner-column>
          )}
          {!isConnected && (
            <inner-column class="dimmed">
              <TitleSign />
              <Roulette />
            </inner-column>
          )}

          <Loading />
        </section>
      </main>
    </>
  );
}

export default App;
