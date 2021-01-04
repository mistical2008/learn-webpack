import styles from "./comp.module.css";

export default (text = "Hello!") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  element.className = styles.redText;
  element.classList.add("bold-text");
  return element;
};
