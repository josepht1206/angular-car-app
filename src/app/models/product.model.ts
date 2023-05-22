import { ProductVariance } from './product-variance.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  variances: ProductVariance[];
  price: number;
}
