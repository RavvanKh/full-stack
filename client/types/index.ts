import { StaticImageData } from "next/image";

export interface menuType {
  value: string;
  url: string;
}

export interface dataProductType {
  id?: number | string;
  name: string;
  image:  string;
  category?: string;
  new_price: number | string;
  old_price: number | string;
}

export interface defaultCardType {
  [key: number]: number;
}

export interface contextValueType {
  all_product: dataProductType[];
  cardItems: defaultCardType;
  addToCard: (itemId: number) => void;
  removeFromCard: (itemId: number) => void;
  getTotalCardAmount: () => number;
  getTotalCardItems: () => number;
}
