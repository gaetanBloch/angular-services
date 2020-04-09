import { Component, Input } from '@angular/core';
import { Account, AccountStatus } from '../shared/account.model';
import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountService) {
  }

  onSetTo(status: string) {
    // this.loggingService.logStatusChanged(status);
    this.accountService.updateStatus(new AccountStatus(this.id, status));
    this.accountService.statusUpdated.emit(status);
  }
}
