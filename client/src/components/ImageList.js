import React from "react";

const ImageList = ({ images }) => {
  const imageItems = images.map((image) => {
    return (
      <li key={image.title}>
        <img src={image.url} />
      </li>
    );
  });

  return (
    <div>
      <ul className="img-list">{imageItems}</ul>
    </div>
  );
};

export default ImageList;
