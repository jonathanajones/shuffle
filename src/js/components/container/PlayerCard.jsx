import React, { Component } from 'react';
import PatternFactory from '../presentational/PatternFactory';
import ShuffleTheme from '../presentational/ShuffleTheme';

/*
  import components
*/
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Remove from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';

export default class PlayerCard extends Component {
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
          <Fab
            onTouchTap={this.handleRemove}
            style={{float: 'right', marginBottom: '10px'}}>
            <Remove />
          </Fab>
        </CardHeader>
      </Card>
    );
  }
}

PlayerCard. propTypes = {
    colorblind: PropTypes.bool,
    player: PropTypes.object,
    removePlayer: PropTypes.func,
    team: PropTypes.object,
  };
