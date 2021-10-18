import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideoEmbedComponent } from './youtube-video-embed.component';

describe('YoutubeVideoEmbedComponent', () => {
  let component: YoutubeVideoEmbedComponent;
  let fixture: ComponentFixture<YoutubeVideoEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeVideoEmbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeVideoEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
