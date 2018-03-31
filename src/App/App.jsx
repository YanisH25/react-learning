import React, {Component} from 'react';
import styled from 'styled-components';

class App extends Component {
    render() {
        const Div = styled.div `
            @import url('https://fonts.googleapis.com/css?family=Roboto');
            * {
                box-sizing: border-box;
            }

            font-size: 62.5%;
            font-family: 'Roboto', sans-serif;
        `;

        return (
            <Div className="App">
            </Div>
        );
    }
}

export default App;
