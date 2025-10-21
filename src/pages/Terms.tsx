import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Condition</h1>
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
                Welcome to Hiperion Consulting. These Terms of Condition govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Acceptance of Terms</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                By accessing and using the Hiperion Consulting website and services, you accept and agree to be bound by these Terms of Condition and our Privacy Policy. If you do not agree to these terms, you should not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Services Description</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                  Ngasal Smart Consulting provides financial and technology consulting services, including but not limited to:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Investment strategy and financial planning</li>
                <li>Risk management and compliance advisory</li>
                <li>Mergers and acquisitions consultation</li>
                <li>Technology infrastructure design and implementation</li>
                <li>Cloud computing and cybersecurity solutions</li>
                <li>Custom software development and AI integration</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                The specific scope of services will be defined in individual engagement agreements with clients.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">User Responsibilities</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Provide accurate, current, and complete information when requested</li>
                <li>Maintain the confidentiality of any account credentials or access information</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our services only for lawful purposes and in accordance with these terms</li>
                <li>Not interfere with or disrupt the operation of our website or services</li>
                <li>Not attempt to gain unauthorized access to any systems or data</li>
                <li>Comply with all applicable local, state, national, and international laws</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                All content on the Ngasal Smart Consulting website, including text, graphics, logos, images, software, and other materials, is the property of Ngasal Smart Consulting or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-slate-700 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content without our prior written consent. Any deliverables created specifically for clients remain subject to the terms of individual engagement agreements.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Services and Disclaimer</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our consulting services are provided based on the information you provide and our professional judgment. However:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>We do not guarantee specific financial outcomes or investment returns</li>
                <li>Our advice should be considered as guidance and not as guarantees of success</li>
                <li>You are responsible for your own business decisions and their consequences</li>
                <li>Past performance does not guarantee future results</li>
                <li>Technology implementations may be subject to unforeseen technical challenges</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                We maintain professional liability insurance and follow industry best practices, but we cannot be held liable for market conditions, regulatory changes, or factors beyond our reasonable control.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Confidentiality</h2>
              <p className="text-slate-700 leading-relaxed">
                We understand the sensitive nature of financial and business information. All client information is treated as confidential and will not be disclosed to third parties except as required by law or with your explicit consent. We maintain strict internal policies to protect client confidentiality and comply with all applicable data protection regulations.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Payment Terms</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Payment terms for our services will be specified in individual engagement agreements. Generally:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Fees are based on project scope, time and materials, or retainer arrangements</li>
                <li>Payment is typically due within 30 days of invoice date</li>
                <li>Late payments may incur interest charges as permitted by law</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>Expenses incurred on your behalf will be billed separately</li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Limitation of Liability</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Ngasal Smart Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability for any claim shall not exceed the fees paid for the specific services that gave rise to the claim</li>
                <li>We are not liable for losses resulting from factors beyond our reasonable control</li>
                <li>This limitation applies regardless of the legal theory under which damages are claimed</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of these limitations may not apply to you.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Termination</h2>
              <p className="text-slate-700 leading-relaxed">
                Either party may terminate a consulting engagement as specified in the engagement agreement. We reserve the right to terminate or suspend access to our website and services immediately, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Indemnification</h2>
              <p className="text-slate-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Ngasal Smart Consulting, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services or violation of these terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                These Terms of Condition are governed by the laws of the State of Dubai, UAE, without regard to its conflict of law provisions. Any disputes arising from these terms or our services shall be resolved through:
              </p>
              <ol className="space-y-2 text-slate-700 list-decimal list-inside">
                <li>Good faith negotiations between the parties</li>
                <li>Mediation, if negotiations fail</li>
                <li>Binding arbitration in Dubai, UAE, if mediation is unsuccessful</li>
              </ol>
              <p className="text-slate-700 leading-relaxed mt-4">
                You agree to waive any right to a jury trial for disputes arising under these terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these Terms of Condition at any time. We will notify users of any material changes by posting the updated terms on our website with a revised "Last updated" date. Your continued use of our services after changes take effect constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Severability</h2>
              <p className="text-slate-700 leading-relaxed">
                If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Entire Agreement</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms of Condition, together with our Privacy Policy and any engagement agreements, constitute the entire agreement between you and Ngasal Smart Consulting regarding the use of our services and supersede all prior agreements and understandings.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Condition, please contact us:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Email:</strong> legal@hiperion.consulting</li>
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
