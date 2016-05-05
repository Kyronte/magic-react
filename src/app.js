import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {hashHistory, Router, Route, Redirect} from 'react-router';
import Layout from './layout/layout';



const app = (
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
		</Route>
	</Router>	
);


jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('comment-box'),
    function() {
      console.timeEnd('react-app')
    }
  );
})