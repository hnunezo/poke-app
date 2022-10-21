import React from "react";
import Item from "../Item/Item";
import ItemPokedex from "../ItemPokedex/ItemPokedex";
import "./list.css";

const List = ({ team, type }) => {
  return (
    <div>
      <table className="table-style">
        <tbody>
          {type === "team"
            ? team.map((pok) => <Item pok={pok} key={pok.id} />)
            : team.map((pok) => <ItemPokedex pok={pok} key={pok.id} />)}
        </tbody>
      </table>
    </div>
  );
};

export default List;
