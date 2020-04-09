import { Component } from '@angular/core';

import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/account.service';
import { Account } from '../shared/account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('Status : ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.loggingService.logStatusChanged(accountStatus);
    this.accountService.addAccount(new Account(accountName, accountStatus));
  }
}
