import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FilmScreen = () => {
  const { id } = useParams();
  const [filmData, setFilmData] = useState<Film>();
  const [isLoading, setIsLoading] = useState(true);
  const [ratingColor, setRatingColor] = useState("black");
  const [isEditing, setIsEditing] = useState(false);
  const [newFilmName, setNewFilmName] = useState("");
  const [newFilmRating, setNewFilmRating] = useState("");
  const [newFilmAgeLimit, setNewFilmAgeLimit] = useState("");
  const [newFilmYear, setNewFilmYear] = useState("");

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

  const handleUpdateFilm = async () => {
    try {
      const response = await fetch(
        `https://e68a5f89ae16826a.mokky.dev/films/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: newFilmName,
            rating: newFilmRating,
            ageLimit: newFilmAgeLimit,
            year: newFilmYear,
          }),
        },
      );
      if (!response.ok) throw new Error();
      handleGetFilm();
    } catch (e) {}
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
            <div style={{ display: "flex", flexDirection: "row", height: 500 }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  width: 400,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>Изображение</p>
              </div>
              {!isEditing ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 16,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <p style={{ fontSize: 28, fontWeight: 600 }}>
                      {filmData?.name}
                    </p>
                    <p
                      style={{
                        marginLeft: "auto",
                        color: ratingColor,
                        fontSize: 28,
                        fontWeight: 600,
                      }}
                    >
                      {filmData?.rating}/10
                    </p>
                  </div>
                  <p style={{ fontSize: 20, marginTop: 16 }}>
                    Возрастное ограничение: {filmData?.ageLimit}
                  </p>
                  <p style={{ fontSize: 20, marginTop: 16 }}>
                    Год выхода: {filmData?.year}
                  </p>

                  <div style={{ marginTop: "auto" }}>
                    <button
                      style={{
                        fontSize: 20,
                        border: 1,
                        backgroundColor: "#26c35f",
                      }}
                      onClick={() => {
                        setIsEditing(true);
                      }}
                    >
                      Изменить
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 16,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <input
                      value={newFilmName}
                      type="text"
                      style={{ fontSize: 28, fontWeight: 600, width: 550 }}
                      placeholder={filmData?.name}
                      onChange={(e) => {
                        setNewFilmName(e.target.value);
                      }}
                    />
                    <input
                      value={newFilmRating}
                      type="text"
                      placeholder={filmData?.rating.toString()}
                      onChange={(e) => {
                        setNewFilmRating(e.target.value);
                      }}
                      style={{
                        marginLeft: "auto",
                        color: ratingColor,
                        fontSize: 20,
                        fontWeight: 600,
                        width: 80,
                      }}
                    />
                  </div>
                  <input
                    value={newFilmAgeLimit}
                    type="text"
                    placeholder={filmData?.ageLimit}
                    onChange={(e) => {
                      setNewFilmAgeLimit(e.target.value);
                    }}
                    style={{ fontSize: 20, marginTop: 16, width: 250 }}
                  />
                  <input
                    value={newFilmYear}
                    type="text"
                    placeholder={filmData?.year.toString()}
                    onChange={(e) => {
                      setNewFilmYear(e.target.value);
                    }}
                    style={{ fontSize: 20, marginTop: 16, width: 250 }}
                  />

                  <div style={{ marginTop: "auto" }}>
                    <button
                      style={{
                        fontSize: 20,
                        border: 1,
                        backgroundColor: "#26c35f",
                      }}
                      onClick={async () => {
                        await handleUpdateFilm();
                        setIsEditing(false);
                      }}
                    >
                      Сохранить
                    </button>
                    <button
                      style={{
                        marginLeft: 16,
                        fontSize: 20,
                        border: 1,
                        backgroundColor: "#26c35f",
                      }}
                      onClick={() => {
                        setIsEditing(false);
                      }}
                    >
                      Отменить
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
