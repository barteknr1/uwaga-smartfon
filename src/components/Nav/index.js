const routes = [
  {
    title: 'navigation.aboutConference',
    href: '#about_conference',
  },
  {
    title: 'navigation.editions',

    el: [
      {elTitle: '2022', elHref: '/edycja2022'},
      {elTitle: '2023', elHref: '/edycja2023'},
      {elTitle: '2024', elHref: '/landing-page'},
    ],
  },
  {
    title: 'navigation.volunteering',
    href: '/volunteering',
  },
  {
    title: 'navigation.patrons',
    href: '#patrons',
  },
  {
    title: 'navigation.newsletter',
    href: '#newsletter',
  },
]

const landingPageRoutes = [
  {
    title: 'navigation.aboutEvent',
    href: '#about_conference',
  },
  {
    title: 'navigation.program',
    href: '#program',
  },
  {
    title: 'navigation.speakers',
    href: '#speakers',
  },
  {
    title: 'navigation.patrons',
    href: '#patrons',
  },
  {
    title: 'navigation.newsletter',
    href: '#newsletter',
  },
]

export default {routes, landingPageRoutes}
