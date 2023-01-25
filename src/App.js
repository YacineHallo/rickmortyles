import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//Components
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [pageNumber, setPageNumber] = useState(); //pagination.js
  //console.log("pageNumber ", pageNumber);
  let [search, setSearch] = useState(""); //saerch.js
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData; //Cards.js(results)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  //console.log("results ", results);
  //console.log("setPageNumer ", setPageNumber);
  console.log(info);
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">WiKi</span>{" "}
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filters />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info}
      />
    </div>
  );
}

export default App;
