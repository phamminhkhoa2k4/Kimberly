import { Product } from "./product";

export type Collection = {
  collectionId: number; // tương ứng với Long trong Java
  name: string; // tương ứng với String trong Java
  description?: string; // TEXT có thể không bắt buộc
  image: number; // tương ứng với long trong Java
  banner: number; // tương ứng với long trong Java
  avatar: number; // tương ứng với long trong Java
  isActive: boolean; // tương ứng với Boolean trong Java
  products: Set<Product>; // Set trong Java tương ứng với Set trong TypeScript
}
