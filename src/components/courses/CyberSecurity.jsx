import React from 'react'
import Cards from './Cards'

const CyberSecurity = ({data}) => {
  let find = data.filter((e) => e.category === "cyber-security");
  return (
    <>
      {find.map((e) => {
        return <Cards datas={e} key={e.id} />;
      })}
    </>
  );
}

export default CyberSecurity