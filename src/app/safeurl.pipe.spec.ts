import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeurlPipe } from './safeurl.pipe';

describe('SafeurlPipe', () => {
  let sanitized: DomSanitizer;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer],
    });
    sanitized = TestBed.inject(DomSanitizer);
  });
  it('create an instance', () => {
    const pipe = new SafeurlPipe(sanitized);
    expect(pipe).toBeTruthy();
  });
});
