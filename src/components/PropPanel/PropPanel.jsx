import React from 'react';
import './PropPanel.scss';

export default class PropPanel extends React.Component{
    constructor(props){
        super(props);
        this.toggleShow=this.toggleShow.bind(this);
        this.state={
            showProperty:this.props.showProp
        }
    }
    toggleShow = (e)=>{
        this.props.onToggleShowProperty(!this.state.showProperty);
    }
    render(){
        let style={
            width:this.props.showProp?'300px':'0'
        }
        return(
            <div className="property-panel" style={style}>
                <div className="panel-title">
                    <h3>Property</h3>
                </div>
                <div id="property" className="panel-body"></div>
            </div>
        )
    }
}