import Footer from 'components/footer';
import Layout from '../layouts/Main';
import Subscribe from 'components/subscribe';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact Us | Pratulya Fashions - Apparel Manufacturing Subcontractor in Mumbai</title>
          <meta name="description" content="Get in touch with Pratulya Fashions, Mumbai's leading apparel manufacturing subcontractor for bulk T-shirts, shirts, and corporate apparel orders." />
        </Head>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Contact Pratulya Fashions - We're Here to Help
              </h2>
              <p className="mb-8 text-gray-600 leading-5">
                Thank you for your interest in Pratulya Fashions, Mumbai's trusted provider of apparel manufacturing subcontractor services. Whether you are looking for bulk T-shirts, custom corporate uniforms, or specialized clothing solutions for men and women, we are here to assist you.

              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-600">Pratulya Fashions Mumbai, Maharashtra, India</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 ----------</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">info@pratulyafashions.com</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-xl">
              <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 block w-full p-3 border border-solid border-black/40 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d48701]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="mt-1 block w-full p-3 border border-solid border-black/40 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d48701]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    rows={1}
                    cols={30}
                    placeholder="Your Message"
                    className="mt-1 block w-full p-3 border border-solid border-black/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d48701] h-32"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d48701] text-white p-3 rounded-full font-semibold hover:bg-[#d48701] transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>

        <Subscribe />
        <Footer />
      </Layout>
    </>
  )
}

export default Contact