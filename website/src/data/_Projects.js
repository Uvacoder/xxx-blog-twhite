import React from "react";

const projects = [
  {
    category: "Open Source Tool",
    title: "Simple DNS Enumeration Tool",
    slug: "#simple-dns-enum",
    imageUrl: "img/projects/smet.png",
    subtitle:
      "A proof of concept DNS Enumeration CLI tool",
    period: "November 2023 - November 2023",
    tech: "Python",
    description: (
      <>
        <p>
          A CLI tool iterate over a list of DNS records and print them to the console.
        </p>
        <p>
          I built it using{" "}
          <a href="https://www.python.org/" target="_blank">
            Python
          </a>{" "}
          and{" "}
          Python standard libraries.
          .
        </p>

      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/twhite96/simple-dns-enum-tool",
      },
      {
        name: "Write-up",
        link: "http://0x8c.org",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "Simple DNS Enumeration",
    slug: "#simple-ddos",
    imageUrl: "img/projects/ddospy2.png",
    subtitle:
      "A proof of concept DDoS CLI tool",
    period: "October 2023 - November 2023",
    tech: "Python",
    description: (
      <>
        <p>
          A CLI tool to DDoS a target host (your own please) written
          in Python.
        </p>
        <p>
          I built it using{" "}
          <a href="https://www.python.org/" target="_blank">
            Python
          </a>{" "}
          and{" "}
          Python standard libraries.
          .
        </p>

      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/twhite96/ddos-script",
      },
      {
        name: "Write-up",
        link: "http://0x8c.org",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "Puppeteer scrape, v1",
    slug: "#puppeteer-scrape-v1",
    imageUrl: "img/projects/puppet.png",
    subtitle:
      "Testing out web scraping with Node tool Puppeteer, a headless Chromium Browser",
    period: "August 27, 2023 to Present",
    tech: "Node, Puppeteer",
    description: (
      <>
        <p>
          I wanted to learn more about web scraping and how to configure a proxy server to bypass
          any anti-scraping/anti-bot protections. I failed, which is why this is a v1.
        </p>
        <p>
          I built it using{" "}
          <a href="https://pptr.dev" target="_blank">
            Puppeteer
          </a>{" "}
          and{" "}
          <a href="https://nodejs.org" target="_blank">
            Node
          </a>
          .
        </p>

      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/twhite96/puppeteer-ideas",
      },
      {
        name: "Brief note on attempt no. 1",
        link: "https://notes.0x8c.org/unsuccessful-puppeteer-attempt-1/",
      },
    ],
  },
];

export default projects;
