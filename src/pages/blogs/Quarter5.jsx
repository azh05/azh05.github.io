import React from "react";

import BlogTemplate from "../../components/BlogTemplate";
import markdownFile from "../../markdown/Quarter5.md?raw";

import "../../styles/BlogPost.css"

function Quarter5() {
    return ( 
        <div>
            <BlogTemplate markdown={markdownFile} />
        </div>
        
    );
}

export default Quarter5;