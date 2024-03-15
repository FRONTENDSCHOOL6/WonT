export interface UserItem {
  id: number;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: boolean;
  created: string;
  updated: string;
  profile: string;
}

export interface Users {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: UserItem[];
}
