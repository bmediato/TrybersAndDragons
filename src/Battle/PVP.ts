import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player: Fighter;
  private _player2: Fighter;
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player = player;
    this._player2 = player2;
  }
}