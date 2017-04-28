import React       from 'react'
import ReactDOM    from 'react-dom'

import Bootstrap   from 'bootstrap/dist/css/bootstrap.css'
import FontAwesome from 'font-awesome/css/font-awesome.css'
import CSS         from './style/main.styl'

import App         from './components/App.jsx'
import Main        from './components/Main.jsx'
import Single      from './components/Single.jsx'
import Blah        from './components/Blah.jsx'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main} />
			<Route path="/single/:id" component={Single} />
			<Route path="/hello" component={Blah} />
		</Route>
	</Router>
	, document.getElementById('root')
)