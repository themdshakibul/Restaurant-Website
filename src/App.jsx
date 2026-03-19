import Header from "./components/Home/Header";
import Navbar from "./components/Navbar/Navbar";
import "./tailwind.init.css";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Header />
      </main>
    </>
  );
}

export default App;
