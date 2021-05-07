import { HttpClient } from '@angular/common/http';
import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { RepliesModal } from './replies.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  searchReply: string = '';
  replyArray: RepliesModal[];
  errorMessage: string;
  showError: boolean = false;
  matchFound: boolean = false;
  repliesSubs: Subscription;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.initializeReplies();
  }

  onfilterByName() {
    if(this.searchReply === '') {
      this.matchFound = false;
      this.initializeReplies();
    } else if(this.searchReply.startsWith('#')) {
        this.showError = false;
        this.matchFound = true;
        // this.initializeReplies();
    }
    let modifiedReplyArray: RepliesModal[] = [];
    this.replyArray.filter( (reply) => {
        if(this.searchReply.startsWith('#')) {
          const searchString = this.searchReply.replace('#', '');

          if(reply.title.toLowerCase().includes(searchString.toLowerCase())) {
            this.matchFound = true;
            modifiedReplyArray.push(new RepliesModal(reply.id, reply.title, reply.desc));
          }
        } else {
            this.showError = true;
            this.errorMessage = 'Filter should start with a #';
        }
    });
    this.replyArray = [];
    return this.replyArray = modifiedReplyArray;
  }

  private get repliesObserver(): Observable<RepliesModal[]> {
    return this.http.get<[RepliesModal]>('../../assets/filterData.json')
    .pipe( map( (data) => {
      let modifiedDataArray: RepliesModal[] = [];
        for(let d of data) {
            d.title !== null ? modifiedDataArray.push(d) : null;
        }
        return modifiedDataArray;
    }), take(1), tap( (data) => {console.log(data)}))
  }

  private initializeReplies()  {
    this.repliesSubs = this.repliesObserver.subscribe( replies => {
      this.replyArray = replies;
    })
  }

  ngOnDestroy() {
    this.repliesSubs.unsubscribe();
  }
}


