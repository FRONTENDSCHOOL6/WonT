export const getPocketHostURL = (collectionName: string) =>
  `${import.meta.env.VITE_PB_API}/collections/${collectionName}/records`;

export const getPocketHostTravelsURL = (collectionName: string) =>
  `${import.meta.env.VITE_PB_API}/travels/${collectionName}/records`;
