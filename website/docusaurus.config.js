const math = require("remark-math");
const katex = require("rehype-katex");
const oembed = require('remark-oembed')

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
  lemmy: {
    label: "Lemmy",
    href: "https://infosec.pub/u/tiff",
  },
  keybase: {
    label: "Keybase",
    href: "https://keybase.io/0x8c",
  },
  email: {
    label: "Email",
    href: "mailto:tiff@0x8c.org",
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
  notes: {
    label: "Cyber Notes",
    href: "https://notes.0x8c.org",
  },
  wiki: {
    label: "0x8C Wiki",
    href: "https://wiki.0x8c.org",
  },
  about: {
    label: "About",
    href: "https://about.0x8c.org",
  },
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
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
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
        {
          href: "https://notes.0x8c.org",
          label: "Notes",
          position: "right",
        },
        {
          href: "https://wiki.0x8c.org",
          label: "Wiki",
          position: "right",
        },
        {
          label: "Uses",
          href: "https://uses.tiff.tools/",
          position: "right",
        },
        {
          label: "About",
          href: "https://about.0x8c.org",
          position: "right",
        },
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
            internetProfiles.keybase,
            internetProfiles.lemmy,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `&copy; <a href="https://0x8c.org">0x8c</a> • <a href="https://evantay.com">Design by Evan Tay</a> • <a href="https://github.com/DigiPie/kaya-folio/commits/main">Updated ${new Date().toLocaleDateString()}</a>`,
    },
  },
  presets: [
    "@docusaurus/theme-live-codeblock",
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          remarkPlugins: [oembed]
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 5,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          sortPosts: 'descending',
          postsPerPage: 5,
          editUrl: "https://github.com/twhite96/0x8c2/edit/tree/main/website/",
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} 0x8C.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest
              });
            }
          },
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
  plugins: [
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
    ["@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};
