import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'oidc-client';
import { BusyService } from './core/services/busy.service';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularDoder - App';
  isCollapsed = true;
  isLoggedIn: boolean = false;
  user: User;

  constructor( private route: ActivatedRoute, private busyService: BusyService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.busyService.busyBegin.subscribe(() => this.modalService.showBusy("Processing..."));

  }

  
}
