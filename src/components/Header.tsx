"use client";
interface HeaderProps {
  windowWidth: number;
}

export default function Header({ windowWidth }: HeaderProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "20px",
        zIndex: 1000,
        color: "#fff",
        padding: "10px",
        cursor: "pointer",
        width: "calc(100% - 40px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div>
        <h1>{windowWidth < 768 ? "KML" : "CRISTINAALARCON"}</h1>
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li style={{ marginRight: "15px" }}>
            <a href="#about">About</a>
          </li>
          <li style={{ marginRight: "15px" }}>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
