import styles from "./style.module.css";

type Props = {
  type: string;
  space: string;
};

const Divider = ({ type, space }: Props) => {
  return (
    <hr
      className={` ${styles.divider} ${type ? styles[`type`] : null} ${
        space ? styles[`space-${space}`] : null
      }`}
    />
  );
};

export default Divider;
