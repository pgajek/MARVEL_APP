import React from "react";
import style from "./Character.module.scss";

const Character = ({ name, description, thumbnail }) => {
  return (
    <div className={style.wrap}>
      <img
        src={`${thumbnail.path}/standard_amazing.${thumbnail.extension}`}
        alt=""
      />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Character;
