import styled from "styled-components";

export const StyledAdminSidebar = styled.div`
  min-height: 100vh;
  height: 100%;
`;

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem 0;

  img {
    width: 3rem;
  }

  h3 {
    color: white;
    text-transform: uppercase;
    padding-left: 1rem;
    font-size: 1.4rem;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  margin: 2rem 10px;
`;

export const MenuLink = styled.a`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgba(255, 255, 255, 0.4);
  border-left: none;
  border-right: none;
  margin: 2rem 10px;
  padding: 1.5rem;
  text-decoration: none;

  p {
    padding-left: 1rem;
    font-size: 1rem;
    font-weight: ${(props) => props.weight || "initial"};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
  }
`;

export const BottomMenuLink = styled(MenuLink)`
  top: auto;
  bottom: 0 !important;
  left: 0;
  right: 0;
  margin-bottom: 0 !important;
`;

export const MenuDropdown = styled.div`
  position: relative;
  display: block;
  menu {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 2rem;

    p {
      padding: 0 10px;
    }
  }
`;

export const Dropdown = styled.div`
  display: ${(props) => props.show};
  /* position: absolute; */
  font-weight: normal;
  background-color: #f1f1f1;
  /* margin-top: 13rem; */
  min-width: 13rem;
  width: 13rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  z-index: 10;
  margin: 0 auto 2rem;

  a {
    color: ${({ theme }) => theme.colors.darkGrey1};
    /* padding: 12px 3rem; */
    padding-bottom: 10px;
    margin: 12px 1rem;
    text-align: center;

    &:first-child {
      padding-top: 2rem;
    }
    &:last-child {
      padding-bottom: 2rem;
    }
    &:not(last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
    &:hover {
      color: ${({ theme }) => theme.colors.darkGrey2};
      cursor: pointer;
    }
    text-decoration: none;
    display: block;
  }
`;
