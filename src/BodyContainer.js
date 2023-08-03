/* eslint-disable max-len */

import React from 'react'
import { Container, Header,Button, Icon, Image, Grid } from 'semantic-ui-react'
import ProjectLinks from './ProjectLinks'
import './BodyContainer.css'

const BodyContainer = () => (
  <Container >
    <Header as='h1'>Hello!</Header>
    <p className='blogText'>Hi! Thanks for stumbling upon my blog. The blog may look unfinished (or finished) depending on the time you are checking this</p>
    <p className='blogText'>My name is Nguyen, or Jeff, you could call me either way. I spent most of my free time on video games and tinkering with Windows. On top of that, I share an amount of interest in programming, whether it's for robotics or making websites (not to say that I'm an expert at either fields). While I'm not confident with my profficiency in coding efficiently or displaying information logically, I commit to learn more and change based on feedback given to me (which you guys could give me some based on your experience on this website :D) (please tell me to write a message box so you can leave feedbacks later)</p>
    <p className='blogText'>This blog serves as a collection and summary of things I have done (and will do), which not only includes my programming projects but as well as my hobbies (video games, music). I must say some contents I posted here include some rather sensitive content (aka immaturity because look I am really that immature) but I will try my best to censor 'not-so-PG-stuffs' in my video and posts</p>
    <p className='blogText'>For now, please enjoy your time on this blog :D! I tried to put some gimmicky stuffs on this page too so if you find them interesting (or annoying, or buggy), please let me know and give me some feedback on it</p>
    <Header as='h1'>Things I did :D</Header>
    <ProjectLinks/>

    
    
    <Header as='h1'>Follow me!</Header>
        <div>
        <a href='https://www.facebook.com/nguyen.nguyenminhphuc.1/'><Button color='facebook'>
        <Icon name='facebook' /> Facebook
        </Button></a>
        
        <a href='https://www.youtube.com/@nguyenjeff5052/videos'><Button color='youtube'>
        <Icon name='youtube' /> YouTube
        </Button></a>
    </div>
  </Container>
)

export default BodyContainer
