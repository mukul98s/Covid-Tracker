import { useState } from "react";

const CountryData = ({ data }) => {
  let countries = [];
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [country, setCountry] = useState();

  if (data) {
    countries = data.Countries.map((country) => country.Country);
  }

  const filterCountry = (e) => {
    setSelectedCountry(e.target.value);

    setCountry(
      data.Countries.filter((country) => {
        return country.Country === selectedCountry;
      })
    );
  };
  console.log(country);

  return (
    <>
      <div className="section">
        <h4>Search By Country</h4>
        <div className="country">
          <div className="select-country">
            <select name="country" onClick={filterCountry}>
              {countries.map((country) => {
                return (
                  <option value={country} key={Math.random() * 100000}>
                    {country}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default CountryData;
