import React from 'react'
import { Container, Image, Label, Reveal,Header,Grid } from 'semantic-ui-react'
import './ProjectLinks.css'

const RevealImage = ({src='', link='', title}) => {
    return(
        <Reveal animated='move down' className='contentReveal'>
            <Reveal.Content className = 'contentVisible' visible>
                <div className='gridImage'>
                <Image
                        src={src}
                        
                        href={link}
                        target='_blank'  
                    />
                </div>
            </Reveal.Content>
            <Reveal.Content className = 'contentHidden' hidden>
                <a className = 'anchorLink' href={link}>
                    <Container className = 'gridText'>
                        <p className='gridTitle'>
                            {title}
                        </p>
                    </Container></a>
            </Reveal.Content>
        </Reveal>
    )
}

export default RevealImage