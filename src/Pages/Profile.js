import React, { Component } from 'react'
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import AppFooter from '../components/AppFooter'
// import {bindActionCreators} from 'redux';
class Profile extends Component {
    render() {
        return (
             <Container>
                <Header>
                <Body>
                    <Title>Profile</Title>
                </Body>
                </Header>
                <Content padder>
    
                </Content>
                <AppFooter/>
            </Container>
        )
    }
}

export default withNavigation(Profile);
