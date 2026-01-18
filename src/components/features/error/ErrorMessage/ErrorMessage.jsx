import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  const { error } = styles;

  return <div className={error}>{message}</div>;
};

export default ErrorMessage;
