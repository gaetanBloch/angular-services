import { Component } from '@angular/core';
import { Account, AccountStatus } from './shared/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Test account', 'inactive'),
    new Account('Hidden Account', 'hidden')
  ];

  onAccountAdded(newAccount: Account) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: AccountStatus) {
    this.accounts[updateInfo.id].status = updateInfo.status;
  }
}
