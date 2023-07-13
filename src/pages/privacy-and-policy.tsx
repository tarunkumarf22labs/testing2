import Layout from "@/components/Layout";
import React from "react";
import { mediaImages } from "src/data/constants";
import MediaListing from "src/stories/MediaListing";

const PrivacyAndPolicy = () => {
  return (
    <Layout title="luxunlock">
      <>
        <div className="w-full h-64 bg-[#7B8084]">
          <div className="text-sm font-semibold tracking-[4.20] text-center text-white uppercase pt-20">
            LUXUNLOCK’s
          </div>
          <div className="pt-5 text-5xl text-center text-white uppercase">
            PRIVACY & POLICY
          </div>
        </div>
        <div className="w-11/12 m-auto mt-16 lg:max-w-5xl">
          <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
            Luxunlock Private Limited respects and is committed to protecting
            your privacy and all the information you share with us. We follow
            stringent procedures to help protect the confidentiality, security,
            and integrity of data stored on our systems. This Privacy Notice
            describes the types of information we may collect from you when you
            visit www.luxunlock.com or other Luxunlock websites or use our
            mobile applications (collectively, the “Site”), how we use the
            information we collect, with whom we share it, how we protect it,
            and the choices we offer you regarding our collection and use of
            such information.
            <br />
            <br />
            Please read this Privacy Notice carefully. By using the Site, you
            agree to the terms of this Privacy Notice. If you do not agree to
            these terms, exit this page and do not access or use the Site.
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Information We Collect and How We Use It
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              We may collect personal information from you, meaning information
              about you that can uniquely identify you, if you choose to provide
              us with such information. We may also collect information about
              you that does not uniquely identify you, if you choose to provide
              us with such information. For example, before completing your
              booking, we ask you for your name, phone number, email, billing
              and shipping addresses. This information, along with your payment
              method, is necessary to fulfil your order. Additionally, when you
              access the Site, we may collect and process real-time information
              about the location of your device. We collect and use your
              information to administer, support, improve and obtain feedback on
              our products, services and to detect and prevent faults, breaches
              of our network security, the law or our contract terms.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              We may use the information we collect to:
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              <ol className="list-decimal list-inside">
                <li>
                  Process and complete your enrollment in our membership or
                  other programs;
                </li>
                <li>
                  Customize the content and/or layout of our Site for you,
                  including to provide you with personally tailored programs and
                  promotional information;
                </li>
                <li>Contact members regarding their accounts;</li>
                <li>
                  Register members to receive emails or other information or
                  materials they request;
                </li>
                <li>
                  Respond to questions and comments and provide customer
                  support;
                </li>
                <li>
                  Communicate with members about our products, events and other
                  services, and provide information to you about products,
                  programs or services that we believe may be of interest to
                  you;
                </li>
                <li>
                  {" "}
                  Operate, evaluate, and improve our products and the services
                  we offer;
                </li>
                <li>Enforce our Terms & Conditions and other agreements; </li>
                <li>
                  Comply with applicable legal requirements or obligations and
                  industry standards.
                </li>
              </ol>
              <br />
              We may enable you to sign into the Site via social networks or
              access social networks through the Site. If you do so, your use of
              the social network is governed by such social network’s terms and
              conditions and privacy policies. If you sign into the Site via a
              social network or access a social network through the Site, you
              may be asked to give access to certain information from your
              social network profile. We may use this information to help
              personalize your experience with the Site, to suggest new features
              and content that may be relevant to you, or for statistical or
              other business purposes. We also may use the information we obtain
              about you in other ways for which we provide specific notice at
              the time of collection.
              <br />
              <br />
              We may enable third parties to collect information in connection
              with our Site. This Privacy Notice does not apply to, and we are
              not responsible for, any collection of information by third
              parties on our Site.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Cookies
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              When you visit the Site, we may also collect certain information
              by automated means, such as through the use of cookies. A “cookie”
              is a text file that websites send to a visitor’s computer or other
              Internet-connected device to uniquely identify the visitor’s
              browser or to store information or settings in the browser. We
              also may use third-party website analytics tools (such as Google
              Analytics), that collect information about user traffic on the
              Site. The information we collect by automated means may include,
              but is not limited to, the following:
              <br />
              <ol className="list-decimal list-inside">
                <li>
                  information about the devices you use to access the Internet
                  (such as the IP address and the type of the device, operating
                  system, and web browser);
                </li>
                <li>
                  dates, times, and duration of visits to the Site (including
                  whether you are a registered member or first time visitor);
                </li>
                <li>
                  and information on actions taken on the Site (such as page
                  views and site navigation patterns).
                </li>
              </ol>
              <br />
              We use cookies to store members’ preferences, record session
              information, record user- specific information on what pages
              members access or visit on the Site, alert members to new
              information that we think may be of interest to them when they
              return to our Site, and customize web page content based on a
              member’s browser type or other information we collect.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              How We Respond to Do Not Track Signals
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Your web browser may let you choose your preference as to whether
              you want to allow websites to collect personal information over
              time about your online activities across different websites or
              online services. At this time our Site does not respond to the
              preferences you may have set in your web browser regarding the
              collection of your information, and our Site may continue to
              collect information in the manner described in this Privacy
              Notice.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Information We Share
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              We may disclose aggregated information about our users without
              restriction. This information may be disclosed to our contractors,
              service providers and other third parties we use to support our
              business. These parties will only use your data for the purpose of
              carrying out the work as indicated and will be required to keep
              the information confidential We may also disclose your personal
              information to: (i) comply with court orders, laws, or legal
              process, including to respond to government or regulatory
              requests; (ii) enforce or apply our Terms & Conditions and other
              agreements; and/or (iii) if we believe disclosure is necessary or
              appropriate to protect our or others’ rights, property, or safety.
              <br />
              We may also disclose your personal information to a buyer or other
              transferee in the event of a merger, divestiture, restructuring,
              reorganization, dissolution, sale, or other transfer of some or
              all of our assets. Should such a sale, merger, or transfer occur,
              we will use reasonable efforts to direct the transferee to use
              your personal information in a manner that is consistent with our
              Privacy Notice.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Changes to our Privacy Notice
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              From time to time, we may update this Privacy Notice. If our
              information practices materially change at some time in the
              future, we will post the policy changes to our Site to notify you
              of these changes, and we will only use data collected from the
              time of the policy change forward for these new or different
              purposes. In the event we make a material change to how we use
              your personal information, we will provide you with an opportunity
              to opt out of such new or different use. You are responsible for
              periodically reviewing the Site and this Privacy Notice to check
              for any updates or changes.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Hyperlinks and Third Party Advertising.
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              The Site of Luxunlock Private Limited may link to other websites.
              Their inclusion cannot be taken to imply any endorsement or
              validation by us of the content of the said website. We are not
              responsible for the privacy practices nor do we accept any
              liability in connection with the content of such websites. We may
              use third party advertisements on our site. Cookies may be
              associated with these advertisements to enable the advertiser to
              track the number of anonymous users responding to the campaign. We
              do not have access to or control of cookies placed by third
              parties.
            </div>
          </div>
          <p className="text-[#18181B] font-medium capitalize text-xl mt-20 mb-20">
            Your Choices
          </p>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Marketing Emails
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              {
                'We or our associates may also use your email address to notify you about new services or special promotional programs, or send you offers or information if you have opted-in. Individuals who have elected to receive Luxunlock’s informational emails, including newsletters, or who have made a purchase on our website, can choose to opt-out at any time by clicking on the "Unsubscribe" link at the bottom of each email.'
              }
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Cookies
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              Most browsers will tell you how to stop accepting new cookies, how
              to be notified when you receive a new cookie, and how to disable
              existing cookies. Please note, however, that without cookies you
              may not be able to take full advantage of all of the Site’s
              features. The Site is not directed to, and we do not knowingly
              collect or solicit personal information from, any minors
              (according to applicable laws). If such minor has provided us with
              personal information without parental or guardian consent, the
              parent or guardian may contact us, and we will remove the personal
              information and remove the concerned minor information from any
              promotional lists or databases.
            </div>
          </div>
          <div className="mt-16">
            <p className="text-[#18181B] font-medium capitalize text-xl">
              Contact Us
            </p>
            <div className="text-[#545456] text-base sm:text-xl font-[Centaur] leading-8 mt-2">
              If you have any questions about this Privacy Notice or our privacy
              practices, please write, phone or email us via the contact
              information below: Email: reservations@luxunlock.com Mobile: +91
              98400 60393
            </div>
          </div>
        </div>
        <MediaListing mediaImages={mediaImages} />
      </>
    </Layout>
  );
};

export default PrivacyAndPolicy;
