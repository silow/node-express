import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Row.scss';

export default class Row extends React.Component{
    constructor(props){
        super(props);
        this.toggleShow = this.toggleShow.bind(this);
        this.state={
            columns:[]
        }
    }
    static defaultProps={
        name:'Row'
    }
    static propTypes = {
        name:PropTypes.string
    }
    toggleShow = (e) => {
        this.props.onToggleShowProperty(!this.props.showProp);
        console.log('[info]:'+this.props.showProp)
    }
    render(){
        const showProp = this.props.showProp;
        let property = null;
        let el = document.getElementById('property');
        if (showProp) {
            property = ReactDOM.createPortal(<RowProperty />, el);
        }
        return(
            <div className="row">
                <h4 onClick={this.toggleShow} className="row-name">{this.props.name}</h4>
                {property}
            </div>
        )
    }
}

class RowProperty extends React.Component {
    render() {
        return (
            <h3>row</h3>
        )
    }
}
