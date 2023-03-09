import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TeamDetail.scss";

const TeamDetail = () => {
  const [team, setTeam] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const { data } = await axios.get(`http://localhost:8080/teams/${id}`);
      setTeam(data);
    };
    fetchTeam();
  }, []);

  return (
    <div className="detail">
      <h1>{team?.name}</h1>
      <div className="detail__box">
        <div className="detail__box--info">
          <img src={team?.imgtwo} alt={team?.name} />
          <p>
            Name: <span>{team?.full_name}</span>
          </p>
          <p>
            Base: <span>{team?.base}</span>
          </p>
          <p>
            Team Chief: <span>{team?.team_chief}</span>
          </p>
          <p>
            Team Technical: <span>{team?.team_technical}</span>
          </p>
          <p>
            Chassis: <span>{team?.chassis}</span>
          </p>
          <p>
            Power Unit: <span>{team?.power_unit}</span>
          </p>
          <p>
            Entry: <span>{team?.entry}</span>
          </p>
        </div>

        <div className="detail__box--drivers">
          <div className="detail__box--drivers--img">
            <div>
              <img src={team?.driverimgone} alt={team?.drivernameone} />
              <p>{team?.drivernameone}</p>
            </div>

            <div>
              <img src={team?.driverimgsecond} alt={team?.drivernamesecond} />
              <p>{team?.drivernamesecond}</p>
            </div>
          </div>

          <div className="detail__box--drivers--car">
            <img src={team?.img} alt={team?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
