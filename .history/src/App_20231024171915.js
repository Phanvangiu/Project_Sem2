import "./App.css";

import Home from "./components/Homepage/Home";
import AircoverForHosts from "./components/home-body/AirCoverForHost/AircoverForHosts";
import BestHost from "./components/home-body/BestHost/BestHost";
import HostCarousel from "./components/home-body/BestHost/HostCarousel";

function App() {
  return (
    <div>
      {/* <Home></Home>
      <AircoverForHosts></AircoverForHosts> */}
      <BestHost></BestHost>
      <HostCarousel></HostCarousel>
    </div>
  );
}

export default App;
