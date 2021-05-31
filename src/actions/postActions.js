// es6 property
export const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    id,
  };
};
