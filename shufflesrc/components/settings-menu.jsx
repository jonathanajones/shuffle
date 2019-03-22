import React, { Component } from 'react';
import PatternFactory from '../pattern-factory';
import ShuffleTheme from '../shuffle-theme';

/*
  import components
*/
import ActionSettings from 'material-ui/lib/svg-icons/action/settings';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import NavigationChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import SelectField from 'material-ui/lib/select-field';
import Slider from 'material-ui/lib/slider';
import Toggle from 'material-ui/lib/toggle';

export default class SettingsMenu extends Component {
  static propTypes = {
    toggleColorblind: React.PropTypes.func,
  };

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
          <ActionSettings color={ShuffleTheme.palette.alternateTextColor} />
        </IconButton>
        <LeftNav
          docked={false}
          onRequestChange={this.handleToggle}
          open={this.state.open}
          openRight>
          <AppBar
            iconElementLeft={
              <IconButton
                onTouchTap={this.handleToggle}>
                <NavigationChevronRight
                  color={ShuffleTheme.palette.alternateTextColor} />
              </IconButton>
            }
            title='Settings' />
          <MenuItem>
            <div>
              <SelectField
                autoWidth
                floatingLabelText='Default Group Members'
                fullWidth
                onChange={this.handleDefaultGroupMemberChange}
                value={this.state.defaultGroupMemberNumber}>
                {this.generateMemberNumbers()}
              </SelectField>
            </div>
          </MenuItem>
          <MenuItem>
            <div>
              <SelectField
                autoWidth
                floatingLabelText='Number of shuffles'
                fullWidth
                onChange={this.handleDefaultShufflesChange}
                value={this.state.defaultNumberOfShuffles}>
                {this.generateShuffleNumbers()}
              </SelectField>
            </div>
          </MenuItem>
          <MenuItem>
            <div>
              <Toggle
                label='Colorblind mode'
                onToggle={this.handleColorblindToggle}
                toggled={this.state.colorblind}/>
            </div>
          </MenuItem>
        </LeftNav>
      </div>
    );
  }
}
