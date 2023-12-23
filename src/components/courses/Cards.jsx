import React from "react";

const Cards = ({datas}) => {
 let data = datas;
  return (
    <>
      <div className="col">
        <div className="card">
          <img
            src={data.img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
