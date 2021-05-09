import { useState } from "react";
import moment from "moment";

const CountryData = ({ data, format }) => {
  let countries = [];
  const [country, setCountry] = useState();

  if (data) {
    countries = data.Countries.map((country) => country.Country);
  }

  const filterHandler = (e) => {
    const val = e.target.value;
    setCountry(
      data.Countries.filter((country) => {
        return country.Country === val;
      })
    );
  };

  return (
    <>
      <div className="section">
        <h4 className="search-country">Search By Country</h4>
        <div className="country">
          <div className="select-country">
            <select name="country" onChange={filterHandler}>
              {countries.map((country, index) => {
                return (
                  <option value={country} key={index}>
                    {country}
                  </option>
                );
              })}
            </select>
          </div>

          {country && (
            <div className="country-stats">
              <div className="country-name">
                <img
                  src={`https://www.countryflags.io/${country[0].CountryCode}/flat/64.png`}
                  alt=""
                />
                <h2>{country[0].Country}</h2>
              </div>
              <h4 className="date">
                Last Updated:{" "}
                {moment(country[0].Date).format("MMMM Do YYYY, hh:mm:ssa")}
              </h4>

              <div className="stats-grid">
                <div className="stats">
                  <h3>New Confirmed: {format(country[0].NewConfirmed)}</h3>
                </div>
                <div className="stats">
                  <h3>New Deaths: {format(country[0].NewDeaths)}</h3>
                </div>
                <div className="stats">
                  <h3>New Recovered:{format(country[0].NewRecovered)}</h3>
                </div>
                <div className="stats">
                  <h3>Total Deaths: {format(country[0].TotalDeaths)}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      ;
    </>
  );
};

export default CountryData;
