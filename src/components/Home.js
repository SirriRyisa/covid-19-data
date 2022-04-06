import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import ItemsCard from './ItemsCard';
import { CountriesStatistics } from '../redux/Info/CovidInfo';

const Home = () => {
  const myData = useSelector((state) => state.covidData);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CountriesStatistics());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="search">
        <p className="country-search">Search Country: </p>
        <input
          value={searchText}
          type="text"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search"
          className="search-input"
        />
      </div>
      <div className="countries display">
        {myData
          .filter((data) => data.country.toLowerCase().includes(searchText.toLowerCase()))
          .map((data) => (
            <ItemsCard
              key={data.id}
              id={data.id}
              country={data.country}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
