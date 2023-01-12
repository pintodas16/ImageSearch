function ImageShow({ image }) {
  //   console.log(image);
  return (
    <div className="image-box">
      <img
        className="image"
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
}
export default ImageShow;
