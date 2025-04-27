"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
  return (
    <div className="p-3 bg-gradient-to-r ">
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="text-3xl font-bold text-center text-white mb-6">
          Contact Me
        </h5>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4">
          <h6 className="text-2xl font-semibold text-gray-800  mb-1">
            Get in Touch
          </h6>
          <p className="text-[17px] italic text-lg  text-gray-600 mb-6 py-2">
            Feel free to reach out to me via the email or whatsapp number below.
            I’m always available for queries, collaborations, or just to chat!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg shadow-lg "
            >
              <h6 className="text-xl font-semibold text-gray-700  mb-2">
                Email
              </h6>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <a
                  href="mailto:prathamtogupta11@gmail.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  prathamtogupta11@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg shadow-lg"
            >
              <h6 className="text-xl font-semibold text-gray-700  mb-2">
                Phone
              </h6>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <a
                  href="tel:+917388958220"
                  className="text-blue-600 hover:text-blue-700"
                >
                  +91 7388958220
                </a>
              </p>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <motion.a
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              href="mailto:prathamtogupta11@gmail.com"
              className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md shadow-lg transition-all"
            >
              Send Email
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
