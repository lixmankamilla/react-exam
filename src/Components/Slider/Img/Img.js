export const Img = ({ src, alt, className }) => {
  return (
    <div className={"img " + className}>
      <img src={src} alt={alt} />
    </div>
  );
};
