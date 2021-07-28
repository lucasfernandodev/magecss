import style from "./style.module.css";
import Label from "../../Label";

const ReadTime = ({time} : {time : string}) => {
  return (
    <Label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="12" r="9"></circle>
        <polyline points="12 7 12 12 15 15"></polyline>
      </svg>
      <span>{` ${time} min de leitura`}</span>
    </Label>
  );
};

export default ReadTime;
