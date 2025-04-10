"use client";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function MenuButton() {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "20px",
        zIndex: 1000,
        color: "#fff",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <IconButton>
        <MenuRoundedIcon style={{ color: "#c1b956" }} />
      </IconButton>
    </div>
  );
}
