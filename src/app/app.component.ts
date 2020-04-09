import { Component, OnInit } from '@angular/core';
import { Account } from './shared/account.model';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
