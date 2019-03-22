import React, { Component } from 'react';
import PatternFactory from '../pattern-factory';
import ShuffleTheme from '../shuffle-theme';

/*
  import components
*/
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import ContentRemove from 'material-ui/lib/svg-icons/content/remove';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

export default class PlayerCard extends Component {
  static propTypes = {
    colorblind: React.PropTypes.bool,
    player: React.PropTypes.object,
    removePlayer: React.PropTypes.func,
    team: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getPlayerInitials = () => {
    let name = this.props.player.name;
    let lastname = /\s([a-zA-Z])/.exec(name);
    let initials = name[0] + (lastname? lastname[1] : '');
    return initials.toUpperCase();
  };

  handleRemove = () => {
    this.props.removePlayer(this.props.player.id);
  };

  render() {
    let background = null;
    if (this.props.colorblind) {
      background = this.props.team.pattern;
    } else {
      background = PatternFactory.getOverlay('clearRight', {background: this.props.team.color.light});
    }
    return (
      <Card
        id={this.props.player.id}
        style={background}>
        <CardHeader
          avatar={
            <Avatar
              backgroundColor={this.props.team.color.dark}>
              {this.getPlayerInitials()}
            </Avatar>}
          subtitle={'Team ' + this.props.team.color.name}
          subtitleColor={ShuffleTheme.palette.textColor}
          subtitleStyle={{textShadow: ShuffleTheme.palette.alternateTextColor + ' 2px 2px 1px'}}
          title={this.props.player.name}
          titleColor={ShuffleTheme.palette.textColor}
          titleStyle={{fontWeight:700, fontSize:24, textShadow:  ShuffleTheme.palette.alternateTextColor + ' 2px 2px 1px'}}>
          <FloatingActionButton
            onTouchTap={this.handleRemove}
            style={{float: 'right', marginBottom: '10px'}}>
            <ContentRemove />
          </FloatingActionButton>
        </CardHeader>
      </Card>
    );
  }
}
