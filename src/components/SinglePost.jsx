import React from "react";

const SinglePost = ({ post }) => {
  console.log(post);
  return (
    <div className="SinglePost">
      <h3>{post.title}</h3>
      <span>
        description: <p>{post.description}</p>
      </span>
      <p>{post.price}</p>
    </div>
  );
};

export default SinglePost;

//if author ID === user(my) ID display delete button
//
