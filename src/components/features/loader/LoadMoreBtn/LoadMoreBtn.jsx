import React from "react";
import PropTypes from "prop-types";
import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      Load More
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
