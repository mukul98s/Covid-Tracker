const Header = ({ data }) => {
  return (
    <>
      {data && (
        <div className="section">
          <div className="global-data">
            <h4>Global Data</h4>
          </div>
          <div className="global-stats">
            <h4>Last Updated: {data.Global.Date}</h4>
            <div className="stats">
              <h3>New Confirmed: {data.Global.NewConfirmed}</h3>
            </div>
            <div className="stats">
              <h3>New Deaths: {data.Global.NewDeath}</h3>
            </div>
            <div className="stats">
              <h3>New Recovered:{data.Global.NewRecovered}</h3>
            </div>
            <div className="stats">
              <h3>Total Deaths: {data.Global.TotalDeaths}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
