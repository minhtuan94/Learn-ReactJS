// import './App.css';
import { useReducer, useRef } from 'react'

//1. InitialState
const initialState = {
  job: '',
  jobs: []
}

//2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

//tạo ra 3 action dưới dạng function

// tạo 1 hàm setJob có đối số là payload, trả về obj có type và payload
const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

// tạo 1 hàm setJob có đối số là payload, trả về obj có type và payload
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

// tạo 1 hàm setJob có đối số là payload, trả về obj có type và payload
const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

//3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,        //bảo lưu lại nhưng state trước đó
        job: action.payload
      }

    case ADD_JOB:
      return {
        ...state,   //bảo lưu state cũ
        jobs: [...state.jobs, action.payload],    //lưu job cũ và thêm job mới
      }

      case DELETE_JOB:

      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      return {
        ...state,   //bảo lưu state cũ
        jobs: newJobs,    //lưu job cũ và thêm job mới
      }

    default:
      throw new Error('Invalid action');
  }
}

//4 .dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

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

export default App;

/**
 * useRef để focus lại vào input
 */