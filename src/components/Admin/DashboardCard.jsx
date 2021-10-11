import React from "react";
import styled from "styled-components";
import { IconLogo, Title } from "../../styles/components/DashboardWidget";

const DashboardCard = ({ title, count, Icon, color }) => {
  return (
    <Wrapper borderColor={color}>
      <Title>
        <h6>{title}</h6>
        <p>{count}</p>
      </Title>

      <IconLogo>{<Icon />}</IconLogo>
    </Wrapper>
  );
};

export default DashboardCard;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 22rem;
  min-height: 10rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
  border-left: 6px solid ${(props) => props.borderColor || "white"};
`;
