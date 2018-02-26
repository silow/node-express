import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Row from '../Row/Row';
import './Page.scss';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.toggleShow = this.toggleShow.bind(this);
        this.addRow = this.addRow.bind(this);
        this.state = {
            rows: [{ id: 0, name: 'row1' },
            { id: 1, name: 'row2' }]
        }
    }
    static defaultProps = {
        name: 'New Page'
    }
    static propTypes = {
        name: PropTypes.string
    }
    toggleShow = (e) => {
        this.props.onToggleShowProperty(!this.props.showProp);
    }
    addRow = (e) => {
        let id=this.state.rows.length;
        this.setState(prevState => {
           return {rows:[...prevState.rows,{ id: id, name: 'new Row' }]}
        })
    }
    render() {
        const showProp = this.props.showProp;
        let property = null;
        let el = document.getElementById('property');
        if (showProp) {
            property = ReactDOM.createPortal(<PageProperty />, el);
        }
        return (
            <div className="page-info">
                <div className="page-title">
                    <h3 onClick={this.toggleShow}>{this.props.name}</h3>
                    <button className="page-addrow btn" onClick={this.addRow}>+</button>
                </div>
                <div className="page-content">
                    <RowList num={this.state.rows} showProp={this.props.showProp} onToggleShowProperty={this.props.onToggleShowProperty} />
                </div>
                {property}
            </div>
        )
    }
}
class PageProperty extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.getElementById('property');
    }
    componentWillUnmount(){
        this.el.innerHTML="";
    }
    render() {
        return ReactDOM.createPortal(
            <h3>Page111</h3>,
            this.el
        )
    }
}
class RowList extends React.Component {
    render() {
        const num = this.props.num;
        const rows = num.map(row => {
            return <Row name={row.name} key={row.id} showProp={this.props.showProp} onToggleShowProperty={this.props.onToggleShowProperty} />
        })
        return (
            <React.Fragment>{rows}</React.Fragment>
                
        )
    }
}
