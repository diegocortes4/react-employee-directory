import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.names array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Type in a dog name to begin"
          id="name"
        />
        {/* <datalist id="names">
          {props.names.map(name => (
            <option value={name} key={name} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
