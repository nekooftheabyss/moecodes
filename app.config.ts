export default defineAppConfig({
  docus: {
    title: 'Moecodes',
    description: 'Code and stuff.',
    image: '/moecodes.png',
    socials: {
      twitter: 'retraigo',
      github: 'nekooftheabyss/moecodes',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs'
        }
      ]
    }
  }
})
