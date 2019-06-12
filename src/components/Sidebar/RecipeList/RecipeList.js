import React from 'react';
import './RecipeList.css';
import Title from '../Label/Label'
 class RecipeList extends React.Component {
   state={
     addRecipes:[]
     ,
     title:'',
    
   }
  componentWillMount()
    { 
    
      var retrievedData = localStorage.getItem("recipes");
        var movies2 = JSON.parse(retrievedData);
        if(movies2===null)
        {
            this.setState({addRecipes:[],title:'List is Empty'});
        }else {

            this.state.addRecipes = movies2
            this.setState({title:'Recipe List'});
            
        }
         
     
    }


      refreshMethod=()=>{
       


              var retrievedData = localStorage.getItem("recipes");
        var movies2 = JSON.parse(retrievedData);
        
        if(movies2===null)
        {
            this.state.addRecipes=[]
        }else {
            this.state.addRecipes = movies2
              
          }
      }

   
   render(){

    if(this.props.refresh)
  {
  
    this.refreshMethod();
 
  }
 
 
               return (
      <div>

        {this.state.addRecipes.map((val,i)=>(

      <div key={i} onClick={()=>this.props.onclickSingle(i)} className="recipeListItem">{val.recipe}</div>
        ))}
      </div>
    );
              
  }

   
};

export default RecipeList;