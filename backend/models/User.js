class User {
    constructor(id, first_name, last_name, email, phone) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.phone=phone;
    }
  
    getDetails() {
      return `User: ${this.first_name} ${this.last_name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
  }
  
  module.exports = User;
  