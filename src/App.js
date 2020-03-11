import React from 'react';
import TopBar from "./components/top-bar";
import { Pie } from "./components/charts/Pie";
import { Line } from "./components/charts/Line";
import { Funnel } from "./components/charts/Funnel";
import { WorldMap } from "./components/charts/Map";

const App = () => {
  return (
    <div>
      <TopBar />
      <h3>Pie chart:</h3>
      <Pie />
      <br />
      <br />
      <h3>Line chart:</h3>
      <Line />
      <br />
      <br />
      <h3>Funnel chart:</h3>
      <Funnel />
      <br />
      <br />
      <h3>World Map chart:</h3>
      <WorldMap />
    </div>
  )
}
export default App;