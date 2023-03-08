import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TeamCard from '../../components/TeamCard/TeamCard';
import { getTeams } from '../../redux/teams/teams.function';
import './Teams.scss';

const Teams = () => {

    const dispatch = useDispatch();
    const {teams, isLoading, error} = useSelector((state) => state.teams);
    const [searchInputValue, setSearchInputValue] = useState("");

    useEffect(() => {
        dispatch(getTeams());
    }, []);

    const filteredTeams = [];

    teams.map((team) => {
        if (team.name.toLowerCase().includes(searchInputValue.toLowerCase())) {
            filteredTeams.push(team)
        }
    });

    const teamsInfo = filteredTeams.length ? filteredTeams : teams;

  return (
    <>
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
  )
}

export default Teams

