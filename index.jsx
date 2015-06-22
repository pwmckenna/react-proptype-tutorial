/** @jsx React.DOM */
'use strict'
var React = require('react');
var Component = require('./Component');

React.render(<Component prop1={3} prop2={"prop value wooooo"} />, document.getElementById('content'))