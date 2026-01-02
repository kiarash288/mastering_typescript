interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user : Authenticatable = {
  email: 'test@example.com',
  password: 'abc1',
  login() {},
  logout() {},
}

interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}

class AuthenticatableUser implements Authenticatable {
  id = 22;
  constructor(
    public name: string,
    protected email: string,
    private password: string
  ) {}

  login() {}

  logout() {}
}


function authenticate(user: Authenticatable) {
  user.login();
}

let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc1',
  login() {

  }
  logout() {
    
  }
}