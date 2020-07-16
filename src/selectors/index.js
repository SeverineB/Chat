/* eslint-disable import/prefer-default-export */

export const getNextId = (rows) => {
  const ids = rows.map((row) => row.id);
  const highestId = Math.max(...ids);
  const id = highestId + 1;
  return id;
};

export const isAuthor = (pseudo, author) => pseudo === author;
