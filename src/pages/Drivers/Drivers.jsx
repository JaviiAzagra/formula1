import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DriverCard from "../../components/DriverCard/DriverCard";
import { getDrivers } from "../../redux/drivers/drivers.functions";
import "./Drivers.scss";

const Drivers = () => {
  const dispatch = useDispatch();
  const { drivers, isLoading, error } = useSelector((state) => state.drivers);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  const filteredDrivers = [];

  drivers.map((driver) => {
    if (
      driver.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      driver.team.toLowerCase().includes(searchInputValue.toLowerCase())
    ) {
      filteredDrivers.push(driver);
    }
  });

  const driversInfo = filteredDrivers.length ? filteredDrivers : drivers;

  return (
    <>
      {!isLoading && (
        <div className="top">
          <div className="container listing-header">
            <fieldset className="f1-border--top-right f1-border-color--carbonBlack">
              <div className="row">
                <div className="col-12">
                  <h1 class="f1-black--xxl no-margin">F1 Teams 2023</h1>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="top__text">
            <p>
              Check out this season's official F1 line-up. Full breakdown of
              drivers, points and current positions. Follow your favourite F1
              drivers on and off the track.
            </p>
          </div>
          <div className="top__search">
            <input
              type="search"
              className="input-search"
              placeholder="Search"
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
            />
          </div>
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
  );
};

export default Drivers;
