import React from "react";
import { Layout } from "antd";
import Link from "next/link";
const { Footer } = Layout;

function FooterPage() {
  return (
    <Footer>
      <div className="bg-normalBlack px-20 py-10 text-base-content footer">
        <nav>
          <h3 className="font-medium text-2xl footer-title">Services</h3>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Branding
          </Link>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Design
          </Link>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Marketing
          </Link>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Advertisement
          </Link>
        </nav>
        <nav>
          <h3 className="font-medium text-2xl footer-title">Company</h3>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            About us
          </Link>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Contact
          </Link>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Blogs
          </Link>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Projects
          </Link>
        </nav>
        <nav>
          <h3 className="font-medium text-2xl footer-title">Legal</h3>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Terms of use
          </Link>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Privacy policy
          </Link>
          <Link
            href={"/"}
            className="font-medium text-2xl text-meloWhite link link-hover"
          >
            Cookie policy
          </Link>
        </nav>
        <form>
          <h3 className="font-medium text-2xl footer-title">Newsletter</h3>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="font-medium text-2xl text-meloWhite label-text">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input-bordered text-2xl text-meloWhite input join-item"
              />
              <button className="bg-meloWhite text-2xl text-normalBlack btn join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="bg-normalBlack p-10 text-3xl text-meloWhite footer footer-center">
        Create with ❤️ by YS
      </div>
    </Footer>
  );
}

export default FooterPage;
