import React from "react";
import styled from "styled-components";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import {
  Header,
  Icon,
  ProfileDetail,
  Search,
} from "../../styles/components/AdminHeader";

const AdminHeader = () => {
  return (
    <Wrapper>
      <Header>
        <Icon>
          <AiOutlineMenu />
        </Icon>
        <Search>
          <AiOutlineSearch
            style={{ marginLeft: "12px", position: "absolute" }}
            color="#ccc"
            alignmentBaseline="true"
          />
          <input type="search" placeholder="Search" />
        </Search>
      </Header>

      <ProfileDetail>
        <Icon>
          <IoMdNotifications />
        </Icon>
        <p>Chaitanya Gupta</p>
        <Icon>
          <IoPersonCircleOutline />
        </Icon>
      </ProfileDetail>
    </Wrapper>
  );
};

export default AdminHeader;

const Wrapper = styled.div`
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 1rem;
`;
