import React from "react";
import Cards from "./Cards";

const All = ({ data }) => {
  return (
    <>
      {data.map((e) => {
        return <Cards datas={e} key={e.id} />;
      })}
    </>
  );
};

export default All;
