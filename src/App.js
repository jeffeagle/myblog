import React, { Component } from 'react'


import 'semantic-ui-css/semantic.min.css'
import MyMenu from './Menu'
import MyHeader from './Header'
import BodyContainer from './BodyContainer'
export default function App(){
  return(
    <>
    
      <body>
        <section><MyMenu/></section>
        <section> <MyHeader/></section>
        <section><BodyContainer/></section>
        <div></div>
      </body>
      <footer>

      </footer>
    </>
  )
}