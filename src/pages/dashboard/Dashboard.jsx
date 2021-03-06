import React from "react";
import Header from "./components/Header";
import MiniHorizontalScrollableWidgets from "./components/MiniHorizontalScrollableWidgets";
import TopCollections from "./components/TopCollections";
import Listings from "./components/listings/Listings";
import TradeListings from "./components/trade/TradeListings";
import TradeChart from "./components/TradeChart";
import LiveListingChart from "./components/LiveListingChart";

function Dashboard() {
  return (
    <div>
      <Header />

      {/* top collections bar */}
      <TopCollections />

      {/* mini widgets h-scroll */}
      <MiniHorizontalScrollableWidgets />

      {/* listings & charts */}
      <div className="flex">
        <div className="flex-1">
          <Listings />
          <TradeListings />
        </div>

        <div className="flex-1">
          <TradeChart />
          <LiveListingChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
