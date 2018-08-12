const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const DB_PATH = './licenses-db.json';
const STATUS_PAID = 'paid';
const STATUS_UNPAID = 'unpaid';

class LicensesDb {
  constructor() {
    const adapter = new FileSync(DB_PATH);
    this.db = low(adapter);
    this.db.defaults({ licenses: [] }).write();
  }

  create({ fullName, email, paymentMethod, paymentId }) {
    const license = {
      email,
      fullName,
      paymentId,
      paymentMethod,
      createdAt: new Date(),
      status: STATUS_UNPAID
    };

    this.db.get('licenses').push(license).write();
  }

  setLicenseKey(paymentId, licenseKey) {
    this.db.get('licenses')
      .find({ paymentId })
      .assign({
        licenseKey,
        paidAt: new Date(),
        status: STATUS_PAID
      })
      .write();
  }

  getByPaymentId(paymentId) {
    return this.db.get('licenses').find({ paymentId });
  }
}

module.exports = new LicensesDb();
