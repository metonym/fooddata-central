export interface SearchParams {
  generalSearchInput?: string;
  includeDataTypeList?: string | string[];
  ingredients?: string;
  brandOwner?: string;
  requireAllWords?: boolean;
  pageNumber?: number;
  sortField?: "lowercaseDescription.keyword" | "dataType.keyword" | "publishedDate" | "fdcId";
  sortDirection?: "asc" | "desc";
}

export interface SearchResults {
  foodSearchCriteria: {
    generalSearchInput: string;
    pageNumber: number;
    requireAllWords: boolean;
  };
  totalHits: number;
  currentPage: number;
  totalPages: number;
  foods: {
    fdcId: number;
    description: string;
    additionalDescriptions?: string;
    scientificName: string;
    dataType: string;
    ndbNumber?: string;
    foodCode?: string;
    gtinUpc?: string;
    publishedDate: string;
    allHighlightFields: string;
    score: number;
  }[];
}

interface FoodNutrient {
  type: "FoodNutrient";
  id: number;
  nutrient: {
    id: number;
    number: string;
    name: string;
    rank: number;
    unitName: string;
  };
  nutrientAnalysisDetails: [
    {
      subSampleId: number;
      amount: number;
      nutrientId: number;
      nutrientAcquisitionDetails: [{}];
      labMethodDescription: string;
      labMethodTechnique: string;
      labMethodOriginalDescription: string;
      labMethodLink: string;
    }
  ];
  amount: number;
}

interface FoodPortion {
  id: number;
  measureUnit: {
    id: number;
    name: string;
    abbreviation: string;
  };
  modifier: string;
  gramWeight: number;
  portionDescription: string;
  sequenceNumber: number;
}

interface InputFood {
  id: number;
  unit: string;
  portionDescription: string;
  portionCode: string;
  srCode: number;
  srDescription: string;
  foodDescription: string;
  gramWeight: number;
  surveyFlag: number;
  amount: number;
  sequenceNumber: number;
}

type FixMe = any;

// TODO: some fields may be undefined
export interface DetailsResults {
  fdcId: number;
  foodClass: string;
  dataType: string;
  description: string;
  publicationDate: string;
  foodNutrients: FoodNutrient[];
  foodComponents: FixMe[];
  foodAttributes: FixMe[];
  foodPortions: FoodPortion[];
  inputFoods: InputFood[];
  tableAliasName: string;
  foodCode: string;
  startDate: string;
  endDate: string;
  wweiaFoodCategory: {
    wweiaFoodCategoryCode: number;
    wweiaFoodCategoryDescription: string;
  };
  changes: string;
}
