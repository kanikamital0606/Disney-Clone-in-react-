import React from 'react'
import styled from 'styled-components'

function Header(){
    return(
        <Nav>
            <Logo src="https://www.freepik.com/premium-vector/golden-set-building-logo-design-inspiration_9234582.htm#page=1&query=building%20logo&position=7"/> 
            <NavMenu>

                
            </NavMenu>            
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height:70px;
    background: #2f5496;
`

const Logo= styled.img`
    width=80px;
`
const NavMenu = styled.div`` 