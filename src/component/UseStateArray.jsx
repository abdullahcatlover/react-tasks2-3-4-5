import React from 'react'
import { useState } from 'react'
import {peopleData} from '../people-data'
import {BiTrash} from 'react-icons/bi'
import './array.css'

const UseStateArray = () => {
   const [people, setPeople] = useState(peopleData);

   const handleDeleteAll =()=> {
      setPeople([])
   }

   const handleReturnAll =()=> {
      setPeople(peopleData)
   }

   const handleRemoveItem =(id)=> {
      const newPeople = people.filter((person)=> person.id !== id)
     setPeople(newPeople)
   }


    return (
        <div className='container'>
            <div className='items__body'>
               { people.map((person)=> {
                  return (
                     <div className='per__person'>
                         <h3 className='person__name'>{person.name}</h3>
                         <div className='trash'>
                            <BiTrash className='trash' size={20} color={'green'}
                            onClick={()=> handleRemoveItem(person.id)}
                            />
                         </div>
                     </div>
                  )
               })}
               <button className='btn' onClick={handleDeleteAll}>Delete All</button>
               <button className='btn-on' onClick={handleReturnAll}>Return All</button>
            </div>
        </div>
    )
}

export default UseStateArray;