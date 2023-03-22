import TitleSign from "./components/TitleSign";
import ConnectButton from "./components/ConnectButton";
import Roulette from "./components/Roulette";

function App() {
  return (
    <main className="App page-content">
      <section className="page-section">
        <ConnectButton />
        <inner-column>
          <TitleSign />
          <Roulette />
        </inner-column>
      </section>
    </main>
  );
}

export default App;
