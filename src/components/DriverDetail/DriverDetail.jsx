import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./DriverDetail.scss";

const DriverDetail = () => {
    const [driver, setDriver] = useState();
    const { id } = useParams();

    useEffect(() => {
        const fetchDriver = async () => {
            const { data } = await axios.get(
                `http://192.168.1.70:8080/drivers/${id}`
            );
            setDriver(data);
        };
        fetchDriver();
    },[]);

  return (
    <div className='detail'>
        <h1>{driver?.name}</h1>      
    </div>
  )
}

export default DriverDetail
