import React from "react";

function PrivacyTermsFR(props) {
  props.setLanguage("fr");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Privacy Policy</h1>
          <p>
            Confidentialité. Afin de faciliter votre utilisation de
            l'Application sous licence, la Province collecte, et vous consentez
            à ce qu'elle collecte, votre sélection de l'option Français ou
            Anglais, votre acceptation des modalités du présent{" "}
            <a href="/PrivacyAndLicenseAgreementFR">ALUF</a>, votre adresse IP
            et votre ID d'appareil, en vertu de l'alinéa 26c) de la loi
            intitulée Freedom of Information and Protection of Privacy Act
            (« FOIPPA ») (loi sur l'accès à l'information et la protection de la
            vie privée).SI vous utilisez les services de localisation de
            l'Application sous licence, Google collectera des renseignements
            personnels, y compris les termes de recherche, l'adresse IP et les
            coordonnées de latitude et de longitude, auprès de vous et par le
            biais des fonctionnalités de Google Maps, en vertu de l'alinéa 26c)
            de la FOIPPA.
          </p>
          <p>
            Vous consentez à l'utilisation par Google de tels renseignements
            personnels pour offrir et améliorer les produits et les services
            Google, et conformément aux autres dispositions énoncées dans la
            Politique de confidentialité de Google, lesquelles peuvent être
            modifiées de temps à autre. Google indique, dans sa Politique de
            confidentialité, sa divulgation des renseignements personnels à ses
            affiliés et à d'autres entreprises ou personnes de confiance aux
            fins de traitement pour son compte, ainsi que pour des raisons
            juridiques. Comme le siège de Google est aux États-Unis et que
            Google maintient des serveurs dans le monde entier, pour utiliser
            les services de localisation de l'Application sous licence, vous
            consentez également au stockage et à la divulgation de ces
            renseignements personnels et/ou à leur accès par Google à
            l'étranger, comme indiqué ci-dessus. Les consentements que vous avez
            donnés, définis dans la présente section, se prolongeront à moins
            que et jusqu'à ce que vous les révoquiez par écrit aux coordonnées
            ci-dessous.
          </p>
          <p>
            Si vous avez des questions au sujet de la collecte, l'utilisation ou
            la divulgation de vos renseignements personnels, veuillez
            communiquer avec le commis aux registres de la Division des services
            d'emploi et du marché du travail, ministère du Développement social
            et de la Réduction de la pauvreté, à WorkBCprivacy@gov.bc.ca.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyTermsFR;
