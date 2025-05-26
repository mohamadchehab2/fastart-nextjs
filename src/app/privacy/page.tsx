import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
        </header>
        <article className="prose prose-lg text-gray-700">
          <p className="lead">
            Your privacy is critically important to us. At Fastart, we have a few fundamental principles:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services.</li>
            <li>We store personal information for only as long as we have a reason to keep it.</li>
            <li>We aim for full transparency on how we gather, use, and share your personal information.</li>
            <li>We are committed to respecting user privacy, including adherence to platform guidelines such as those provided by Apple for iOS applications.</li>
          </ul>
          <p>
            This Privacy Policy applies to information that we collect about you when you use our website (fastart) and any other services we offer (collectively, the &quot;Services&quot;).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We only collect information about you if we have a reason to do so—for example, to provide our Services, to communicate with you, or to make our Services better.
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">Information You Provide to Us</h3>
          <p>
            We collect information that you provide to us directly. For example, we collect information when you create an account, fill out a contact form, request customer support, or otherwise communicate with us. The types of information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide.
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">Information We Collect Automatically</h3>
          <p>
            <strong>Log Information:</strong> Like most online service providers, we collect information that web browsers, mobile devices, and servers typically make available, such as the browser type, IP address, unique device identifiers, language preference, referring site, the date and time of access, operating system, and mobile network information.
          </p>
          <p>
            <strong>Usage Information:</strong> We collect information about your usage of our Services. For example, we collect information about the actions that users perform on our sites – in other words, who did what, when and to what thing on a site (e.g., [example of usage data like 'page views']). We use this information to, for example, provide our Services to you, as well as get insights on how people use our Services, so we can make our Services better.
          </p>
          <p>
            <strong>Location Information:</strong> We may determine the approximate location of your device from your IP address. We collect and use this information to, for example, calculate how many people visit our Services from certain geographic regions.
          </p>
          <p>
            <strong>Information from Cookies &amp; Other Technologies:</strong> A cookie is a string of information that a website stores on a visitor&apos;s computer, and that the visitor&apos;s browser provides to the website each time the visitor returns. Pixel tags (also called web beacons) are small blocks of code placed on websites and emails. Fastart uses cookies and other technologies like pixel tags to help us identify and track visitors, understand usage patterns, and assess access preferences for our Services, as well as to track and understand email campaign effectiveness. This information is used to improve our Services and is not used to track you across third-party apps or websites for advertising purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How and Why We Use Information</h2>
          <p>
            We use information about you as mentioned above and for the purposes listed below:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>To provide, maintain, and improve our Services, including, for example, to operate certain features and functionality of the Services.</li>
            <li>To monitor and analyze trends and better understand how users interact with our Services, which helps us improve our Services and make them easier to use. This analysis is done on an aggregated or de-identified basis where possible and is not used to track individual users across third-party services.</li>
            <li>To measure, gauge, and improve the effectiveness of our advertising (such as first-party contextual ads within our Services), and better understand user retention and attrition.</li>
            <li>To communicate with you, for example through an email, about offers and promotions offered by Fastart and others we think will be of interest to you (where you have opted-in to such communications), solicit your feedback, or keep you up to date on Fastart and our products.</li>
            <li>To personalize your experience using our Services and provide content recommendations. Any personalization is based on your activity within our Services and not by tracking your activity across other companies' apps or websites.</li>
            <li>To protect our Services, our users, and the public. For example, by detecting security incidents; detecting and protecting against malicious, deceptive, fraudulent, or illegal activity; fighting spam; complying with our legal obligations; and protecting the rights and property of Fastart and others, which may result in us, for example, declining a transaction or terminating Services.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Compliance with Apple App Tracking Transparency (ATT)</h3>
          <p>
            Fastart is committed to upholding user privacy as outlined by Apple's App Store Review Guidelines, including the App Tracking Transparency (ATT) framework.
          </p>
          <p>
            "Tracking" as defined by Apple refers to linking user or device data collected from our app with user or device data collected from other companies’ apps, websites, or offline properties for targeted advertising or advertising measurement purposes. Tracking also refers to sharing user or device data with data brokers.
          </p>
          <p>
            <strong>Fastart does not engage in "tracking" as defined by Apple.</strong> We do not use your personal data collected from our app to track you across other companies' apps or websites for advertising purposes, nor do we share your personal data with data brokers. Therefore, you may not see an AppTrackingTransparency prompt from our app requesting permission to track, as such tracking is not performed.
          </p>
          <p>
            Any third-party SDKs integrated into our app are configured to prevent tracking where such options are available, or are chosen for their commitment to not engage in tracking as defined by Apple without explicit user consent through the ATT framework. We remain responsible for the data practices of any third-party services we use and strive to ensure they align with our privacy commitments and Apple's guidelines.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
          <p>
            We do not sell our users’ private personal information.
          </p>
          <p>
            We share information about you in the limited circumstances spelled out below and with appropriate safeguards on your privacy:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Subsidiaries, Employees, and Independent Contractors:</strong> We may disclose information about you to our subsidiaries, our employees, and individuals who are our independent contractors that need to know the information in order to help us provide our Services or to process the information on our behalf. We require our subsidiaries, employees, and independent contractors to follow this Privacy Policy for personal information that we share with them.</li>
            <li><strong>Third Party Vendors:</strong> We may share information about you with third party vendors who need to know information about you in order to provide their services to us (e.g., cloud hosting, analytics services that help us understand usage of our own Services without tracking you across third-party sites, customer support tools). These vendors are contractually obligated to protect your data and are prohibited from using your personal information for any purpose other than to provide services to Fastart, and specifically not for tracking you across other companies' apps or websites.</li>
            <li><strong>Legal Requests:</strong> We may disclose information about you in response to a subpoena, court order, or other governmental request.</li>
            <li><strong>To Protect Rights, Property, and Others:</strong> We may disclose information about you when we believe in good faith that disclosure is reasonably necessary to protect the property or rights of Fastart, third parties, or the public at large.</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition of all or a portion of our business by another company, or in the unlikely event that Fastart goes out of business or enters bankruptcy, user information would likely be one of the assets that is transferred or acquired by a third party. If any of these events were to happen, this Privacy Policy would continue to apply to your information and the party receiving your information may continue to use your information, but only consistent with this Privacy Policy.</li>
            <li><strong>With Your Consent:</strong> We may share and disclose information with your consent or at your direction.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p>
            While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction, and take reasonable measures to do so, such as monitoring our Services for potential vulnerabilities and attacks.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have certain rights under data protection law. These may include the right to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Request access and obtain a copy of your personal information.</li>
            <li>Request rectification or erasure if your personal information is inaccurate or no longer necessary.</li>
            <li>Restrict the processing of your personal information.</li>
            <li>If applicable, to data portability.</li>
            <li>Object to the processing of your personal information if the processing is based on legitimate interests.</li>
            <li>Withdraw your consent at any time if we are relying on consent to process your personal information. Note that withdrawing consent will not affect the lawfulness of processing before its withdrawal.</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
          <p>
            Examples of Cookies we use:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
            <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
            <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            Although most changes are likely to be minor, Fastart may change its Privacy Policy from time to time, and in Fastart’s sole discretion. We encourage visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: chehabmac@gmail.com.
          </p>

          <p className="mt-10 text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </article>
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            &larr; Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
}
