export class Account {
  name: string;
  status: string;

  constructor(name: string, status: string) {
    this.name = name;
    this.status = status;
  }
}

export class AccountStatus {
  constructor(public id: number, public status: string) {
  }
}
