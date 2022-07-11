import Paragraph from "./component/paragraph";
import {ThemeContext} from "./ThemeContext";
import { useContext } from "react"
import './App.css'

//context
//compA => compB => compC

//1. Create context: tạo context ở compA
//2. Provider: giúp compA truyền dữ liệu
//3. Consumer: giúp compB hoặc compC nhận dữ liệu

function App() {
  const context = useContext(ThemeContext)

  return (
    <div className="App" style={{padding: 20}}>
      <button onClick={context.ChangeColor} >Theme</button>
      <Paragraph/>
    </div>
  );
}

export default App;
