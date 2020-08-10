import React from "react";
import { Link } from "react-router-dom";

export const Categories = ({ data }) => (
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


export const List = ({data}) => (
  <div className="dev-list">
    <div id="list-grup">
      {data.map (b => (
        <li id="list-hov-grp" key={b.id}>
          {b.title} <i class="fas fa-angle-right"/>
        </li>
      ))}
    </div>
  </div>
)




export default Categories;