import react from "react";

export const registerUser = async (username, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const fetchPosts = async () => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts`
  );
  const result = await response.json();

  return result.data.posts;
};

export const updatePost = async (updateObj, token, postId) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/${postId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: updateObj,
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const loginUser = async (username, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const getProfile = async (token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const createPost = async (token, postObj) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: postObj,
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const deletePost = async (token, postId) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
};

export const fetchMe = async (token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const fetchMessage = async (token, postId, messageContent) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/${postId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: messageContent,
          },
        }),
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const welcomeMessageCheck = (userObj) => {
  const welcome = `Hello, welcome to Stranger's Things. Please sign in or sign up.`;
  if (userObj === null) {
    return welcome;
  } else {
    return `Hello, ${userObj.username} welcome back to Stranger's Things.`;
  }
};
