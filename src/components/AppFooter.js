import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
export default class AppFooter extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button active>
              <Text>Home</Text>
            </Button>
            <Button>
              <Text>Status</Text>
            </Button>
            <Button>
              <Text>Profile</Text>
            </Button>
            <Button>
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}