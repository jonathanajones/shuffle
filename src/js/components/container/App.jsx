import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShuffleTheme from '../presentational/ShuffleTheme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/*
  import components
*/
import AppBar from '@material-ui/core/AppBar'
import LinearProgress from '@material-ui/core/LinearProgress';
import PlayerList from './PlayerList';
import SettingsMenu from './SettingsMenu';

const theme = createMuiTheme();

export default class App extends Component {
  constructor(props) {
    super(props);
    // componentWillMount goes here
    if (!localStorage.getItem('groupMembers')) {
      localStorage.setItem('groupMembers', 1);
    }
    if (!localStorage.getItem('shuffles')) {
      localStorage.setItem('shuffles', 1);
    }
    if (!localStorage.getItem('colorblind')) {
      localStorage.setItem('colorblind', false);
    }
    this.state = {
      colorblind: localStorage.getItem('colorblind') === 'true',
      completed: 1,
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(ShuffleTheme),
    };
  }

  progress = (val) => {
    this.setState({ completed: val });
  };

  updateColorblindState = (value) => {
    this.setState({ colorblind: value });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar
            iconElementRight={
              <SettingsMenu toggleColorblind={this.updateColorblindState} />
            }
            showMenuIconButton={false}
            title='Shuffle'
            titleStyle={{ textAlign: 'center', paddingLeft: '36px' }}
            zDepth={0} />
          <LinearProgress max={1} mode='determinate' value={this.state.completed} />
          <PlayerList colorblind={this.state.colorblind} progress={this.progress}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
   );
  }
};

App.propTypes = {
  children: PropTypes.node,
  muiTheme: PropTypes.object,
};
