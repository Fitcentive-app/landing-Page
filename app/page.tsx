"use client";

import {
  HandshakeIcon,
  SwordsIcon,
  UserIcon,
  // LockIcon,
  BarChartIcon,
  Heart,
  Currency,
  Share,
  Weight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import TelegramPopup from "./telegramPopup"; // We'll create this component next

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (question: number) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const brandColor = "#159D91";

  const circles = [
    { radius: 230, icons: [Heart, UserIcon] },
    { radius: 180, icons: [Share, BarChartIcon] },
    { radius: 130, icons: [Weight, Currency] },
  ];
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header Section */}
      <header className="w-full p-5 flex justify-between items-center px-9 mb-16">
        <div className="text-2xl font-extrabold font-sans italic text-[30px]">
          fitcentive
        </div>
        <nav className="gap-10 flex">
          <Link
            href="#about"
            className="text-white/80 font-sans  text-[20px] hover:text-[#159D91]"
          >
            About
          </Link>
          <Link
            href="#faq"
            className="text-white/80 font-sans   text-[20px] hover:text-[#159D91]"
          >
            FAQs
          </Link>
        </nav>
      </header>
      <div className="absolute  w-[400px] h-[400px] bg-[#159D91] rounded-full opacity-15 filter blur-3xl z-0"></div>
      {/* Main Section */}
      <main className="flex flex-col md:flex-row justify-between items-center px-6 md:px-32 max-w-[1200px] mx-auto mb-10 md:mb-20 md:items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            GET HEALTHY. <br />
            <span className="text-[#159D91]">EARN CASH.</span>
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-6 md:mb-8">
            Pairing biometric data and financial{" "}
            <br className="hidden md:block" />
            incentives to form lifelong
            <span className="text-[#159D91]"> health habits</span>.
          </p>
          <button
            className="bg-[#159D91] text-white font-extrabold py-3 px-8 md:py-4 md:px-10 text-md md:text-lg rounded-md hover:bg-[#0E6D64]"
            onClick={() => window.open('https://testflight.apple.com/join/bu3A9cvJ', '_blank')}
          >
            GET STARTED
          </button>
        </div>
        {showPopup && <TelegramPopup onClose={() => setShowPopup(false)} />}

        <div className="w-1/2 relative hidden md:block">
          <div className="relative w-[500px] h-[500px]">
            {circles.map(({ radius }, index) => (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 rounded-full border"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  borderColor: brandColor,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/fitcentivelogo.png"
                alt="Fitcentive Logo"
                width={96}
                height={96}
                className="rounded"
              />
            </div>



            {circles.map(({ radius, icons }, circleIndex) =>
  icons.map((Icon, iconIndex) => {
    const angleOffset = iconIndex * 180; // Since there are 2 icons per circle, space them 180° apart
    const centerX = "calc(50% - 24px)";
    const centerY = "calc(50% - 24px)";
    
    return (
      <div
        key={`${circleIndex}-${iconIndex}`}
        className="absolute w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: brandColor,
          left: centerX,
          top: centerY,
          animation: `rotate${circleIndex} ${20 + circleIndex * 5}s linear infinite`,
          transformOrigin: `${radius}px ${radius}px`,
          transform: `rotate(${angleOffset}deg) translate(${radius}px) rotate(-${angleOffset}deg)`,
        }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
    );
  })
)}
          </div>
        </div>
      </main>
      {/* Mobile card */}
      <div className="flex justify-center items-center mt-20 mb-20 relative">
        <div className="bg-[#159D91] rounded-xl shadow-2xl w-[80%] flex flex-col md:flex-row bg-opacity-70 relative overflow-hidden md:w-2/3">
          <div className="p-4 md:w-2/3 w-full md:p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download The <span className="italic text-black">Fitcentive</span>{" "}
              App
            </h2>
            <p className="text-xl md:text-2xl text-black font-bold mt-8 mb-8">
              Backed by Science,
              <br />
              Fueled by Biometrics
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-gray-900/50 text-white/50 cursor-not-allowed py-2 px-4 rounded flex items-center justify-center"
                disabled
              >
                <Image
                  src="/playstore.png"
                  width={24}
                  height={24}
                  alt="Google Play icon"
                  className="mr-2 opacity-50"
                />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Get it on</span>
                  <span className="text-sm font-normal">Google Play</span>
                  <span className="text-xs ml-1">Coming Soon</span>
                </div>
                
              </button>
              <button 
                className="bg-gray-900 text-white hover:bg-gray-800 py-2 px-4 rounded flex items-center justify-center"
                onClick={() => window.open('https://testflight.apple.com/join/bu3A9cvJ', '_blank')}
              >
                <Image
                  src="/applelo.png"
                  width={24}
                  height={24}
                  alt="Apple Store icon"
                  className="mr-2"
                />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on</span>
                  <span className="text-sm font-normal">TestFlight</span>
                </div>
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="md:w-1/3 relative" style={{ overflow: "hidden" }}>
            <Image
              src="/Device.png"
              width={300}
              height={600}
              alt="Apple iPhone with Fitcentive App"
              className="object-cover absolute "
            />
          </div>
        </div>
      </div>

      {/* secction 3 */}

      <div
        id="about"
        className="w-[90%] px-4 md:w-2/3 mx-auto mt-10 md:mt-20 space-y-6 md:space-y-8"
      >
        <div className="relative">
          {/* Card content */}
          <div className="absolute w-full h-full max-w-[400px] max-h-[400px] bg-[#159D91] rounded-full opacity-15 filter blur-3xl z-0"></div>
          <div className="rounded-xl bg-[#073B37]/30 p-4 md:p-6 text-center relative bg-opacity-70">
            <h1 className="text-3xl md:text-5xl font-bold mt-6 md:mt-10 mb-6 md:mb-10">
              THE NEW WAY TO{" "}
              <span className="text-teal-400">INVEST IN HEALTH</span>
            </h1>
            <h4 className="text-lg md:text-2xl font-medium mb-6 md:mb-8 w-full md:w-5/6 mx-auto">
              Fitcentive drives holistic health improvements through long-term
              biometrics-tracking sleep, exercise, and recovery - backed by a
              team of medical practitioners with decades of expertise in
              longevity medicine.
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-6">
          <div className="bg-[#073B37]/40 rounded-lg p-4 md:p-6 transition-all duration-300 ease-in-out hover:bg-[#073B37]/60 hover:border-2 hover:border-[#159D91] group">
            <div className="flex justify-center mb-8 md:mb-14 mt-4 md:mt-5 mx-2 md:mx-5 p-8 md:p-14 bg-[#073B37]/30 rounded-xl transition-all duration-300 ease-in-out group-hover:bg-[#073B37]/50">
              <HandshakeIcon className="w-24 h-24 md:w-36 md:h-36 text-white transition-all duration-300 ease-in-out group-hover:text-[#159D91]" />
            </div>
            <h2 className="text-2xl md:text-3xl mx-2 md:mx-5 font-semibold mb-3 md:mb-4">
              SPONSOR
            </h2>
            <p className="text-lg md:text-xl font-medium mx-2 md:mx-5">
              <span className="text-teal-300">Invest in people.</span> Profit if
              their health improves; refund if not.
            </p>
          </div>

          <div className="bg-[#073B37]/40 rounded-lg p-4 md:p-6 bg-opacity-70 transition-all duration-300 ease-in-out hover:bg-[#073B37]/60 hover:border-2 hover:border-[#159D91] group">
            <div className="flex justify-center mb-8 md:mb-14 mt-4 md:mt-5 mx-2 md:mx-5 p-8 md:p-14 bg-[#073B37]/30 rounded-xl transition-all duration-300 ease-in-out group-hover:bg-[#073B37]/50">
              <SwordsIcon className="w-24 h-24 md:w-36 md:h-36 text-white transition-all duration-300 ease-in-out group-hover:text-[#159D91]" />
            </div>
            <h2 className="text-2xl md:text-3xl mx-2 md:mx-5 font-semibold mb-3 md:mb-4">
              CHALLENGE
            </h2>
            <p className="text-lg md:text-xl font-medium mx-2 md:mx-5">
              Share profiles, challenge others, connect with friends, and
              compete with celebrities in{" "}
              <span className="text-teal-300">health contests!</span>
            </p>
          </div>
        </div>

        <div className="bg-[#073B37]/40 rounded-lg flex flex-col md:flex-row justify-between p-4 md:p-10 mx-auto bg-opacity-70 transition-all duration-300 ease-in-out hover:bg-[#073B37]/60 hover:border-2 hover:border-[#159D91] group">
  <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-10">
    <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 transition-all duration-300 ease-in-out group-hover:text-[#159D91]">
      SELL
    </h2>
    <p className="mb-3 md:mb-4 text-xl md:text-2xl font-medium">
      Sell anonymized biometrics for rewards.
      <br />
      <span className="text-teal-300">Your data, your choice.</span>
    </p>
    <p className="text-gray-400 font-medium text-xl md:text-2xl transition-all duration-300 ease-in-out group-hover:text-teal-300">
      Coming Soon
    </p>
  </div>
  <div className="relative w-full md:w-1/3 h-48 md:h-60 mt-4 md:mt-0 md:ml-8">
    <div className="absolute w-full h-full max-w-[400px] max-h-[400px] bg-[#159D91] rounded-full opacity-15 filter blur-3xl z-0 transition-all duration-300 ease-in-out group-hover:opacity-25"></div>
    <Image
      src="/sell.png"
      alt="Corporate Wellness"
      layout="fill"
      objectFit="contain"
      className="rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105"
    />
          </div>
        </div>
      </div>
      {/* GetHealthy */}

      <div className="bg-dark flex flex-col justify-center items-center w-[90%] px-4 md:w-2/3 mx-auto text-center py-8 md:py-12 mt-10 md:mt-20">
        {/* Heading */}
        <div className="absolute w-full h-full max-w-[400px] max-h-[400px] bg-[#159D91] rounded-full opacity-15 filter blur-3xl z-0"></div>
        <h2 className="text-4xl md:text-6xl font-bold text-white relative z-10 mb-8 md:mb-0">
          GET HEALTHY. <span className="text-teal-400">GET PAID.</span>
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-12 w-full md:grid-cols-2">
          {/* Individuals Card */}
          <div className="bg-[#073B37]/40 rounded-lg shadow-lg text-white filter burl-xl bg-opacity-70 transition-all duration-300 ease-in-out hover:bg-[#073B37]/60 hover:border-2 hover:border-[#159D91] group">
            <div className="flex justify-center items-center gap-4 md:gap-6 overflow-hidden mb-4 mt-6 md:mt-10 px-4">
              {/* Side Icon 1 */}
              <div className="flex-1 flex justify-center items-center h-[75px] md:h-[90px] transition-all duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/swords.png"
                  alt="Corporate Wellness"
                  width={100}
                  height={75}
                  className="w-26 md:w-34 object-contain rounded-lg bg-[#073B37]/30 p-2 transition-all duration-300 ease-in-out group-hover:bg-[#073B37]/50"
                />
              </div>
              {/* Center Icon */}
              <div className="flex-1 flex justify-center items-center h-[100px] md:h-[130px] transition-all duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/dna.png"
                  alt="Corporate Wellness"
                  width={120}
                  height={90}
                  className="w-40 md:w-56 object-contain rounded-lg bg-[#073B37]/30 p-2 transition-all duration-300 ease-in-out group-hover:bg-[#073B37]/50"
                />
              </div>
              {/* Side Icon 2 */}
              <div className="flex-1 flex justify-center items-center h-[75px] md:h-[90px] transition-all duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/micros.png"
                  alt="Corporate Wellness"
                  width={100}
                  height={75}
                  className="w-26 md:w-34 object-contain rounded-lg bg-[#073B37]/30 p-2 transition-all duration-300 ease-in-out group-hover:bg-[#073B37]/50"
                />
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl text-left font-semibold mb-3 md:mb-4 transition-all duration-300 ease-in-out group-hover:text-[#159D91]">
                Individuals
              </h3>
              <p className="text-lg md:text-xl text-left font-normal text-gray-300 transition-all duration-300 ease-in-out group-hover:text-white">
                Challenge others, form lifelong habits. Holistic approach to
                health backed by science.
              </p>
            </div>
          </div>

          {/* Corporate Wellness Card */}
          <div className="bg-[#073B37]/40 rounded-lg shadow-lg text-white bg-opacity-70 transition-all duration-300 ease-in-out hover:bg-[#073B37]/60 hover:border-2 hover:border-[#159D91] group">
            <div className="flex justify-center items-center gap-4 md:gap-6 overflow-hidden mb-4 mt-6 md:mt-10 px-4">
              {/* Side Icon 1 */}
              <div className="flex-1 flex justify-center items-center h-[75px] md:h-[90px] transition-all duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/hearth.png"
                  alt="Corporate Wellness"
                  width={100}
                  height={75}
                  className="w-26 md:w-34 object-contain rounded-lg bg-[#073B37]/30 p-2 transition-all duration-300 ease-in-out group-hover:bg-[#073B37]/50"
                />
              </div>
              {/* Center Icon */}
              <div className="flex-1 flex justify-center items-center h-[100px] md:h-[130px] transition-all duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/money.png"
                  alt="Corporate Wellness"
                  width={120}
                  height={90}
                  className="w-40 md:w-56 object-contain rounded-lg bg-[#073B37]/30 p-2 transition-all duration-300 ease-in-out group-hover:bg-[#073B37]/50"
                />
              </div>
              {/* Side Icon 2 */}
              <div className="flex-1 flex justify-center items-center h-[75px] md:h-[90px] transition-all duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src="/search.png"
                  alt="Corporate Wellness"
                  width={100}
                  height={75}
                  className="w-26 md:w-34 object-contain rounded-lg bg-[#073B37]/30 p-2 transition-all duration-300 ease-in-out group-hover:bg-[#073B37]/50"
                />
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl text-left font-semibold mb-3 md:mb-4 transition-all duration-300 ease-in-out group-hover:text-[#159D91]">
                Corporate Wellness
              </h3>
              <p className="text-lg md:text-xl font-normal text-left text-gray-300 transition-all duration-300 ease-in-out group-hover:text-white">
                100% money-back guarantee and objective results for healthcare
                cost cuts. Employees earn cash or USDC rewards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="faq"
        className="w-full px-4 md:w-2/3 mx-auto mt-10 md:mt-20 space-y-6 md:space-y-8"
      >
        <div className="justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-normal text-center text-white mb-6 md:mb-8">
            FREQUENTLY ASKED <span className="text-teal-400">QUESTIONS</span>
          </h2>

          {/* FAQ Items */}
          <div className="w-full space-y-4">
            {/* Question 1 */}
            <div
              className="flex items-start p-3 md:p-4 rounded-lg cursor-pointer text-white bg-[#073B37]/40 hover:bg-[#073B37]/60 transition-all duration-300"
              onClick={() => toggleQuestion(1)}
            >
              <div className="flex items-center justify-center w-6 h-6 bg-[#159D91] text-white rounded mr-3 md:mr-4 flex-shrink-0">
                1
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm md:text-base pr-2">
                    How do I challenge a friend?
                  </h3>
                  <span className="text-xl">
                    {openQuestion === 1 ? "▲" : "▼"}
                  </span>
                </div>
                {openQuestion === 1 && (
                  <p className="mt-2 text-gray-300 text-sm md:text-base">
                    You can challenge someone by sharing your profile link or
                    using their profile link to directly challenge them.
                    Alternatively, you can search for their username and start
                    competing!
                  </p>
                )}
              </div>
            </div>

            {/* Question 2 */}
            <div
              className="flex items-start p-3 md:p-4 rounded-lg cursor-pointer text-white bg-[#073B37]/40 hover:bg-[#073B37]/60 transition-all duration-300"
              onClick={() => toggleQuestion(2)}
            >
              <div className="flex items-center justify-center w-6 h-6 bg-[#159D91] text-white rounded mr-3 md:mr-4 flex-shrink-0">
                2
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm md:text-base pr-2">
                    What is the difference between the challenge types?
                  </h3>
                  <span className="text-xl">
                    {openQuestion === 2 ? "▲" : "▼"}
                  </span>
                </div>
                {openQuestion === 2 && (
                  <p className="mt-2 text-gray-300 text-sm md:text-base">
                    1v1 Battles are direct competitions between two people,
                    while sponsorships involve more long-term health
                    improvements, where sponsors can back participants.
                  </p>
                )}
              </div>
            </div>

            {/* Question 3 */}
            <div
              className="flex items-start p-3 md:p-4 rounded-lg cursor-pointer text-white bg-[#073B37]/40 hover:bg-[#073B37]/60 transition-all duration-300"
              onClick={() => toggleQuestion(3)}
            >
              <div className="flex items-center justify-center w-6 h-6 bg-[#159D91] text-white rounded mr-3 md:mr-4 flex-shrink-0">
                3
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm md:text-base pr-2">
                    How can I sign up my company and employees?
                  </h3>
                  <span className="text-xl">
                    {openQuestion === 3 ? "▲" : "▼"}
                  </span>
                </div>
                {openQuestion === 3 && (
                  <p className="mt-2 text-gray-300 text-sm md:text-base">
                    You can sign up for corporate wellness programs by
                    contacting us through our website. We offer personalized
                    packages for companies to promote healthy habits in the
                    workplace.
                  </p>
                )}
              </div>
            </div>

            {/* Question 4 */}
            <div
              className="flex items-start p-3 md:p-4 rounded-lg cursor-pointer text-white bg-[#073B37]/40 hover:bg-[#073B37]/60 transition-all duration-300"
              onClick={() => toggleQuestion(4)}
            >
              <div className="flex items-center justify-center w-6 h-6 bg-[#159D91] rounded text-white mr-3 md:mr-4 flex-shrink-0">
                4
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm md:text-base pr-2">
                    Which smart watches do you support?
                  </h3>
                  <span className="text-xl">
                    {openQuestion === 4 ? "▲" : "▼"}
                  </span>
                </div>
                {openQuestion === 4 && (
                  <p className="mt-2 text-gray-300 text-sm md:text-base">
                    Currently, we support Apple and Whoop. We are actively working on adding support for Fitbit and Garmin watches.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Links and Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright Text */}
            <p className="text-sm text-gray-400">
              © 2024 Fitcentive, All Rights Reserved
            </p>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm text-gray-400">
              <a 
                href="https://fitcentive.app/privacypolicy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="https://fitcentive.app/termsandconditions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                Terms & Conditions
              </a>
            </div>

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
                className="text-gray-400 hover:text-white"
              >
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
        </div>
      </footer>
    </div>
  );
}
