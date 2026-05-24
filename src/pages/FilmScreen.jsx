import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FilmScreen = () => {
  const { id } = useParams();
  const [filmData, setFilmData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [ratingColor, setRatingColor] = useState("black");

  useEffect(() => {
    handleGetFilm();
  }, [id]);

  useEffect(() => {
    if (filmData) {
      if (filmData.rating > 8) setRatingColor("green");
      else if (filmData.rating > 5) setRatingColor("orange");
      else setRatingColor("red");
    }
  }, [filmData]);

  const handleGetFilm = async () => {
    try {
      const response = await fetch(
        `https://e68a5f89ae16826a.mokky.dev/films/${id}`,
      );
      if (!response.ok) throw new Error("Ошибка подключения к удаленной БД");
      const data = await response.json();
      setFilmData(data);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div
        style={{
          paddingBlock: 8,
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            marginInline: 16,
            padding: 12,
            backgroundColor: "#e3e3e3",
            borderRadius: 12,
          }}
        >
          {isLoading ? (
            <p>Загрузка фильма</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  height: 500,
                  width: 400,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>Изображение</p>
              </div>
              <div style={{ marginLeft: 16, width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <p style={{ fontSize: 28, fontWeight: 600 }}>
                    {filmData.name}
                  </p>
                  <p
                    style={{
                      marginLeft: "auto",
                      color: ratingColor,
                      fontSize: 28,
                      fontWeight: 600,
                    }}
                  >
                    {filmData.rating}/10
                  </p>
                </div>
                <p style={{ fontSize: 20, marginTop: 16 }}>
                  Возрастное ограничение: {filmData.ageLimit}
                </p>
                <p style={{ fontSize: 20, marginTop: 16 }}>
                  Год выхода: {filmData.year}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
