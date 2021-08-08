import React, { useState, useEffect } from "react";
import axios from "axios";

const TypeChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        axios
        .get('http://localhost:5000/api/records/typescount')
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
    };

    useEffect(() => {
        chart();
      }, []);

      return(
          <div></div>
      );
};

export default TypeChart;