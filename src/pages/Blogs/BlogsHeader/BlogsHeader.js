import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Blogs from "../Blogs/Blogs";

const BlogsHeader = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Blogs />
    </div>
  );
};

export default BlogsHeader;
