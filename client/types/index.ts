import { StaticImageData } from "next/image";

export interface menuType {
  value: string;
  url: string;
}

export interface dataProductType {
  name: string;
  image: StaticImageData;
  category?: string;
  new_price: number;
  old_price: number;
}

export interface dataResponseType extends dataProductType{
  id: number
}

export interface defaultCardType {
  [key: number]: number;
}

export interface contextValueType {
  all_product: dataResponseType[];
  cardItems: defaultCardType;
  addToCard: (itemId: number) => void;
  removeFromCard: (itemId: number) => void;
  getTotalCardAmount: () => number;
  getTotalCardItems: () => number;
}
