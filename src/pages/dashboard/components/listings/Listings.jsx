import React from "react";
import ListItem from "./ListItem";

function Listings() {
  const listings = [
    {
      id: "#4826",
      image: "url",
      rank: 4505,
      time: "18 minutes ago",
      multiplier: "5.6x",
      variation: 40.5,
      eth: 39,
    },
    {
      id: "#5289",
      image: "url",
      rank: 8499,
      time: "an hour ago",
      multiplier: "8.9x",
      variation: 30.5,
      eth: 26,
    },
    {
      id: "#6973",
      image: "url",
      rank: 4255,
      time: "3 hours ago",
      multiplier: "1.2x",
      variation: 80.5,
      eth: 31,
    },
  ];
  return (
    <div className="mx-2 mt-6">
      <div className="flex justify-between">
        <div>Listings (number)</div>
        <div>icons</div>
      </div>
      {listings.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
}

export default Listings;
