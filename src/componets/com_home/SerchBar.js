import React from "react";

export default function SerchBar() {
  return (
    <nav class="navbar navbar-light bg-light justify-content-evenly">
      <a class="navbar-brand">Food Deliver : Search your fovrate food </a>
      <form class="form-inline flex">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
