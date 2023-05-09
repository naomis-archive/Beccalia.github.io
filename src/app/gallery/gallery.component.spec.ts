import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { HttpClientModule } from '@angular/common/http';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryComponent],
      imports: [HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    component.portraits = [
      {
        fileName: 'moonlight.png',
        name: 'Untitled',
        artist: 'Moonlight',
        url: 'https://www.instagram.com/moonlightkcreations/',
        alt: 'Banner art for Beccalia.',
        description:
          'The two of them use this image to advertise their adventuring services.',
      },
      {
        fileName: 'dance.png',
        name: 'Dance',
        artist: 'Starfazers',
        url: 'https://starfazers.art/',
        alt: 'Rosalia hugging Becca from behind, dancing her around.',
        description:
          'When Becca gets a bit too focused in her studies, Rosalia pulls her away for a quick dance session.',
      },
    ];
    component.poses = [
      {
        fileName: 'beach.png',
        name: 'Beach Trip',
        alt: 'Becca in a purple bikini and Rosalia in a white one-piece, at the beach.',
        description: 'A nice day at the beach, watching the sunset together.',
      },
      {
        fileName: 'bed.png',
        name: 'Time for a Rest',
        alt: 'Becca in a purple cropped tank and sheer purple skirt, Rosalia in a sheer white nightgown, sitting on their bed together.',
        description:
          'After a long day of adventuring, they like to decompress and chat about their day before sleep.',
      },
    ];
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the intro view', () => {
    expect(component.view).toBe('intro');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Gallery');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(3);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Portrait Exhibit');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Mural Exhibit');
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[2].getAttribute('routerLink')).toBe('/beccalia');
  });

  it('should render the portrait view', () => {
    component.changeView('portrait');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('portrait');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Portraits');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Previous Portrait');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Next Portrait');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent?.trim()).toBe('Mural Exhibit');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[3].getAttribute('routerLink')).toBe('/beccalia');
  });

  it(`should render the art correctly`, () => {
    for (const portrait of component.portraits) {
      component.changeView('portrait');
      component.selectPortrait(String(component.portraits.indexOf(portrait)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe('portrait');
      const portraitBox = compiled.querySelector('.image');
      const links = portraitBox?.querySelectorAll('a');
      const imageLink = links?.[0];
      expect(imageLink?.getAttribute('href')).toBe(
        `https://cdn.naomi.lgbt/beccalia/art/${portrait.fileName}`
      );
      expect(imageLink?.getAttribute('target')).toBe('_blank');
      const artistLink = links?.[1];
      expect(artistLink?.getAttribute('href')).toBe(portrait.url);
      expect(artistLink?.getAttribute('target')).toBe('_blank');
      const img = portraitBox?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/beccalia/art/${portrait.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(portrait.alt);
      const title = portraitBox?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(portrait.name);
      const ps = portraitBox?.querySelectorAll('p');
      expect(ps?.length).toBe(2);
      expect(ps?.[0].textContent?.trim()).toBe(portrait.description);
      expect(ps?.[1].textContent?.trim()).toBe(`-- By ${portrait.artist}`);
    }
  });

  it('should render the murals view', () => {
    component.changeView('pose');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('pose');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Poses');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Previous Mural');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Next Mural');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent?.trim()).toBe('Portrait Exhibit');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[3].getAttribute('routerLink')).toBe('/beccalia');
  });

  it(`should render the poses correctly`, () => {
    for (const pose of component.poses) {
      component.changeView('pose');
      component.selectPose(String(component.poses.indexOf(pose)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe('pose');
      const emoteBox = compiled.querySelector('.image');
      const imageLink = emoteBox?.querySelector('a');
      expect(imageLink?.getAttribute('href')).toBe(
        `https://cdn.naomi.lgbt/beccalia/koikatsu/${pose.fileName}`
      );
      expect(imageLink?.getAttribute('target')).toBe('_blank');
      const img = emoteBox?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/beccalia/koikatsu/${pose.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(pose.alt);
      const title = emoteBox?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(pose.name);
      const description = emoteBox?.querySelector('p');
      expect(description?.textContent?.trim()).toBe(pose.description);
    }
  });
});
