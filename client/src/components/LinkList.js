import React from 'react';


const LinkList = ({links}) => {

    const linkItems = links.map((link) => {
        return <li key={link.title}><a href={link.url}>{link.title}</a></li>
    })

  return (
      <ul>{linkItems}</ul>
  );
}

export default LinkList;