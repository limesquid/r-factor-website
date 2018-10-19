const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const LICENSES_DB_PATH = process.env.LICENSES_DB_PATH || './licenses-db.json';
const STATUS_PAID = 'paid';
const STATUS_UNPAID = 'unpaid';

class LicensesDb {
  constructor() {
    const adapter = new FileSync(LICENSES_DB_PATH);
    this.db = low(adapter);
    this.db.defaults({ licenses: [] }).write();
  }

  create({ address, companyName, email, fullName, paymentMethod, internalOrderId, externalOrderId, vatin }) {
    const license = {
      address,
      companyName,
      email,
      fullName,
      internalOrderId,
      externalOrderId,
      paymentMethod,
      createdAt: new Date(),
      status: STATUS_UNPAID,
      vatin
    };

    this.db.get('licenses').push(license).write();
  }

  setLicenseKey(internalOrderId, licenseKey) {
    this.db.get('licenses')
      .find({ internalOrderId })
      .assign({
        licenseKey,
        paidAt: new Date(),
        status: STATUS_PAID
      })
      .write();
  }

  getLicensesByDate(date) {
    return this.db.get('licenses')
      .filter(({ status }) => status === STATUS_PAID)
      .filter(({ paidAt }) => {
        const paidAtDate = new Date(paidAt);
        return paidAtDate.getFullYear() === date.getFullYear() && paidAtDate.getMonth() === date.getMonth();
      })
      .value();
  }

  getByPaymentId(internalOrderId) {
    return this.db.get('licenses').find({ internalOrderId }).value();
  }
}

module.exports = new LicensesDb();
