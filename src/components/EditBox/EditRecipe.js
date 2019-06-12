/**
 * Created by Shumail Mehmood on 4/17/2019.
 */
import React, {Component} from 'react';
//import ViewAll from '../viewallcard/viewall'

import './EditRecipe.css'
class EditRecipe extends Component {
state={
    recipe:'',ingredient:'',refresh:false,addRecipes: []
}
    onUpdate=()=>{


        this.state.addRecipes[this.props.indexes]={"recipe": this.state.recipe, "ingredient":this.state.ingredient}


        localStorage.setItem("recipes", JSON.stringify( this.state.addRecipes));
        this.onCancel(this.props.indexes);
          var retrievedData = localStorage.getItem("recipes");
        var movies2 = JSON.parse(retrievedData);
            this.state.addRecipes = movies2
        
this.props.onRefresh();


    }

    onchangeTitle=(e)=>{

        let value=e.target.value;
        this.setState({recipe:value,})


    }

    onchangeIng=(e)=>{
        let value=e.target.value;
        this.setState({ingredient:value})


    }


onCancel=(i)=>{
    document.getElementById(i.toString()).style.display = 'none'
    this.props.count();
}
    componentWillMount() {


        var retrievedData = localStorage.getItem("recipes");
        var movies2 = JSON.parse(retrievedData);
        if (movies2 === null) {
            this.setState({ addRecipes: [] });
        } else {
            this.state.addRecipes = movies2
        }
      

    }
componentDidMount()
{
if(this.props.condition===true)
            {
if(this.props.sample==='single') {

    document.getElementById(this.props.indexes.toString()).style.display = 'none'
    if ( this.props.clickIndex>0)
    {
        document.getElementById(this.props.clickIndex.toString()).style.display = 'block'
        let text = document.getElementById(this.props.clickIndex.toString());
        text.classList.add('editBox');
        this.setState({recipe:this.props.list[this.props.clickIndex].recipe,ingredient:this.props.list[this.props.clickIndex].ingredient  })


    }else if(document.getElementsByTagName("section")[this.props.clickIndex].getAttribute("id")== this.props.clickIndex)
    {
        document.getElementById(this.props.clickIndex.toString()).style.display = 'block'
        let text = document.getElementById(this.props.clickIndex.toString());
        text.classList.add('editBox');
        this.setState({recipe:this.props.list[this.props.clickIndex].recipe,ingredient:this.props.list[this.props.clickIndex].ingredient  })

    }

}
else {


    for (var i = 0; i < this.state.addRecipes.length; i++) {


        if (document.getElementsByTagName("section")[i].getAttribute("id") == this.props.clickIndex) {
            document.getElementById(this.props.clickIndex.toString()).style.display = 'block'
            let text = document.getElementById(this.props.clickIndex.toString());


            text.classList.add('editBox');

            this.setState({recipe:this.state.addRecipes[i].recipe,ingredient:this.state.addRecipes[i].ingredient  })


        }
        else {
            document.getElementById(i.toString()).style.display = 'none'

        }
    }

}




                
            }





}
    render() {


        return (
            <section id={this.props.indexes} className="fade-in">


<form>
   <table>
       <tr>
           <td colSpan="2"> <label>Edit Title</label></td>

       </tr>
       <tr>
           <td colSpan="2">  <input onChange={(e)=>this.onchangeTitle(e)} type="text" value={this.state.recipe} /></td>

       </tr>
       <tr>
           <td colSpan="2"><label>Edit Ingredient</label></td>

       </tr>
       <tr>
           <td colSpan="2"> <textarea onChange={(e)=>this.onchangeIng(e)} value={this.state.ingredient}></textarea></td>

       </tr>
       <tr>
           <td colSpan="2"> <div className="submitBtn" onClick={this.onUpdate} >Edit</div><div onClick={()=>{this.onCancel(this.props.indexes)}} className="cancelBtn">Cancel</div></td>

       </tr>

   </table>


</form>
            </section>
        );
    }
}

EditRecipe.propTypes = {};

export default EditRecipe;
