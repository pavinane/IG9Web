import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ data }) => (
  <div className="cate-list">
    <div id="list-con">
      {data.map(a => (
        <li id="cate-hov-lst " key={a.id}>
          <Link to={`/c/${a.url}`}>{a.title}</Link>
        </li>
      ))}
    </div>
  </div>
);
export default Categories;