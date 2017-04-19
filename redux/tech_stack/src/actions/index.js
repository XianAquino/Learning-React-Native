export const selectedLibrary = (libraryId) => {
  return {
    type: 'SELECT_LIBRARY',
    payload: libraryId
  };
};
