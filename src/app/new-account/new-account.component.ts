import { Component, EventEmitter, Output } from '@angular/core';

import { Account } from '../shared/account.model';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<Account>();

  constructor(private loggingService: LoggingService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit(new Account(accountName, accountStatus));
    this.loggingService.logStatusChanged(accountStatus);
  }
}
