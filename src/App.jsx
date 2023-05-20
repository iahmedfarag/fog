import { Home } from "./pages";
import AOS from "aos";
function App() {
  AOS.init();
  return (
    <main>
      <Home />
    </main>
  );
}

export default App;
