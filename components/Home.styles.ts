/* eslint-disable prettier/prettier */
import {styled} from 'styled-components/native';
export const ViewBottom = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
`;
export const ButtonGray = styled.Pressable`
    border: white;
    padding: 10px;
    background: #363636;
    border-radius: 8px;
    border: 1px solid white;
`;
export const ViewContainer = styled.ScrollView`
    flex: 1;
    height: 100%;
    width: 100%;
`;
