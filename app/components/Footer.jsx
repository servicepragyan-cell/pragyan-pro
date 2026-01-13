"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn
} from "react-icons/fa";
import { MapPin, Mail, Phone, X } from "lucide-react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* ===== LOGO SECTION ===== */}
            <div>
              <Image
                src="/logo/logo_pragyan.webp"
                alt="Pragyan"
                width={150}
                height={50}
              />

              <p className="text-gray-300 text-base mt-4 leading-relaxed">
                Connecting people, building brands, driving results.
              </p>

              {/* Social Icons */}
              <div className="flex gap-5 mt-6">
                <a href="#" aria-label="Twitter" target="_blank" >
                  <FaTwitter className="h-5 w-5 hover:text-[#f8d249]" />
                </a>
                <a href="#" aria-label="Facebook"  target="_blank" >
                  <FaFacebookF className="h-5 w-5 hover:text-[#f8d249]" />
                </a>
                <a href="https://www.instagram.com/my_pragyan/" aria-label="Instagram" target="_blank" >
                  <FaInstagram className="h-5 w-5 hover:text-[#f8d249]" />
                </a>
                <a href="https://www.linkedin.com/in/dhruti-patel-pragyan" aria-label="Linkedin" target="_blank" >
                  <FaLinkedinIn className="h-5 w-5 hover:text-[#f8d249]" />
                </a>
               
              </div>
            </div>

            {/* ===== CONTACT ===== */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Contact</h4>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    strokeWidth={1.8}
                    className="text-[#f8d249] mt-1 shrink-0"
                  />
                  <span className="text-gray-300 leading-relaxed cursor-pointer hover:text-[#f8d249]">
                    A - 607, Money Plant High Street, SG Highway, Ahmedabad - 382470
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail
                    size={18}
                    strokeWidth={1.8}
                    className="text-[#f8d249] shrink-0"
                  />
                  <a
                    href="mailto:connect@mypragyan.com"
                    className="text-gray-300 hover:text-[#f8d249]"
                  >
                    connect@mypragyan.com
                  </a>
                </li>
              </ul>
            </div>

            {/* ===== PHONE ===== */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Phone Number</h4>

              <div className=" grid gap-3" >
                <a
                href="tel:+919998081399"
                className="flex items-center gap-3 text-gray-300 hover:text-[#f8d249]"
              >
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#f8d249] shrink-0"
                />
                +91 99980 81399
              </a>
              <a
                href="tel:+919998081393"
                className="flex items-center gap-3 text-gray-300 hover:text-[#f8d249]"
              >
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#f8d249] shrink-0"
                />
                +91 99980 81393
              </a>
              </div>
            </div>

            {/* ===== LINKS ===== */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Home</h4>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/services" className="hover:text-[#f8d249]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[#f8d249]">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" className="hover:text-[#f8d249]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" className="hover:text-[#f8d249]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-[#f8d249]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#f8d249]">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Pragyan | Proudly created by{" "}
            <a
              href="https://www.megascale.in/"
              target="_blank"
              className="text-white hover:text-[#f8d249]"
            >
              @Megascale
            </a>
          </p>

          <div className="flex gap-4 ">
            <button className="cursor-pointer text-white hover:text-[#f8d249]" onClick={() => setActiveModal("privacy")}>
              Privacy Policy
            </button>
            <span>|</span>
            <button className="cursor-pointer text-white hover:text-[#f8d249]" onClick={() => setActiveModal("terms")}>
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* ===== MODAL ===== */}
       {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md">
          <div className="relative w-full h-full bg-black text-white p-8 md:p-14 overflow-y-auto scrollbar-hide modal-scroll">

            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-300 hover:text-white"
            >
              <X size={32} className=" cursor-pointer" />
            </button>

            {activeModal === "privacy" && (
              <div className="flex justify-center w-full">
                <div className="max-w-7xl w-full px-4 py-10 ">
                  <h2 className="text-4xl font-bold text-[#FCDB66] mb-6 text-center">
                    Privacy Policy
                  </h2>

                  <div className="text-gray-300 leading-relaxed mx-auto space-y-6 text-sm md:text-base">

                    <p>
                      Thank you for choosing to be part of our community at <strong>Pragyan</strong>
                      (“Company”, “we”, “us”, or “our”). We are committed to protecting your
                      personal information and respecting your right to privacy.
                    </p>

                    <p>
                      If you have any questions or concerns regarding this Privacy Policy or
                      our data practices, please contact us at{" "}
                      <strong>hello@pragyan.com</strong>.
                    </p>

                    <p>
                      This Privacy Policy applies to all information collected through our
                      website and any related services, sales, marketing, or events.
                    </p>

                    {/* Section 1 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        1. Information We Collect
                      </h3>

                      <p className="mb-2">
                        <strong>Personal Information:</strong> We collect personal information
                        that you voluntarily provide to us, such as your name, email address,
                        phone number, and mailing address when you contact us or use our services.
                      </p>

                      <p>
                        <strong>Automatically Collected Information:</strong> When you visit our
                        website, we automatically collect certain information such as your IP
                        address, browser type, device information, operating system, and usage
                        data for analytics, security, and performance optimization.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        2. How We Use Your Information
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Provide, operate, and maintain our services</li>
                        <li>Respond to inquiries and provide customer support</li>
                        <li>Send administrative and service-related communications</li>
                        <li>Improve website functionality, performance, and security</li>
                        <li>Send marketing communications where consent is provided</li>
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        3. Sharing of Information
                      </h3>
                      <p>
                        We do not sell, rent, or trade your personal information. We may share
                        information with trusted third-party service providers, legal authorities,
                        or regulatory bodies when necessary to operate our services, enforce our
                        policies, or comply with legal obligations.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        4. Cookies & Tracking Technologies
                      </h3>
                      <p>
                        We use cookies and similar tracking technologies to enhance user
                        experience, analyze website traffic, and improve our services. You may
                        control or disable cookies through your browser settings; however, some
                        features of the website may not function properly.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        5. Data Retention
                      </h3>
                      <p>
                        We retain personal information only for as long as necessary to fulfill
                        the purposes outlined in this Privacy Policy, unless a longer retention
                        period is required or permitted by law.
                      </p>
                    </div>

                    {/* Section 6 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        6. Data Security
                      </h3>
                      <p>
                        We implement appropriate technical and organizational security measures
                        designed to protect your personal information. However, please note that
                        no method of transmission over the Internet or electronic storage is
                        completely secure.
                      </p>
                    </div>

                    {/* Section 7 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        7. Children’s Privacy
                      </h3>
                      <p>
                        Our services are not intended for individuals under the age of 18. We do
                        not knowingly collect personal information from children.
                      </p>
                    </div>

                    {/* Section 8 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        8. Your Privacy Rights
                      </h3>
                      <p>
                        Depending on your location and applicable laws, you may have the right to
                        access, update, correct, or request deletion of your personal information.
                        You may also have the right to object to or restrict certain data
                        processing activities.
                      </p>
                    </div>

                    {/* Section 9 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        9. Policy Updates
                      </h3>
                      <p>
                        We reserve the right to update or modify this Privacy Policy at any time.
                        Changes will be effective immediately upon posting on this page with an
                        updated revision date.
                      </p>
                    </div>

                    {/* Section 10 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#FCDB66] mb-2">
                        10. Contact Us
                      </h3>
                      <p>
                        <strong>Pragyan</strong><br />
                        Email: hello@pragyan.com<br />
                        Address: A - 607 Money Plant High Street, Near BSNL Office, SG Highway,
                        Ahmedabad, 382470
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            )}



            {activeModal === "terms" && (
              <div className="flex justify-center w-full">
                <div className="max-w-7xl w-full px-4 py-10 ">

                  {/* Title */}
                  <h2 className="text-4xl font-bold mb-6 text-center text-[#FCDB66]">
                    Terms and Conditions
                  </h2>

                  {/* Content */}
                  <div className=" mx-auto text-gray-300 text-sm md:text-base leading-relaxed space-y-6">

                    <p>
                      <strong>Pragyan</strong> (here in after referred to as “Pragyan”, “we”,
                      “us”, or “our”) maintains this website for information about our
                      products and services. Please feel free to browse the website.
                    </p>

                    <p>
                      Your access to and use of this website are subject to the following
                      Terms and Conditions and all applicable laws. By accessing and browsing
                      the website, you accept and agree to be bound by these Terms and
                      Conditions, including any future revisions.
                    </p>

                    {/* Bullet List */}
                    <ul className="list-disc pl-6 space-y-4">

                      <li>
                        The website and all content, materials, information, software,
                        products, and services provided on the website are provided on an{" "}
                        <strong>“as is”</strong> and <strong>“as available”</strong> basis.
                        Pragyan expressly disclaims all warranties of any kind, whether
                        express or implied, including but not limited to implied warranties
                        of merchantability, fitness for a particular purpose, and
                        non-infringement.
                      </li>

                      <li>
                        The content and projects described or depicted on this website are
                        subject to change without notice. Copyright may exist on present or
                        future materials. Unauthorized use of such materials may violate
                        applicable copyright laws.
                      </li>

                      <li>
                        Pragyan assumes no responsibility and shall not be liable for any
                        damages to, or viruses that may infect, your computer equipment or
                        other property due to your access to, use of, or browsing of the
                        website or your downloading of any materials, data, text, images,
                        video, or audio from the website.
                      </li>

                      <li>
                        All materials displayed on this website are either the property of
                        Pragyan or used with permission. The use of these materials by you or
                        anyone authorized by you is prohibited unless expressly permitted by
                        these Terms and Conditions or prior written permission is obtained
                        from Pragyan. Unauthorized use may violate copyright, trademark,
                        privacy, and publicity laws.
                      </li>

                      <li>
                        Pragyan is not responsible for the content of any external websites
                        linked to or from this website. Accessing such third-party websites
                        is entirely at your own risk. The inclusion of any links does not
                        imply endorsement of the linked website or its content.
                      </li>

                      <li>
                        You are prohibited from posting or transmitting any unlawful,
                        threatening, harassing, defamatory, libelous, obscene,
                        pornographic, or profane material, or any content that could
                        constitute or encourage conduct that would be considered a criminal
                        offense, give rise to civil liability, or otherwise violate any law.
                      </li>

                      <li>
                        Pragyan may revise these Terms and Conditions at any time by updating
                        this page. Since you are bound by these Terms and Conditions, you are
                        encouraged to review this page periodically to stay informed of any
                        changes.
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            )}



          </div>
        </div>
      )}
    </>
  );
}
