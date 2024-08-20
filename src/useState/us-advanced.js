import React, {useState} from 'react'





const  initialArray=[

  {firstName:"om",
    lastName:"prkash",
    age:20,
    id:11

  },
  {firstName:"gutta",
    lastName:"prakash",
    age:20,
    id:12
},
  {firstName:"prakash",
    lastName:"g",
    age:20,
    id:13
}



];



 
function Index() {
    // Initialize state with an initial array
    const [data ,setData] = useState(initialArray);
    const deleteobj=(comingid)=>{
        const filterobject=data.filter((eachItem)=>{
           return eachItem.id !==comingid
        })
        setData(filterobject);
   
   }
  
    return (
      <div>
        <ul>
          {data.map((eachItem) => {
            const { id, firstName, lastName, age } = eachItem;
            return (
              <li key={id}>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>{age}</div>
                <button onClick={()=>deleteobj(id)}>delete object</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

export default Index;
