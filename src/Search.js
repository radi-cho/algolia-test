// First, we need to add the Hits component to our import
import React from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  HitsPerPage
} from "react-instantsearch/dom";
import { connectHits } from "react-instantsearch/connectors";

const CustomHits = connectHits(({ hits }) => {
  return (
    <div>
      {hits.map(hit => (
        <div
          key={hit.objectID}
          style={{
            display: "block",
            border: "1px solid",
            margin: "5px",
            padding: "5px"
          }}
        >
          <a href={hit.link}>
            <div>{hit.name}</div>
          </a>
          <div>{hit.description}</div>
          <div>{hit.keyword}</div>
          <br />
        </div>
      ))}
    </div>
  );
});

export default class Search extends React.Component {
  state = {
    showHits: false
  };

  product = ({ hit }) => {
    return <b>{hit.name}</b>;
  };

  change = ev => {
    const { value } = ev.target;
    this.setState({ showHits: !!value });
  };

  render() {
    return (
      <div className="container">
        <SearchBox onChange={this.change} />
        {this.state.showHits && (
          <React.Fragment>
            <HitsPerPage
              defaultRefinement={12}
              items={[
                { value: 10, label: "Show 10 results per page" },
                { value: 20, label: "Show 20 results per page" },
                { value: 30, label: "Show 30 results per page" }
              ]}
            />
            <CustomHits hitComponent={this.product} />
            <Pagination />
          </React.Fragment>
        )}
      </div>
    );
  }
}
