import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SelectPage from "./SelectPage";
import AddQuestion from "./AddQuestion";
import Nav from './Nav'
import QuestionDetail from "./QuestionDetail";
import HighScore from "./HighScore";
import QuestionResult from "./QuestionResult";
import Login from "./Login";
import {Grid} from 'semantic-ui-react';
import NoMatchExists from "./NoMatchExists";
import Logout from "./Logout";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        let {authedUser} = this.props;

        return (
            <Router>
                <LoadingBar/>
                <div className='container'>
                    {authedUser === null ? (
                        <Route render={() => (
                            <Login/>
                        )}/>
                    ) : (
                        <Fragment>
                            <Nav/>
                            <Grid textAlign='center'
                                  verticalAlign='middle'>
                                <Grid.Column style={{maxWidth: 450}}>
                                    {this.props.loading === true ? null :
                                        <div>
                                            <Switch>
                                                <Route path='/' exact component={SelectPage}/>
                                                <Route path='/add' component={AddQuestion}/>
                                                <Route path='/question/:question_id' component={QuestionDetail}/>
                                                <Route path='/result/:question_id' component={QuestionResult}/>
                                                <Route path='/highscore' component={HighScore}/>
                                                <Route path='/logout' component={Logout}/>
                                                <Route component={NoMatchExists}/>
                                            </Switch>
                                        </div>}
                                </Grid.Column>
                            </Grid>
                        </Fragment>
                    )}
                </div>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null,
        authedUser
    };
}

export default connect(mapStateToProps)(App)
