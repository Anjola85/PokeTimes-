import React, { Component } from "react";
// can also use fetch
// import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
// import higher order component
import { connect } from "react-redux";

class Home extends Component {
  // ******  NO MORE STORING STATES IN COMPONENTS BEACUSE OF REDUX
  // state = {
  //   posts: [],
  // };

  // componentDidMount() {
  //   // returns a promise: i.e. this action will complete at some point in time
  //   // .then runs when the promise has been completed
  //   axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
  //     // logging response
  //     //   console.log(res);
  //     this.setState({
  //       //   using slice method to get first 10.
  //       posts: res.data.slice(0, 10),
  //     });
  //   });
  // }

  // connect component to redux store

  render() {
    console.log(this.props);

    //   using destructuring
    const { posts } = this.props;

    // check if posts have data in it
    const postList = posts.length ? (
      posts.map((post) => {
        // return a snippet of jsx for each individual post
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball" />
            <div className="card-content">
              {/* "to=" makes it a dynamic link*/}
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">NO POSTS YET!</div>
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

// connect() returns higher order component
// connect()(home) wraps home with the higher order component
// connect(mapStateProps) grabs data we want(e.g. state.posts) from redux
export default connect(mapStateToProps)(Home);
