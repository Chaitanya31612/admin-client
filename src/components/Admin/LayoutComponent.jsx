import React from "react";
import styled from "styled-components";
import { AdminHeader, AdminSidebar } from ".";

const LayoutComponent = (props) => {
  return (
    <Wrapper>
      <SideBar>
        <AdminSidebar />
      </SideBar>
      <MainContent>
        <AdminHeader />
        <AdminContent>{props.children}</AdminContent>
      </MainContent>
    </Wrapper>
  );
};

export default LayoutComponent;

const Wrapper = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  flex: 2;
`;

const MainContent = styled.div`
  flex: 6;
`;

const AdminContent = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey3};
  min-height: 92vh;
`;
