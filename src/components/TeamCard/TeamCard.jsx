import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./TeamCard.scss";

const TeamCard = (team) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className={team.team.chassis}
      onClick={() => navigate(`/teams/${team.team._id}`)}
    >
      <div className="team__title">
        <h2>{team.team.name}</h2>
        {/* <h5>{team.team}</h5> */}
        <img
          className="movie-card-image"
          referrerPolicy="no-referrer"
          src={team.team.imgtwo}
          alt={team.team.name}
        />
      </div>
      <div className="team__drivers">
        <div className="team__drivers--box">
          <h3>{team.team.drivernameone}</h3>
          <img
            className="movie-card-image"
            referrerPolicy="no-referrer"
            src={team.team.driverimgone}
            alt={team.team.name}
          />
        </div>

        <div className="team__drivers--box">
          <h3>{team.team.drivernamesecond}</h3>
          <img
            className="movie-card-image"
            referrerPolicy="no-referrer"
            src={team.team.driverimgsecond}
            alt={team.team.name}
          />
        </div>
      </div>
      <div className="team__img">
        <img
          className="movie-card-image"
          referrerPolicy="no-referrer"
          src={team.team.img}
          alt={team.team.name}
        />
      </div>
    </div>
  );
};

export default TeamCard;
