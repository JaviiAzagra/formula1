import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './DriverCard.scss';

const DriverCard = (driver) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

  return (
    <div className="driver">
      <div className="driver__title">
        <h2>{driver.driver.name}</h2>
        <h5>{driver.driver.team}</h5>
      </div>
      <div className="driver__img">
        <img
          onClick={() => navigate(`/drivers/${driver.driver._id}`)}
          className="movie-card-image"
          referrerPolicy="no-referrer"
          src={driver.driver.img}
          alt={driver.driver.name}
        />
      </div>
    </div>
  )
}

export default DriverCard
