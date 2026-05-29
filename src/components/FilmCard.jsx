import { memo } from "react";
import { useNavigate } from "react-router-dom";

export const FilmCard = memo(({ film }) => {
  const navigate = useNavigate();

  console.log("render ", film.id);

  let ratingColor = "";

  if (film.rating > 8) ratingColor = "green";
  else if (film.rating > 5) ratingColor = "orange";
  else ratingColor = "red";

  const openFilmScreen = () => {
    navigate(`film/${film.id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        height: 300,
        width: "100%",
        padding: 12,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
      }}
      onClick={openFilmScreen}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          height: 180,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Изображение</p>
      </div>
      <p style={{ marginTop: 12, fontSize: 18, fontWeight: 600 }}>
        {film.name}
      </p>
      <div style={{ marginTop: "auto" }}></div>
      <p style={{ color: ratingColor, fontSize: 18 }}>{film.rating}/10</p>
    </div>
  );
});
