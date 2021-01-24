import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../Components/SearchForm"
import SearchResults from "../Components/SearchResults"
class Search extends Component {
  state = {
    search: "",
    Employees: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseEmployeesList()
      .then(res => this.setState({ Employees: res.data}))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
          <h1 className="text-center">Search By Name!</h1>
         
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.Employees} />
      </div>
    );
  }
}

export default Search;
