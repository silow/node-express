import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
    render() {
        return (
            <h1>hello {this.props.name}</h1>
        )
    }
}
Page.propTypes = {
    name:PropTypes.string
}
export default Page;