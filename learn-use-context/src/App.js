import Context from "./component/Context";
import {useState,createContext} from 'react'
import './App.css'

export const ThemeContext = createContext()

//context
//compA => compB => compC

//1. Create context: tạo context ở compA
//2. Provider: giúp compA truyền dữ liệu
//3. Consumer: giúp compB hoặc compC nhận dữ liệu

function App() {

  const[theme, setTheme] = useState('dark')

  function ChangeColor() {
    setTheme(theme === 'dark'? 'light': 'dark')
  }

  return (
    <ThemeContext.Provider value={theme}>

    <div className="App" style={{padding: 20}}>
      <button onClick={ChangeColor} >Theme</button>
      <Context/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
