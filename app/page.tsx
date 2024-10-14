"use client";

import {
  HandshakeIcon,
  SwordsIcon,
  // UserIcon,
  // LockIcon,
  // BarChartIcon,
  Heart,
  Currency,
  Share,
  Weight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

export default function Home() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const brandColor = "#159D91";

  const circles = [
    { radius: 220, icons: [Heart] },
    { radius: 170, icons: [Share] },
    { radius: 120, icons: [Weight, Currency] },
  ];
  return (
    <div className='min-h-screen bg-black text-white flex flex-col'>
      {/* Header Section */}
      <header className='w-full p-5 flex justify-between items-center px-9 mb-16'>
        <div className='text-2xl font-extrabold font-sans italic text-[30px]'>
          fitcentive
        </div>
        <nav className='gap-10 flex'>
          <Link
            href='#'
            className='text-white/80 font-sans  text-[20px] hover:text-[#159D91]'>
            About
          </Link>
          <Link
            href='#'
            className='text-white/80 font-sans   text-[20px] hover:text-[#159D91]'>
            FAQs
          </Link>
        </nav>
      </header>
      <div className='absolute  w-[400px] h-[400px] bg-[#159D91] rounded-full opacity-15 filter blur-3xl z-0'></div>
      {/* Main Section */}
      <main className='flex justify-between items-center px-32 max-w-[1200px] mx-auto mb-20'>
        <div className='w-1/2'>
          <h2 className='text-6xl font-extrabold mb-4'>
            GET HEALTHY. <br />
            <span className='text-[#159D91]'>EARN CASH.</span>
          </h2>
          <p className='text-xl font-semibold mb-8'>
            Pairing biometric data and financial <br /> incentives to form
            lifelong
            <span className='text-[#159D91]'> health habits</span>.
          </p>
          <button className='bg-[#159D91] text-white font-extrabold py-4 px-10 text-lg rounded-md hover:bg-[#0E6D64]'>
            GET STARTED
          </button>
        </div>

        <div className='w-1/2 relative'>
          <div className='relative w-[500px] h-[500px]'>
            {circles.map(({ radius }, index) => (
              <div
                key={index}
                className='absolute top-1/2 left-1/2 rounded-full border'
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  borderColor: brandColor,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <div className='absolute top-1/2 left-1/2 w-24 h-24 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2'>
              <Image
                src='/fcBlue.png'
                alt='Fitcentive Logo'
                width={96}
                height={96}
                className='rounded-full'
              />
            </div>

            {circles.map(({ radius, icons }, circleIndex) =>
              icons.map((Icon, iconIndex) => {
                const totalIcons = icons.length;
                const angle =
                  iconIndex * ((2 * Math.PI) / totalIcons) +
                  (circleIndex * Math.PI) / 4;
                return (
                  <div
                    key={`${circleIndex}-${iconIndex}`}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 animate-rotate-${circleIndex}-${iconIndex}`}
                    style={{
                      backgroundColor: brandColor,
                      top: `${50 + (radius / 250) * 50 * Math.sin(angle)}%`,
                      left: `${50 + (radius / 250) * 50 * Math.cos(angle)}%`,
                    }}>
                    <Icon className='w-6 h-6 text-white' />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
      {/* Mobile card */}
      <div className='flex justify-center items-center mt-20 mb-20 relative'>
        <div className='bg-[#159D91] rounded-xl shadow-2xl w-2/3 flex flex-col md:flex-row bg-opacity-70 relative overflow-hidden'>
          <div className='p-8 md:w-2/3'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Download The <span className='italic text-black'>Fitcentive</span>{" "}
              App
            </h2>
            <p className='text-xl md:text-2xl text-black font-bold mt-8 mb-8'>
              Backed by Science,
              <br />
              Fueled by Biometrics
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-gray-900 text-white hover:bg-gray-800 py-2 px-4 rounded flex items-center justify-center'>
                <Image
                  src='/playstore.png'
                  width={24}
                  height={24}
                  alt='Google Play icon'
                  className='mr-2'
                />
                <div className='flex flex-col items-start'>
                  <span className='text-xs'>Get it on</span>
                  <span className='text-sm font-normal'>Google Play</span>
                </div>
              </button>
              <button className='bg-gray-900 text-white hover:bg-gray-800 py-2 px-4 rounded flex items-center justify-center'>
                <Image
                  src='/applelo.png'
                  width={24}
                  height={24}
                  alt='Apple Store icon'
                  className='mr-2'
                />
                <div className='flex flex-col items-start'>
                  <span className='text-xs'>Download on the</span>
                  <span className='text-sm font-normal'>App Store</span>
                </div>
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className='md:w-1/3 relative' style={{ overflow: "hidden" }}>
            <Image
              src='/Device.png'
              width={300}
              height={600}
              alt='Apple iPhone with Fitcentive App'
              className='object-cover absolute '
            />
          </div>
        </div>
      </div>

      {/* secction 3 */}
      <div className='w-2/3 mx-auto mt-20 space-y-8'>
        <div className='relative'>
          {/* Card content */}
          <div className='absolute  w-[400px] h-[400px] bg-[#159D91] rounded-full opacity-15 filter blur-3xl z-0'></div>
          <div className='rounded-xl bg-[#073B37]/30 p-6 text-center relative  bg-opacity-70'>
            <h1 className='text-5xl font-bold mt-10 mb-10'>
              THE NEW WAY TO{" "}
              <span className='text-teal-400'>INVEST IN HEALTH</span>
            </h1>
            <h4 className='text-2xl font-medium mb-8 w-5/6 mx-auto'>
              Fitcentive drives holistic health improvements through long-term
              biometrics-tracking sleep, exercise, and recovery - backed by a
              team of medical practitioners with decades of expertise in
              longevity medicine.
            </h4>
          </div>
        </div>

        <div className=' grid md:grid-cols-2 w-full  gap-6'>
          <div className=' bg-[#073B37]/40 rounded-lg p-6 '>
            <div className=' flex justify-center mb-14 mt-5 mx-5 p-14 bg-[#073B37]/30 rounded-xl'>
              <HandshakeIcon className='w-36 h-36 text-white' />
            </div>
            <h2 className='text-3xl mx-5 font-semibold mb-4'>SPONSOR</h2>
            <p className=' text-xl font-medium mx-5'>
              <span className='text-teal-300'>Invest in people.</span> Profit if
              their health improves; refund if not.
            </p>
          </div>

          <div className=' bg-[#073B37]/40  rounded-lg p-6  bg-opacity-70'>
            <div className='flex justify-center mb-14  mt-5 mx-5 p-14 bg-[#073B37]/30 rounded-xl '>
              <SwordsIcon className='w-36 h-36 text-white' />
            </div>
            <h2 className='text-3xl mx-5 font-semibold mb-4'>CHALLENGE</h2>
            <p className='text-xl font-medium mx-5'>
              Share profiles, challenge others, connect with friends, and
              compete with celebrities in{" "}
              <span className='text-teal-300'>health contests!</span>
            </p>
          </div>
        </div>

        <div className=' bg-[#073B37]/40  rounded-lg flex justify-center p-10 mx-auto bg-opacity-70'>
          <div className='flex flex-col w-2/3 mt-10'>
            <h2 className='text-3xl font-semibold mb-4'>SELL</h2>
            <p className='mb-4 text-2xl font-medium'>
              Sell anonymized biometrics for rewards.
              <br />
              <span className='text-teal-300'>Your data, your choice.</span>
            </p>
            <p className='text-gray-400 font-medium text-2xl'>Coming Soon</p>
          </div>
          <div className='relative md:w-90 md:h-60'>
            <div className='absolute  w-[400px] h-[400px] bg-[#159D91] rounded-full opacity-15 filter blur-3xl z-0'></div>
            <Image
              src='/sell.png'
              alt='Corporate Wellness'
              width={500}
              height={500}
              className='w-100 h-30 rounded-lg'
            />
          </div>
        </div>
      </div>
      {/* GetHealthy */}

      <div className='bg-dark flex flex-col justify-center items-center w-2/3 mx-auto text-center py-12 mt-20  '>
        {/* Heading */}
        <div className='absolute  w-[400px] h-[400px] bg-[#159D91] rounded-full opacity-15 filter blur-3xl z-0'></div>
        <h2 className='text-6xl font-bold text-white'>
          GET HEALTHY. <span className='text-teal-400'>GET PAID.</span>
        </h2>

        {/* Cards Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full'>
          {/* Individuals Card */}
          <div className='bg-[#073B37]/40 rounded-lg shadow-lg text-white filter burl-xl bg-opacity-70'>
            <div className='grid grid-cols-3 gap-2 overflow-hidden  mb-4 mt-10'>
              {/* Icon 1 */}
              <div className='flex justify-center -ml-5 mt-3 rounded-lg '>
                <Image
                  src='/swords.png'
                  alt='Corporate Wellness'
                  width={500}
                  height={500}
                  className='w-40 h-30 rounded-lg bg-[#073B37]/30 '
                />
              </div>
              {/* Icon 2 */}
              <div className='flex justify-center rounded-lg  '>
                <Image
                  src='/dna.png'
                  alt='Corporate Wellness'
                  width={500}
                  height={500}
                  className='w-60 h-35 rounded-lg bg-[#073B37]/30 '
                />
              </div>
              {/* Icon 3 */}
              <div className='flex justify-center mt-3  -mr-5 rounded-lg'>
                <Image
                  src='/micros.png'
                  alt='Corporate Wellness'
                  width={500}
                  height={500}
                  className='w-40 h-30 rounded-lg bg-[#073B37]/30'
                />
              </div>
            </div>
            <div className='p-8'>
              <h3 className='text-2xl text-left font-semibold mb-4'>
                Individuals
              </h3>
              <p className='text-md text-left font-semibold text-gray-300'>
                Challenge others, form lifelong habits. Holistic approach to
                health backed by science.
              </p>
            </div>
          </div>

          {/* Corporate Wellness Card */}
          <div className='bg-[#073B37]/40 rounded-lg shadow-lg text-white bg-opacity-70'>
            <div className='grid grid-cols-3 gap-2 overflow-hidden  mb-4 mt-10'>
              {/* Icon 1 */}
              <div className='flex justify-center -ml-5 mt-3'>
                <Image
                  width={500}
                  height={500}
                  src='/hearth.png'
                  alt='Corporate Wellness'
                  className='w-40 h-30 rounded-lg bg-[#073B37]/30 '
                />
              </div>
              {/* Icon 2 */}
              <div className='flex justify-center'>
                <Image
                  width={500}
                  height={500}
                  src='/money.png'
                  alt='Corporate Wellness'
                  className='w-60 h-35 rounded-lg bg-[#073B37]/30 '
                />
              </div>
              {/* Icon 3 */}
              <div className='flex justify-center mt-3 -mr-5'>
                <Image
                  width={500}
                  height={500}
                  src='/search.png'
                  alt='Corporate Wellness'
                  className='w-40 h-30 rounded-lg bg-[#073B37]/30 '
                />
              </div>
            </div>
            <div className='p-8'>
              <h3 className='text-2xl text-left font-semibold mb-4'>
                Corporate Wellness
              </h3>
              <p className='text-md font-semibold text-left text-gray-300'>
                100% money-back guarantee and objective results for healthcare
                cost cuts. Employees earn cash or USDC rewards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-2/3 mx-auto mt-20 space-y-8'>
        <div className='justify-center items-center'>
          <h2 className='text-4xl font-normal text-center text-white mb-8'>
            FREQUENTLY ASKED <span className='text-teal-400'>QUESTIONS</span>
          </h2>

          {/* FAQ Items */}
          <div className='w-full space-y-4'>
            {/* Question 1 */}
            <div
              className='flex items-start p-4 rounded-lg cursor-pointer text-white'
              onClick={() => toggleQuestion(1)}>
              <div className='flex items-center justify-center w-6 h-6 bg-[#159D91] text-white rounded mr-4'>
                1
              </div>
              <div className='flex-grow'>
                <div className='flex justify-between'>
                  <h3 className='font-semibold'>
                    How do I challenge a friend?
                  </h3>
                  <span>{openQuestion === 1 ? "▲" : "▼"}</span>
                </div>
                {openQuestion === 1 && (
                  <p className='mt-2 text-gray-300'>
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
              className='flex items-start p-4 rounded-lg cursor-pointer text-white'
              onClick={() => toggleQuestion(2)}>
              <div className='flex items-center justify-center w-6 h-6 bg-[#159D91] text-white rounded mr-4'>
                2
              </div>
              <div className='flex-grow'>
                <div className='flex justify-between'>
                  <h3 className='font-semibold'>
                    What is the difference between the challenge types: 1v1
                    battles and sponsorships?
                  </h3>
                  <span>{openQuestion === 2 ? "▲" : "▼"}</span>
                </div>
                {openQuestion === 2 && (
                  <p className='mt-2 text-gray-300'>
                    1v1 Battles are direct competitions between two people,
                    while sponsorships involve more long-term health
                    improvements, where sponsors can back participants.
                  </p>
                )}
              </div>
            </div>

            {/* Question 3 */}
            <div
              className='flex items-start p-4 rounded-lg cursor-pointer text-white'
              onClick={() => toggleQuestion(3)}>
              <div className='flex items-center justify-center w-6 h-6 bg-[#159D91] text-white rounded mr-4'>
                3
              </div>
              <div className='flex-grow'>
                <div className='flex justify-between'>
                  <h3 className='font-semibold'>
                    How can I sign up my company and employees?
                  </h3>
                  <span>{openQuestion === 3 ? "▲" : "▼"}</span>
                </div>
                {openQuestion === 3 && (
                  <p className='mt-2 text-gray-300'>
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
              className='flex items-start p-4 rounded-lg cursor-pointer text-white'
              onClick={() => toggleQuestion(4)}>
              <div className='flex items-center justify-center w-6 h-6 bg-[#159D91] rounded text-white mr-4'>
                4
              </div>
              <div className='flex-grow'>
                <div className='flex justify-between'>
                  <h3 className='font-semibold'>
                    Do I need a Whoop to participate?
                  </h3>
                  <span>{openQuestion === 4 ? "▲" : "▼"}</span>
                </div>
                {openQuestion === 4 && (
                  <p className='mt-2 text-gray-300'>
                    Yes, you need a Whoop band to track your health data and
                    participate in the challenges.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-dark text-white py-4 mt-10'>
        <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
          {/* Copyright Text */}
          <p className='text-sm text-gray-400'>
            © 2024 Fitcentive, All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className='flex space-x-4'>
            <a
              href='#'
              className='text-gray-400 hover:text-white transition duration-300'>
              <FaTelegram className='h-6 w-6' />
            </a>
            <a
              href='https://x.com/fitcentive'
              className='text-gray-400 hover:text-white transition duration-300'>
              <FaTwitter className='h-6 w-6' />
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-white transition duration-300'>
              <FaInstagram className='h-6 w-6' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
