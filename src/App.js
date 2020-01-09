import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from "react-google-charts"
import { ScatterChart, Scatter, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function App() {
  const data = [{class:'1', strength:'30'},{class:'2', strength:'50'},{class:'3', strength:'10'},{class:'4', strength:'55'}]
  return (
    <div className="App">
      <Chart
    width={400}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000],
    ]}
    options={{
      title: 'Population of Largest U.S. Cities',
      
      hAxis: {
        title: 'Total Population',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
    }}
    legendToggle
  />
  <ScatterChart width={300} height={300}  margin={{ top: 9, right: 10, bottom: 5, left: 0 }}>
    {/* <CartesianGrid stroke="pink" strokeDasharray="5 5"/> */}
    <Scatter data={data} name="A school" fill="#8884d8" />
    <XAxis dataKey='class'/>
    <YAxis dataKey='strength'/>
    
    <Tooltip />
  </ScatterChart>
    </div>
  );
}

export default App;
