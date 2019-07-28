import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionOverview from './QuestionOverview'
import { Tab } from 'semantic-ui-react';

class SelectPage extends Component {

    render() {
        const { questions } = this.props;
        return <Tab panes={panes({ questions })} className="tab" />;
    }
}

const panes = props => {
    const { questions} = props;
    return [
        {
            menuItem: 'Unanswered (' + questions.unansweredQuestions.length + ')',
            render: () => (
                <Tab.Pane>
                    {questions.unansweredQuestions.map((question) => (
                        <QuestionOverview
                            key={question.id}
                            question={question}/>
                    ))}
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Answered (' + questions.answeredQuestions.length + ')',
            render: () => (
                <Tab.Pane>
                    {questions.answeredQuestions.map((question) => (
                        <QuestionOverview
                            key={question.id}
                            question={question}
                            hideVote={true}
                            showFullQuestion={true}
                            showUserVote={true}
                            hideAuthor={true}
                        />
                    ))}
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Made by me (' + questions.ownQuestions.length + ')',
            render: () => (
                <Tab.Pane>
                    {questions.ownQuestions.map((question) => (
                        <QuestionOverview
                            key={question.id}
                            question={question}
                            hideVote={true}
                            hideAuthor={true}
                        />
                    ))}
                </Tab.Pane>
            )
        }
    ];
};

function mapStateToProps ({ questions, authedUser, users }) {
    const answeredQuestionsIds = Object.keys(users[authedUser].answers);
    const unansweredQuestions = Object.values(questions)
        .filter(question => !answeredQuestionsIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);
    const answeredQuestions = Object.values(questions)
        .filter(question => answeredQuestionsIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);
    const ownQuestions = Object.values(questions)
        .filter(question => question.author.includes(authedUser))
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        questions: {
            answeredQuestions,
            unansweredQuestions,
            ownQuestions,
        }
    }
}

export default connect(mapStateToProps)(SelectPage)
