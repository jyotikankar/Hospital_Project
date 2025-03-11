import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user] = useAuthState(auth);
  const [ratings, setRatings] = useState({
    cleanliness: 0,
    availability: 0,
    staffBehavior: 0,
    facilities: 0,
  });
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postRef = doc(db, "posts", id);
        const postSnap = await getDoc(postRef);
        if (postSnap.exists()) {
          setPost(postSnap.data());
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleRatingChange = (aspect, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [aspect]: value,
    }));
  };

  const submitRatings = async () => {
    if (!user) {
      alert("Please log in to submit ratings.");
      return;
    }
    try {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, {
        ratings: {
          ...post?.ratings,
          [user.uid]: ratings,
        },
      });
      alert("Ratings submitted successfully!");
    } catch (error) {
      console.error("Error submitting ratings:", error);
    }
  };

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <h3>Rate this Hospital</h3>
          {Object.keys(ratings).map((aspect) => (
            <div key={aspect}>
              <label>{aspect.charAt(0).toUpperCase() + aspect.slice(1)}:</label>
              <input
                type="number"
                min="0"
                max="5"
                value={ratings[aspect]}
                onChange={(e) => handleRatingChange(aspect, parseInt(e.target.value))}
              />
            </div>
          ))}
          <button onClick={submitRatings}>Submit Ratings</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostView;
