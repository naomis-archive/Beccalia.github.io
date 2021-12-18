import { ComponentFixture, TestBed } from '@angular/core/testing';
import { gameData } from 'src/assets/data/games';
import { SafeurlPipe } from '../safeurl.pipe';

import { GamesComponent } from './games.component';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesComponent, SafeurlPipe],
    }).compileComponents();
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header correctly', () => {
    const header = compiled.querySelector('h1');
    expect(header.innerText.trim()).toBe('Games!');
  });

  it('should render the game data correctly', () => {
    const headers = compiled.querySelectorAll('h2');
    const release = compiled.querySelectorAll('.date');
    const description = compiled.querySelectorAll('.description');
    gameData.forEach((el, i) => {
      expect(headers[i].innerText.trim()).toBe(el.title);
      expect(release[i].innerText.trim()).toBe(`Released: ${el.releaseDate}`);
      expect(description[i].innerText.trim()).toBe(el.description);
    });
  });
});
