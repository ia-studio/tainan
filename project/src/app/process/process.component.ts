import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-process',
  templateUrl: 'process.component.html',
  styleUrls: ['process.component.scss']
})
export class ProcessComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('服務流程 - 台南市政府線上即時服務平台');
    window.scrollTo(0, 0);
  }
}
