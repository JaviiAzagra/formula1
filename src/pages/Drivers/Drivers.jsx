import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DriverCard from '../../components/DriverCard/DriverCard';
import { getDrivers } from '../../redux/drivers/drivers.functions';
import './Drivers.scss';

const Drivers = () => {

    const dispatch = useDispatch();
    const {drivers, isLoading, error} = useSelector((state) => state.drivers);
    const [searchInputValue, setSearchInputValue] = useState("");

    useEffect(() => {
        dispatch(getDrivers());
    }, []);

    const filteredDrivers = [];

    drivers.map((driver) => {
        if (driver.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        (driver.team.toLowerCase().includes(searchInputValue.toLowerCase()))) {
            filteredDrivers.push(driver)
        }
    });

    const driversInfo = filteredDrivers.length ? filteredDrivers : drivers;

  return (
    <>
    <h1>F1 Drivers 2023</h1>
      {!isLoading && (
        <div className="search-wrapper">
          <input
            type="search"
            className="input-search"
            placeholder="Search"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
        </div>
      )}
      <div className="drivers">
        {isLoading ? (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        ) : (
          driversInfo.map((driver) => {
            return <DriverCard key={driver._id} driver={driver} />;
          })
        )} 
      </div>
    </>
  )
}

export default Drivers
