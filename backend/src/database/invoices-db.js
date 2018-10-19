const fs = require('fs');
const path = require('path');

const INVOICES_DIR_PATH = process.env.INVOICES_DIR_PATH || './invoices';

class InvoicesDb {
  constructor() {
    if (!fs.existsSync(INVOICES_DIR_PATH)) {
      fs.mkdirSync(INVOICES_DIR_PATH);
    }
  }

  create(name, pdf) {
    const invoicePdfPath = path.join(INVOICES_DIR_PATH, `${name}.pdf`);
    fs.writeFileSync(invoicePdfPath, pdf);
  }
}

module.exports = new InvoicesDb();
