import React from "react";
import Item from "../Item/Item";
import ItemPokedex from "../ItemPokedex/ItemPokedex";
import "./list.css";

const List = ({ team, type }) => {
  return (
    <div>
      <table className="table-style">
        <tbody>
          {type === "team" ? (
            <tr className="text-center">
              <th>spray</th>
              <th>Name</th>
              <th>Info</th>
              <th>pc</th>
            </tr>
          ) : type === "pokedex" ? (
            <tr className="text-center">
              <th>N°</th>
              <th>spray</th>
              <th>Name</th>
            </tr>
          ) : null}
          {type === "team"
            ? team.map((pok) => <Item pok={pok} key={pok.id} />)
            : team.map((pok) => <ItemPokedex pok={pok} key={pok.id} />)}
        </tbody>
      </table>
    </div>
  );
};

export default List;
