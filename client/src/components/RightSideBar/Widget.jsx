import React from 'react'
import './RightSideBar.css'
import Comment from '../../assets/comment.svg'
import Pen from '../../assets/pen.svg'
import Stack from '../../assets/stack.svg'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={Pen} alt='pen' width='18'/>
          <p>Observability is key to the future of sofware (and your DevOps career)</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={Pen} alt='pen' width='18'/>
            <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={Comment} alt='comment' width='18'/>
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={Pen} alt='comment' width='18'/>
            <p>Please welcome Valued Associatives: #958-V2Blast #959 -SpencerG</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={Stack} alt='stackoverflow' width='18'/>
            <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p>Why was this sapm flag declined, yet the questions marked as spam?</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>20</p>
            <p>What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>14</p>
            <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget
