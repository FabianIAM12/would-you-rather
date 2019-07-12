import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SelectPage from "./SelectPage";
import Nav from './Nav'
import Questions from './Questions'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <Nav />
                        <div>
                            <Route path='/' exact component={SelectPage}/>
                            <Route path='/questions/:question_id' component={Questions}/>
                            <Route path='/add' component={AddQuestion}/>
                            <Route path='/leaderboard' component={Leaderboard}/>
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
