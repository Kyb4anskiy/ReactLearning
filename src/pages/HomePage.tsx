import { useEffect, useState } from "react";
import { FilmCard } from "../components/FilmCard";
import { useNavigate } from "react-router-dom";
import {
  useAddFilmMutation,
  useGetFilmByIdQuery,
  useGetFilmQuery,
} from "../store/services/FilmApi";

export const HomePage = () => {
  const [filmsList, setFilmsList] = useState<Film[]>([]);
  const [filter, setFilter] = useState("");

  const {
    data: films = [],
    isLoading,
    isError,
    error,
    isFetching,
    isSuccess,
  } = useGetFilmQuery();
  //const { data: curFilms = [], isLoading, isError, error, isFetching, isSuccess} = useGetFilmByIdQuery(1);
  const [addFilm] = useAddFilmMutation(); // возвращает функцию для пользования в компонентах -> addFilm({name: "string", rating: 2, ageLimit: "string", year: 2000});

  useEffect(() => {
    handleGetFilmsList();
  }, []);

  const handleGetFilmsList = async () => {
    try {
      const response = await fetch("https://e68a5f89ae16826a.mokky.dev/films");
      if (!response.ok) throw new Error("Ошибка подключения к удаленной БД");
      const data = await response.json();
      if (data.items) setFilmsList(data.items);
      else if (Array.isArray(data)) setFilmsList(data);
      else setFilmsList([]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
        <h3 style={{ margin: 0 }}>Список фильмов</h3>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <div
          style={{
            display: "grid",
            marginTop: 12,
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 12,
          }}
        >
          {filmsList.map((obj) => (
            <FilmCard
              key={obj.id}
              id={obj.id}
              name={obj.name}
              rating={obj.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
