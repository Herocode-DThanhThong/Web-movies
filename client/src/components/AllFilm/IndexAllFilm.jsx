import React, { useEffect, useState } from "react";
import ListFilm from "./ListFilm";

function IndexAllFilm(props) {
  return (
    <div style={{ cursor: "pointer" }} className="mb-2">
      <ListFilm />
    </div>
  );
}

export default IndexAllFilm;
