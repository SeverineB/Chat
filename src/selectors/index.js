
// fonction utilitaire qui prend un bout de state en entrée = un selector
// eslint-disable-next-line import/prefer-default-export
export const getNextId = (rows) => {
  // je veux générer un id
  // on part d'un tableau d'objet on le transpose en tableau de nombre
  const ids = rows.map((row) => row.id);
  // on utilise math.max pour trouver le plus grand nombre
  const highestId = Math.max(...ids);
  // on ajoute 1
  const id = highestId + 1;
  return id;
};
