"use client";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { contextValueType, dataResponseType, defaultCardType } from "@/types";

const ShopContext = createContext<contextValueType>({
  products: [
    {
      id: "1",
      image: "",
      name: "",
      new_price: 0,
      old_price: 0,
      category: "",
    },
  ],
  cardItems: { "1": 1 },
  addToCard: (itemId) => {},
  removeFromCard: (itemId) => {},
  getTotalCardAmount: () => 2,
  getTotalCardItems: () => 2,
  isLoading: false,
  setIsLoading: () => {},
});

const getDefaultCard = () => {
  let card: defaultCardType = {};
  for (let index: number = 0; index < 300 + 1; index++) {
    card[index] = 0;
  }
  return card;
};

const ShopContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cardItems, setCardItems] = useState<defaultCardType>(getDefaultCard());
  const [products, setProducts] = useState<dataResponseType[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        throw new Error(err?.message);
      });
  }, []);
  const addToCard = (itemId: string) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCard = (itemId: string) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCardAmount = () => {
    let totalAmount: number = 0;
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === item);
        itemInfo && (totalAmount += itemInfo.new_price * cardItems[item]);
      }
    }
    return totalAmount;
  };

  const getTotalCardItems = () => {
    let totalItem: number = 0;
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        totalItem++;
      }
    }
    return totalItem;
  };

  const contextValue: contextValueType = {
    products,
    cardItems,
    addToCard,
    removeFromCard,
    getTotalCardAmount,
    getTotalCardItems,
    isLoading,
    setIsLoading,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};
export default ShopContextProvider;
