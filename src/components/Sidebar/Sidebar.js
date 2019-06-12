import React, { Component } from 'react';
import './Sidebar.css';
import Headers from './Header/Header';
import Controls from './Controls/Controls';
import Label from './Label/Label';
import RecipeList from './RecipeList/RecipeList';
class SideBar extends Component {

    render() {
        return (
            <div className="sideBar">
                <center>
{this.props.children}
                </center>
            </div>
        );
    }
}

export default SideBar;