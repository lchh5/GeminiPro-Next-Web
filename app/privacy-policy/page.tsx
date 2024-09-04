import { Footer } from "../components/footer";

const PrivacyPage = async () => {
  return (
    <>
      <div className="h-full ">
        <div className="px-10 pb-20">
          <h2 className="text-center text-4xl text-white font-extrabold mb-10">
            Privacy Policy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
            <div>
              <pre
                suppressHydrationWarning
                className="leading-relaxed whitespace-pre-wrap "
                style={{ fontFamily: "sans-serif" }}
              >
                {`Privacy Policy for Gemini Pro Chat (chatgg.co)

Last Updated: 2024-08-15


At Gemini Pro Chat (chatgg.co), we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, 

and disclosure of information when you use our AI conversation tool powered by the Google Gemini API.


1. Information We Do Not Collect

We want to assure our users that Gemini Pro Chat does not collect, store, or transmit any personal information or user data. 

We do not require you to provide any personal details to use our service. Your interactions with the AI are not recorded or stored, 

ensuring your privacy is maintained at all times.


2. Use of Google Gemini API


Gemini Pro Chat utilizes the Google Gemini API to facilitate AI-driven conversations. 

While we leverage this technology to enhance user experience, we do not have access to any personal data processed by the API. 

All interactions are conducted in real-time and are not saved or logged by our system.


3. Cookies and Tracking Technologies


Gemini Pro Chat does not use cookies or any tracking technologies to monitor user activity. 

Our website is designed to provide a seamless experience without the need for tracking or data collection.


4. Changes to This Privacy Policy


We may update our Privacy Policy from time to time. Any changes will be posted on this page, 


and we will update the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically for any updates.


5. Contact Us


If you have any questions or concerns about this Privacy Policy, please contact us at support@chatgg.co.


By using Gemini Pro Chat, you agree to the practices described in this Privacy Policy. 

We are dedicated to ensuring your privacy and providing a secure and enjoyable experience while using our service.`}
              </pre>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;
