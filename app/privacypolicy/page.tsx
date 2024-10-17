import React from "react";
import Link from "next/link";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import Image from "next/image";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="prose mx-auto px-6 py-8 bg-black">
      <header className="w-full p-5 flex justify-between items-center px-9 mb-16">
        <Link
          href="/"
          className="text-2xl font-extrabold font-sans italic text-[30px]"
        >
          fitcentive
        </Link>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p>
          Welcome to Fitcentive. This Privacy Policy outlines how we collect,
          use, and protect user personal information when using our services.
          User privacy is important to us, and we are committed to ensuring that
          data is handled with care and transparency.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>A. Information User Provides to Us:</h3>
        <ul className="list-disc pl-6">
          <li>
            Email Address: When users sign up, we collect their email address.
          </li>
        </ul>

        <h3>B. Biometric Data (With User Permission):</h3>
        <ul className="list-disc pl-6">
          <li>
            WHOOP Watch Data: With explicit permission, we collect biometric
            data such as heart rate, sleep patterns, and exercise activity to
            help users track their fitness progress.
          </li>
        </ul>

        <h2>2. How We Use User Information</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Account Creation and Maintenance:</strong> To set up and
            manage user accounts.
          </li>
          <li>
            <strong>Health and Fitness Insights:</strong> To provide
            personalized challenges and rewards.
          </li>
          <li>
            <strong>Communications:</strong> To send updates and important
            platform information.
          </li>
          <li>
            <strong>Support and Service Notifications:</strong> To notify users
            about changes or provide customer support.
          </li>
        </ul>

        <h2>3. How We Share User Information</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Service Providers:</strong> We may share data with trusted
            providers for platform operation. They are bound by confidentiality
            agreements.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose information if
            required by law or legal requests.
          </li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We use industry-standard encryption to protect user data, including
          biometric data. However, no system is 100% secure, and we cannot
          guarantee absolute security.
        </p>

        <h2>5. Data Retention</h2>
        <ul className="list-disc pl-6">
          <li>
            Email Address: Retained as long as necessary or legally required.
          </li>
          <li>
            Biometric Data: Retained only with user consent and deleted upon
            request unless legally required.
          </li>
        </ul>

        <h2>6. User Rights and Choices</h2>
        <ul className="list-disc pl-6">
          <li>Access: Users can request access to their data.</li>
          <li>Correction: Users can request data corrections.</li>
          <li>Deletion: Users can request data deletion.</li>
          <li>Opt-Out: Users can revoke consent or unsubscribe at any time.</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          Fitcentive is not intended for users under 18. We do not knowingly
          collect information from minors. If we learn of any such collection,
          we will delete it immediately.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy periodically. Users will be notified of
          significant changes through our website and an updated “Last Updated”
          date.
        </p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions, please contact us at:</p>
        <p className="text-blue-600">
          <a href="mailto:admin@fitcentive.app">admin@fitcentive.app</a>
        </p>
        <p className="text-sm text-gray-500">Last Updated: 17/10/2024</p>
      </main>
      <footer className="bg-dark text-white py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Copyright Text */}
          <p className="text-sm text-gray-400">
            © 2024 Fitcentive, All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://t.me/fitcentive"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTelegram className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/fitcentive"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://warpcast.com/fitcentive"
              className="text-gray-400 hover:text-white "
            >
              {/* <FaInstagram className='h-6 w-6' /> */}
              <Image
                src="/transparent-white.png"
                width={10}
                height={10}
                alt="farcaster"
                className="h-7 w-7"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
