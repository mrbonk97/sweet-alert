export type CafegoryType = {
  id: string;
  title: string;
};

export type CafeType = {
  rank: number;
  id: string;
  title: string;
  titleEng: string;
  icon: string;
  category: CafegoryType[];
};

export type MenuType = {
  id: string;
  brand: string;
  brandKR: string;
  format: string;
  category: string[];
  title: string;
  titleEng: string | null;
  description: string | null;
  volume: string | null;
  calories: string | null;
  sodium: string | null;
  carbohydrate: string | null;
  sugar: string | null;
  fat: string | null;
  saturatedFat: string | null;
  protein: string | null;
  caffein: string | null;
};
