import React from 'react'
import Cards from './Cards';

const Carrer = ({data}) => {
  let find = data.filter((e) => e.category === "carrer");
  return (
    <>
      {find.map((e) => {
        return <Cards datas={e} key={e.id} />;
      })}
    </>
  );
}

export default Carrer