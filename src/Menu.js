import React, { Component } from 'react'
import { Menu, Segment, Dropdown} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

export default class MyMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size = 'huge' borderless>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='hobbies'
          active={activeItem === 'hobbies'}
          onClick={this.handleItemClick}
        />

        </Menu>
      
    )
  }
}
