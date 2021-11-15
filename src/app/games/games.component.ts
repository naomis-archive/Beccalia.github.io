import { Component, OnInit } from '@angular/core';
import { gameData, GameInt } from 'src/assets/data/games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  public gameList: GameInt[] = [];
  constructor() {}

  ngOnInit(): void {
    this.gameList = gameData;
  }
}
