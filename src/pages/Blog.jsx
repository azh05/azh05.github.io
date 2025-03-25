import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../styles/Blog.css';

function Blog() {
  // State to hold the list of posts
  const [posts, setPosts] = useState([
    { title: "Thoughts on UCLA Classes after 5 Quarters", date: "March 23, 2025", id: "quarter5" }
  ]);

  return (
    <div className="">  
      <NavBar />
      <div className="blog-content">
        <p>
            Inspired by Terry Tao's Blog Posts! Thoughts of an undergraduate at UCLA.
        </p>
        <div className="scrolling-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>{post.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Blog;
