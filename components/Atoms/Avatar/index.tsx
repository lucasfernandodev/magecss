import style from "./style.module.css";

type AvatarProp = {
  src: string;
  name: string;
  size?: number;
};

const Avatar = ({ src, name, size }: AvatarProp) => {
  return (
    <div
      className={style.boxAvatar}
      style={
        size
          ? { width: `${size}px`, height: `${size}px` }
          : { color: "inherit" }
      }
    >
      <img src={src} alt={name} className={style.avatar} />
    </div>
  );
};

export default Avatar;
