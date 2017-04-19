import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { CardSection } from './common';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.expand) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { title, id } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.actions.selectedLibrary(id);
        }}
      >
        <View>
          <CardSection>
            <Text style={style.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => ({
  expand: ownProps.library.id === state.selectedLibraryId
});

const mapStateToDispatch = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapStateToDispatch)(ListItem);
