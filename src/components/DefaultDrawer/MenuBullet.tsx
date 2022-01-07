import { FC } from "react";
import { Typography } from "@mui/material";

const MenuBullet: FC<{ icon: any ; text: string }> = ({ icon, text }) => {
  return (
    <div
      style={{
        minWidth: "200px",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
        {icon}
      <Typography paragraph noWrap sx={{ margin: " 0 0 0 3%" }}>
        {text}
      </Typography>
    </div>
  );
};

export default MenuBullet;
