import React from "react";
import PrivacyTermsFR from "./PrivacyTermsFR";

function PrivacyTerms(props) {
  props.setLanguage("en");
  return props.language === "fr" ? (
    <PrivacyTermsFR {...props} />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Privacy Policy</h1>
          <p>
            For the purpose of facilitating your use of the Licensed
            Application, the Province collects, and you consent to this
            collection of, your selection of either the French or English
            language option, your acceptance of the terms of{" "}
            <a href="/PrivacyAndLicenseAgreement">this EULA </a>, your IP
            address and your device ID under the authority of section 26 (c) of
            the Freedom of Information and Protection of Privacy Act (“FOIPPA”).
            If you use the location services in the Licensed Application, Google
            will collect personal information, including search terms, IP
            address and latitude-longitude coordinates, from you through the
            Google maps features under the authority of section 26 (c) of
            FOIPPA.
          </p>

          <p>
            You consent to the use by Google of such personal information to
            provide and improve Google products and services, and as otherwise
            set out in the Google Privacy Policy and as may be modified by
            Google from time to time. Google indicates in its Privacy Policy
            that Google will disclose personal information to its affiliates and
            other trusted businesses or persons to process it for Google, and
            for legal reasons. Google is based in the U.S. and maintains servers
            around the world, so to use the location services in the Licensed
            Application, you further consent to the storage and disclosure of,
            and/or access to, such personal information outside Canada by Google
            as outlined above. The consents provided by you as set out in this
            section will continue unless and until revoked by you in writing to
            the contact information below.
          </p>

          <p>
            If you have any questions about the collection, use or disclosure of
            your personal information, please contact the Records clerk of the
            Employment and Labour Market Services Division, Ministry of Social
            Development and Poverty Reduction at WorkBCprivacy@gov.bc.ca.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyTerms;
