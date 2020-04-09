import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account, AccountStatus } from '../shared/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<AccountStatus>();

  onSetTo(status: string) {
    this.statusChanged.emit(new AccountStatus(this.id, status));
    console.log('A server status changed, new status: ' + status);
  }
}
