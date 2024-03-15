export interface RecommendItem {
  id?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  localName?: string | null;
  place?: string;
  image?: string[];
  address?: string;
  info?: string | null;
  rest?: string | null;
  active?: string | null;
  time?: string | null;
  url?: string | null;
  useremail?: string[];
  localMain?: string;
}

export interface Recommends {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: RecommendItem[];
}
