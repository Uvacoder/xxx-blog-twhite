const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tiffanyrwhite/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/twhite96",
  },
  mastodon: {
    label: "Mastodon",
    href: "https://infosec.exchange/@tiff",
  },
  youtube: {
    label: "YouTube",
    href: "https://youtube.com/@duvallhacks8877"
  },
  email: {
    label: "Email",
    href: "mailto:tiffany@tiffanywhite.dev",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Analysis",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  // resume: {
  //   label: "Resume",
  //   href: "https://evantay.com/pdf/resume.pdf",
  // },
};

module.exports = {
    title: '0x8c',
  tagline: 'A noob\'s journey into cybersecurity and malware analysis.',
  url: 'https://0x8c.org',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  baseUrl: '/',
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: '0x8c',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        target: '_self',
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Analysis",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        // {
        //   href: "https://evantay.com/pdf/resume.pdf",
        //   label: "Resume",
        //   position: "right",
        // },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.mastodon,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
            // internetProfiles.resume,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `&copy; <a href="https://0x8c.org">0x8c</a> • <a href="https://evantay.com">Design by Evan Tay</a> • <a href="https://github.com/DigiPie/kaya-folio/commits/main">Updated ${new Date().toLocaleDateString()}</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
         showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 5,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          sortPosts: 'descending',
          postsPerPage: 5,
          // Please change this to your repo.
          editUrl: "https://github.com/twhite96/0x8c2/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins:    [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};
