import { Suspense } from "react";
import axios from "axios";
import Header from "./components/Home/Header";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/PopularSection/Popular";
import "./tailwind.init.css";
import FormOurMenu from "./components/StandoutDish/StanDish";
import CustomAboutUs from "./components/CustomAbout/CustomAboutUs";

const popularCard = axios.get("PopularCatagories.json");
const StanOutDish = axios.get("StanDoutDish.json");

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Header />
        <Suspense
          fallback={
            <h2 className="flex items-center justify-center h-200">
              <span className="loading loading-dots loading-xl"></span>
            </h2>
          }
        >
          <Popular popularCard={popularCard} />
        </Suspense>

        <Suspense fallback={<h2>Loading....</h2>}>
          <FormOurMenu StanOutDish={StanOutDish} />
        </Suspense>

        <CustomAboutUs />
      </main>
    </>
  );
}

export default App;
