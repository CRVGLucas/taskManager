/* eslint-disable prettier/prettier */
import {styled} from 'styled-components/native';
export const green = '#1ED760';
export const light = '#F9DBB3';
export const gray = '#363636';
export const Container = styled.View`
    background: #121212;
    padding: 10px;
    height: 100%;
`;
export const Text = styled.Text<{color: string}>`
    color: ${({ color }) => color};
`;
export const ViewFlex = styled.View<{direction: any, justify: any}>`
    display: 'flex';
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const ViewGrid = styled.View`
    display: 'grid';
    grid-template-columns: 1fr 10%;
    margin: 10px 0;
`;
export const ViewColumn = styled.View`
    display: 'flex';
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const RoundButton = styled.Pressable<{ color: string}>`
    width: 80px;
    border-radius: 50px;
    height: 80px;
    background-color: ${ ({ color }) => color};
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
export const InputWhite = styled.TextInput.attrs({placeholderTextColor: light, color: light})<{ width: any}>`
  border: 1px solid white;
  width: ${ ({ width }) => width};
  color: white;
  border-radius: 5px;
  margin: 10px 0;
`;

