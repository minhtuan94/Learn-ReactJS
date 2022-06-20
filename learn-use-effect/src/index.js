import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Fake comments
//Cách custom event để tự phát đi 1 event
function emitComment( id ) {

  setInterval(() => {
    //tự phát event trong phạm vi window
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000);   //phát mỗi 2 giây 1 lần

}

emitComment(1)
emitComment(2)
emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
