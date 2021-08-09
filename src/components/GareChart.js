import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from 'react-chartjs-2';


const GareChart = () => {
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
                    backgroundColor: ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B','#FB3640', '#EFCA08', '#43AA8B', '#253D5B','#FB3640', '#EFCA08', '#43AA8B', '#253D5B','#FB3640', '#EFCA08', '#43AA8B', '#253D5B' ]
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

export default GareChart;