import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Page.scss';

export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.toggleShow=this.toggleShow.bind(this);
    }
    static defaultProps={
        name:'New Page'
    }
    static propTypes = {
        name:PropTypes.string
    }
    toggleShow = (e)=>{
        this.props.onToggleShowProperty(!this.props.showProp);
    }
    render() {
        const showProp = this.props.showProp;
        let property=null;
        let el=document.getElementById('property');
        if(showProp){
            property=ReactDOM.createPortal(<PageProperty/>,el);
        }
        return (
            <div className="page-info">
                <div className="page-title">
                    <h3 onClick={this.toggleShow}>{this.props.name}</h3>
                </div>
                {property}
            </div>
        )
    }
}
class PageProperty extends React.Component{
    render(){
        return(
         <h3>Property</h3>   
        )
    }
}

