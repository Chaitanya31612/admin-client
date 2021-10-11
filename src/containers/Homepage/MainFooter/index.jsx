import React from "react";
import { useSelector } from "react-redux";
import { StyledFooter } from "../../../styles/components/Footer.styled";

const MainFooter = () => {
  const footer = useSelector((state) => state.siteInfo.footer);

  return (
    <StyledFooter>
      <p>{footer}</p>
    </StyledFooter>
  );
};

export default MainFooter;
