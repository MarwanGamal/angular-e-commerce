export interface Product {
  id: string | number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  category?: string;
  rating?: number;
}
