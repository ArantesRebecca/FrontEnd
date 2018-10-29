import React, { Component } from 'react';
import { Wrapper, AddButton, Title, ButtonsWrapper } from './styles';

export default class Guests extends Component {

    constructor(props) {
        super(props);

        this.state = {
            childrenCount: 0,
            adultCount: 0
        }
    }

    IncrementCount = (count) => {
        if (count === 'children') {
            this.setState({ childrenCount: this.state.childrenCount + 1 })
        } else if (count === 'adult') {
            this.setState({ adultCount: this.state.adultCount + 1 })
        }
    }

    DecreaseCount = (count) => {
        if (count === 'children') {
            this.setState({ childrenCount: this.state.childrenCount != 0 ? this.state.childrenCount - 1 : 0 })
        } else if (count === 'adult') {
            this.setState({ adultCount: this.state.adultCount != 0 ? this.state.adultCount - 1 : 0 })
        }
    }

    render() {
        const { adultCount, childrenCount } = this.state;
        return (
            <div>
                <Wrapper>
                    <Title> Adultos </Title>
                    <ButtonsWrapper>
                        <AddButton onClick={() => this.DecreaseCount('adult')}> - </AddButton>
                        <Title> {adultCount} </Title>
                        <AddButton onClick={() => this.IncrementCount('adult')}> + </AddButton>
                    </ButtonsWrapper>
                </Wrapper>
                <Wrapper>
                    <Title> Crianças </Title>
                    <ButtonsWrapper>
                        <AddButton onClick={() => this.DecreaseCount('children')}> - </AddButton>
                        <Title> {childrenCount} </Title>
                        <AddButton onClick={() => this.IncrementCount('children')}> + </AddButton>
                    </ButtonsWrapper>
                </Wrapper>
            </div>
        )
    }
}