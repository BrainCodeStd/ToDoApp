import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <table className="header">
            <tr >
                <th rowspan="2">
                    <i class="fa fa-cutlery" style={{

                        fontSize: '70px'

                    }}></i>
                </th>
                <th >
                    <a href="https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-recipe-box/">
                        Free Code Camp
                                              </a>
                </th>
            </tr>
            <tr >

                <th>
                    Recipe Box
                                          </th>
            </tr>

        </table>
    );
};

export default Header;