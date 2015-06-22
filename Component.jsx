'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <pre>{JSON.stringify(this.props, null, 4)}</pre>
        );
    }
});