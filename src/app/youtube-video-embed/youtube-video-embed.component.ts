import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-video-embed',
  templateUrl: './youtube-video-embed.component.html',
  styleUrls: ['./youtube-video-embed.component.scss']
})
export class YoutubeVideoEmbedComponent implements OnInit {
  @Input () videoId: string;

  constructor() { }

  ngOnInit() {
  }

}
