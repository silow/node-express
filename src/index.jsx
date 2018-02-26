import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page/Page';
import PropPanel from './components/PropPanel/PropPanel';
import '../sass/base/_reset.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = { showProperty: false }
    }
    toggleShowProperty = (show) => {
        this.setState({
            showProperty:show
        })
    }
    getChildContext(){
        return {
            showProperty:false
        }
    }
    render() {
        //JSX here!
        return (
            <React.Fragment>
                <PropPanel showProp={this.state.showProperty} onToggleShowProperty={this.toggleShowProperty} />
                <Page showProp={this.state.showProperty} onToggleShowProperty={this.toggleShowProperty} />
            </React.Fragment>
        )
    }
};
ReactDOM.render(<App />, document.body);