import React from 'react'
import Cards from './Cards'

const DataScience = ({data}) => {
  let find = data.filter((e) => e.category === "data-science");
  return (
    <>
      {find.map((e) => {
        return <Cards datas={e} key={e.id} />;
      })}
    </>
  );
}

export default DataScience