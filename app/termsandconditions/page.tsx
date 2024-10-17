import React from "react";
import Link from "next/link";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import Image from "next/image";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="w-full p-5 flex justify-between items-center px-9 mb-16">
        <Link
          href="/"
          className="text-2xl font-extrabold font-sans italic text-[30px]"
        >
          fitcentive
        </Link>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="space-y-6">
          <p>
            Welcome to Fitcentive, developed by Fitcentive LLC. These terms and
            conditions govern your use of our app and its services. By accessing
            or using the app, you agree to these terms and conditions. If you do
            not agree to these terms, please do not use the app.
          </p>

          <ol className="list-decimal space-y-4 pl-6">
            <li>
              <strong>Acceptance of Terms –</strong> By using the Fitcentive
              app, you agree to these terms and conditions. Fitcentive LLC
              reserves the right to modify or update these terms at any time. It
              is your responsibility to review the terms periodically for any
              changes. Your continued use of the app following any updates
              constitutes your acceptance of the revised terms.
            </li>
            <li>
              <strong>Eligibility –</strong> To use the Fitcentive app, you must
              be at least 18 years of age or the age of majority in your
              jurisdiction, whichever is older. By accessing or using the app,
              you represent and warrant that you meet this eligibility
              requirement.
            </li>
            <li>
              <strong>Data Use and Privacy –</strong> Fitcentive respects your
              privacy and is committed to protecting your personal data. We do
              not share your data with any third parties, and all privacy
              concerns are handled according to best practices in data
              protection and privacy. Fitcentive utilizes WHOOP data but does
              not sell your data and is not liable for any loss of data.
            </li>
            <li>
              <strong>Fitcentive Challenges –</strong> Challenges can be
              one-on-one or group contests where you "deposit" points to hit
              target metrics. Winners are users who hit the target metrics.
              Winners will split the pot (minus admin and transaction fees), and
              losers will lose their deposit. Challenge payments are issued up
              to one week after the end of the Challenge. You have 48 hours to
              log into your app and sync your data after the Challenge ends.
              Challenge data is finalized after this 48-hour syncing window,
              setting the results and determining winners and losers. If you do
              not log in and sync your data, your metrics may not be fully
              captured.
            </li>
            <li>
              <strong>Preventing Fraudulent Activity –</strong> Attempting to
              game or defraud the system takes points from honest users and
              erodes trust in the program. We use various verification measures
              to prevent system abuse. If we suspect fraud, we reserve the right
              to suspend your account. Fraudulent activities include
              machine-powered assistance, GPS spoofing, using multiple devices
              or accounts, attaching devices to anything other than your body,
              or earning large coins daily over an extended period.
            </li>
            <li>
              <strong>Reward Rates –</strong> We reserve the right to change the
              cost, points available per month, dispersion rates, and other
              reward-related factors at any time.
            </li>
            <li>
              <strong>Liabilities –</strong> Fitcentive is not liable for any
              lost points or funds. Failure to sync your data or provide
              accurate account information may result in lost rewards or
              Challenge winnings. Challenge entry fees are non-refundable.
            </li>
            <li>
              <strong>Right to Cancel Accounts –</strong> We reserve the right
              to suspend any user, withhold payments for unusual activity, and
              request more information on how metrics were obtained.
            </li>
            <li>
              <strong>Referral Program –</strong> You can earn 200 points for
              every person that signs up( connects their WHOOP watch, and joins
              a Challenge.) with your referral code, Points are awarded after
              the 7-day. There is no limit to the number of referrals.
            </li>
          </ol>

          <p id="122c0167-f382-80a5-a484-eb28761bbce3">
            By using the Fitcentive app, you acknowledge that you have read and
            understood these terms and conditions and agree to be bound by them.
            If you have any questions or concerns, please contact us at{" "}
            <a
              href="mailto:admin@Fitcentive.com"
              className="text-blue-600 hover:underline"
            >
              admin@Fitcentive.com
            </a>
            .
          </p>
        </div>

        <p className="mt-8 text-sm">Last updated: 17/10/2024</p>
      </main>

      <footer className="bg-dark text-white py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Copyright Text */}
          <p className="text-sm text-gray-400">
            © 2024 Fitcentive, All Rights Reserved
          </p>
          {/* <a href="/termsandconditions" className="text-sm text-gray-400">
            Terms & Conditions
          </a>
          <a href="/privacypolicy" className="text-sm text-gray-400">
            Privacy Policy
          </a> */}
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

export default TermsAndConditions;
