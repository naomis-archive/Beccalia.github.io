import { Component, OnInit } from '@angular/core';
import { gameData } from 'src/data/games';
import { Game } from 'src/interfaces/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  public gameList: Game[] = [];
  constructor() {}

  ngOnInit(): void {
    this.gameList = gameData;
  }
}
