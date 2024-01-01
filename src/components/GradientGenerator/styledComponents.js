// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
    display: flex;
    justify-content: center;
    background-image: linear-gradient(${props => props.gradientValue});
    min-height:100vh;
`

export const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 550px;
    @media screen and (min-width: 768px){
        max-width: 1140px;
        width: 85%
    }
`

export const Heading = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    @media screen and (min-width: 768px){
        font-size: 32px;
    }
`

export const DirectionsDescription = styled.p`
    color: #ededed;
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 500;
    line-height: 1.5;
`

export const GradientDirectionList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px;
    @media screen and (min-width: 768px){
        width: 60%;
        max-width: 450px;
    }
`

export const ColorsPickersDecription = styled.p`
    color: #ededed;
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 500;
    line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ColorValue = styled.p`
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
`

export const CustomInput = styled.input`
    width: 250px;
    height: 100px;
    background-color: transparent;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
`

export const GenerateButton = styled.button`
    color: #1e293b;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    background-color: #00c9b7;
    padding: 12px 24px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 15px;
    margin-right: 0px;
    margin-top: 25px;
    margin-bottom: 10px;
    min-width: 25px;
`
