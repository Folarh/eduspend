import React from "react";
import ListItem from "../components/ListItem";
export default function MusicContainer() {
  return (
    <div className="music-container">
      <h3>Trending songs</h3>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <button>View more</button>
    </div>
  );
}
