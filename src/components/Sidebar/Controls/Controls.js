import React,{useState,useEffect} from 'react';
import './Controls.css';

const Controls = (props) => {
    const [count, setCount] = useState(0);
     const [title, setTitle] = useState('Show All Recipes');


function counter(type)
{

if(count===0 && type==='Show')
    {  

setTitle('Hide Recipes');
setCount(count + 1);
    }else{
setTitle('Show All Recipes');
 setCount(count * 0);
 }
}
function Del()
{

         localStorage.removeItem("recipes");
  props.onRefreshing();

}

    return (
        <div className="control">
            <div className="listBtn" onClick={()=>{
                counter('Add')         
                props.onclickAdd()
                }
                }>Add a New Recipe</div>
            <div className="listBtn" onClick={()=>{
            
         var retrievedData = localStorage.getItem("recipes");
        var movies2 = JSON.parse(retrievedData);     
        if(movies2===null)
            {}else
            {
   counter('Show')
    props.onclickShow()
            }
               
                
                }}>{title}</div>
            <div className="listBtn removeBtn" onClick={()=>{ 
counter('Del')
                Del()
                
                }}>Remove All Recipes</div>
            
        </div>
    );
};

export default Controls;