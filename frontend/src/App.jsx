import TitleSign from "./components/TitleSign";
import ConnectButton from "./components/ConnectButton";
import Roulette from "./components/Roulette";

import { useAccount } from "wagmi";

function App() {
  const { isConnected } = useAccount();

  return (
    <main className="App page-content">
      <section className="page-section">
        <ConnectButton />
        <inner-column>
          <TitleSign />
          {isConnected && <Roulette />}
          {!isConnected && <Roulette />}
        </inner-column>
      </section>
    </main>
  );
}

export default App;
