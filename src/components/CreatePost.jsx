import React, { useState, useEffect } from "react";
import { createPost } from "../api";

const CreatePost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);

  return (
    <div className="posts">
      <form
        className="inputPosts"
        onSubmit={async (e) => {
          e.preventDefault();
          const postObj = {
            title,
            description,
            location,
            price,
            deliver,
          };

          const token = localStorage.getItem("token");
          const result = await createPost(token, postObj);
        }}
      >
        <h4>Title:</h4>
        <input
          className="inputBoxPosts"
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <h4>Location:</h4>
        <input
          className="inputBoxPosts"
          value={location}
          type="text"
          placeholder="Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <h4>Price:</h4>
        <input
          className="inputBoxPosts"
          value={price}
          type="text"
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <h4>Will deliver?</h4>
        <input
          className="inputBoxPosts"
          value={deliver}
          type="text"
          placeholder="Will deliver?"
          onChange={(e) => {
            setDeliver(e.target.value);
          }}
        />
        <h4>Description:</h4>
        <input
          className="descriptionBox"
          value={description}
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
