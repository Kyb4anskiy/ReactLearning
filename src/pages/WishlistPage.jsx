import { FilmCard } from "../components/FilmCard";
import { useWishlist } from "../contexts/WishlistContext";

export const WishlistPage = () => {
  const { items, addItem, deleteItem } = useWishlist();

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
        <h3 style={{ margin: 0 }}>Список желаемых фильмов</h3>
        <div
          style={{
            display: "grid",
            marginTop: 12,
            gridTemplateColumns: "1fr",
            gap: 12,
          }}
        >
          {items ? (
            items.map((obj) => <FilmCard key={obj.id} film={obj} />)
          ) : (
            <p>Список пуст</p>
          )}
        </div>
      </div>
    </div>
  );
};
