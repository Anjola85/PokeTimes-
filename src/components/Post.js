import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
// this generates actions
import { deletePost } from "../actions/postActions";

class Post extends Component {
  // state to store the id
  // state = {
  //   post: null,
  // };
  // //   execute function when component mounts
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios.get("http://jsonplaceholder.typicode.com/posts/" + id).then((res) => {
  //     this.setState({
  //       post: res.data,
  //     });
  //   });
  // }

  handleCLick = () => {
    this.props.deletePost(this.props.post.id);
    // redirect to homepage after deleting post
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleCLick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

// ownProps : initial props of this component before being attaching additional props from redux store

const mapStateToProps = (state, ownProps) => {
  // grab record to display/post
  let id = ownProps.match.params.post_id;
  return {
    // check if id matches, if true then return post(i.e. map post to  props)
    post: state.posts.find((post) => {
      return post.id === id;
    }),
  };
};

// to dispatch an action
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
