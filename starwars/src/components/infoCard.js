import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  font-size: 1.2rem;
  border: 2px solid black;
  margin: 10 auto;
  justify-content: center;
`;

const InfoCard = props => {
  return (
    <StyledDiv>
      <div>
        <h1>{props.data.name}</h1>
        <div>
          <p>Height: {props.data.height}cm</p>
          <p>Mass: {props.data.mass}kg</p>
        </div>
        <div>
          <p>Birth Year: {props.data.birth_year}</p>
          <p>Gender: {props.data.gender}</p>
          <p>Skin Color: {props.data.skin_color}</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default InfoCard;
