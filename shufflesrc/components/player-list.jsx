import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PatternFactory from '../pattern-factory';

/*
  import components
*/
import AvShuffle from 'material-ui/lib/svg-icons/av/shuffle';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import ContentClear from 'material-ui/lib/svg-icons/content/clear';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Paper from 'material-ui/lib/paper';
import PlayerCard from './player-card';
import SelectField from 'material-ui/lib/select-field';
import TextField from 'material-ui/lib/text-field';

export default class PlayerList extends Component {
  static propTypes = {
    colorblind: React.PropTypes.bool,
    groupMembers: React.PropTypes.number,
    progress: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      disabledForShuffling: false,
      insufficientPlayers: true,
      errorText: '',
      groupMembers: +localStorage.getItem('groupMembers'),
      newName: '',
      playerList: [],
    };
  }

  addPlayer = () => {
    if (!this.state.newName) {
      this.setState({ errorText: 'Please enter a name' });
      return;
    }
    let players = this.state.playerList.slice();
    let team = this.findOpenTeam();
    if (team !== undefined) {
      let player = {
        name: this.state.newName,
        id: this.state.newName.slice().replace(/\s/g, '') + Math.random(),
        team: team,
      };
      players.push(player);
      this.teamCount[team]++;
      this.setState({
        insufficientPlayers: players.length > this.state.groupMembers? false : true,
        newName: '',
        playerList: players.sort((a, b) => a.team - b.team)
      });
    } else {
      this.setState({ errorText: 'Too many teams' });
    }
  };

  animateShuffle = (animation, players, progress) => {
    return new Promise((resolve) => {
      let previousTransition = animation.fromElement.style.transition;
      animation.fromElement.style.transition = 'all 300ms ease-in-out';
      animation.toElement.style.transition = 'all 300ms ease-in-out';
      animation.fromElement.style.transform = 'scale(0)';
      animation.toElement.style.transform = 'scale(0)';
      animation.fromElement.style.opacity = '0.01';
      animation.toElement.style.opacity = '0.01';
      setTimeout(() => {
        // re-map player list to teams
        let tempTeam = players[animation.fromIndex].team;
        players[animation.fromIndex].team = players[animation.toIndex].team;
        players[animation.toIndex].team = tempTeam;
        this.setState({ playerList: players }, () => {
          this.props.progress(progress);
          animation.fromElement.style.transform = 'scale(1)';
          animation.toElement.style.transform = 'scale(1)';
          animation.fromElement.style.opacity = '1';
          animation.toElement.style.opacity = '1';
          setTimeout(() => {
            animation.fromElement.style.transition = previousTransition;
            animation.toElement.style.transition = previousTransition;
            resolve();
          }, 500);
        });
      }, 350);
    });
  };

  clearList = () => {
    this.setState({
      insufficientPlayers: true,
      playerList: [] }, () => {
        this.teamCount = Array(PatternFactory.backgrounds.length).fill(0);
      });
  };

  findOpenTeam = () => {
    return this.teamCount.findIndex((team) => {
      return team < this.state.groupMembers;
    });
  };

  generateMemberNumbers = () => {
    let list = [];
    for (let i = 1; i <= PatternFactory.backgrounds.length; i++) {
      list.push(<MenuItem key={i} label={i} primaryText={`Teams of ${i}`} value={i} />);
    }
    return list;
  };

  generatePlayerCard = (player) => {
    return (
      <PlayerCard
        colorblind={this.props.colorblind}
        key={player.id}
        player={player}
        removePlayer={this.removePlayer}
        team={{
          color: PatternFactory.backgrounds[player.team].color,
          pattern: PatternFactory.backgrounds[player.team].pattern,
        }} />
    );
  };

  handleGroupMembersChange = (e, i, value) => {
    if (value < this.state.groupMembers && this.teamCount.some(groupMembers => groupMembers > value)) {
      this.teamCount = Array(PatternFactory.backgrounds.length).fill(0);
      this.setState({
        playerList: this.state.playerList.map((player) => {
          let team = this.teamCount.findIndex(team => team < value);
          this.teamCount[team]++;
          return player = {
            name: player.name,
            id: player.id,
            team: team,
          };
        })
      });
    }
    this.setState({ groupMembers: value, insufficientPlayers: this.state.playerList.length > value? false : true, });
  };

  handleNewName = (e) => {
    this.setState({ newName: e.target.value, errorText: '' });
  };

  removePlayer = (playerId) => {
    this.setState({
      insufficientPlayers: this.state.playerList.length - 1 > this.state.groupMembers? false : true,
      playerList: this.state.playerList.filter((player) => {
        if (player.id === playerId) {
          this.teamCount[player.team]--;
        }
        return player.id !== playerId;
      })
    });
  };

  shuffle = async() => {
    this.props.progress(0);
    let players = this.state.playerList.slice();
    if (players.length > this.state.groupMembers) {
      let totalCycles = localStorage.getItem('shuffles');
      this.setState({ disabledForShuffling: true });
      for (let cycles = 0; cycles < totalCycles; cycles++) {
        for (let i = players.length - 1; i > 0;) {
          let j = Math.floor(Math.random() * (i + 1));
          if ((i !== j) && (players[i].team !== players[j].team)) {
            let swapList = {
              fromElement: document.getElementById(players[i].id),
              fromIndex: i,
              toElement: document.getElementById(players[j].id),
              toIndex: j,
            };
            let temp = players[i];
            players[i] = players[j];
            players[j] = temp;
            let progress = ((players.length - i) + ((players.length - 1) * cycles)) / ((players.length - 1) * totalCycles);
            await this.animateShuffle(swapList, players, progress);
            i--;
          }
        }
      }
      this.setState({ disabledForShuffling: false });
    } else {
      this.setState({ errorText: 'Please add more players then teams' });
    }
  };

  teamCount = Array(PatternFactory.backgrounds.length).fill(0);

  render() {
    return (
      <Paper
        zDepth={0}>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName='fade'>
          {this.state.playerList.map((player) => {
            return this.generatePlayerCard(player);
          })}
        </ReactCSSTransitionGroup>
        <GridList
          cellHeight={64}
          cols={3}
          style={{
            width: '100%',
            textAlign: 'center'}}>
          <GridTile
            cols={2}>
            <TextField
              disabled={this.state.disabledForShuffling}
              errorText={this.state.errorText}
              fullWidth
              hintText='Add a player'
              onChange={this.handleNewName}
              onEnterKeyDown={this.addPlayer}
              value={this.state.newName} />
          </GridTile>
          <GridTile>
            <SelectField
              autoWidth
              fullWidth
              labelStyle={{fontSize:'.9em'}}
              onChange={this.handleGroupMembersChange}
              value={this.state.groupMembers}>
              {this.generateMemberNumbers()}
            </SelectField>
          </GridTile>
          <GridTile style={{
              display: 'inline-block',
              padding: '8px'}}>
            <FloatingActionButton
              disabled={this.state.disabledForShuffling}
              onTouchTap={this.addPlayer}
              secondary>
              <ContentAdd />
            </FloatingActionButton>
          </GridTile>
          <GridTile style={{
              display: 'inline-block',
              padding: '8px'}}>
            <FloatingActionButton
              disabled={this.state.disabledForShuffling}
              onTouchTap={this.clearList}>
              <ContentClear />
            </FloatingActionButton>
          </GridTile>
          <GridTile style={{
              display: 'inline-block',
              padding: '8px'}}>
            <FloatingActionButton
              disabled={this.state.disabledForShuffling || this.state.insufficientPlayers}
              onTouchTap={this.shuffle}
              secondary>
              <AvShuffle />
            </FloatingActionButton>
          </GridTile>
        </GridList>
      </Paper>
    );
  }
}
