import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

const mainListData = [
  {
    iconDetail: <DashboardIcon />,
    primary: "Dashboard",
  },
  {
    iconDetail: <ShoppingCartIcon />,
    primary: "Orders",
  },
  {
    iconDetail: <PeopleIcon />,
    primary: "Customers",
  },
  {
    iconDetail: <BarChartIcon />,
    primary: "Reports",
  },
  {
    iconDetail: <LayersIcon />,
    primary: "Integrations",
  },
];

const secondaryListData = [
  {
    iconDetail: <AssignmentIcon />,
    primary: "Current month",
  },
  {
    iconDetail: <AssignmentIcon />,
    primary: "Last quarter",
  },
  {
    iconDetail: <AssignmentIcon />,
    primary: "Year-end sale",
  },
];

export const mainListItems = (
  <>
    {mainListData.map((item) => {
      return (
        <ListItemButton key={item.primary}>
          <ListItemIcon>{item.iconDetail}</ListItemIcon>
          <ListItemText primary={item.primary} />
        </ListItemButton>
      );
    })}
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    {secondaryListData.map((item) => {
      return (
        <ListItemButton key={item.primary}>
          <ListItemIcon>{item.iconDetail}</ListItemIcon>
          <ListItemText primary={item.primary} />
        </ListItemButton>
      );
    })}
  </>
);
