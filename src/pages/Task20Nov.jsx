import React from "react";
import useToggle from "../hooks/useToggle";
import useFetch from "../hooks/useFetch";

const Task20Nov = () => {
  const { show, toggleShow } = useToggle();
  const { apiData: users } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  const { apiData: posts } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return (
    <div>
      {/* FIRST QUESTION */}

      {show ? (
        <div style={{ border: "1px solid black", padding: "5px" }}>
          <h1>FIRST QUESTION:</h1>
          <h1>Hi Guys My Name Is Ishan!</h1>
          <button onClick={toggleShow}>Hide/Show</button>
        </div>
      ) : (
        <div style={{ border: "1px solid black", padding: "5px" }}>
          <h1>FIRST QUESTION:</h1>
          <h1>Nothing to show here!</h1>
          <button onClick={toggleShow}>Hide/Show</button>
        </div>
      )}

      {/* SECOND QUESTION */}

      <div style={{ border: "1px solid black", padding: "5px" }}>
        <h1>SECOND QUESTION:</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>

      {/* THIRD QUESTION */}

      <div style={{ border: "1px solid black", padding: "5px" }}>
        <h1>THIRD QUESTION:</h1>
        {posts.map(
          (post) =>
            post.id < 11 && (
              <div key={post.id}>
                <h2>{post.title}</h2>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Task20Nov;
