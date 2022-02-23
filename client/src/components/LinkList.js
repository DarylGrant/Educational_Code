import React from "react";

const LinkList = ({ links }) => {
  const linkItems = links.map((link) => {
    return (
      <li key={link.title}>
        <a href={link.url} target="_blank">
          {link.title}
        </a>
      </li>
    );
  });

  return <ul id="link-items">{linkItems}</ul>;
};

export default LinkList;
