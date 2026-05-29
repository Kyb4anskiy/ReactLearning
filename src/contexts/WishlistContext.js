import { createContext, useContext, useState } from "react";

const WishlistContext = createContext({ items: [], total: 0 });

export const useWishlist = () => {
  const wishlist = useContext(WishlistContext);
  if (!wishlist) throw new Error("Контекст не подключен");
  return wishlist;
};

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, { ...newItem }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const total = items.length;

  return (
    <WishlistContext.Provider value={{ items, addItem, deleteItem, total }}>
      {children}
    </WishlistContext.Provider>
  );
};
