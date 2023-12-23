import React from "react";
import Cards from "./Cards";

const FullStackDevelopement = ({ data }) => {
  let find = data.filter((e) => e.category === "full-stack");
  return (
    <>
      {find.map((e) => {
        return <Cards datas={e} key={e.id} />;
      })}
    </>
  );
};

export default FullStackDevelopement;
