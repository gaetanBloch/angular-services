import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account, AccountStatus } from '../shared/account.model';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<AccountStatus>();

  constructor(private loggingService: LoggingService) {
  }

  onSetTo(status: string) {
    this.statusChanged.emit(new AccountStatus(this.id, status));
    this.loggingService.logStatusChanged(status);
  }
}
