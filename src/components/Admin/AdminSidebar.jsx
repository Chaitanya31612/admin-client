import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  AiFillDashboard,
  AiOutlineRight,
  AiOutlineSetting,
} from "react-icons/ai";
import { CgMenuGridR, CgDetailsMore } from "react-icons/cg";
import { VscNotebook } from "react-icons/vsc";
import { MdVideoLibrary } from "react-icons/md";

import MainLogo from "../../assets/MainLogo.png";
import {
  BottomMenuLink,
  Dropdown,
  Head,
  MenuDropdown,
  MenuLink,
  StyledAdminSidebar,
} from "../../styles/components/AdminSidebar";
import { setAdmin, setSelectedMenu } from "../../redux/actions/adminInfo";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [menuSet, setMenuState] = useState(new Set());

  const toggleMenu = (menuNo) => {
    if (!menuSet.has(menuNo)) {
      setMenuState((prev) => new Set(prev.add(menuNo)));
    } else {
      setMenuState((prev) => new Set([...prev].filter((x) => x !== menuNo)));
    }
  };

  const userType = useSelector((state) => state.adminInfo);
  const dispatch = useDispatch();
  // dispatch(() => setAdmin());
  console.log(userType);

  return (
    <Wrapper>
      <StyledAdminSidebar>
        <Head>
          <img src={MainLogo} alt="" />
          <h3>Admin Panel</h3>
        </Head>

        <MenuLink href="/admin/dashboard" weight="bold">
          <AiFillDashboard />
          <p>Dashboard</p>
        </MenuLink>

        <div>
          <MenuDropdown onClick={() => toggleMenu(1)}>
            <menu>
              <CgMenuGridR />
              <p>Menus</p>
              <AiOutlineRight />
            </menu>

            <Dropdown show={menuSet.has(1) ? "block" : "none"}>
              <Link to="/admin/menus/add">Add Menus</Link>
              <Link to="/admin/menus/view">View Menus</Link>
            </Dropdown>
          </MenuDropdown>

          <MenuDropdown onClick={() => toggleMenu(2)}>
            <menu>
              <VscNotebook />
              <p>Subjects</p>
              <AiOutlineRight />
            </menu>

            <Dropdown show={menuSet.has(2) ? "block" : "none"}>
              <Link to="/admin/subject/add">Add Subject</Link>
              <Link to="/admin/subject/view">View Subject</Link>
            </Dropdown>
          </MenuDropdown>

          <MenuDropdown onClick={() => toggleMenu(3)}>
            <menu>
              <MdVideoLibrary />
              <p>Videos</p>
              <AiOutlineRight />
            </menu>

            <Dropdown show={menuSet.has(3) ? "block" : "none"}>
              <Link to="/admin/details/add">Add Videos</Link>
              <Link to="/admin/details/view">View Videos</Link>
            </Dropdown>
          </MenuDropdown>

          <MenuDropdown onClick={() => toggleMenu(4)}>
            <menu>
              <CgDetailsMore />
              <p>Others</p>
              <AiOutlineRight />
            </menu>

            <Dropdown show={menuSet.has(4) ? "block" : "none"}>
              <Link to="/admin/otherdetails/add">Add Details</Link>
              <Link to="/admin/otherdetails/view">View Details</Link>
            </Dropdown>
          </MenuDropdown>
        </div>

        <BottomMenuLink to="/settings" weight="bold">
          <AiOutlineSetting />
          <p>Settings</p>
        </BottomMenuLink>
      </StyledAdminSidebar>
    </Wrapper>
  );
};

export default AdminSidebar;

const Wrapper = styled.div`
  background-image: linear-gradient(
    to bottom,
    #1c63ab 0%,
    #2669ae 20%,
    #3272b2 40%,
    #447db8 60%,
    #5086bc 100%
  );
  bottom: 0 !important;

  min-height: 100vh;
  height: 100%;
`;
