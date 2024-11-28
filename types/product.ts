export type Product = {
  productId: number;
  productName: string;
  price: number;
  metallicColor: string;
  ringBelt: string;
  material: string;
  discount: number;
  images: string | FileList;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  collections: Array<any>;
  shape: string;
  isIncludeMasterDiamond: boolean;
  categoryId? : number
};
