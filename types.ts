export type MenuType = {
  cafeId: string;
  category: string;
  sub: string;
  title: string | null;
  titleEng: string | null;
  description: string | null;
  allergy: string | null;
  volume: string | null;
  nutrition: NutritionType;
};

export type NutritionType = {
  saturatedFat: string | null;
  sugar: string | null;
  sodium: string | null;
  protein: string | null;
  caffeine: string | null;
  calories: string | null;
  carbs: string | null;
};
