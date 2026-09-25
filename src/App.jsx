import React, { useState } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import TopRest from "./components/TopRest";
import OnlineDelivery from "./components/OnlineDelivery";
import Cuisine from "./components/Cuisines";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Location from "./components/Location";

function App() {
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <>
      <Header
        openLocation={() => setLocationOpen(true)}
      />

      <div className="mb-10">
        <Category />
      </div>

      <div className="mb-10">
        <TopRest />
      </div>

      <div className="mb-10">
        <OnlineDelivery />
      </div>

      <div className="mb-10">
        <Cuisine />
      </div>

      <div className="mb-10">
        <Explore />
      </div>

      <Footer />

      {locationOpen && (
        <Location
          closeLocation={() => setLocationOpen(false)}
        />
      )}
    </>
  );
}

export default App;