import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page.jsx';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        //JSX here!
        return (
            <React.Fragment>
                <div className="container">
                    <section className="jumbotron">
                        <h3 className="jumbotron-heading">Search Github Users</h3>
                    </section>
                </div>
                <div className="container">
                    {this.props.children}
                </div> 
            </React.Fragment>     
        )
    }
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App><Page/></App>, app);