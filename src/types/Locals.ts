export interface LocalItem {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  name: string;
  image: string;
  // [key: string]: string;
}

export interface Locals {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: LocalItem[];
}
