import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeamCard from "../../components/TeamCard/TeamCard";
import { getTeams } from "../../redux/teams/teams.function";
import "./Teams.scss";

const Teams = () => {
  const dispatch = useDispatch();
  const { teams, isLoading, error } = useSelector((state) => state.teams);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const filteredTeams = [];

  teams.map((team) => {
    if (
      team.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      team.drivernameone
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()) ||
      team.drivernamesecond
        .toLowerCase()
        .includes(searchInputValue.toLowerCase())
    ) {
      filteredTeams.push(team);
    }
  });

  const teamsInfo = filteredTeams.length ? filteredTeams : teams;

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
              Discover everything you need to know about this year's Formula 1
              teams - drivers, podium finishes, points earned and championship
              titles.
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
      <div className="teams">
        {isLoading ? (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        ) : (
          teamsInfo.map((team) => {
            return <TeamCard key={team._id} team={team} />;
          })
        )}
      </div>
    </>
  );
};

export default Teams;
