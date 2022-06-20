import {useState} from 'react'
import UpdateDOM from './example/UpdateDOM'
import CallAPI from './example/CallAPI'
import Timer from './example/Timer'
import PreviewAvatar from './example/PreviewAvatar'
import FakeChatApp from './example/FakeChatApp'


function App() {

  const [callApi, setCallApi] = useState(false)
  const [update, setUpdate] = useState(false)    
  const [timer, setTimer] = useState(false)    
  const [avatar, setAvatar] = useState(false)    
  const [fakeChat, setFakeChat] = useState(false)    

    return (
        <div>
            <h1>Learn useEffect</h1>
            <button onClick={()=>setUpdate(!update)}>Update DOM</button>
            {update && <UpdateDOM />}
            <hr/>
            <button onClick={()=>setCallApi(!callApi)}>Call API</button> <br/>
            {callApi && <CallAPI />}
            <hr/>
            <button onClick={()=>setTimer(!timer)}>Timer</button> <br/>
            {timer && <Timer />}
            <hr/>
            <button onClick={()=>setAvatar(!avatar)}>Preview avatar</button> <br/>
            {avatar && <PreviewAvatar />}
            <hr/>
            <button onClick={()=>setFakeChat(!fakeChat)}>Fake chat app</button> <br/>
            {fakeChat && <FakeChatApp />}
        </div>
    )
}

export default App;
