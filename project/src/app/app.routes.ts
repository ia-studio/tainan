import { ModuleWithProviders }          from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';
import { NewsComponent }                from './news/news.component';
import { ReportComponent }              from './report/report.component';
import { ReportDetailComponent }        from './report/report-detail.component';
import { QueryComponent }               from './query/query.component';
import { QueryDetailComponent }         from './query/query-detail.component';
import { ProcessComponent }             from './process/process.component';
import { FaqComponent }                 from './faq/faq.component';
import { FaqDetailComponent }           from './faq/faq-detail.component';
import { FeedbackComponent }            from './feedback/feedback.component';
import { TermComponent }                from './term/term.component';
import { ConfirmComponent }             from './confirm/confirm.component';
import { QuestionComponent }            from './question/question.component';
import { SitemapComponent }             from './sitemap/sitemap.component';
import { AacComponent }                 from './aac/aac.component';
import { CaseRankComponent }            from './case-rank/case-rank.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/report',
    pathMatch: 'full'
  },
  {
    path: 'report', //v
    component: ReportComponent
  },
  {
    path: 'report/:id/:subId', //v 需調整答覆欄位
    component: ReportDetailComponent
  },
  {
    path: 'query', //v 需要調整顯示欄位
    component: QueryComponent
  },
  {
    path: 'term/:lable', //v
    component: TermComponent
  },
  {
    path: 'process', //v
    component: ProcessComponent
  },
  {
    path: 'faq', // v
    component: FaqComponent
  },
  {
    path: 'faq/:page', // v
    component: FaqComponent
  },
  {
    path: 'sitemap', //v
    component: SitemapComponent
  },
  {
    path: 'feedback/:type', //v
    component: FeedbackComponent
  },
  {
    path: 'Confirm', //v
    component: ConfirmComponent
  },
  {
    path: 'Question',
    component: QuestionComponent
  },
  {
    path: 'aac', //v
    component: AacComponent
  },
  {
    path: 'caseRank', //v 缺 api
    component: CaseRankComponent
  },
  {
    path: '**', //v
    component: ReportComponent
  }

  // {
  //   path: 'news/:id',
  //   component: NewsComponent
  // }, 台南市政府網站沒有用到最新消息，已完成。



];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
