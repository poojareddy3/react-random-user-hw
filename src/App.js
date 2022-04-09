import { useEffect, useState } from 'react';
import './App.css';
import UserSummary from './components/UserSummary';
import fetchData from './services/random_user';

function App() {

  const [currentUser, setCurrentUser] = useState([])

  async function refreshUser(){
     console.log("refresh user")
     const res = await fetchData()
     //console.log(res)
     setCurrentUser(res) 
  }
  //console.log(currentUser)

  useEffect(() => {
    refreshUser()
  },[])

  return (
    <div className="App">
       <h1>React Random User App</h1>
       <button onClick={(e) => refreshUser(e)}>Refresh</button>

       <div class="summary">
          <UserSummary userData ={currentUser}/>
       </div>
    </div>
  );
}

export default App;
