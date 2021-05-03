import Header from "./components/Header";
import CountryData from "./components/CountryData";
import useFetch from "./utils/useFetch";

function App() {
  const { data, isLoading, error } = useFetch(
    "https://api.covid19api.com/summary"
  );

  return (
    <div className="App">
      <div className="title">
        <div className="title-container section">
          <h1>
            <span>
              <i className="fas fa-viruses"></i>
            </span>
            Covid Tracker
          </h1>
        </div>
      </div>

      {isLoading && (
        <div className="section">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      {error && (
        <div className="section">
          <div className="error">
            <h3>{error}</h3>
          </div>
        </div>
      )}
      <Header data={data} />
      <CountryData data={data} />
    </div>
  );
}

export default App;
