import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "John's Telemetry",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "**/private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Crimson Pro",
        body: "Crimson Pro",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F0F2F5",
          lightgray: "#E0DDD5",     // Container borders
          gray: "#D1CCC2",          // Faint, thin celestial lines for the graph
          darkgray: "#3A3A3A",      // The main body text (faded typewriter ink)
          dark: "#1A1A1A",          // Bold headers and the interactive graph nodes (heavy ink)
          secondary: "#6F8BC7",     // Links and current graph node
          tertiary: "#7A6855",      // Hover states (faded sepia)
          highlight: "rgba(0, 0, 0, 0.05)",
          textHighlight: "rgba(122, 104, 85, 0.2)",
        },
        darkMode: {
          light: "#111318",         // Deep space / dark slate
          lightgray: "#2A2A2A",
          gray: "#3D3D3D",          // Graph lines in dark mode
          darkgray: "#C4C4C4",
          dark: "#EAEAEA",          // Graph nodes
          secondary: "#6F8BC7",
          tertiary: "#B5A492",
          highlight: "rgba(255, 255, 255, 0.05)",
          textHighlight: "rgba(181, 164, 146, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
