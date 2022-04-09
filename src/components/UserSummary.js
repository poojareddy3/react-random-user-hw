import { useState } from "react"

function UserSummary(props){

    const [showMore, setShowMore] = useState(false)
    //console.log(props.userData)
    const user = props.userData[0]
    console.log(user)

    const toggleShowMore = () =>{
        setShowMore(prevState => !prevState)
    }
    return(
       <div className="mainDiv">
           <div className="displayDiv">
           { (user != null) ? 
           <div className="nameDiv">
               <h3><span>Name: </span> {user.name.first} {user.name.last}</h3>
               <h3><span>Email: </span>{user.email}</h3>
           </div>
          : "There is no User Data!" } 
          </div>

          <button onClick={(e) => toggleShowMore(e)}>More Info</button>
          { showMore ? 
          <div className="moreInfo">
              <br></br>
              <img src={user.picture.medium} alt=""/>
              <h3><span>Name: </span>{user.name.first}</h3>
              <h3><span>Street: </span>{user.location.street.name}</h3>
              <h3><span>City: </span>{user.location.city}</h3>
              <h3><span>State: </span>{user.location.state}</h3>
              <h3><span>User Name: </span>{user.login.username}</h3>
           </div> : (user != null) ? 
           <div className="showMore">
               <h3><span>Name: </span>{user.name.first} {user.name.last}</h3>
               <h3><span>Email: </span>{user.email}</h3>
           </div>
          : "There is no User Data!" }          
        </div>
        
    )
}

export default UserSummary