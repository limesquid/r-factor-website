import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/link';

const Cookies = ({ className }) => (
  <div className={className}>
    <h3>Cookies and tracking technologies</h3>
    <p>
      Our website, like almost all other websites, uses cookies to provide you with the best browsing experience.
    </p>
    <p>
      Cookies are small pieces of text information stored on your end device
      (computer, tablet, smartphone) that can be read by our ICT system.
    </p>
    <p>
      Cookies allow us to:
    </p>
    <ol>
      <li>
        use analytical tools
      </li>
      <li>
        preserve your settings
      </li>
    </ol>
    <p>
      More details can be found below.
    </p>

    <h5 className="mt-4">Agreeing to cookies</h5>
    <p>
      When you visit the website for the first time, you are shown a message about the use of cookies.
      Accepting and closing this message means that you agree to the use of cookies in accordance with
      the provisions of this privacy policy. You can always withdraw your consent by deleting cookies
      and changing cookie settings in your browser. However, remember that disabling cookies may cause
      difficulties in using our website as well as many other websites that use cookies.
    </p>

    <h5 className="mt-4">Third-party cookies</h5>
    <p>
      Our website, like most of today's websites, uses functions provided by third parties which
      involve the use of third-party cookies. The use of these types of files is described below.
    </p>

    <h5 className="mt-4">Analysis and statistics</h5>
    <p>
      This site uses the <Link label="Yandex.Metrica" href="https://yandex.com/support/metrica/index.html" /> web
      analytics service provided by the company Yandex Oy Limited Company - Moreenikatu 6, 04600 Mantsala, Finland.
    </p>
    <p>
      Yandex.Metrica uses “cookies” small text files placed on user’s computers to analyze user activity.
    </p>
    <p>
      Information collected by cookies does not reveal your identity, but it can help us to improve our website
      performance. Information about your use of this website collected by cookies will be transferred to Yandex
      and stored on Yandex’s server in the EU and the Russian Federation. Yandex will process this information to
      assess how you use the website, compile reports for us on our website operation, and provide other services.
      Yandex processes this information as specified in
      the <Link label="Terms of Use" href="https://yandex.com/legal/metrica_termsofuse/" /> of Yandex.Metrica Service.
    </p>
    <p>
      You can stop using cookies be making relevant adjustments in browser settings.
      You can also use the <Link label="tool" href="https://yandex.com/support/metrika/general/opt-out.html" />.
      However, it can affect some website functions. By using this website, you agree that
      Yandex can process your data in the above manner and for the above purposes.
    </p>

    <h5 className="mt-4">Payment system</h5>
    <p>
      We use <Link label="PayU" href="https://www.payu.pl/en" /> payment system.
      PayU is not integrated with the Website.
      The payment is made entirely via PayU service.
    </p>
  </div>
);

Cookies.propTypes = {
  className: PropTypes.string
};

export default Cookies;
