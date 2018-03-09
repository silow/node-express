import React from 'react';
import { render } from 'react-dom';
import Page from './components/Page/Page';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import showPanel from './reducer'
import PropPanel from './components/PropPanel/PropPanel';
import '../sass/base/_reset.scss';

let store = createStore(showPanel)

class App extends React.Component {
    constructor() {
        super();
        this.state = { showProperty: false }
    }
    toggleShowProperty = (show) => {
        this.setState({
            showProperty: show
        })
    }
    getChildContext() {
        return {
            showProperty: false
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
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.body);