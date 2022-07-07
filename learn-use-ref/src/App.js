import { useEffect, useRef, useState } from 'react'
//Sau khi bắt đầu đếm, timeId sẽ tự cập nhật ra phạm vi bên ngoài và hàm HandleStop có thể lấy đc Id đã thay đổi của timerId

function App() {

  const timer = useRef()  //luôn trả về obj gồm prop là current

  const [count, setCount] = useState(60)

  //Mục đích để các component đều sử dụng đc biến này

  function HandleStart() {
    //Bắt đầu đếm
    if (timer.current > 0) {
    } else {
      timer.current = setInterval(() => {
        setCount(prev => prev - 1)
      }, 1000)
    }
    console.log('start =>', timer.current);
  }

  // cần phải clear id của setInterval => làm sao để lấy id của interval trong khi nó nằm trong hàm khác
  //cần phải tạo ra 1 biến ở phạm vi bên ngoài
  function HandleStop() {
    clearInterval(timer.current)
    timer.current = -1
  }

  return (
    <div className="App">
      <ul>
        <li>{count}</li>
      </ul>

      <button onClick={HandleStart}>Start</button>
      <button onClick={HandleStop}>Stop</button>
    </div>
  );
}

export default App;
