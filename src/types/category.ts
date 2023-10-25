export type CategoryId =
  | "coffee"
  | "matcha"
  | "food"
  | 
export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}
