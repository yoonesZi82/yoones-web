"use client";
import React from "react";
import { Layout } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiTelegramLogoBold,
  PiGithubLogoFill,
  PiGitlabLogoSimpleFill,
  PiInstagramLogoBold,
} from "react-icons/pi";
const { Footer } = Layout;

function FooterPage() {
  const path = usePathname();
  return (
    <Footer>
      <div className="bg-normalBlack px-20 py-10 text-base-content footer">
        <nav>
          <h3 className="font-medium text-2xl footer-title">Services</h3>
          <p className="font-medium text-2xl text-meloWhite cursor-text link link-hover">
            Branding
          </p>
          <p className="font-medium text-2xl text-meloWhite cursor-text link link-hover">
            Design
          </p>
          <p className="font-medium text-2xl text-meloWhite cursor-text link link-hover">
            Marketing
          </p>
          <p className="font-medium text-2xl text-meloWhite cursor-text link link-hover">
            Website design
          </p>
        </nav>
        <nav>
          <h3 className="font-medium text-2xl footer-title">Popular links</h3>
          <Link
            href={"/about-me"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            About me
          </Link>
          <Link
            href={"/contact-me"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Contact me
          </Link>
          <Link
            href={"/blogs"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Blogs
          </Link>
          <Link
            href={"/projects"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Projects
          </Link>
        </nav>
        <nav>
          <h3 className="font-medium text-2xl footer-title">Legal</h3>
          <p className="font-medium text-2xl text-meloWhite cursor-text link link-hover">
            Specialized site
          </p>
          <p className="font-medium text-2xl text-meloWhite cursor-text link link-hover">
            High security
          </p>
          <p className="font-medium text-2xl text-meloWhite cursor-text link link-hover">
            Perfect Team
          </p>
        </nav>
        <form>
          <h3 className="font-medium text-2xl footer-title">Newsletter</h3>
          <div className="flex justify-between items-center gap-6 mt-8">
            <Link
              href={"https://t.me/Yoones_Zi82"}
              target="_blank"
              className="text-meloWhite"
            >
              <div className="hover:bg-[rgba(255,255,255,0.1)] p-3 rounded-xl transition-colors duration-300">
                <PiTelegramLogoBold size={25} />
              </div>
            </Link>
            <Link
              href={"http://instagram.com/yoones_zamani_"}
              target="_blank"
              className="text-meloWhite"
            >
              <div className="hover:bg-[rgba(255,255,255,0.1)] p-3 rounded-xl transition-colors duration-300">
                <PiInstagramLogoBold size={25} />
              </div>
            </Link>
            <Link
              href={"https://github.com/yoonesZi82"}
              target="_blank"
              className="text-meloWhite"
            >
              <div className="hover:bg-[rgba(255,255,255,0.1)] p-3 rounded-xl transition-colors duration-300">
                <PiGithubLogoFill size={25} />
              </div>
            </Link>
            <Link
              href={"https://gitlab.com/yooneszaamni58"}
              target="_blank"
              className="text-meloWhite"
            >
              <div className="hover:bg-[rgba(255,255,255,0.1)] p-3 rounded-xl transition-colors duration-300">
                <PiGitlabLogoSimpleFill size={25} />
              </div>
            </Link>
          </div>
        </form>
      </div>

      <div className="bg-normalBlack p-10 text-3xl text-meloWhite footer footer-center">
        Create with ❤️ by YS
      </div>
    </Footer>
  );
}

export default FooterPage;
