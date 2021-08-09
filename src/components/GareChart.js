import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from 'react-chartjs-2';


const GareChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        var garesNames = [];
        var garesAmount = [];
         return axios
        .get('http://localhost:5000/api/records/garescount')
        .then(res => {
            console.log(res.data);
            for (const dataObj of res.data) {
              garesNames.push(dataObj.gc_obo_gare_origine_r_name);
              garesAmount.push(parseInt(dataObj.total));
            }

            console.log(garesNames);
            console.log(garesAmount);
            setChartData({
                maintainAspectRatio: false,
                responsive: false,
                  datasets: [{
                    data: garesAmount
                  }],
                  labels: garesNames
                
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

export default GareChart;