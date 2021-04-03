import React from "react";
import style from "./book.module.css";
function BookList(props) {
  return (
    <div className={style.book}>
      <img src={props.image} className={style.image} alt="" />
      <h5>{props.title}</h5>
      <div className={style.text}>
        <p>By {props.author}</p>
        <p>Published Date: {props.published}</p>
        <button className={style.myStyle}>
            <a href={props.url} className={style.linkStyle} target="_blank"  role="button">More Info</a>
        </button>
      </div>
    </div>
  );
}
export default BookList;