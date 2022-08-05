import React from "react"
// eslint-disable-next-line import/no-cycle
import PrivacyAndLicenseAgreement from "./PrivacyAndLicenseAgreement"

function PrivacyAndLicenseAgreementFR(props) {
    const { language, setLanguage } = props

    setLanguage("fr")
    return language === "en" ? (
        <PrivacyAndLicenseAgreement {...props} />
    ) : (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>ACCORD DE LICENCE {`D'UTILISATEUR`} FINAL</h1>
                    <p>
                        <strong>ACCORD DE LICENCE D&rsquo;UTILISATEUR FINAL</strong>
                    </p>
                    <p>
                        L&rsquo;appli WorkBC (&laquo;&thinsp;l&rsquo;Application sous licence&thinsp;&raquo;) vous (&laquo;&thinsp;Vous&thinsp;&raquo;
                        ou &laquo;&thinsp;vous&thinsp;&raquo;) permet de trouver de l&rsquo;information et de communiquer au sujet des services
                        d&rsquo;emploi, des services aux apprentis ou des services d&rsquo;assistance technologique (collectivement, les
                        &laquo;&thinsp;Services&thinsp;&raquo;) par le biais de WorkBC. Le pr&eacute;sent accord de licence d&rsquo;utilisateur final
                        (&laquo;&thinsp;ALUF&thinsp;&raquo;) d&eacute;finit les modalit&eacute;s qui s&rsquo;appliquent &agrave; vous quand vous
                        t&eacute;l&eacute;chargez ou que vous utilisez l&rsquo;appli WorkBC. Le pr&eacute;sent ALUF constitue un accord juridique
                        entre vous (&laquo;&thinsp;Vous&thinsp;&raquo; ou &laquo;&thinsp;vous&thinsp;&raquo;), l&rsquo;utilisateur final de
                        l&rsquo;Application sous licence et Sa Majest&eacute; la reine du chef de la province de la Colombie-Britannique (la
                        &laquo;&thinsp;Province&thinsp;&raquo;). En indiquant que vous acceptez le pr&eacute;sent ALUF et, eu &eacute;gard &agrave;
                        l&rsquo;utilisation de l&rsquo;Application sous licence, vous convenez de ce qui suit.
                    </p>
                    <ol>
                        <li>
                            <u>Parties.</u> Les parties au pr&eacute;sent ALUF sont vous-m&ecirc;me et la Province (collectivement, les
                            &laquo;&thinsp;Parties&thinsp;&raquo;). Les Parties reconnaissent que&nbsp;: a) le pr&eacute;sent ALUF est conclu
                            exclusivement entre les Parties et non avec Apple Inc. (&laquo;&thinsp;Apple&thinsp;&raquo;); b) la Province, et non
                            Apple, est la seule responsable de l&rsquo;Application sous licence et de son contenu.
                        </li>
                        <li>
                            <u>Authentification.</u> Au cas o&ugrave; vous utiliseriez le compte BCeID qui vous a &eacute;t&eacute; &eacute;mis afin
                            de confirmer votre identit&eacute; et d&rsquo;utiliser l&rsquo;Application sous licence, les conditions du BCeID
                            &eacute;nonc&eacute;es &agrave; l&rsquo;adresse{" "}
                            <a href="https: //www.bceid.ca/aboutbceid/agreements.aspx">www.bceid.ca/aboutbceid/agreements.aspx</a> continuent de
                            s&rsquo;appliquer &agrave; vous, selon le type de compte BCEID utilis&eacute;. Au cas o&ugrave; vous utiliseriez une BC
                            Services Card afin de confirmer votre identit&eacute; et d&rsquo;utiliser l&rsquo;Application sous licence, vous
                            reconnaissez que les conditions d&rsquo;ouverture de session &eacute;nonc&eacute;es &agrave; l&rsquo;adresse&nbsp;
                            <a href="https: //www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card/log-in-with-card/terms-of-use">
                                www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card/log-in-with-card/terms-of-use
                            </a>{" "}
                            continuent de s&rsquo;appliquer &agrave; vous lors de votre utilisation de votre BC Services Card.
                        </li>
                        <li>
                            <u>Capacit&eacute; d&rsquo;accepter l&rsquo;ALUF.</u> Pour accepter les modalit&eacute;s du pr&eacute;sent ALUF et pour
                            t&eacute;l&eacute;charger et/ou utiliser l&rsquo;Application sous licence, vous devez, vous d&eacute;clarez et
                            garantissez&nbsp;: a) &ecirc;tre &acirc;g&eacute;(e) d&rsquo;au moins dix-neuf (19) ans ou b), si vous avez moins de
                            19&nbsp;ans, avoir obtenu le consentement de votre parent ou tuteur ou tutrice pour accepter le pr&eacute;sent Accord en
                            votre nom, auquel cas votre parent ou tuteur ou tutrice est responsable de votre utilisation de l&rsquo;Application sous
                            licence. Si vous ne respectez pas ces exigences, vous ne devez pas acc&eacute;der &agrave; l&rsquo;Application sous
                            licence ni l&rsquo;utiliser.
                        </li>
                        <li>
                            <u>Mots de passe et protection de la confidentialit&eacute;.</u> Sauf dans le cas pr&eacute;vu &agrave;
                            l&rsquo;article&nbsp;5, vous acceptez de ne pas partager les mots de passe ou les informations de connexion pour
                            l&rsquo;Application sous licence avec toute autre personne ou entit&eacute;, et vous acceptez &eacute;galement de fermer
                            la session apr&egrave;s chaque utilisation de l&rsquo;Application sous licence en cliquant sur le bouton
                            &laquo;&thinsp;Fermeture de session&thinsp;&raquo;.
                        </li>
                        <li>
                            <u>Mineurs.</u> Si vous &ecirc;tes le parent ou le tuteur ou la tutrice d&rsquo;un mineur ou d&rsquo;une mineure, vous ne
                            devez pas utiliser son mot de passe ou ses informations de connexion en son nom pour acc&eacute;der &agrave;
                            l&rsquo;Application sous licence, sauf si cette personne est incapable de le faire elle-m&ecirc;me.
                        </li>
                        <li>
                            <u>Propri&eacute;t&eacute;.</u> L&rsquo;Application sous licence et toutes les autres informations et &oelig;uvres
                            accessibles, affich&eacute;es ou transmises en relation avec l&rsquo;Application sous licence, y compris, mais sans
                            s&rsquo;y limiter, les donn&eacute;es, les textes, les fichiers audio, les vid&eacute;os, les marques de commerce, les
                            noms commerciaux, les logos, les noms de domaine, les images, les repr&eacute;sentations graphiques, les
                            &eacute;l&eacute;ments graphiques et les motifs de l&rsquo;interface utilisateur, sous quelque forme ou sur quelque
                            support que ce soit (collectivement, le &laquo;&thinsp;Contenu&thinsp;&raquo;), appartiennent &agrave; la Province ou
                            &agrave; ses conc&eacute;dants et sont prot&eacute;g&eacute;s par les lois r&eacute;gissant les droits d&rsquo;auteur, les
                            brevets et les marques de commerce, ainsi que par les autres lois prot&eacute;geant les droits de propri&eacute;t&eacute;
                            intellectuelle.
                        </li>
                        <li>
                            <u>Tiers b&eacute;n&eacute;ficiaire</u>. Les Parties reconnaissent et acceptent que&nbsp;: a) Apple et les filiales
                            d&rsquo;Apple sont les tiers b&eacute;n&eacute;ficiaires du pr&eacute;sent ALUF; b) &agrave; votre acceptation des
                            modalit&eacute;s &eacute;nonc&eacute;es dans le pr&eacute;sent ALUF, Apple aura le droit (et sera r&eacute;put&eacute;
                            avoir accept&eacute; le droit) de faire valoir l&rsquo;ALUF &agrave; votre encontre en tant que tiers
                            b&eacute;n&eacute;ficiaire de celui-ci.
                        </li>
                        <li>
                            <u>Licence</u>. La Province vous octroie par la pr&eacute;sente une licence d&rsquo;emploi non exclusive, libre de
                            redevances, non transf&eacute;rable et, sous r&eacute;serve de la section&nbsp;9 du pr&eacute;sent ALUF,
                            perp&eacute;tuelle de l&rsquo;Application sous licence pour des produits Google ou Apple, &agrave; condition que vous
                            utilisiez soit des produits Apple qui vous appartiennent ou que vous contr&ocirc;lez dans la mesure permise par les
                            r&egrave;glements d&rsquo;utilisation &eacute;nonc&eacute;s dans les Modalit&eacute;s des services multim&eacute;dias
                            d&rsquo;Apple, &agrave; l&rsquo;adresse{" "}
                            <a href="https: //www.apple.com/ca/fr/legal/internet-services/itunes/cafr/terms.html">
                                apple.com/ca/fr/legal/internet-services/itunes/cafr/terms.html
                            </a>{" "}
                            (ou &agrave; toute autre adresse URL d&eacute;sign&eacute;e par Apple) (les &laquo;&thinsp;Modalit&eacute;s de l&rsquo;App
                            Store&thinsp;&raquo;), lesquels pourraient &ecirc;tre modifi&eacute;s par Apple de temps &agrave; autre (le
                            &laquo;&thinsp;Conc&eacute;dant&thinsp;&raquo;). Sauf disposition contraire des Modalit&eacute;s de l&rsquo;App Store (qui
                            ne permettent pas l&rsquo;acc&egrave;s, l&rsquo;acquisition et l&rsquo;utilisation des Applications sous licence par
                            d&rsquo;autres comptes associ&eacute;s &agrave; l&rsquo;acheteur par le biais de la fonctionnalit&eacute; Partage familial
                            et de l&rsquo;achat en grande quantit&eacute;), vous ne pouvez pas distribuer l&rsquo;Application sous licence ni la
                            rendre accessible sur un r&eacute;seau o&ugrave; elle pourrait &ecirc;tre utilis&eacute;e par plusieurs appareils en
                            m&ecirc;me temps. Si vous vendez votre produit Apple &agrave; une tierce partie, vous devez tout d&rsquo;abord supprimer
                            l&rsquo;Application sous licence de l&rsquo;appareil Apple. Il est entendu que vous ne pouvez pas&nbsp;: a) louer,
                            pr&ecirc;ter, vendre, transf&eacute;rer, redistribuer ni sous-autoriser l&rsquo;Application sous licence ou b) copier
                            (sauf tel que cela est permis par cette licence et les r&egrave;glements d&rsquo;utilisation) l&rsquo;Application sous
                            licence ou ses mises &agrave; jour, ou toute partie de l&rsquo;Application sous licence, proc&eacute;der &agrave; une
                            ing&eacute;nierie inverse de celles-ci, les d&eacute;monter, tenter d&rsquo;en d&eacute;river le code source, les modifier
                            ou cr&eacute;er des &oelig;uvres d&eacute;riv&eacute;es &agrave; partir de celles-ci (sauf dans la mesure o&ugrave;
                            l&rsquo;une des restrictions pr&eacute;c&eacute;dentes est interdite par la loi applicable ou dans la mesure permise par
                            les conditions de licence r&eacute;gissant l&rsquo;utilisation de tout composant d&rsquo;un logiciel libre
                            int&eacute;gr&eacute; dans l&rsquo;Application sous licence).&nbsp;
                        </li>
                        <li>
                            <u>R&eacute;siliation</u>. La licence sera r&eacute;sili&eacute;e automatiquement si vous omettez de vous conformer
                            &agrave; l&rsquo;une des modalit&eacute;s du pr&eacute;sent ALUF ou si l&rsquo;une de vos d&eacute;clarations ou garanties
                            est ou devient inexacte ou fausse. La Province se r&eacute;serve &eacute;galement le droit de r&eacute;silier la
                            pr&eacute;sente licence quelle qu&rsquo;en soit la raison et &agrave; sa seule discr&eacute;tion. En cas de
                            r&eacute;siliation de la pr&eacute;sente licence qu&rsquo;elle qu&rsquo;en soit la cause, vous devrez&nbsp;: a) cesser
                            imm&eacute;diatement d&rsquo;utiliser l&rsquo;Application sous licence; b) supprimer ou d&eacute;truire toutes les copies
                            de l&rsquo;Application sous licence en votre possession ou sous votre contr&ocirc;le.
                        </li>
                        <li>
                            <u>Utilisation acceptable</u>. Vous ne devez entreprendre aucune action en utilisant l&rsquo;Application sous licence qui
                            compromettrait la s&eacute;curit&eacute;, l&rsquo;int&eacute;grit&eacute; et/ou la disponibilit&eacute; de
                            l&rsquo;Application sous licence, y compris, mais sans s&rsquo;y limiter&nbsp;:
                            <ol style={{ listStyleType: "lower-alpha", color: "black" }}>
                                <li>utiliser l&rsquo;Application sous licence &agrave; des fins illicites ou inappropri&eacute;es;</li>
                                <li>
                                    d&eacute;compiler, d&eacute;monter, proc&eacute;der &agrave; une ing&eacute;nierie inverse ou copier autrement
                                    tout logiciel associ&eacute; &agrave; l&rsquo;Application sous licence;
                                </li>
                                <li>alt&eacute;rer toute partie de l&rsquo;Application sous licence;</li>
                                <li>
                                    utiliser l&rsquo;Application sous licence pour transmettre un virus ou un autre code informatique, des fichiers ou
                                    des programmes nuisibles ou destructeurs ou mener des activit&eacute;s de piratage ou d&rsquo;intrusion;
                                </li>
                                <li>
                                    tenter de contourner ou de saper les mesures de s&eacute;curit&eacute; associ&eacute;es &agrave;
                                    l&rsquo;Application sous licence;
                                </li>
                                <li>
                                    accomplir tout acte qu&rsquo;on peut raisonnablement consid&eacute;rer comme susceptible de nuire aux autres
                                    utilisateurs de l&rsquo;Application sous licence;
                                </li>
                                <li>
                                    effacer ou modifier tout symbole ou avis exclusif, y compris tout avis de droit d&rsquo;auteur, toute marque de
                                    commerce ou tout logo, affich&eacute; dans le cadre de l&rsquo;Application sous licence.
                                </li>
                            </ol>
                            Les Parties reconnaissent qu&rsquo;Apple n&rsquo;a aucune obligation de garantie de quelque nature que ce soit en ce qui
                            concerne l&rsquo;Application sous licence.
                        </li>
                        <li>
                            <u>Entretien et soutien</u>. Les Parties reconnaissent que&nbsp;: a) la Province peut, &agrave; sa seule
                            discr&eacute;tion, assurer l&rsquo;entretien et le soutien de l&rsquo;Application sous licence, y compris la
                            d&eacute;panner, la mettre &agrave; jour et la modifier (les &laquo;&thinsp;Services de soutien&thinsp;&raquo;); b) la
                            Province est la seule responsable de la prestation des Services de soutien, le cas &eacute;ch&eacute;ant; c) Apple
                            n&rsquo;a aucune obligation de fournir des services d&rsquo;entretien et de soutien en relation avec l&rsquo;Application
                            sous licence. Toutes les questions concernant les Services de soutien et toutes les demandes de renseignements
                            g&eacute;n&eacute;rales concernant l&rsquo;Application sous licence doivent &ecirc;tre adress&eacute;es &agrave;
                            WorkBCAppSupport@gov.bc.ca.
                        </li>
                        <li>
                            <u>Aucune garantie</u>. L&rsquo;Application sous licence vous est fournie &laquo;&thinsp;telle quelle&thinsp;&raquo; et la
                            Province renonce &agrave; toutes les d&eacute;clarations, garanties, conditions, obligations et responsabilit&eacute;s de
                            toutes sortes, expresses ou implicites, en ce qui concerne l&rsquo;Application sous licence, y compris, mais sans
                            s&rsquo;y limiter, les garanties implicites de qualit&eacute; marchande, de qualit&eacute; satisfaisante,
                            d&rsquo;ad&eacute;quation &agrave; des fins particuli&egrave;res et de non-contrefa&ccedil;on. Sans limiter la
                            port&eacute;e g&eacute;n&eacute;rale de la phrase pr&eacute;c&eacute;dente, la Province ne d&eacute;clare ni ne garantit
                            que&nbsp;:
                            <ol style={{ listStyleType: "lower-alpha", color: "black" }}>
                                <li>l&rsquo;Application sous licence sera disponible;</li>
                                <li>votre utilisation de l&rsquo;Application sous licence sera en temps opportun, sans interruption ou erreur;</li>
                                <li>les erreurs de l&rsquo;Application sous licence seront corrig&eacute;es;</li>
                                <li>l&rsquo;Application sous licence r&eacute;pondra &agrave; vos attentes et &agrave; vos exigences.</li>
                            </ol>
                        </li>
                        <li>
                            <u>Limitation de responsabilit&eacute;</u>. Dans toute la mesure permise par la l&eacute;gislation applicable, en aucune
                            circonstance la Province ne sera responsable envers toute personne ou entit&eacute; des dommages directs, indirects,
                            sp&eacute;ciaux, accessoires ou cons&eacute;cutifs ni des pertes, r&eacute;clamations, pr&eacute;judices corporels ou
                            dommages d&rsquo;une autre nature, qu&rsquo;ils soient pr&eacute;visibles ou impr&eacute;visibles (y compris, mais sans
                            s&rsquo;y limiter, les demandes de dommages-int&eacute;r&ecirc;ts pour les pertes de profit ou de possibilit&eacute;s
                            d&rsquo;affaires, l&rsquo;utilisation ou la mauvaise utilisation, ou l&rsquo;incapacit&eacute; d&rsquo;utiliser
                            l&rsquo;Application sous licence, les interruptions, la suppression ou la corruption de fichiers, la perte de programmes
                            ou d&rsquo;informations, les erreurs, les d&eacute;fauts ou les retards) li&eacute;s de quelque fa&ccedil;on que ce soit
                            &agrave; votre utilisation de l&rsquo;Application sous licence ou qui en d&eacute;coulent, et fond&eacute;s sur la
                            th&eacute;orie de responsabilit&eacute; contractuelle, d&eacute;lictuelle, stricte ou sur toute autre th&eacute;orie
                            juridique. La phrase pr&eacute;c&eacute;dente s&rsquo;appliquera m&ecirc;me si la Province a &eacute;t&eacute;
                            express&eacute;ment avis&eacute;e de la possibilit&eacute; de telle perte, r&eacute;clamation ou de tel pr&eacute;judice
                            physique ou dommage.Les Parties reconnaissent qu&rsquo;Apple n&rsquo;est pas responsable de&nbsp;: a) r&eacute;pondre aux
                            r&eacute;clamations de votre part ou de celle de toute partie tierce et de quelque nature que ce soit concernant
                            l&rsquo;Application sous licence; b) de votre possession et/ou utilisation de l&rsquo;Application sous licence.
                        </li>
                        <li>
                            <u>R&eacute;clamations au titre de la propri&eacute;t&eacute; intellectuelle.</u> L&rsquo;Application sous licence et son
                            contenu appartiennent &agrave; la Province ou sont utilis&eacute;s par la Province en vertu d&rsquo;une licence. Les
                            Parties reconnaissent que, en cas de mise en cause par un tiers de l&rsquo;Application sous licence ou de votre possession
                            et/ou utilisation de l&rsquo;Application sous licence au titre d&rsquo;une violation des droits de propri&eacute;t&eacute;
                            intellectuelle, la Province, et non Apple, est enti&egrave;rement responsable de l&rsquo;enqu&ecirc;te, de la
                            d&eacute;fense, du r&egrave;glement et de l&rsquo;annulation d&rsquo;une telle plainte. En cas de plainte de cette nature,
                            la Province se r&eacute;serve le droit de remplacer tout contenu pr&eacute;tendument en violation des droits de
                            propri&eacute;t&eacute; intellectuelle d&rsquo;un tiers.
                        </li>
                        <li>
                            <u>Indemnisation</u> Vous acceptez d&rsquo;indemniser, de d&eacute;fendre et de d&eacute;gager de toute
                            responsabilit&eacute; la Province et tous ses fonctionnaires, employ&eacute;s et repr&eacute;sentants respectifs &agrave;
                            l&rsquo;&eacute;gard de toutes les r&eacute;clamations, exigences, obligations, pertes et de tous les frais ou dettes et
                            d&eacute;penses (y compris, mais sans s&rsquo;y limiter, des honoraires d&rsquo;avocat raisonnables) d&eacute;coulant
                            de&nbsp;: a) votre utilisation de l&rsquo;Application sous licence; b) votre violation de toute disposition du
                            pr&eacute;sent ALUF.
                        </li>
                        <li>
                            <u>Contenu sous licence.</u> L&rsquo;Application sous licence fait appel aux caract&eacute;ristiques cartographiques et au
                            contenu de Google Maps, et les caract&eacute;ristiques et le contenu de Google Maps sont utilis&eacute;s sous licence de
                            Google Inc. (&laquo;&thinsp;Google&thinsp;&raquo;) et assujettis aux Conditions d&rsquo;utilisation suppl&eacute;mentaires
                            en vigueur de Google Maps/Google, consultables &agrave; l&rsquo;adresse{" "}
                            <a href="https: //www.google.com/help/terms_maps/">google.com/help/terms_maps</a> et &agrave; la Politique de
                            confidentialit&eacute; de Google, consultable &agrave;{" "}
                            <a href="https: //policies.google.com/privacy?hl=fr-CA">policies.google.com/privacy?hl=fr-CA</a> (ou &agrave; toute autre
                            adresse URL d&eacute;sign&eacute;e par Google) lesquelles peuvent &ecirc;tre modifi&eacute;es par Google de temps &agrave;
                            autre. En utilisant l&rsquo;Application sous licence, vous acceptez &eacute;galement d&rsquo;&ecirc;tre li&eacute;(e) par
                            la politique d&rsquo;utilisation acceptable de Google Maps et de vous y conformer, laquelle est consultable &agrave;
                            l&rsquo;adresse <a href="https: //cloud.google.com/maps-platform/terms/aup/">cloud.google.com/maps-platform/terms/aup</a>{" "}
                            (ou &agrave; toute autre adresse URL d&eacute;sign&eacute;e par Google) et peut &ecirc;tre modifi&eacute;e par Google de
                            temps &agrave; autre.
                        </li>
                        <li>
                            <u>Confidentialit&eacute;.</u> Afin de faciliter votre utilisation de l&rsquo;Application sous licence, la Province
                            collecte, et vous consentez &agrave; ce qu&rsquo;elle collecte, votre s&eacute;lection de l&rsquo;option Fran&ccedil;ais
                            ou Anglais, votre acceptation des modalit&eacute;s du pr&eacute;sent ALUF, votre adresse IP et votre ID d&rsquo;appareil,
                            en vertu de l&rsquo;alin&eacute;a&nbsp;26c) de la loi intitul&eacute;e{" "}
                            <em>Freedom of Information and Protection of Privacy Act</em> (&laquo;&thinsp;FOIPPA&thinsp;&raquo;) (loi sur
                            l&rsquo;acc&egrave;s &agrave; l&rsquo;information et la protection de la vie priv&eacute;e).SI vous utilisez les services
                            de localisation de l&rsquo;Application sous licence, Google collectera des renseignements personnels, y compris les termes
                            de recherche, l&rsquo;adresse IP et les coordonn&eacute;es de latitude et de longitude, aupr&egrave;s de vous et par le
                            biais des fonctionnalit&eacute;s de Google Maps, en vertu de l&rsquo;alin&eacute;a&nbsp;26c) de la FOIPPA. Vous consentez
                            &agrave; l&rsquo;utilisation par Google de tels renseignements personnels pour offrir et am&eacute;liorer les produits et
                            les services Google, et conform&eacute;ment aux autres dispositions &eacute;nonc&eacute;es dans la Politique de
                            confidentialit&eacute; de Google, lesquelles peuvent &ecirc;tre modifi&eacute;es de temps &agrave; autre. Google indique,
                            dans sa Politique de confidentialit&eacute;, sa divulgation des renseignements personnels &agrave; ses affili&eacute;s et
                            &agrave; d&rsquo;autres entreprises ou personnes de confiance aux fins de traitement pour son compte, ainsi que pour des
                            raisons juridiques. Comme le si&egrave;ge de Google est aux &Eacute;tats-Unis et que Google maintient des serveurs dans le
                            monde entier, pour utiliser les services de localisation de l&rsquo;Application sous licence, vous consentez
                            &eacute;galement au stockage et &agrave; la divulgation de ces renseignements personnels et/ou &agrave; leur acc&egrave;s
                            par Google &agrave; l&rsquo;&eacute;tranger, comme indiqu&eacute; ci-dessus. Les consentements que vous avez
                            donn&eacute;s, d&eacute;finis dans la pr&eacute;sente section, se prolongeront &agrave; moins que et jusqu&rsquo;&agrave;
                            ce que vous les r&eacute;voquiez par &eacute;crit aux coordonn&eacute;es ci-dessous.&nbsp;Si vous avez des questions au
                            sujet de la collecte, l&rsquo;utilisation ou la divulgation de vos renseignements personnels, veuillez communiquer avec le
                            commis aux registres de la Division des services d&rsquo;emploi et du march&eacute; du travail, minist&egrave;re du
                            D&eacute;veloppement social et de la R&eacute;duction de la pauvret&eacute;, &agrave;&nbsp;
                            <a href="mailto:elms.stakeholders@gov.bc.ca">WorkBCprivacy@gov.bc.ca</a>.
                        </li>
                        <li>
                            <u>Services de localisation.</u> VOTRE UTILISATION DE CETTE APPLICATION DE GUIDAGE ROUTIER EST &Agrave; VOS PROPRES
                            RISQUES. LES DONN&Eacute;ES DE LOCALISATION PEUVENT &Ecirc;TRE INEXACTES.
                        </li>
                        <li>
                            <u>Sites Web tiers.</u> Vous reconnaissez que&nbsp;: a) l&rsquo;Application sous licence peut comporter des liens vers des
                            sites Web tiers; b) quand vous suivez un lien vers un site Web tiers, vous pouvez &ecirc;tre assujetti(e) aux
                            modalit&eacute;s d&rsquo;utilisation et/ou &agrave; la politique de confidentialit&eacute;, le cas &eacute;ch&eacute;ant,
                            de ce site Web tiers; c) la Province n&rsquo;avalise pas le contenu des sites Web tiers et n&rsquo;est pas responsable des
                            modalit&eacute;s d&rsquo;utilisation, des politiques de confidentialit&eacute;, des pratiques ou du contenu des sites Web
                            tiers.
                        </li>
                        <li>
                            <u>Modalit&eacute;s des services tiers.</u> Vous pourrez avoir besoin de faire appel &agrave; des services tiers pour
                            utiliser l&rsquo;Application sous licence (notamment aux services de donn&eacute;es sans fil) et vous acceptez de vous
                            conformer aux modalit&eacute;s des services tiers qui s&rsquo;appliquent &agrave; vous pendant votre utilisation de
                            l&rsquo;Application sous licence.
                        </li>
                        <li>
                            <u>Conformit&eacute; l&eacute;gale.</u> Vous d&eacute;clarez et vous garantissez que&nbsp;: a) vous ne vous trouvez pas
                            dans un pays plac&eacute; sous embargo par le gouvernement des &Eacute;tats-Unis ou que le gouvernement des
                            &Eacute;tats-Unis qualifie de &laquo;&thinsp;soutien des activit&eacute;s terroristes&thinsp;&raquo;; b) vous ne figurez
                            pas sur une liste des parties interdites ou assujetties &agrave; des restrictions du gouvernement des &Eacute;tats-Unis.
                        </li>
                        <li>
                            <u>Modifications de l&rsquo;Application sous licence et/ou de ses modalit&eacute;s.</u> La Province peut &agrave; tout
                            moment, &agrave; sa seule discr&eacute;tion et sans vous aviser directement&nbsp;: a) discontinuer l&rsquo;Application
                            sous licence; b) apporter des changements &agrave; l&rsquo;Application sous licence et/ou au pr&eacute;sent ALUF. En
                            continuant d&rsquo;utiliser l&rsquo;Application sous licence, vous serez irr&eacute;futablement r&eacute;put&eacute;(e)
                            avoir accept&eacute; les changements apport&eacute;s au pr&eacute;sent ALUF.
                        </li>
                        <li>
                            <u>Syst&egrave;me des services d&rsquo;emploi en ligne.</u> Si vous acc&eacute;dez aux Services par le biais du
                            Syst&egrave;me des services d&rsquo;emploi en ligne, vous devrez accepter des modalit&eacute;s d&rsquo;utilisation
                            distinctes pour le Syst&egrave;me des services d&rsquo;emploi en ligne. En cas de contradiction entre ces modalit&eacute;s
                            d&rsquo;utilisation et le pr&eacute;sent ALUF, le pr&eacute;sent ALUF l&rsquo;emportera.
                        </li>
                        <li>
                            <u>Dispositions g&eacute;n&eacute;rales.</u> Le pr&eacute;sent ALUF et les modalit&eacute;s suppl&eacute;mentaires
                            applicables auxquelles les pr&eacute;sentes modalit&eacute;s font r&eacute;f&eacute;rence constituent la totalit&eacute;
                            de l&rsquo;accord entre vous et la Province concernant l&rsquo;objet du pr&eacute;sent ALUF. Les titres ne sont
                            ins&eacute;r&eacute;s dans les pr&eacute;sentes modalit&eacute;s qu&rsquo;&agrave; titre pratique et ne seront pas
                            utilis&eacute;s pour interpr&eacute;ter une disposition du pr&eacute;sent ALUF. Si une disposition du pr&eacute;sent ALUF
                            est invalide, ill&eacute;gale ou inapplicable, cette disposition sera supprim&eacute;e du pr&eacute;sent ALUF et toutes
                            les autres dispositions demeureront en vigueur. Le pr&eacute;sent ALUF sera r&eacute;gi par les lois de la province de la
                            Colombie-Britannique et par les lois applicables du Canada et interpr&eacute;t&eacute; conform&eacute;ment &agrave;
                            celles-ci. En utilisant l&rsquo;Application sous licence, vous consentez &agrave; la comp&eacute;tence exclusive des
                            tribunaux de la province de Colombie-Britannique, si&eacute;geant &agrave; Victoria, pour l&rsquo;audition de tout litige
                            d&eacute;coulant du pr&eacute;sent ALUF ou de son objet ou li&eacute; &agrave; ceux-ci.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default PrivacyAndLicenseAgreementFR
