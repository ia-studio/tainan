import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute }                   from '@angular/router';
import { Title }                            from '@angular/platform-browser';
import { FaqService }                       from './case-rank.service';
import { Reply, Faq, Category }             from './case-rank';
import * as moment           from 'moment';

@Component({
  selector: 'app-case-rank',
  templateUrl: './case-rank.component.html',
  providers: [FaqService],
  styleUrls: ['./case-rank.component.scss']
})
export class CaseRankComponent implements OnInit {
  error: any;
  isSearch = false;
  startDate: string;
  endDate: string;
  caserank = [{
    id: 1,
    content: "路霸排除-違規停車",
    num: 6491
  },{
    id: 2,
    content: "路霸排除-違規停車",
    num: 6491
  },{
    id: 3,
    content: "路霸排除-違規停車",
    num: 6491
  },{
    id: 4,
    content: "路霸排除-違規停車",
    num: 6491
  },{
    id: 5,
    content: "路霸排除-違規停車",
    num: 6491
  },{
    id: 6,
    content: "路霸排除-違規停車",
    num: 6491
  }]
  faqs: Faq[] = [];
  categories: Category[] = [];
  reply: Reply;
  selectedCategory = {
    value: "0",
    text: '機關'
  };
  selectedDateRange = {
    value: "0",
    text: '上週'
  };
  term = '';
  page: number;
  pageSize = 50;
  totalPage = 0;
  sub: any;

  public constructor(private titleService: Title, private faqService: FaqService, private route: ActivatedRoute) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  closeReply() {
    this.reply = null;
  }

  getFaqs(q = '', kind = '') {
    this.faqService
        .getFaqs(q, kind)
        .subscribe(
          faq => {
            this.faqs = faq,
            this.totalPage = Math.floor(faq.length / this.pageSize) + ((faq.length % this.pageSize === 0) ? 0 : 1)
          },
          error => this.faqs = []);
  }

  getReply(organNo: string, seqNo: number){
       this.faqService
        .getReply(organNo, seqNo)
        .subscribe(reply => {
          this.reply = reply, window.scrollTo(0, 0);
        });
  }

  getCategories() {
    this.faqService
        .getCategories()
        .subscribe(
          category => this.categories = category,
          error => this.error = error);
  }

  changeCategory(obj:any ,s: HTMLSelectElement) {
    obj.value = s.value;
    obj.text = s.options[s.selectedIndex].innerHTML;
  }

  search() {
    this.getFaqs(this.term, this.selectedCategory.value);
    this.page = 1;
  }

  ngOnInit() {
    this.setTitle('常見問題 FAQ - 台南市政府線上即時服務平台');
    this.getFaqs();
    this.getCategories();
    this.sub = this.route.params.subscribe(params => {
      if (params['page'] !== undefined) {
        this.page = parseInt(params['page']);
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
