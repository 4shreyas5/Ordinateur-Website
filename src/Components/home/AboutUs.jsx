import React from 'react';

function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row bg-black">
      <div className="h-1/2 w-full md:w-full">
        <img src="/images/ordinateur_logo.png" alt="" className="my-6 mx-auto w-auto md:mx-0" />
      </div>
      <div className="border-l-4 grid content-baseline">
        <div className="text-white">
          <h2 className="mt-4 ml-14 md:ml-96 text-3xl md:text-4xl">
            <b>About Us</b>
          </h2>
        </div>
        <div>
          <p className="mx-4 mb-8 mt-4 md:mx-10 text-center text-white">
            Filled with geeks who are passionate about the world of technology, we are one of the best Computer Science Society in Delhi University, proving the legacy of Hansraj College and its faculty. The society members share interests in almost all subfields of Computer Science, from Web Developers to Competitive Programmers, Ethical Hackers to Data Scientists and from Blockchain Tech to Graphic Designers. Active throughout the year by seminars, webinars and tech events, we also publish an yearly magazine - Bitwise, where we encourage creative writing skills in the technical field. Ordinateur provides students with the opportunities to explore the vast limitlessness of their potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
