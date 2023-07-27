import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function FilterCat(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://todoapi.goughkyle.com/api/Categories`).then(response => {
      console.log(response)
      setCategories(response.data)
    })
    }, []);
  return (
    <div className="text-center mt-5">
        <button className="btn btn-outline-info bg-dark m-1" onClick={() => props.setFilter(0)}>All</button>
        {categories.map(c =>
            <button key={c.categoryId} className='btn btn-outline-info bg-dark m-1' onClick={() => props.setFilter(Number(c.categoryId))}>
            {c.catName}
           </button>)}
        {!props.showDone ? 
            <button className='btn btn-info m-1' onClick={() => props.setShowDone(!props.showDone)}>
                Show Complete
            </button> :
            <button className="btn btn-warning m-1" onClick={() =>props.setShowDone(!props.showDone)}>
                Hide Complete
            </button>
            }
             
    </div>
  )
}
