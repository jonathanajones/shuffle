import React, { Component } from 'react';
import ShuffleTheme from './shuffle-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

/*
  import components
*/
import AppBar from 'material-ui/lib/app-bar';
import LinearProgress from 'material-ui/lib/linear-progress';
import PlayerList from './components/player-list';
import SettingsMenu from './components/settings-menu';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  };

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
   );
  }
};
