import { faCalendarAlt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import tw from 'twin.macro';
import Button from '../button';
import { Marginer } from '../marginer';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { Screens } from '../../responsive';

const CardContainer=styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
    ${tw`flex items-center justify-center pt-1 pb-1 pl-2 pr-2 bg-white rounded-md md:pt-2 md:pb-2 md:pl-9 md:pr-9`};
`;

const ItemContainer=styled.div`
    ${tw`relative flex`};
`;

const Icon=styled.span`
    ${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`};
`;


const SmallIcon=styled.span`
    ${tw`ml-1 text-xs text-gray-500 fill-current md:text-base md:mr-3`};
`;

const Name=styled.span`
    ${tw`text-xs text-gray-600 select-none md:text-sm`}
`;

const LineSeparator=styled.span`
    width:2px;
    height:45%
    ${tw`ml-2 mr-2 text-gray-300 md:mr-5 md:ml-5`}
`;

const DateCalendar=styled(Calendar)`
    position: absolute;
    max-width: none;
    top:3.5em;
    left:0em;
    user-select:none;

    ${({offset}: any)=>offset && css`
        left:-6em;
    `};

    @media (min-width: ${Screens.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export default function BookCard() {
    const [startDate, setStartDate]=useState<Date>(new Date());
    const [endDate, setEndDate]=useState();
    const [isCalendarOpen, setIsCalendarOpen]=useState(false);
    const [isEndCalendarOpen, setIsEndCalendarOpen]=useState(false);

    const toggleStartCalendar=()=>{
        setIsCalendarOpen(!isCalendarOpen);
        if(isEndCalendarOpen){
            setIsEndCalendarOpen(false);
        }
    }

    const toggleReturnCalendar=()=>{
        setIsEndCalendarOpen(!isEndCalendarOpen);
        if(isCalendarOpen){
            setIsCalendarOpen(false);
        }
    }
    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                </Icon>
                <Name onClick={()=>toggleStartCalendar()}>Pick Up Date</Name>
                <SmallIcon><FontAwesomeIcon icon={isCalendarOpen ? faCaretUp :faCaretDown} /></SmallIcon>
                {isCalendarOpen && <DateCalendar  value={startDate} onChange={setStartDate as any}/>}
            </ItemContainer>
            <LineSeparator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                </Icon>
                <Name onClick={()=>toggleReturnCalendar()}>Return Date</Name>
                <SmallIcon><FontAwesomeIcon icon={isEndCalendarOpen ? faCaretUp :faCaretDown} /></SmallIcon>
                {isEndCalendarOpen && <DateCalendar offset value={endDate} onChange={setEndDate as any}/>}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em" />
            <Button text="Book Your Ride" />
        </CardContainer>
    )
}
