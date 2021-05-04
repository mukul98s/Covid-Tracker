import { useState } from "react";

const CountryData = ({ data }) => {
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
        <h4>Search By Country</h4>
        <div className="country">
          <div className="select-country">
            <select name="country" onClick={filterHandler}>
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
              <h4>Last Updated: {country[0].Date}</h4>
              <div className="stats">
                <h3>New Confirmed: {country[0].NewConfirmed}</h3>
              </div>
              <div className="stats">
                <h3>New Deaths: {country[0].NewDeath}</h3>
              </div>
              <div className="stats">
                <h3>New Recovered:{country[0].NewRecovered}</h3>
              </div>
              <div className="stats">
                <h3>Total Deaths: {country[0].TotalDeaths}</h3>
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
