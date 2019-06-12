/**
 * Created by Shumail Mehmood on 4/16/2019.
 */
import React from 'react';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
//import './removebtn.css'
//import '../editrecipe/editrecipe.css';
import EditBox from '../EditBox/EditRecipe';
import './ShowAll.css'
const styles = {
    card: {
        minWidth: 275,
        backgroundColor: '#FFE37D'
    },
};
class SimpleCard extends React.Component {
    state = {
        counter: 0, indexNo: -1, addRecipes: [], cond: false
        ,
    }
    componentWillMount() {


        var retrievedData = localStorage.getItem("recipes");
        var movies2 = JSON.parse(retrievedData);
        if (movies2 === null) {
            this.state.addRecipes= []
        } else {
            this.state.addRecipes = movies2
        }
      

    }
    onCounterRest = () => {
        this.setState({ cond: false, counter: 0, indexNo: -1 })
    }

    onRemoveList = (index) => {
      
        const addRecipes = this.state.addRecipes
        addRecipes.splice(index, 1)
        this.setState({ addRecipes })
        localStorage.setItem("recipes", JSON.stringify(this.state.addRecipes));

 var retrievedData = localStorage.getItem("recipes");
        var movies2 = JSON.parse(retrievedData);
       
        if(movies2.length===0)
            {
                localStorage.removeItem("recipes");
            }
               this.props.onRefresh();
  this.props.onRefreshing();
    }
    //--show--
    onShow = (index) => {
        if (this.state.counter === 0) {
            this.setState({ cond: true, counter: 1, indexNo: index })
        } else {
            if (this.state.indexNo === index) {
                this.setState({ cond: false, counter: 0, indexNo: index })
            }
            else {
                this.setState({ cond: false })
                setTimeout(() => this.disp(index), 0)
            }
        }
    }
    async  disp(index) {
        await this.setState({ cond: true, counter: 1, indexNo: index })
    }

    render() {

if(this.props.onRefresh)
    {
        this.componentWillMount();
    }

{
        return (
            <div className="fade-in ">
                {this.props.type === 'All' ?
                    this.state.addRecipes.map((val, i) => (
                        <Card className={styles.card} style={{
                            backgroundColor: '#FFE37D',
                            marginTop: "25px",
                            textAlign: "left",
                            border: "1px solid rgba(20, 20, 20, 0.5)",
                            width: "660px",
                            marginLeft: " 58px",
                        }}>
                            <CardContent>
                                <Typography style={{
                                    display: 'inline-flex', fontSize: '28px',
                                    fontFamily: '"Montserrat", sans-serif'

                                }} className={styles.title}
                                    component="h1" variant="h1" gutterBottom>
                                    {val.recipe}
                                </Typography>
                                <div style={{ display: 'inline-flex', marginLeft: "20px" }}>


                                    <button onClick={() => this.onShow(i)} className="editBtn">Edit Recipe</button>
                                    <button
                                        onClick={() => {
                                            this.onRemoveList(i)
                                        }}

                                        className="rBtn">Delete Recipe
                    </button>
                                </div>
                                <hr />
                                <Typography style={{
                                    textAlign: 'Left'

                                }} component="h4" variant="h4" gutterBottom>
                                    Ingredient

                    </Typography>


                                <pre style={{
                                    textAlign: 'Left'

                                }}>
                                    {val.ingredient}
                                </pre>

                            </CardContent>
                            {
                                this.state.cond === true ?
                                    <EditBox onRefresh={this.props.onRefresh} count={this.onCounterRest} condition={this.state.cond} indexes={i} clickIndex={this.state.indexNo} /> : null
                            }
                        </Card>
                    ))


                    :

                    this.state.addRecipes.length !== 0 ?

                        <Card className={styles.card} style={{
                            backgroundColor: '#FFE37D',
                            marginTop: "25px",
                            textAlign: "left",
                            border: "1px solid rgba(20, 20, 20, 0.5)",
                            width: "660px",
                            marginLeft: " 58px",
                        }}>
                            <CardContent>
                                <Typography style={{
                                    display: 'inline-flex', fontSize: '28px',
                                    fontFamily: '"Montserrat", sans-serif'

                                }} className={styles.title}
                                    component="h1" variant="h1" gutterBottom>
                                    {this.state.addRecipes[this.props.index].recipe}
                                </Typography>
                                <div style={{ display: 'inline-flex', marginLeft: "20px" }}>


                                    <button onClick={() => this.onShow(this.props.index)} className="editBtn">Edit Recipe</button>
                                    <button
                                        onClick={() => {
                                            this.onRemoveList(this.props.index)
                                        }}

                                        className="rBtn">Delete Recipe
                    </button>
                                </div>
                                <hr />
                                <Typography style={{
                                    textAlign: 'Left'

                                }} component="h4" variant="h4" gutterBottom>
                                    Ingredient

                    </Typography>


                                <pre style={{
                                    textAlign: 'Left'

                                }}>
                                    {this.state.addRecipes[this.props.index].ingredient}
                                </pre>

                            </CardContent>
                            {
                                this.state.cond === true ?
                                    <EditBox onRefresh={this.props.onRefresh}   count={this.onCounterRest} sample="single" edit={this.state.edit} onTchange={this.callingRefresh} update={this.onUpdate} condition={this.state.cond} recipe={this.state.recipe} list={this.state.addRecipes} indexes={this.props.index} clickIndex={this.props.index} /> : null
                            }
                        </Card>
                        : null





                }



















            </div>
        );}
    }
}



export default (SimpleCard);
