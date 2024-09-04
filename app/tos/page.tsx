import { Footer } from "../components/footer";

const TosPage = async () => {
  return (
    <>
      <div className="h-full ">
        <div className="px-10 pb-20">
          <h2 className="text-center text-4xl text-white font-extrabold mb-10">
            Terms of Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
            <div>
              <pre
                suppressHydrationWarning
                className="leading-relaxed whitespace-pre-wrap "
                style={{ fontFamily: "sans-serif" }}
              >
                {`Terms of Service for Gemini Pro Chat (chatgg.co)

Last Updated: 2024-08-15


Welcome to Gemini Pro Chat (chatgg.co). By accessing or using our service, you agree to comply with and be bound by the following Terms of Service. 


If you do not agree with these terms, please do not use our service.


1. Acceptance of Terms


By using Gemini Pro Chat, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.


2. Service Description


Gemini Pro Chat is an AI conversation tool powered by the Google Gemini API. 

Our service allows users to engage in AI-driven conversations without the need to provide personal information.


3. User Responsibilities


You agree to use the service only for lawful purposes and in accordance with these Terms.


You are responsible for ensuring that any information you provide is accurate and not misleading.


You agree not to use the service for any illegal or unauthorized purpose, including but not limited to harassment, abuse, or any form of malicious activity.


4. No User Data Collection


We do not collect, store, or transmit any personal information or user data. Your interactions with the AI are not recorded or saved, ensuring your privacy is maintained.


5. Intellectual Property


All content, features, and functionality of the service, including but not limited to text, graphics, logos, and software, 

are the exclusive property of Gemini Pro Chat or its licensors. You may not reproduce, distribute, 

or create derivative works from any content without our express written permission.


6. Limitation of Liability


To the fullest extent permitted by law, Gemini Pro Chat shall not be liable for any direct, indirect, incidental, special, consequential, 

or punitive damages arising from your use of or inability to use the service. This includes, but is not limited to, 

damages for loss of profits, data, or other intangible losses.


7. Changes to Terms


We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on this page. 

Your continued use of the service after any changes constitutes your acceptance of the new Terms.


8. Governing Law


These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. 

Any disputes arising from these Terms shall be resolved in the courts of [Your Jurisdiction].


9. Contact Us


If you have any questions or concerns about these Terms of Service, please contact us at support@chatgg.co.


By using Gemini Pro Chat, you agree to these Terms of Service. Thank you for choosing our service!`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TosPage;
