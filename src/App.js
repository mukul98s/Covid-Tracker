import Header from "./components/Header";
import useFetch from "./utils/useFetch";

function App() {
  const { data, isLoading, error } = useFetch(
    "https://api.covid19api.com/summary"
  );

  console.log(data);

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
      <Header data={data} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
