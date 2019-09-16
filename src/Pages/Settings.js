import React, { Component } from 'react'
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import AppFooter from '../components/AppFooter'
class Settings extends Component {
    render() {
        return (
           <Container>
                <Header>
                <Body>
                    <Title>Settings</Title>
                </Body>
                </Header>
                <Content padder>
    
                </Content>
                <AppFooter/>
            </Container>
        )
    }
}

export default withNavigation(Settings);
