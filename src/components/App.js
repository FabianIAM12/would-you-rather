import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SelectPage from "./SelectPage";
import AddQuestion from "./AddQuestion";
import Nav from './Nav'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <Nav />
                        {this.props.loading === true ? null :
                        <div>
                            <Route path='/' exact component={SelectPage}/>
                            <Route path='/add' component={AddQuestion}/>
                            {/*
                            <Route path='/questions/:question_id' component={Questions}/>
                            <Route path='/leaderboard' component={Leaderboard}/>
                            */}
                        </div>}
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
