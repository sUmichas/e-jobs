
import { Component, OnInit, ViewEncapsulation, TemplateRef, ElementRef } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { ViewChild } from '@angular/core'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { ErrorHandlingService } from '../errorhandling.service';
import { AuthService } from '../auth.service';

import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  message: string;
  username: string;

  ngOnInit() {
  }

 
 
 
  closeResult: string;

  constructor(public auth: AuthService,
    private eh: ErrorHandlingService,
    private router: Router,
    private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  login(username, password) {
    this.auth.login(username, password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/']);
        }
    });
    this.username = localStorage.getItem('username_').slice(1,-1);
  }

  logout() {
    this.auth.logout();
  }

}
