import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import StandardImageList from './StandardImageList'; // Import the StandardImageList component
// import { FrappeApp } from 'frappe-js-sdk';
import FrappeJs from './frappejs';
import DataGridDemo from './DataGridDemo';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales for 2021 (M)',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Sales for 2022 (M)',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: '#742774',
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Sales Data',
    },
    legend: {
      display: true,
      position: 'bottom',
    },
  },
};

function LineChart() {
  return <Line data={data} options={options} />;
}

export default function App() {
  const [value, setValue] = React.useState(2);
  const [dynamicMessage, setDynamicMessage] = React.useState("Hello from App.jsx");

  const handleDone = () => {
    console.log("Typing loop is done");
  };

  const handleType = (item) => {
    console.log(`Current item: ${item}`);
  };

  return (
    <div className='App'>
      <p>Sultan</p>
      
      <p>{dynamicMessage}</p>
      <Typewriter
        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
        loop={5}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
      />
      <h2>My Fancy Chart</h2>
      <LineChart />

      {/* <StandardImageList /> */}
      {/* <FrappeJs /> */}

      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      <StandardImageList />
      <FrappeJs/>
      <DataGridDemo />
    </div>
  );
}



