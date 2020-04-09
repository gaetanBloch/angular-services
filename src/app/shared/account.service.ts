import { Injectable } from '@angular/core';

import { Account, AccountStatus } from './account.model';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Test account', 'inactive'),
    new Account('Hidden Account', 'hidden')
  ];

  constructor(private loggingService: LoggingService) {
  }

  addAccount(account: Account) {
    this.accounts.push(account);
    this.loggingService.logStatusChanged(account.status);
  }

  updateStatus(accountStatus: AccountStatus) {
    this.accounts[accountStatus.id].status = accountStatus.status;
    this.loggingService.logStatusChanged(accountStatus.status);
  }
}
