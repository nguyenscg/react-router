import React from "react";
import { Link } from "react-router-dom";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  return (
    <li className="list-group-item text-truncate">
      <Link to={`/test/post-link/urls/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;