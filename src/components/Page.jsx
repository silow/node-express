import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    render() {
        return (
            <h1>hello {this.props.name},{this.state.date.toLocaleTimeString()}</h1>
        )
    }
}
Page.propTypes = {
    name:PropTypes.string
}
Page.defaultProps = {
    name:'silow'
}
export default Page;