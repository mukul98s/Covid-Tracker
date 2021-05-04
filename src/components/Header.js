import moment from "moment";

const Header = ({ data, format }) => {
  return (
    <>
      {data && (
        <div className="section">
          <div className="global-data">
            <h4>Global Data</h4>
          </div>
          <div className="global-stats">
            <h4 className="date">
              Last Updated:{" "}
              {moment(data.Global.Date).format("MMMM Do YYYY, h:mm:ssa")}
            </h4>
            <div className="stats-grid">
              <div className="stats">
                <h3>New Confirmed: {format(data.Global.NewConfirmed)}</h3>
              </div>
              <div className="stats">
                <h3>New Deaths: {format(data.Global.NewDeaths)}</h3>
              </div>
              <div className="stats">
                <h3>New Recovered:{format(data.Global.NewRecovered)}</h3>
              </div>
              <div className="stats">
                <h3>Total Deaths: {format(data.Global.TotalDeaths)}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
