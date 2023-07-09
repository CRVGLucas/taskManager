/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, TextWhite } from '../App.styles';
import { Card } from './Card';
export function Home() {
    return (
        <Container>
            <TextWhite>Home Page!</TextWhite>
            <Card task={{}}/>
            <Card task={{}}/>
        </Container>
    );
}