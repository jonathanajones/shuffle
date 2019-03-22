import React, { Component } from 'react';
import PatternFactory from '../presentational/pattern-factory';
import ShuffleTheme from '../presentational/shuffle-theme';

/*
  import components
*/
import Settings from '@material-ui/icons/Settings';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

export default class SettingsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorblind: localStorage.getItem('colorblind') === 'true',
      defaultGroupMemberNumber: +localStorage.getItem('groupMembers'),
      defaultNumberOfShuffles: +localStorage.getItem('shuffles'),
      open: false,
    };
  }

  handleColorblindToggle = (e, value) => {
    this.setState({ colorblind: value }, () => {
      localStorage.setItem('colorblind', value);
      this.props.toggleColorblind(value);
    });
  };

  handleDefaultGroupMemberChange = (e, i, value) => {
    this.setState({ defaultGroupMemberNumber: value }, () => {
      localStorage.setItem('groupMembers', value);
    });
  };

  handleDefaultShufflesChange = (e, i, value) => {
    this.setState({ defaultNumberOfShuffles: value }, () => {
      localStorage.setItem('shuffles', value);
    });
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  generateMemberNumbers() {
    let list = [];
    for (let i = 1; i <= PatternFactory.backgrounds.length; i++) {
      list.push(<MenuItem key={i} primaryText={i} value={i} />);
    }
    return list;
  }

  generateShuffleNumbers() {
    let list = [];
    for (let i = 1; i <= 16; i++) {
      list.push(<MenuItem key={i} primaryText={i} value={i} />);
    }
    return list;
  }

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleToggle}>
          <Settings color={ShuffleTheme.palette.alternateTextColor} />
        </IconButton>
        <Drawer
          docked={false}
          onRequestChange={this.handleToggle}
          open={this.state.open}
        openRight>
          <AppBar
            iconElementLeft={
              <IconButton
                onTouchTap={this.handleToggle}>
                <ChevronRight
                  color={ShuffleTheme.palette.alternateTextColor} />
              </IconButton>
            }
          title='Settings' />
          <MenuItem>
            <div>
              <Select
                autoWidth
                floatingLabelText='Default Group Members'
                fullWidth
                onChange={this.handleDefaultGroupMemberChange}
                value={this.state.defaultGroupMemberNumber}>
                {this.generateMemberNumbers()}
              </Select>
            </div>
          </MenuItem>
          <MenuItem>
            <div>
              <Select
                autoWidth
                floatingLabelText='Number of shuffles'
                fullWidth
                onChange={this.handleDefaultShufflesChange}
                value={this.state.defaultNumberOfShuffles}>
                {this.generateShuffleNumbers()}
              </Select>
            </div>
          </MenuItem>
          <MenuItem>
            <div>
              <Switch
                label='Colorblind mode'
                onToggle={this.handleColorblindToggle}
                toggled={this.state.colorblind}/>
            </div>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

SettingsMenu.propTypes = {
  toggleColorblind: React.PropTypes.func,
};
