import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "Enter the new text here";     //Wrong way to change the state
  // setText("Enter the new text here");  // Correct way to change the state

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared.", "success");
  };

  const handleCopyClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text has been copied.", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed.", "success");
  };

  return (
    <>
      <div className="container my-3">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              border:
                props.mode === "dark" ? "2px solid white" : "2px solid black",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopyClick}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your text summary
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes required to read
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length > 0
            ? text
            : "Enter something in the TextBox to preview here."}
        </p>
      </div>
    </>
  );
}
