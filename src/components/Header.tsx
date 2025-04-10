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
      }}
    >
      <h1>{windowWidth < 768 ? "KML" : "KAMYLIKAMILE"}</h1>
    </div>
  );
}
