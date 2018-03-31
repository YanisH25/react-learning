import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

class Navigation extends Component {
    render(){
        const Nav = styled.nav`
            width: 100%;
            height: 300px;
        `;

        return (
            <Nav>
                <MediaQuery query={`(min-width: ${this.props.breakpoint || '500px'})`}>
                    // Desktop Menu...
                </MediaQuery>
                // Mobile Menu...
            </Nav>
        );
    }
}
