import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the expected text', () => {
    const header = compiled.querySelector('h1');
    const texts = compiled.querySelectorAll('p');
    expect(header.innerText.trim()).toBe('Beccalia');
    expect(texts[0].innerText.trim()).toBe(
      `Becca Lyria and Rosalia Nightsong are a pair of adventurers, travelling to various lands to pursue their own goals. As a couple, they are commonly referred to as "Beccalia", and while the love between them is strong and they get along quite well, their drastic differences often make for some interesting situations.`
    );
    expect(texts[1].innerText.trim()).toBe(
      'You can learn about their stories and play through their adventures by checking out the Games tab above. Or join our chat server to stay in the loop on the latest updates!'
    );
  });
});
