/* eslint-disable prettier/prettier */
import { BigText, LoadingConainer } from '../App.styles';
import { ActivityIndicator, MD2Colors} from 'react-native-paper';
import React from 'react';

export function Loading() {
    return (
        <LoadingConainer>
            <BigText>CARREGANDO...</BigText>
            <ActivityIndicator size="large" animating={true} color={MD2Colors.red800} />
        </LoadingConainer>
    );
}
