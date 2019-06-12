import React, { Component } from 'react';
import SideBar from '../../components/Sidebar/Sidebar';
import Addform from '../../components/Addform/Addform';
import Default from '../../components/ByDefault/ByDefault';
import ViewAll from '../../components/ShowAllRecipes/ShowAll';
import RenderPlace from '../../components/Renderplace/Renderplace'
import Headers from '../../components/Sidebar/Header/Header';
import Controls from '../../components/Sidebar/Controls/Controls';
import Label from '../../components/Sidebar/Label/Label';
import RecipeList from '../../components/Sidebar/RecipeList/RecipeList';
class Recipe extends Component {
    state = {
        openAddform: false,
        openDefaultPage: true,
        openShowAll: false,
        refreshList: true,
        counter: 0,
        status: '',
        index: -1,
        btnTitle: '', title: '', refresh: false, addRecipes: []
    }

    componentWillMount() {
this.getRefresh();


    }
    getRefresh = () => {
        var retrievedData = localStorage.getItem("recipes");
        var movies2 = JSON.parse(retrievedData);
      
        var type = typeof (movies2);
     

        if (movies2 == null) {

            this.setState({ title: 'List is Empty', addRecipes: [] });
        } else {
          

            this.setState({ title: 'Recipe List ', addRecipes: movies2 });


        }
    }
    clickOnShowAllRecipe = () => {
      
        this.getRefresh();
        if (this.state.addRecipes.length === 0) {

        }
        {
            if (this.state.counter === 0) {
               

                this.setState({
                    openAddform: false,
                    openDefaultPage: false,
                    openShowAll: true,
                    counter: 1,
                    status: 'All',

                });

                this.state.openShowAll = true;

            } else {

                this.setState({
                    openAddform: false,
                    openDefaultPage: true,
                    openShowAll: false,
                    counter: 0,

                });
            }
        }

    }

    onRefresh = () => {
        this.setState({ refreshList: true })
    }
    clickOnAddRecipe = () => {

        this.setState({
            openAddform: true,
            openDefaultPage: false,
            openShowAll: false,
            counter: 0
        });
    }

    makeDefaultTrue = () => {
        this.getRefresh();
        this.setState({
            openAddform: false,
            openDefaultPage: true,
            openShowAll: false,
            refreshList: true,
            refresh: false,
        });

    }



    onDel = () => {
      
        this.getRefresh();
        this.setState({
            refreshList: true,
            refresh: true, btnTitle: 'Show All Recipes'
        });

    }
    onOpen = (i) => {
    
        this.setState({
            openAddform: false,
            openDefaultPage: false,
            openShowAll: true,
            status: 'Single',
            index: i,
        });
    }

    render() {
        const { refreshList } = this.state;
        var componentRender = '';
        if (this.state.openDefaultPage) {

            componentRender = <Default />
        }
        if (this.state.openAddform) {
            componentRender = <Addform onDefault={this.makeDefaultTrue} />
        }
  
        if (this.state.openShowAll) {
            componentRender = <ViewAll onRefreshing={this.onDel} onRefresh={this.onRefresh} type={this.state.status} index={this.state.index} />

        }





        return (
            <div>

                <SideBar>

                    <Headers />
                    <Controls
                        onclickAdd={this.clickOnAddRecipe}
                        onclickShow={this.clickOnShowAllRecipe}
                        btnTitle={this.state.btnTitle}
                        onRefreshing={this.onDel}
                    />


                    <Label title={this.state.title} />

                    <RecipeList refreshing={this.state.refresh} onclickSingle={this.onOpen} refresh={this.state.refreshList} />


                </SideBar>


                <RenderPlace>

                    {componentRender}

                </RenderPlace>



            </div>
        );
    }
}


export default Recipe;