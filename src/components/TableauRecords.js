import React, {useState, useEffect} from "react";
import Datatable from "./Datatable";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function TableauRecords(){

    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/api/records')
        .then(response => response.json())
        .then(json => setData(json));
    },[])
    return(
        <div>
        <div>
          <Datatable data={data}/> </div>            
        </div>
    )
}