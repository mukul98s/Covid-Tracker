import Header from "./components/Header";
import CountryData from "./components/CountryData";
import useFetch from "./utils/useFetch";

function App() {
  const { data, isLoading, error } = useFetch(
    "https://api.covid19api.com/summary"
  );

  const numberWithCommas = (x) => {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  };

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
          <div className="loader">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="section">
          <div className="error">
            <h3>
              <span>
                <i class="fas fa-sad-tear"></i>
              </span>
              {error}
            </h3>
          </div>
        </div>
      )}

      {!error && !isLoading && (
        <>
          <Header data={data} format={numberWithCommas} />
          <CountryData data={data} format={numberWithCommas} />
        </>
      )}
    </div>
  );
}

export default App;
