import React, {useState} from 'react'
import './object.css'

const UseStateObject = () => {
   const [profile, setProfile] = useState({
     name: 'Abdullah Sharipov',
     job: 'Free lancer, fullstack senior web developer, ethical hacker',
     city: 'Medinah',
     company: 'google'
   })
const handleUpdateCompany =()=> {
    setProfile({...profile, company: 'Microsoft'})
}


  return (
    <div className='stateObject'>
       <h2 className='--text-center --my2'>useState in Object</h2>

       <div className='--card mx2 --text-center'>
           <h2>name: {profile.name}</h2>
           <h4>job: {profile.job}</h4>
           <h4>City: {profile.city}</h4>
           <h4>company: {profile.company}</h4>
       </div>
       <div className="--center-all --my2">
           <button className='--btn --btn-primary' onClick={handleUpdateCompany}>Change Company</button>
       </div>
    </div>
  )
}

export default UseStateObject