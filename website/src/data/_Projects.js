import React from "react";

const projects = [
  {
    category: "Script",
    title: "RSS Feed Generator",
    slug: "#rss-feed-generator",
    imageUrl: "img/projects/rss-feed-creator.png",
    subtitle:
      "A small Python script to generate an RSS feed from the command line.",
    period: "October 2021 to Present",
    tech: "Python, Typer, Feedgen",
    description: (
      <>
        <p>
          I first started this script project back in October 2021.
          Currently a work in progress.
        </p>
        <p>
          I built it using{" "}
          <a href="https://www.python.org/" target="_blank">
            Python
          </a>{" "}
          and{" "}
          <a href="https://typer.tiangolo.com/" target="_blank">
            Typer
          </a>
          .
        </p>

      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/twhite96/rss-feed-creator",
      },
      {
        name: "Docs",
        link: "http://rsscreator.tiffs.app/",
      },
    ],
  },
  {
    category: "Web Scraping",
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
