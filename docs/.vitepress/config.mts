import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fancy UI",
  description: "A documentation site for an open source design system",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/installation' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/installation' },
          { text: 'Installation', link: '/docs/installation' }
        ]
      },
      {
        text: 'Style',
        items: [
          { text: 'Color', link: '/docs/installation' },
          { text: 'Typography', link: '/docs/installation' },
          { text: 'Effects', link: '/docs/installation' }
        ]
      },
      {
        text: 'Component',
        items: [
          { text: 'Button', link: '/docs/button' },
          { text: 'Accordion', link: '/docs/accordion' },
          { text: 'Checkbox', link: '/docs/checkbox' },
          { text: 'Tag', link: '/docs/tag' },
          { text: 'Radio', link: '/docs/radio' },
          { text: 'Modal', link: '/docs/modal' },
          { text: 'Notification', link: '/docs/accordion' },
          { text: 'Switch', link: '/docs/accordion' },
          { text: 'Textarea', link: '/docs/accordion' },
          { text: 'Dropdown', link: '/docs/accordion' },
          { text: 'Select', link: '/docs/accordion' },
          { text: 'Rating', link: '/docs/accordion' },
          { text: 'Tab', link: '/docs/accordion' },
          { text: 'Menu', link: '/docs/accordion' },
          { text: 'Input', link: '/docs/accordion' },
          { text: 'Table', link: '/docs/tag' }
        ]
      },
      {
        text: 'Layout',
        items: [
          { text: '12 Column', link: '/docs/installation' }
        ]
      },
      {
        text: 'Icons',
        items: [
          { text: 'Phosphor Icons', link: '/docs/installation' },
          { text: 'Feather Icons', link: '/docs/installation' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nathanielanum13/fancy-ui' },
      { icon: 'twitter', link: 'https://x.com/NathanielAnum99' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nathaniel-anum-adjah/' },
      { icon: 'facebook', link: 'https://web.facebook.com/nathaniel19999/' }
    ]
  }
})
