import React from "react";
import './App.css';

// function App() {
//   const [text, setText] = React.useState({
//     text: "",
//     letterCount: 140,
//   });
  
//   function handleTextChange(event) {
//     const { value } = event.target;
//     const newLetterCount = 140 - value.length;
//     setText((prevText) => ({
//       ...prevText,
//       text: value,
//       letterCount: newLetterCount
//     }));
    
//   }
//   const isOverLimit = text.letterCount < 0;
 
//   return (
//     <main>
//       <div className={`form ${isOverLimit? 'red-border':''}`}>
//         <textarea
//           placeholder="tweet"
//           value={text.text}
//           onChange={handleTextChange}
//           rows={3}
//           cols={50}
//         /><br></br>
//         <p>{text.letterCount}</p>
//         <button className="tweet-button">Tweet</button>
//       </div>
//     </main>
//   );
// }
function App() {
  const [charRemaining, setCharRemaining] = React.useState(140);
  const [borderStyle, setBorderStyle] = React.useState({
    borderColor: "#A4D9F9"
  });
  const [tweetBtnStatus, setTweetBtnStatus] = React.useState({
    backgroundColor: "#B8E1FA",
    disabled: true // Initialize the button as disabled
  });

  function showCharcount(event) {
    const charCount = event.target.value.length;
    setCharRemaining(140 - charCount);

    if (charCount <= 0) {
      setBorderStyle({ borderColor: "rgb(164, 217, 249)" });
      setTweetBtnStatus({
        backgroundColor: "#B8E1FA",
        disabled: true // Disable the button
      });
    } else if (charCount > 140) {
      setBorderStyle({ borderColor: "red" });
        setTweetBtnStatus({
        backgroundColor: "#B8E1FA",
        disabled: true // Disable the button
      });
    } else if (charCount > 0){
      setBorderStyle({ borderColor: "rgb(164, 217, 249)" });
      setTweetBtnStatus({
        backgroundColor: "#4AB3F4",
        disabled: false // Enable the button
      });
    }
  }

  return (
    <form id="tweet-form">
      <textarea
        style={borderStyle}
        type="text"
        name="tweet"
        placeholder="What is happening?!"
        onChange={showCharcount}
      />
      <div id="tweet-controls">
        {charRemaining > 0 ? charRemaining : 0}
        <button style={tweetBtnStatus} disabled={tweetBtnStatus.disabled}>
          Tweet
        </button>
      </div>
    </form>
  );
}

export default App;