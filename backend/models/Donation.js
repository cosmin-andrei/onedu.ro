class Donation {
  constructor(id, idUser, amount, frequency, date) {
    this.id = id;
    this.idUser = idUser;
    this.amount = amount;
    this.frequency = frequency;
    this.date = date;
  }
}

module.exports = Donation;
