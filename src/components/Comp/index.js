import styles from "./comp.module.css";

export default (text = "Hello!") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  element.className = "rounded bg-blue-100 border max-w-md m-4 p-4";
  // element.className = styles.redText;
  // element.classList.add("bold-text");
  return element;
};
