import React from "react";
import styled from "styled-components";
import { RiBook2Fill, RiMapPinUserLine } from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { HiUsers } from "react-icons/hi";

import {
  AdminContentHead,
  AdminContentLayout,
} from "../../styles/components/AdminLayout";
import {
  Cards,
  DashboardHeadGroup,
} from "../../styles/components/DashboardWidget";
import DashboardCard from "./DashboardCard";

const DashboardWidgets = () => {
  return (
    <Wrapper>
      <AdminContentLayout>
        <DashboardHeadGroup>
          <AdminContentHead>Dashboard</AdminContentHead>
          <button>Generate Report</button>
        </DashboardHeadGroup>
        <Cards>
          <DashboardCard
            title="Total subjects"
            count="10"
            Icon={RiBook2Fill}
            color="#42688E"
          />
          <DashboardCard
            title="Total Videos"
            count="30"
            Icon={MdVideoLibrary}
            color="#469F44"
          />
          {/* <span>
            <DashboardCard
              title="Total subjects"
              count="50"
              Icon={RiBook2Fill}
              color="pink"
            />
          </span> */}
          <DashboardCard
            title="Total Visitors"
            count="899"
            Icon={RiMapPinUserLine}
            color="#DDA146"
          />
          <DashboardCard
            title="Total Users"
            count="20"
            Icon={HiUsers}
            color="#B04A4A"
          />
        </Cards>
      </AdminContentLayout>
    </Wrapper>
  );
};

export default DashboardWidgets;

const Wrapper = styled.div``;
