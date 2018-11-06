import React from 'react';
import PropTypes from 'prop-types';

const PersonalData = ({ className }) => (
  <div className={className}>
    <h3>Personal Data</h3>
    <p>
      The Administrator of your personal data, in accordance with the Act on the Protection of personal data,
      is Kamil Mielnik (Tarnów, Poland).
    </p>

    <p>
      Purposes, legal bases and specified period of personal data processing are
      described separately for each purpose of data processing (see the provisions
      below for a detailed description of the different purposes of data processing).
    </p>

    <p>
      You have the following rights concerning our processing of your personal data:
    </p>
    <ol>
      <li>
        the right to request access to your personal data as well as its rectification,
        removal or restriction of processing,
      </li>
      <li>
        the right to object to the processing,
      </li>
      <li>
        the right to transfer data,
      </li>
      <li>
        the right to withdraw consent for the processing of personal data for a specific purpose,
        if such consent has been previously given,
      </li>
      <li>
        the right to bring a complaint to the supervisory authority in connection with the processing of personal data.
      </li>
    </ol>

    <p>
      The above mentioned rights can be exercised in accordance with the rules described in art. 16 - 21 of GDPR,
      by writing us a message using our contact form. We may refuse to exercise certain rights from
      those indicated above in a situation where the implementation of a given right would be in conflict with the
      legitimate purpose of the data we process. For example, we may refuse to delete personal data specified in
      your order until the expiry of the limitation period for claims under the concluded contract.
    </p>

    <p>
      We guarantee the confidentiality of any personal data made available to us. We ensure that all security measures
      and personal data protection required by provisions of the Act on the Protection of personal data are taken.
      Personal data is collected with due diligence and adequately protected against access by unauthorized persons.
    </p>

    <p>
      All entities entrusted with the processing of personal data guarantee the use of
      adequate security measures and personal data protection required by law.
    </p>

    <h5 className="mt-4">Placing an order</h5>
    <p>
      When placing an order, you must provide data necessary to complete the order.
      The data provided in the order form will be stored in the database and will be stored there until
      the expiry of the limitation period for claims under the concluded contract. Each order is
      recorded in the database as a separate item.
    </p>

    <h5 className="mt-4">Invoices</h5>
    <p>
      If we issue an invoice for the placed order, we process your data to the extent necessary to issue the invoice.
    </p>
    <p>
      In this case, the legal basis for the processing of your personal data is the fulfilment of the legal obligation
      to issue the invoice. In addition, all issued invoices are included in the accounting documentation. As a result
      your, the data will be processed as part of this documentation for the period required by law.
    </p>

    <h5 className="mt-4">Complaints</h5>
    <p>
      If you submit a complaint, you provide us with data contained therein.
      We process this data in order to complete the complaint procedure.
    </p>
    <p>
      In this case, the legal basis for the processing of your personal data is the
      fulfilment of our legal obligations related to the complaint procedure.
    </p>

    <h5 className="mt-4">Contact form</h5>
    <p>
      By contacting us through any of website forms, you provide us with your e-mail address which shall be
      associated with the sender. What is more, in the message you can include other personal information.
    </p>
    <p>
      In this case, the legal basis for the processing of personal data is your
      consent resulting from initiating contact with us.
    </p>
    <p>
      Your personal data provided as part of the message is processed only to respond to your inquiry.
      The content of the correspondence may be archived.
    </p>
  </div>
);

PersonalData.propTypes = {
  className: PropTypes.string
};

export default PersonalData;
