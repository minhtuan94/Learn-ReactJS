// import './App.css';
import { useState } from 'react'

/**
 * 
 * @returns Build todoapp bssic
 * Xây dựng dự án to do app đơn giản với thêm xóa công việc
 * 
 * B1: xác định giá trị khởi tạo
 * B2: xác định action
 * _có 2 action: nhập tên job, và add job vào mảng jobs
 */
function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const getJob = JSON.parse(localStorage.getItem('jobs'))  // conver json từ chuỗi thành mảng
    return getJob || []
  })

  function HandleChange(e) {
    setJob(e.target.value)
  }

  function HandleClick() {
    setJobs(item => {

      const newJob = [...item, job]

      // save to local storage
      const jsonJob = JSON.stringify(newJob)  // convert sang json
      localStorage.setItem('jobs', jsonJob)  // lưu vào local storage

      return newJob;
    })
    setJob('')
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>To do List</h1>
      <input
        type='text'
        value={job}
        onChange={HandleChange}
      />
      <button onClick={HandleClick}>Add Job</button>

      <ul>
        {jobs.map((job, item) => (
          <li key={item}>
            {job}
            <span>
              &time;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
