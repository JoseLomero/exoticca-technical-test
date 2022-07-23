import React from 'react'
import styled from "styled-components";
import { Card } from "../entities/slide.interfaces"


const TitleSection = styled.li`
    width: 100%;
    flex-shrink: 0;
`;

const CardContainer = styled.li`
    outline: currentcolor none medium;
    width: 275px;
    margin-right: 50px;
    margin-bottom: 1px;
    display: block;
    text-align: initial;
    position: relative;
    height: 16em;
    padding-bottom: 8em;
    margin-bottom: 5em;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
`;

const CardSection = styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    list-style: none;
    width: 80%;
`;

const Discount = styled.li`
    position: absolute;
    left: 8px;
    top: 8px;
    padding: 8px;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    line-height: 24px;
    color: rgb(232, 203, 145);
    z-index: 1;
    background: rgb(42, 42, 42) none repeat scroll 0% 0%;
    border-radius: 4px;
    list-style: none;
`;

const DestinationBox = styled.li`
    font-family: "Red Hat Text", sans-serif;
    position: absolute;
    bottom: 6.8em;
    left: 0px;
    padding: 16px;
    width: 88%;
    heigth: 75%;
    background: rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)) repeat scroll 0% 0%;
    z-index: 10;
    color: white;
`;


const Text = styled.div`
  font-size: 1rem;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  margin-bottom: 32px;
`;

const TravelDetails = styled.div`
  font-size: 1rem;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  padding-right: 1em;
  padding-left: 1em;
`;

const DestinationText = styled.p`
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.17;
    color: rgb(255, 255, 255);
    line-height: 5px;
    `;

const DestinationDuration = styled.p`
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
    color: rgb(255, 255, 255);
    box-sizing: border-box;
    line-height: 0px;
`;

const StrickedPrice = styled.span`
    text-decoration: line-through;
`;

const CurrentPrice = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.17;
    margin-left: 4px;
`;

const ImageSection = styled.img`
    position: relative;
    height: 275px;
    background-color: rgba(214, 199, 182, 0.2);
`;

type Props = {
    card: Card;
}

export const CardItem: React.FC<Props> = ({
    card
}) => {

    return (
        <CardContainer>
            <CardSection>
                <TitleSection>
                    <Discount>
                        -{card.priceDetail.pricingPercentage}%
                    </Discount>
                    <DestinationBox>
                        <DestinationText>
                            {card.destination}
                        </DestinationText>
                        <DestinationDuration>
                            {card.days} days
                        </DestinationDuration>
                    </DestinationBox>
                    <ImageSection src={card.images[0].desktop} />
                    <TravelDetails>
                        <Text>{card.title}</Text>
                        <Text>From:
                            <StrickedPrice>{card.priceDetail.oldPriceBeautify}</StrickedPrice>
                            <CurrentPrice>
                                {card.priceDetail.fromPriceBeautify}
                            </CurrentPrice>
                        </Text>
                    </TravelDetails>

                </TitleSection>
            </CardSection>
        </CardContainer>
    )
}