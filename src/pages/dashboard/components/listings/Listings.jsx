import React from "react";
import ListItem from "./ListItem";

import { ReactComponent as ListIcon1 } from "../../../../assets/images/listings/listing-1.svg";
import { ReactComponent as ListIcon2 } from "../../../../assets/images/listings/listing-2.svg";
import { ReactComponent as ListIcon3 } from "../../../../assets/images/listings/listing-3.svg";
import { ReactComponent as ListIcon4 } from "../../../../assets/images/listings/listing-4.svg";
import { ReactComponent as ListIcon5 } from "../../../../assets/images/listings/listing-5.svg";
import { ReactComponent as ListIcon6 } from "../../../../assets/images/listings/listing-6.svg";

import { ReactComponent as HorIcon } from "../../../../assets/images/listings/listing-hor-1.svg";
import { ReactComponent as DropdownIcon } from "../../../../assets/images/listings/dropdown-icon.svg";

function Listings() {
  const listings = [
    {
      id: "#4826",
      ListIcon: ListIcon1,
      rank: 4505,
      time: "18 minutes ago",
      multiplier: "5.6x",
      variation: 40.5,
      eth: 39,
    },
    {
      id: "#5289",
      ListIcon: ListIcon2,
      rank: 8499,
      time: "an hour ago",
      multiplier: "8.9x",
      variation: 30.5,
      eth: 26,
    },
    {
      id: "#6973",
      ListIcon: ListIcon3,
      rank: 4255,
      time: "3 hours ago",
      multiplier: "1.2x",
      variation: 80.5,
      eth: 31,
    },
    {
      id: "#4826",
      ListIcon: ListIcon4,
      rank: 4505,
      time: "18 minutes ago",
      multiplier: "5.6x",
      variation: 40.5,
      eth: 39,
    },
    {
      id: "#5289",
      ListIcon: ListIcon5,
      rank: 8499,
      time: "an hour ago",
      multiplier: "8.9x",
      variation: 30.5,
      eth: 26,
    },
    {
      id: "#6973",
      ListIcon: ListIcon6,
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
        <div>
          <span className="font-bold text-lg">Listings</span>
          <span className="ml-2 text-slate-400">(893)</span>
        </div>
        <div className="flex">
          <div className="flex items-center bg-slate-700 px-2 py-1 mr-2 rounded-lg">
            <span className="mr-2">
              <HorIcon />
            </span>
            <span>Rank</span>
            <span className="ml-2">
              <DropdownIcon />
            </span>
          </div>

          <div className="flex items-center bg-slate-700 px-2 py-1 mr-2 rounded-lg">
            <span className="mr-2">
              <HorIcon />
            </span>
            <span>Price</span>
            <span className="ml-2">
              <DropdownIcon />
            </span>
          </div>

          <div className="flex items-center bg-slate-700 px-2 py-1 rounded-lg">
            <span className="mr-2">
              <HorIcon />
            </span>
            <span>Rate</span>
            <span className="ml-2">
              <DropdownIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll my-2" style={{ height: "300px" }}>
        {listings.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Listings;
