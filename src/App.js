import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import Typing from './components/Typing'
import './App.css'

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
       
        <ChatEngine
            height="100vh"
            projectID="de8c7c82-0661-4403-815e-32f44f60b637"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
           // onConnect={(creds) => console.log(creds)}
            //renderIsTyping={(people) => <Typing {...people}/>}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;