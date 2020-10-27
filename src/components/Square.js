import "./square.css";
import React, { useState } from "react";

export default function Square(props) {
  // const [props.value, props.onClick] = (null);

  return (
    <button className="square" onClick={() => props.onClick("🐼")}>
      {props.value}
    </button>
  );
}
