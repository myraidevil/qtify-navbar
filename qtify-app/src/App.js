import React, { useState } from 'react';
import Navbar from "./component/NavBar"
import './App.css';
import Feedback from './component/Feedback';

function App() {
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const handleFeedbackButtonClick = () => {
    setFeedbackVisible(!feedbackVisible);
    
  };

  return (
    <div className="App">
      <Navbar onFeedbackButtonClick={handleFeedbackButtonClick} />
      {feedbackVisible && <Feedback onFeedbackButtonClick={handleFeedbackButtonClick} />}
    </div>
  );
}

export default App;