import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RepliesModal } from './replies.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //@ViewChild('requestedName') requestedName: ElementRef;
  searchReply: string = '';
  replyArray: RepliesModal[];
  errorMessage: string;
  showError: boolean = false;
  matchFound: boolean = false;
  ngOnInit() {
      this.initializeReplies();
  }

   private initializeReplies()  {
    this.replyArray = [
      {id: 'r1', title: 'good', desc: 'Angular Material is good.'},
      {id: 'r2', title: 'okay', desc: 'Angular Material is okay.'},
      {id: 'r3', title: 'fine', desc: 'Angular Material is fine.'},
      {id: 'r4', title: 'bad', desc: 'Angular Material is bad.'},
      {id: 'r5', title: 'awesome', desc: 'Angular Material is awesome.'},
      {id: 'r6', title: 'cool', desc: 'Angular Material is cool.'}
    ];
  }

  onfilterByName() {
    if(this.searchReply === '') {
      this.matchFound = false;
      this.initializeReplies();
    } else if(this.searchReply.startsWith('#')) {
        this.showError = false;
        this.matchFound = true;
        this.initializeReplies();
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

}
