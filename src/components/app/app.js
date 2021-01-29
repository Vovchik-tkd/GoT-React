import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import styled from 'styled-components';

const Button = styled.button`
    height: 3em;
    width: 100%;
    margin-bottom: 2em;
    text-align: center;
    border-radius: 2px;
    border: 0px solid black;
    color: white;
    background-color: #00027C;
`;

export default class App extends Component {

    state = {
        random: true,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true});
    }

    onClickRandom = () => {
        this.setState({random: !this.state.random});
    }

    render() {
        const { random } = this.state;
        const randomChar = random ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <Button onClick={this.onClickRandom} style={{}}>Toggle Random Character</Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};