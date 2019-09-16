import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment, decrement } from '../actions/index';
import AppFooter from '../components/AppFooter'
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//navigation 
// import { withNavigation } from 'react-navigation'

class Home extends Component{

  increment_number = ()=>{
    this.props.increment()
  }
  decrement_number = ()=>{
    this.props.decrement()
  }

  render(){
    const {count, user:{credentials}} = this.props;
    return(
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                Welcome {credentials.email+' , '}  
              </Text>
              <Text>
               Counter:  {count}
              </Text>
            </CardItem>
          </Card>
          <Button dark bordered onPress= {() => this.increment_number()}>
            <Text>Increment</Text>
          </Button>
          <Button dark bordered onPress= {() => this.decrement_number()}>
            <Text>Decrement</Text>
          </Button>
        </Content>
        <AppFooter/>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.count,
  user: state.user
});

const mapActionsToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
