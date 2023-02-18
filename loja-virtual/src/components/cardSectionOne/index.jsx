import React from "react";
import { CardBox } from "./styled";

export const CardSectionOne = ({ img, txt }) => {
  return (
    <CardBox>
      <img src={img} alt="" />
      <p>{txt}</p>
    </CardBox>
  );
};
