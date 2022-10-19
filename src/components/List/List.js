import React from "react";
import Item from "../Item/Item";

const List = ({ team }) => {
  return (
    <div>
      <ul>
        {team.map((pok) => (
          <Item pok={pok} />
        ))}
      </ul>
    </div>
  );
};

export default List;
