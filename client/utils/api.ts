import { dataResponseType } from "@/types";

export const getProducts: (
  query?: string
) => Promise<dataResponseType[]> = async (query) => {
  try {
    const res = await fetch(
      `http://localhost:4000/products?${query && query}`,
      {
        next: { revalidate: 1 },
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.err);
    }
    return data;
  } catch (err: any) {
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
