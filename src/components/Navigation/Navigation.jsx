import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

class Navigation extends Component {
    render(){
        const Nav = styled.nav`
            width: 100%;
            height: 300px;
        `;

        const List = styled.ul`
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

        return (
            <Nav>
                <MediaQuery query={`(min-width: ${this.props.breakpoint || '500px'})`}>
                    // Desktop Menu...
                    <List>
                        
                    </List>
                </MediaQuery>
                <MediaQuery query={`(max-width: ${this.props.breakpoint || '500px'})`}>
                    // Mobile Menu...
                </MediaQuery>
            </Nav>
        );
    }
}
