import React from 'react'
import { Container, Image, Label, Reveal,Header,Grid } from 'semantic-ui-react'
import './ProjectLinks.css'
import RevealImage from './RevealImage'
const ProjectLinks = () => (
  <Grid stackable centered>
    <Grid.Row columns={3}>
      <Grid.Column stretched>
        <RevealImage
          src='https://cdn.tuoitre.vn/thumb_w/730/2021/4/16/photo-2-161855006244767777306.jpg'
          link ='http://example.com'
          title ='Arduino projects'/>
      </Grid.Column>
      <Grid.Column stretched>
        <RevealImage
          src='https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/92673786_1137170423288124_5417096840032026624_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qfywAYvc6YwAX8p4Dv2&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfAue4-GQqbxlK1HNy10hnrrLRnv4UxyYuXYei_u75uhQQ&oe=64F12971'
          link ='http://example.com'
          title ='LEGO Mindstorm'/>
      </Grid.Column>
      <Grid.Column stretched>
      <RevealImage
          src='https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/250480036_294626445851410_5043064368093665560_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XTCSphZFZhYAX-zMWtz&_nc_ht=scontent.fsgn2-3.fna&oh=03_AdQWMxqJW0tnKDzE99XAQaKAZh6S02YSfRhr17hROstD_A&oe=64F13A5C'
          link ='http://example.com'
          title ='Drones'/>
      </Grid.Column>
    </Grid.Row>

    
  </Grid>
)

export default ProjectLinks
