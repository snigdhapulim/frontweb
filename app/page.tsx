// pages/index.js or pages/index.tsx

import Head from "next/head"; // Import Head for custom page titles and meta tags
import Link from "next/link"; // Import the Link component
import Button from "./components/Button"; // Ensure correct relative path
import Layout from "./components/Layout"; // Ensure correct relative path
import "./home.css"; // Correct the path for CSS import, assuming home.css is in the styles folder

export default function Home() {
  return (
    <Layout title="Primary Care Doctor Recommendation">
      <div className="parent">
        <div className="container mx-auto px-4">
          <main className="hero py-8">
            <div className="hero-content">
              <h1 className="text-5xl font-bold mb-6">Find Your Doctor Now</h1>
              <p className="mb-6">
                The best care is on your schedule. Get started today.
              </p>
              <Link href="/form" passHref>
                <Button>Go to Form</Button>{" "}
                {/* Wrap Button with <a> tag for Link */}
              </Link>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
