import { Shield, Eye, Lock, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-slate-700 leading-relaxed">
                At Hiperion Consulting, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Information We Collect</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title when you contact us or request our services.</li>
                <li><strong>Financial Information:</strong> When applicable, financial data necessary to provide consulting services, handled with the highest level of security and confidentiality.</li>
                <li><strong>Communication Data:</strong> Records of your communications with us, including emails, phone calls, and meeting notes.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies to improve your experience on our website.</li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">How We Use Your Information</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>To provide, maintain, and improve our consulting services</li>
                <li>To communicate with you about our services, including responding to inquiries and providing customer support</li>
                <li>To send you marketing communications, with your consent, about our services and industry insights</li>
                <li>To analyze usage patterns and optimize our website and services</li>
                <li>To comply with legal obligations and enforce our terms and conditions</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Data Security</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                We implement robust security measures to protect your personal information:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Encryption of data in transit and at rest using industry-standard protocols</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms to limit data access</li>
                <li>Employee training on data protection and confidentiality</li>
                <li>Secure data centers with physical and digital security measures</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business, subject to confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process, or to protect our rights and safety.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to you.</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Rights and Choices</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@hiperion.consulting.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-slate-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">International Data Transfers</h2>
              <p className="text-slate-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
              <p className="text-slate-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Email:</strong> privacy@hiperion.consulting</li>
                <li><strong>Address:</strong> No.357-A The Bridge, Level 2, Dubai Sports City. Dubai, 39226 <br/>
                    United Arabs Emirates<br/>
                    United Arab Emirates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
