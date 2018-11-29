import React, {Component} from 'react';
import './App.css';

import Nav from "./nav/Nav";
import Element from "./element/Element";

class App extends Component {
    state = {
        menuItems: [
            {
                title: "one"
            },
            {
                title: "two",
                subItems: [
                    "one",
                    "two",
                    "three"
                ]
            },
            {
                title: "three",
                subItems: [
                    "one"
                ]
            }
        ],
        showNav: false
    };

    toggleShowNav = () => {
        const shown = this.state.showNav;
        console.log(shown);
        this.setState({showNav: !shown})
    };


    render() {
        return (
            <div className="App">
                {this.state.showNav ?
                    <Nav
                        menuItems={this.state.menuItems}
                    /> : null
                }

                <Element
                    toggle={this.toggleShowNav}
                />
            </div>
        );
    }
}

export default App;
