import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface menuType {
  value: string;
  url: string;
}

export interface dataProductType {
  name: string;
  image: string;
  category: string;
  new_price: number;
  old_price: number;
}

export interface dataResponseType extends dataProductType {
  id: string;
}

export interface defaultCardType {
  [key: string]: number;
}

export interface contextValueType {
  products: dataResponseType[];
  cardItems: defaultCardType;
  addToCard: (itemId: string) => void;
  removeFromCard: (itemId: string) => void;
  getTotalCardAmount: () => number;
  getTotalCardItems: () => number;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface userDataType {
  name?: string;
  email: string;
  password: string;
}
