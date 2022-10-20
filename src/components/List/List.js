import React from "react";
import Item from "../Item/Item";
import "./list.css";

const List = ({ team }) => {
  return (
    <div>
      <table className="table-style">
        <tbody>
          {team.map((pok) => (
            <Item pok={pok} key={pok.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
