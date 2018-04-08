import React from "react";
import ReactDOM from "react-dom";
import { InstantSearch } from "react-instantsearch/dom";
import Search from "./Search";

const App = () => (
  <InstantSearch
    appId="U9P1V2Y1P2"
    apiKey="e16222375b24b67d21d134b4ef981a9a"
    indexName="dev_RSG-Chess-website"
  >
    <Search />
  </InstantSearch>
);

export default App;
