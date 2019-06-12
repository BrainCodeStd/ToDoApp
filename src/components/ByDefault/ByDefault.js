/**
 * Created by Shumail Mehmood on 4/16/2019.
 */
import React, {Component} from 'react';

import './ByDefault.css'
class ByDefault extends Component {
    render() {
        return (
            <div className="by fade-in">
                <center>
               <h1> This is a Recipe App</h1>
               <h2> You can record your recipes here</h2>
               <p> All your recipes are stored in your browser's local storage and any changes you make will remain saved as long as you continue to access this page from the same browser.
</p>
                <p>Built by <a>Sean Smith</a></p>
                    </center>
            </div>
        );
    }
}



export default ByDefault;
