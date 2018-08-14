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

  create({ address, companyName, email, fullName, paymentMethod, paymentId, vatin }) {
    const license = {
      address,
      companyName,
      email,
      fullName,
      paymentId,
      paymentMethod,
      createdAt: new Date(),
      status: STATUS_UNPAID,
      vatin
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

  getLicensesByDate(date) {
    return this.db.get('licenses')
      .filter(({ paidAt }) => {
        if (!paidAt) {
          return false;
        }
        const paidAtDate = new Date(paidAt);
        return paidAtDate.getFullYear() === date.getFullYear() && paidAtDate.getMonth() === date.getMonth();
      })
      .value();
  }

  getByPaymentId(paymentId) {
    return this.db.get('licenses').find({ paymentId }).value();
  }
}

module.exports = new LicensesDb();
