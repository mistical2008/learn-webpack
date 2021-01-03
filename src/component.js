// import styles from "./componenet.css";
export default (text = "Hello!") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  // element.className = styles.redText;
  return element;
};
