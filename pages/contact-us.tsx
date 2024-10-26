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

            {/* Left Column - Contact Information */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="mb-8 text-gray-600 leading-5">
                We'd love to hear from you! Feel free to reach out with any questions, comments, or inquiries.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-600">123 Fashion Ave, Suite 100 New York, NY 10001</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">contact@pratulya.com</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 block w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d48701]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d48701]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    rows={1}
                    cols={30}
                    placeholder="Your Message"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d48701] h-32"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d48701] text-white p-3 rounded-lg font-semibold hover:bg-[#d48701] transition duration-200"
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