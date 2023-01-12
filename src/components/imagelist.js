import React from "react";
import ImageShow from "./ImageShow";
function ImageList({ images }) {
  // console.log(images);
  const content = images.map((image, index) => {
    return <ImageShow image={image} id={image.id} />;
  });
  return (
    <div className="image-container">
      <div className="images">{content}</div>
    </div>
  );
}
export default ImageList;
