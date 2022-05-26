import Analytics from "./components/Analytics";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Plans from "./components/Plans";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
      <Plans />
    </div>
  );
}

export default App;
