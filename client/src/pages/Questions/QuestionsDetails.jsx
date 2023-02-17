import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link , useNavigate} from 'react-router-dom'
import downVotes from '../../assets/caret-down-solid.svg'
import upVotes from '../../assets/caret-up-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import {postAnswer} from '../../actions/question'
import DisplayAnswer from './DisplayAnswer'
import './Questions.css'

const QuestionsDetails = () => {

    const { id } = useParams();
    const dispatch= useDispatch();
    const Navigate= useNavigate();
    const questionsList = useSelector(state => state.questionsReducer)
    const [Answer, setAnswer] = useState('')
    const User = useSelector((state) => (state.currentUserReducer))
    const handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if(User===null){
            alert('Login or SignUp to answer a question')
            Navigate('/Auth')
        }
        else{
            if(Answer === ''){
                alert("Enter an answer before submitting")
            }
            else{
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name}))
            }
        }
    }
    // var questionsList = [{
    //     _id:'1',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It mean to be",
    //     questionTags: ['java','node js','react js','mongodb'],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //       answerBody: "answer",
    //       userAnswered: "kumar",
    //       answeredOn: "jan 2",
    //       userId: 2,
    //     }]
    //   },{
    //     _id:'2',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It mean to be",
    //     questionTags: ['javascript','R','python'],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //       answerBody: "answer",
    //       userAnswered: "kumar",
    //       answeredOn: "jan 2",
    //       userId: 2,
    //     }]
    //   },{
    //     _id:'3',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It mean to be",
    //     questionTags: ['javascript','R','python'],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //       answerBody: "answer",
    //       userAnswered: "kumar",
    //       answeredOn: "jan 2",
    //       userId: 2,
    //     }]
    //   }]

  return (
    <div className='question-details-page'>
      {
        questionsList.data === null ?
        <h1>Loading....</h1> :
        <>
            {
                questionsList.data.filter(question  => question._id === id).map(question=> (
                    <div key={question._id}>
                        <section className="question-details-container">
                            <h1>{question.questionTitle}</h1>
                            <div className="question-details-container-2">
                                <div className="question-votes">
                                    <img src={upVotes} alt='upvotes' width="18px" className='votes-icon'/>
                                    <p>{question.upVotes?.length - question.downVotes?.length || 0}</p>
                                    <img src={downVotes} alt="downvotes" width="18px" className='votes-icon'/>
                                </div>
                                <div style={{width:"100%"}}>
                                    <p className="question-body">{question.questionBody}</p>
                                    <div className="question-details tags">
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type="button">Share</button>
                                            <button type="button">Delete</button>
                                        </div>
                                        <div>
                                            <p>asked {question.askedOn}</p>
                                            <Link to={`/User/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                                <Avatar backgroundColor="orange" px="10px" py="15px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                {
                                                    question.userPosted
                                                }
                                                </div>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 &&
                           ( <section>
                                <h3>{question.noOfAnswers} Answers</h3>
                                <DisplayAnswer key={question._id} question={question}/>
                            </section>
                           )
                        }
                        <section className="post-ans-container">
                            <h3>Your Answer</h3>
                            <form onSubmit={ (e) => {handlePostAns(e,question.answer.length)}}> 
                                <textarea cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                                <input type="Submit" className='post-ans-btn' value="Post Your Answer"/>
                            </form>
                            <p>
                                Browse other Question tagged
                                {
                                    question.questionTags.map((tag)=>(
                                        <Link to="/Tags" key={tag} className="ans-tags">{tag}</Link>
                                    ))
                                } or 
                                <Link to="/AskQuestion" style={{textDecoration: "none", color: "#009dff"}}> ask your own question.
                                </Link>
                            </p>
                        </section>
                    </div>
                ))
            }
        </>
      }
    </div>
  )
}

export default QuestionsDetails
