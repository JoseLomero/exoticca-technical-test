import React from 'react'
import { CardItem } from './card'
import { Slide, Card } from "../entities/slide.interfaces"
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Playfair Display", serif !important;
  font-size: 2.875rem;
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-style: italic;
  line-height: 1;
  margin-top: 0px;
  margin-bottom: 8px;
  text-align: left;
`;

const Text = styled.div`
  font-size: 1rem;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  margin-bottom: 32px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1em;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    display: block;
    border-radius: 4px;
    border: 1px solid rgb(42, 42, 42);
    background-color: transparent;
    font-size: 1rem;
    color: rgb(42, 42, 42);
    width: 100%;
    max-width: 220px;
    text-align: center;
    padding: 12px 0px;
    font-weight: normal;
`;

const Slider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;


type Props = {
    slide: Slide;
}

export const Sections: React.FC<Props> = ({
    slide
}) => {
    const listOfCards = slide.cards.map((card: Card, index: number) => {
        return <CardItem key={"card-" + index} card={card} />
    })

    return (
        <>
            <Container>
                <Title>{slide.title}</Title>
                <ButtonContainer>
                    <Link>
                        <Button>
                            Learn More
                        </Button>
                    </Link>
                </ButtonContainer>
            </Container>
            <Slider>
                {listOfCards}
            </Slider>
        </>
    )
}


