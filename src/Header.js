import React from 'react'
import { Header, Image } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

const MyHeader = () => (
  <div>
    <Header as='h1' icon textAlign='center'>
      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UeD1VhAwhm1AXqaVzZitL8Is8llU5JD-qnGK1ncU2g&s' circular/>
      <Header.Content>Nguyen Nguyen</Header.Content>
    </Header>
    <Header as='h3' textAlign='center'>I do stuffs for fun!</Header>
  </div>
)

export default MyHeader
