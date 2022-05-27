import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
