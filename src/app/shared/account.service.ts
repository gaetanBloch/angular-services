import { Account, AccountStatus } from './account.model';

export class AccountService {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Test account', 'inactive'),
    new Account('Hidden Account', 'hidden')
  ];

  addAccount(account: Account) {
    this.accounts.push(account);
  }

  updateStatus(accountStatus: AccountStatus) {
    this.accounts[accountStatus.id].status = accountStatus.status;
  }
}
