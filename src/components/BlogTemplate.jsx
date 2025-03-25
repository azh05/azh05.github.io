import React from "react";
import NavBar from "./NavBar";
import '../styles/BlogPost.css';
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Import KaTeX styles

function BlogTemplate({markdown}) {
  return (
    <div>
      <NavBar />
      <div className="blog-post">
        <ReactMarkdown rehypePlugins={[rehypeKatex]}>{markdown}</ReactMarkdown>
      </div>
    </div>
    
  );
}

export default BlogTemplate; 