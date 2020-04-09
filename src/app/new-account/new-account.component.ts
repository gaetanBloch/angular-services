import { Component, EventEmitter, Output } from '@angular/core';

import { Account } from '../shared/account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<Account>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit(new Account(accountName, accountStatus));
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
