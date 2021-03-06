import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav } from './style';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav />
            </HeaderWrapper>
        )
    }
}

export default Header;