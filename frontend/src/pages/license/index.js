/* eslint-disable max-len */

import React from 'react';
import { Helmet } from 'react-helmet';

const NAME = 'R-FACTOR';
const EVALUATION_TOOL_NAME = 'TRY IT tool';
const COPYRIGHTS_OWNER = 'R-FACTOR Sp. z o.o.';

const LicensePage = () => (
  <div>
    <Helmet>
      <title>R-Factor - End-User License Agreement</title>
    </Helmet>

    <h1>End-User License Agreement</h1>
    <div className="text-muted">
      <ol>
        <li className="mb-2">
          LICENSES
          <br />
          {NAME} is licensed as follows:
          <ol type="a">
            <li className="mb-2">
              Evaluation.
              <br />
              You can evaluate {NAME} in an online {EVALUATION_TOOL_NAME}. You need to purchase a license to use {NAME} in any other way.
            </li>
            <li className="mb-2">
              Installation and Usage.
              <br />
              Licenses are per user and valid for use on all supported operating systems. License keys may be used on multiple computers and operating systems, provided the license key holder is the primary user. Businesses must purchase at least as many licenses as the number of people using {NAME}.
              Educational Institutions may also buy as many licenses as number of computers where {NAME} will be installed, or number of students which will use {NAME}.
            </li>
            <li className="mb-2">
              Backup Copies.
              <br />
              You may make copies of the license key and/or {NAME} for backup and archival purposes.
            </li>
          </ol>
        </li>

        <li className="mb-2">
          ILLEGAL USAGE
          <br />
          Reverse engineering {NAME}'s code, using unauthorized license keys, creating keygens and cracks for {NAME} is prohibited and will be subject for prosecution.
        </li>

        <li className="mb-2">
          DESCRIPTION OF OTHER RIGHTS AND LIMITATIONS
          <ol type="a">
            <li className="mb-2">
              Maintenance of Copyright Notices.
              <br />
              You must not remove or alter any copyright notices on any copy of {NAME}.
            </li>
            <li className="mb-2">
              Distribution.
              <br />
              You may not distribute or sell license keys or {NAME} to third parties. Licenses will be revoked if distributed or sold to third parties.
            </li>
            <li className="mb-2">
              Rental.
              <br />
              You may not rent, lease, or lend the license key or {NAME}.
            </li>
          </ol>
        </li>

        <li className="mb-2">
          COPYRIGHT
          <br />
          All title, including but not limited to copyrights, in and to {NAME} and any copies thereof are owned by {COPYRIGHTS_OWNER} (AUTHOR).
        </li>

        <li className="mb-2">
          REFUND POLICY
          <br />
          Refunds are not available. Because of this, before purchasing a license, you can evaluate {NAME} without any functionality limitations in an online {EVALUATION_TOOL_NAME}. You need to purchase a license to use {NAME} in any other way.
        </li>

        <li className="mb-2">
          NO WARRANTIES
          <br />
          AUTHOR expressly disclaims any warranty for {NAME}, which is provided 'as is' without any express or implied warranty of any kind, including but not limited to any warranties of merchantability, non-infringement, or fitness of a particular purpose.
        </li>

        <li className="mb-2">
          LIMITATION OF LIABILITY
          <br />
          In no event shall AUTHOR be liable for any damages due to use of {NAME}, to the maximum extent permitted by law. This includes without limitation, lost profits, business interruption, or lost information. In no event will AUTHOR be liable for loss of data or for indirect, special, incidental, consequential (including lost profit), or other damages. AUTHOR shall have no liability with respect to the content of {NAME} or any part thereof, including but not limited to errors or omissions contained therein, libel, trademark rights, business interruption, loss of privacy or the disclosure of confidential information.
        </li>
      </ol>
    </div>
  </div>
);

export default LicensePage;
