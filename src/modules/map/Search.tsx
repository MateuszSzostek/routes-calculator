import React from "react";
import "./Search.styles.css";
import axios from "axios";

export default function Search() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log("submited");

    axios
      .get("https://api.geoapify.com/v1/geocode/search", {
        params: {
          apiKey: import.meta.env.VITE_GEOAPIFY_API_KEY,
          text: e.target[0].value,
        },
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <label>Search</label>
        <input type="text" id="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
