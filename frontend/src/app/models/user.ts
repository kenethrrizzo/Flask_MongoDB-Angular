export class User {
  constructor(_id='', email='', name='', password='') {
    this._id = _id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  _id: string;
  name: string;
  email: string;
  password: string;
}
