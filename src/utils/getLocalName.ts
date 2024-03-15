export const getLocalName = (localTitle: string) => {
  return `${localTitle} 여행`;
};

export const setLocalName = (localTitle: string) => {
  return localTitle.replace('여행', '');
};
