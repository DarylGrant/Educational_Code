import React from 'react';


const ImageList = ({images}) => {

    const imageItems = images.map((image) => {
        return <li key={image.title}><img src={image.url}  /></li>
    })

  return (
      <ul>{imageItems}</ul>
  );
}

export default ImageList;