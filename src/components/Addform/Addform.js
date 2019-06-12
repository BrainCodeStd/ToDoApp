/**
 * Created by Shumail Mehmood on 4/16/2019.
 */
import React, {Component} from 'react';
import './Addform.css'

class AddForm extends Component {
    state={
recipe:'',
ingred:'',
addRecipes:[],
    };

  componentWillMount()
  {
    var retrievedData = localStorage.getItem("recipes");
    var movies2 = JSON.parse(retrievedData);
    if(movies2===null)
    {
      this.setState({addRecipes:[]});
    }else {
      this.state.addRecipes = movies2
    }
   
  }

      onchangeRecipe=(e)=>{
let value=e.target.value;
    this.setState({recipe:value})
  }
  onchangeIng=(e)=>{
    let value=e.target.value;
    this.setState({ingred:value})
  }
  onAddRecipe=(e)=>{
      e.preventDefault();
if( this.state.recipe.length===0 || this.state.ingred.length===0 )
{
  alert('Must Fill All Fields')
}else {
  this.state.addRecipes.push({"recipe": this.state.recipe, "ingredient": this.state.ingred})

  localStorage.setItem("recipes", JSON.stringify(this.state.addRecipes));
 this.props.onDefault();
}}
    render() {
        return (
            <form className="form fade-in">


                <center>
                <input onChange={(e)=>{this.onchangeRecipe(e)}} required className="" type="text" placeholder="Recipe"/>
                <br/>
<textarea onChange={(e)=>{this.onchangeIng(e)}} className="" placeholder="Ingredients" required></textarea><br/>
                    <div onClick={(e)=>{this.onAddRecipe(e)}} className="button1">Submit Recipe</div><br/>
                    <div onClick={this.props.onDefault}  className="cancelbtn">Cancel Recipe</div>

                </center>
            </form>
        );
    }
}



export default AddForm;
