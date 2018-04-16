import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Image
} from 'react-native';

import {
    Text,
    Button,
    List,
    ListItem,
    Divider,
    Icon,
    Avatar,
} from 'react-native-elements';

import colorScheme from '../../config/colors';
import consts from '../../config/constants';
import { changeUser, logoutKeycloak, initiatePortCall, } from '../../actions';

class TestClass extends Component{
    render(){
      return (
        <View>
          <Text> Testning </Text>
        </View>
        );
      }
}
function mapStateToProps(state) {
    return {
        selectedPortCall: state.portCalls.selectedPortCall,
        vessel: state.portCalls.vessel,
        connection: state.settings.connection,
    }
}

export default connect(mapStateToProps, {})(TestClass);
