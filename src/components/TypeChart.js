import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from 'react-chartjs-2';


const TypeChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        var typeNames = [];
        var typeAmount = [];
         return axios
        .get('http://localhost:5000/api/records/typescount')
        .then(res => {
            console.log(res.data);
            for (const dataObj of res.data) {
              typeNames.push(dataObj.gc_obo_type_c);
              typeAmount.push(parseInt(dataObj.total));
            }

            console.log(typeNames);
            console.log(typeAmount);
            setChartData({
                maintainAspectRatio: false,
                responsive: false,
                  datasets: [{
                    data: typeAmount,
                    backgroundColor: ['#ff00ff', '#ff7f50', '#c0d6e4', '#4ca3dd','#468499', '#b4eeb4', '#0ff1ce', '#f7347a','#20b2aa', '#ffc3a0', '#43AA8B', '#808080','#8a2be2', '#fff68f', '#420420', '#c6e2ff' ]
                  }],
                  labels: typeNames
                
            });
           
          })
        .catch(err => {console.log(err)})
    };
    console.log(chartData);

    useEffect(() => {
        chart();
      }, []);

      return(
          <div style = {styles.doughnutContainer}>
          <Doughnut data={chartData}
          options={{
            responsive: true,
            legend: {
              position: 'bottom'
            }
          }}
          />
          </div>

      );
};

const styles = {
  doughnutContainer: {
    width: "50%",
    height: "50%",
  },
 
};

export default TypeChart;