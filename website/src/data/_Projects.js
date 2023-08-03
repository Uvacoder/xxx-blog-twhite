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
];

export default projects;
