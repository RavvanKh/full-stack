import { dataResponseType } from "@/types";

export const getProducts: () => Promise<dataResponseType[]> = async () => {
  try {
    const res = await fetch("http://localhost:4000/products", {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.err);
    }
    return data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err?.message);
  }
};

export const getProduct: (id: string) => Promise<dataResponseType> = async (
  id: string
) => {
  try {
    const res = await fetch(`http://localhost:4000/products/${id}`, {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.err);
    }
    return data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const deleteProduct: (id: string) => Promise<dataResponseType> = async (
  id: string
) => {
  try {
    const res = await fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
      next: { revalidate: 1 },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.err);
    }
    return data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
