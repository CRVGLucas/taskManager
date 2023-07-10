/* eslint-disable prettier/prettier */
import {styled} from 'styled-components/native';
export const Container = styled.View`
    background: #121212;
    padding: 10px;
    height: 100%;
`;
export const TextWhite = styled.Text`
    color: white;
`;
export const ViewRow = styled.View`
    display: 'flex';
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const ViewColumn = styled.View`
    display: 'flex';
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const RoundButton = styled.Pressable`
    width: 80px;
    border-radius: 50px;
    height: 80px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const LoadingConainer = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    top:0;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const BigText = styled.Text`
    font-size: 22px;
    color: white;
    margin: 10px;
`
export const TextBlack = styled.Text`
    color: black;
`