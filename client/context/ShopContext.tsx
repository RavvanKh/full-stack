"use client";
import { FC, ReactNode, createContext, useContext, useState } from "react";
import all_product from "@/components/assets/all_product";
import { contextValueType, defaultCardType } from "@/types";

const ShopContext = createContext<contextValueType>({
  all_product: [
    {
      id: 1,
      image: {
        height: 0,
        src: "",
        width: 0,
        blurDataURL: "",
        blurHeight: 0,
        blurWidth: 0,
      },
      name: "",
      new_price: 0,
      old_price: 0,
      category: "",
    }
  ],
  cardItems: { 1: 1 },
  addToCard: (itemId) => {},
  removeFromCard: (itemId) => {},
  getTotalCardAmount: () => 2,
  getTotalCardItems: () => 2,
});

const getDefaultCard = () => {
  let card: defaultCardType = {};
  for (let index: number = 0; index < all_product.length + 1; index++) {
    card[index] = 0;
  }
  return card;
};

const ShopContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cardItems, setCardItems] = useState<defaultCardType>(getDefaultCard());

  const addToCard = (itemId: number) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCard = (itemId: number) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCardAmount = () => {
    let totalAmount: number = 0;
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
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
    all_product,
    cardItems,
    addToCard,
    removeFromCard,
    getTotalCardAmount,
    getTotalCardItems,
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
