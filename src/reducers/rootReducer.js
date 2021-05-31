const initState = {
  posts: [
    {
      id: "1",
      title: "Cow laid an egg",
      body: "Thats impossible cows dont lay eggs",
    },
    {
      id: "2",
      title: "Chickens give birth to lions",
      body: "Lions on ly give birth to lions, thats the fact",
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body: "Lorem ipsium something something",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  // update the state
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      // all properties from state should be returned in the object first
      ...state,
      //   override post property with new posts.
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
