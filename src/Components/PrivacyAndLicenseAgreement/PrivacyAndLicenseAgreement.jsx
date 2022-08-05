import React from "react"
// eslint-disable-next-line import/no-cycle
import PrivacyAndLicenseAgreementFR from "./PrivacyAndLicenseAgreementFR"

function PrivacyAndLicenseAgreement(props) {
    const { language, setLanguage } = props

    setLanguage("en")
    return language === "fr" ? (
        <PrivacyAndLicenseAgreementFR {...props} />
    ) : (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>END USER LICENSE AGREEMENT</h1>
                    <p>
                        The WorkBC app (the &ldquo;Licensed Application&rdquo;) allows you (&ldquo;You&rdquo; or &ldquo;you&rdquo;) to find
                        information and communicate regarding WorkBC employment services, apprentice services or assistive technology services
                        (together, the &ldquo;Services&ldquo;) through Work BC. This End User License Agreement (&ldquo;EULA&rdquo;) sets out the
                        terms and conditions that apply to you when you download and/or use the WorkBC app. This EULA is a legal agreement between
                        you, as the end user of the Licensed Application (&ldquo;You&rdquo; or &ldquo;you&rdquo;), and Her Majesty the Queen in Right
                        of the Province of British Columbia (the &ldquo;Province&rdquo;). By indicating that you agree to this EULA, and in
                        consideration of the use of the Licensed Application, you agree to the following.
                    </p>
                    <ol>
                        {" "}
                        <li>
                            The parties to this EULA are you and the Province (collectively, the &ldquo;Parties&rdquo;). The Parties acknowledge that:
                            (a) this EULA is concluded between the Parties only, and not with Apple Inc. (&ldquo;Apple&rdquo;); and (b) the Province,
                            not Apple, is solely responsible for the Licensed Application and the content thereof.
                        </li>
                    </ol>
                    <ol start="2">
                        {" "}
                        <li>
                            In the event that you used a BCeID issued to you to verify your identity in order to use the Licensed Application, the
                            BCeID terms found at{" "}
                            <a href="https://www.bceid.ca/aboutbceid/agreements.aspx">https://www.bceid.ca/aboutbceid/agreements.aspx</a> continue to
                            apply to you in respect of the type of BCEID used. In the event that you used your BC Services Card to verify your
                            identity in order to use the Licensed Application, you acknowledge that the BC Login Terms of Use found at{" "}
                            <a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card/log-in-with-card/terms-of-use">
                                https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card/log-in-with-card/terms-of-use
                            </a>{" "}
                            continue to apply to you in respect of your use of the BC Services Card.
                        </li>
                    </ol>
                    <ol start="3">
                        {" "}
                        <li>
                            <u>Ability to Accept EULA.</u> To accept the terms and conditions of this EULA and to download and/or use the Licensed
                            Application, you must be, and you represent and warrant that you are: (a) at least nineteen (19) years of age; or (b) if
                            you are under 19, you have obtained the consent of your parent or guardian to accept this Agreement on your behalf, in
                            which case your parent or guardian is responsible for your use of the Licensed Application. If you have not met these
                            requirements, you must not access or use the Licensed Application.
                        </li>{" "}
                        <li>
                            <u>Passwords and Privacy Protection.</u> Except as provided in section 5, you agree not to share passwords or login
                            information for the Licensed Application with any other individual or entity and you further agree to logout after each
                            use of the Licensed Application by clicking the &ldquo;Log Out&rdquo; button.
                        </li>{" "}
                        <li>
                            If you are the parent or guardian of a minor, you must not use their passwords or login information for the Licensed
                            Application on their behalf unless&nbsp;they are incapable of doing so on their own.
                        </li>
                    </ol>
                    <ol start="6">
                        {" "}
                        <li>
                            The Licensed Application and all other information and works made available, displayed or transmitted in connection with
                            the Licensed Application, including without limitation data, text, audio, video, trademarks, trade names, logos, domain
                            names, images, graphics, graphical user interface elements and designs, in any form or medium whatsoever (collectively,
                            the &ldquo;Content&rdquo;), are owned by the Province or its licensors and are protected by copyright, patent, trademark
                            and other laws protecting intellectual property rights.
                        </li>
                    </ol>
                    <ol start="7">
                        {" "}
                        <li>
                            <u>Third Party Beneficiary</u>. The Parties acknowledge and agree that: (a) Apple, and Apple&rsquo;s subsidiaries, are
                            third party beneficiaries of this EULA; and (b) upon your acceptance of the terms and conditions of the EULA, Apple will
                            have the right (and will be deemed to have accepted the right) to enforce the EULA against you as a third party
                            beneficiary thereof.
                        </li>
                    </ol>
                    <ol start="8">
                        {" "}
                        <li>
                            <u>License</u>. The Province hereby grants to you a non-exclusive, royalty-free, non-transferable and, subject to section
                            9 of this EULA, perpetual license to use the Licensed Application on either Google or Apple branded products, provided
                            that usage on any Apple branded products must be products that you either own or control and as permitted by the Usage
                            Rules set forth in the Apple Media Services Terms and Conditions located at{" "}
                            <a href="https://www.apple.com/legal/internet-services/itunes/us/terms.html">
                                https://www.apple.com/legal/internet-services/itunes/us/terms.html
                            </a>{" "}
                            (or such other URL as Apple may designate) (the &ldquo;App Store Terms&rdquo;), as may be modified by Apple from time to
                            time (the &ldquo;License&rdquo;). Except as provided in the App Store Terms (which does permit Licensed Applications to be
                            accessed, acquired, and used by other accounts associated with the purchaser via Family Sharing or volume purchasing), you
                            may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at
                            the same time. If you sell your Apple branded product to a third party, you must first remove the Licensed Application
                            from that Apple branded product.
                        </li>
                    </ol>
                    <p>
                        For greater certainty, you may not: (a) rent, lease, lend, sell, transfer, redistribute or sublicense the Licensed
                        Application; or (b) copy (except as permitted by this License and the Usage Rules), reverse-engineer, disassemble, attempt to
                        derive the source code of, modify, or create derivative works of the Licensed Application, any updates, upgrades or any part
                        of the Licensed Application (except as and only to the extent that any foregoing restriction is prohibited by applicable law
                        or to the extent as may be permitted by the licensing terms governing use of any open-sourced components included with the
                        Licensed Application).&nbsp;
                    </p>
                    <ol start="9">
                        {" "}
                        <li>
                            <u>Termination</u>. The License will terminate automatically in the event that you fail to comply with any of the terms
                            and conditions of this EULA or if any of your representations or warranties are or become inaccurate or untruthful. The
                            Province also reserves the right to terminate this License for any reason, in its sole discretion. In the event of
                            termination of this License for any reason, you must: (a) immediately stop using the Licensed Application; and (b) delete
                            or destroy all copies of the Licensed Application in your possession or under your control.
                        </li>
                    </ol>
                    <ol start="10">
                        {" "}
                        <li>
                            <u>Acceptable Use</u>. You must not take any action in connection with your use of the Licensed Application that would
                            jeopardize the security, integrity and/or availability of the Licensed Application, including, without limitation:
                        </li>
                    </ol>
                    <ul>
                        {" "}
                        <li>using the Licensed Application for any unlawful or inappropriate purpose;</li>{" "}
                        <li>
                            decompiling, disassembling, reverse engineering or otherwise copying any software associated with the Licensed
                            Application;
                        </li>{" "}
                        <li>tampering with any portion of the Licensed Application;</li>{" "}
                        <li>
                            using the Licensed Application to transmit any virus or other harmful or destructive computer code, files or programs or
                            to conduct hacking and/or intrusion activities;
                        </li>{" "}
                        <li>attempting to circumvent or subvert any security measure associated with the Licensed Application;</li>{" "}
                        <li>
                            taking any action that might reasonably be construed as likely to adversely affect other users of the Licensed
                            Application; or
                        </li>{" "}
                        <li>
                            removing or altering any proprietary symbol or notice, including any copyright notice, trademark or logo, displayed in
                            connection with the Licensed Application.
                        </li>
                    </ul>
                    <ol start="11">
                        {" "}
                        <li>
                            <u>Maintenance and Support</u>. The Parties acknowledge that: (a) the Province may, in its sole discretion, provide
                            maintenance and support of the Licensed Application, including troubleshooting, updates and modifications (the
                            &ldquo;Support Services&rdquo;); (b) the Province is solely responsible for the provision of Support Services, if any; and
                            (c) Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed
                            Application. All questions respecting the Support Services, and all general inquiries respecting the Licensed Application,
                            should be directed to WorkBCAppSupport@gov.bc.ca.&nbsp;{" "}
                        </li>
                    </ol>
                    <ol start="12">
                        {" "}
                        <li>
                            <u>No Warranty</u>. The Licensed Application is provided to you &ldquo;as is&rdquo;, and the Province disclaims all
                            representations, warranties, conditions, obligations and liabilities of any kind, whether express or implied, in relation
                            to the Licensed Application, including without limitation implied warranties with respect to merchantability, satisfactory
                            quality, fitness for a particular purpose and non-infringement. Without limiting the general nature of the previous
                            sentence, the Province does not represent or warrant that:&nbsp;{" "}
                        </li>
                    </ol>
                    <ul>
                        {" "}
                        <li>the Licensed Application will be available;</li>{" "}
                        <li>your use of the Licensed Application will be timely, uninterrupted or error free;</li>{" "}
                        <li>any errors in the Licensed Application will be corrected; or</li>{" "}
                        <li>the Licensed Application will meet your expectations and requirements.</li>
                    </ul>
                    <p>The Parties acknowledge that Apple has no warranty obligation whatsoever with respect to the Licensed Application.</p>
                    <ol start="13">
                        {" "}
                        <li>
                            <u>Limitation of Liability</u>. To the maximum extent permitted by applicable law, under no circumstances will the
                            Province be liable to any person or entity for any direct, indirect, special, incidental, consequential or other loss,
                            claim, injury or damage, whether foreseeable or unforeseeable (including without limitation claims for damages for loss of
                            profits or business opportunities, use or misuse of, or inability to use, the Licensed Application, interruptions,
                            deletion or corruption of files, loss of programs or information, errors, defects or delays) arising out of or in any way
                            connected with your use of the Licensed Application and whether based on contract, tort, strict liability or any other
                            legal theory. The previous sentence will apply even if the Province has been specifically advised of the possibility of
                            any such loss, claim, injury or damage.
                        </li>
                    </ol>
                    <p>
                        The Parties acknowledge that Apple is not responsible for: (a) addressing any claims by you or any third party of any nature
                        whatsoever relating to the Licensed Application; or (b) your possession and/or use of the Licensed Application.
                    </p>
                    <ol start="14">
                        {" "}
                        <li>
                            <u>Intellectual Property Claims.</u> The Licensed Application and the content thereof is owned by the Province or used by
                            the Province under license. The Parties acknowledge that, in the event of any third-party claim that the Licensed
                            Application or your possession and/or use of the Licensed Application infringes that third party&rsquo;s intellectual
                            property rights, the Province, and not Apple, is solely responsible for the investigation, defence, settlement and
                            discharge of any such claim. In the event of any such claim, the Province reserves the right to replace any content that
                            allegedly infringes a third party&rsquo;s intellectual property rights.
                        </li>
                    </ol>
                    <ol start="15">
                        {" "}
                        <li>
                            You agree to indemnify, defend and hold harmless the Province and all of its respective servants, employees and agents
                            from and against all claims, demands, obligations, losses, liabilities, costs or debt, and expenses (including but not
                            limited to reasonable legal fees) arising from: (a) your use of the Licensed Application; or (b) your violation of any
                            provision of this EULA.
                        </li>
                    </ol>
                    <ol start="16">
                        {" "}
                        <li>
                            <u>Licensed Content.</u> The Licensed Application includes Google Map features and content and use of Google Maps features
                            and content is used under license from Google Inc. (&ldquo;Google&rdquo;) and subject to the then-current Google
                            Maps/Google Earth Additional Terms of Service located at{" "}
                            <a href="https://www.google.com/help/terms_maps/">https://www.google.com/help/terms_maps/</a> and the Google Privacy
                            Policy located at <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a> (or other such
                            URLs as Google may designate) and as may be modified by Google from time to time. By using the Licensed Application, you
                            are also agreeing to be bound by and comply with the Google Maps Acceptable Use Policy found at{" "}
                            <a href="https://cloud.google.com/maps-platform/terms/aup/">https://cloud.google.com/maps-platform/terms/aup/</a> (or such
                            other URL as Google may designate) and as may be modified by Google from time to time.
                        </li>
                    </ol>
                    <ol start="17">
                        {" "}
                        <li>
                            For the purpose of facilitating your use of the Licensed Application, the Province collects, and you consent to this
                            collection of, your selection of either the French or English language option, your acceptance of the terms of this EULA,
                            your IP address and your device ID under the authority of section 26 (c) of the{" "}
                            <em>Freedom of Information and Protection of Privacy Act</em> (&ldquo;FOIPPA&rdquo;).&nbsp;
                        </li>
                    </ol>
                    <p>
                        If you use the location services in the Licensed Application, Google will collect personal information, including search
                        terms, IP address and latitude-longitude coordinates, from you through the Google maps features under the authority of section
                        26 (c) of FOIPPA. You consent to the use by Google of such personal information to provide and improve Google products and
                        services, and as otherwise set out in the Google Privacy Policy and as may be modified by Google from time to time. Google
                        indicates in its Privacy Policy that Google will disclose personal information to its affiliates and other trusted businesses
                        or persons to process it for Google, and for legal reasons. Google is based in the U.S. and maintains servers around the
                        world, so to use the location services in the Licensed Application, you further consent to the storage and disclosure of,
                        and/or access to, such personal information outside Canada by Google as outlined above. The consents provided by you as set
                        out in this section will continue unless and until revoked by you in writing to the contact information below.&nbsp;
                    </p>
                    <p>
                        &nbsp;If you have any questions about the collection, use or disclosure of your personal information, please contact the
                        Records clerk of the Employment and Labour Market Services Division, Ministry of Social Development and Poverty Reduction
                        at&nbsp;<a href="mailto:WorkBCprivacy@gov.bc.ca">WorkBCprivacy@gov.bc.ca</a>.
                    </p>
                    <ol start="18">
                        {" "}
                        <li>
                            <u>Location Services.</u> YOUR USE OF THIS REAL TIME ROUTE GUIDANCE APPLICATION IS AT YOUR OWN RISK. LOCATION DATA MAY NOT
                            BE ACCURATE.
                        </li>
                    </ol>
                    <ol start="19">
                        {" "}
                        <li>
                            <u>Third Party Web Sites.</u> You acknowledge that: (a) the Licensed Application may include links to third party web
                            sites; (b) when you link to a third party web site, you may be subject to the terms of use and/or the privacy policy, if
                            any, of that third party web site; and (c) the Province does not endorse the content of any third party web sites and is
                            not responsible for the terms of use, privacy policies, practices or content of any third party web site.
                        </li>
                    </ol>
                    <ol start="20">
                        {" "}
                        <li>
                            <u>Third Party Terms of Agreement.</u> You may require the use of third party services in order to use the Licensed
                            Application (including wireless data services), and you agree to comply with any applicable third party terms of service
                            that apply to you when using the Licensed Application.
                        </li>
                    </ol>
                    <ol start="21">
                        {" "}
                        <li>
                            <u>Legal Compliance.</u> You represent and warrant that: (a) you are not located in a country that is subject to a U.S.
                            government embargo, or that has been designated by the U.S. government as a &ldquo;terrorist supporting&rdquo; country;
                            and (b) you are not listed on any U.S. government list of prohibited or restricted parties.
                        </li>
                    </ol>
                    <ol start="22">
                        {" "}
                        <li>
                            <u>Changes to Licensed Application and/or Terms.</u> The Province may at any time, in its sole discretion and without
                            direct notice to you: (a) discontinue the Licensed Application; or (b) make changes to the Licensed Application and/or
                            this EULA. By continuing to use the Licensed Application, you will be conclusively deemed to have accepted any changes to
                            this EULA.
                        </li>
                    </ol>
                    <ol start="23">
                        {" "}
                        <li>
                            <u>Online Employment Services System.</u> If you access the Services through the Online Employment Services System, you
                            will need to enter into separate Terms of Use for the Online Employment Services System. In the event of any conflict
                            between those Terms of Use and this EULA, this EULA will prevail.
                        </li>
                    </ol>
                    <ol start="24">
                        {" "}
                        <li>
                            This EULA and, as applicable, the additional terms referenced in these Terms, are the entire agreement between you and the
                            Province with respect to the subject matter of this EULA. The headings in these Terms are inserted for convenience only
                            and will not be used in interpreting or construing any provision of this EULA. If any provision of this EULA is invalid,
                            illegal or unenforceable, that provision will be severed from this EULA and all other provisions will remain in full force
                            and effect. This EULA will be governed by and construed in accordance with the laws of the province of British Columbia
                            and the applicable laws of Canada. By using the Licensed Application, you consent to the exclusive jurisdiction and venue
                            of the courts of the province of British Columbia, sitting in Victoria, for the hearing of any dispute arising from or
                            related to this EULA and its subject matter.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default PrivacyAndLicenseAgreement
