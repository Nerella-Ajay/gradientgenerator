// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
    list-style-type: none;
    width: 49%;
    @media screen and (min-width: 768px){
        width:24%;
    }
`

export const DirectionButton = styled.button`
    text-align: center;
    background-color: #ffffff;
    font-family: 'Roboto'
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    border-radius: 6px;
    padding: 12px 24px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${props => (props.isActive ? '#334155' : '1e293b')};
    opacity: ${props => (props.isActive ? 1 : 0.5)}
    margin-bottom: 10px;
`
