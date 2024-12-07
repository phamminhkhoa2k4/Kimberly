import { Product } from "@/types/product";


export const calculateFilters = (rings: Product[]) => {
  const isPrice = rings?.some((ring) => ring.price > 0);

  // const uniqueMaterials = new Set(rings?.map((ring) => ring.material));
  // const isMaterial = uniqueMaterials.size > 1;
  const isMaterial= true

  // const uniqueColors = new Set(rings?.map((ring) => ring.metallicColor));
  // const isColor = uniqueColors.size > 1;
  const isColor = true

  return { isColor, isMaterial, isPrice };
};
