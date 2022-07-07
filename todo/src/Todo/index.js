// import './App.css';
import { useReducer, useRef } from 'react'
import reducer, { initialState } from './reducer'
import { addJob, setJob, deleteJob } from './action'
import logger from './logger'

//4 .dispatch

function TodoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initialState)

  //dùng destructoring để lấy thông tin trong state
  const { job, jobs } = state

  const inputRef = useRef()

  function HandleSubmit() {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>To do list useReducer</h1>
      <input
        placeholder='Enter todo...'
        value={job}
        ref={inputRef}
        //Vấn đề là phải lấy đc e.targer.value để truyền dữ liệu lên reducer rồi nó mới set lại state
        onChange={e => {
          dispatch(setJob(e.target.value))
          //khi nhập chữ, nó mang theo payload là e.target.value truyền vào setJob, userReducer sẽ gọi reducer để set state mới ứng với action
        }}
      />
      <button onClick={HandleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={()=> dispatch(deleteJob(index))}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

/**
 * useRef để focus lại vào input
 */