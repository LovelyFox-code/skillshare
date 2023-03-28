import styles from "./Button.module.css";

interface IButtonProps {
  name: string;
  onClick: () => void;
}
const Button = (props: IButtonProps) => {
  return (
    <div>
      <button className={styles.btn} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
