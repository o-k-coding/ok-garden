import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'OK Garden',
    favicon: '/favicon.ico',
    sidebar: [{
      label: 'About Me',
      link: '/about'
    },
    // {
    // 	label: 'Projects',
    // 	autogenerate: { directory: 'projects' },
    // },
    // {
    // 	label: 'Blog',
    // 	autogenerate: { directory: 'blog' },
    // },
    {
      label: 'Vennelos',
      autogenerate: {
        directory: 'vennelos'
      }
    }]
  }), preact()]
});