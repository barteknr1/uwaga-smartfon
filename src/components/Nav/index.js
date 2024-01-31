const routes = [
  {
    title: 'navigation.aboutConference',
    href: '/',
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
    href: 'volunteering',
  },
  {
    title: 'navigation.newsletter',
    href: '/',
  },
  {
    title: 'navigation.patrons',
    href: '/',
  },
]

const landingPageRoutes = [
  {
    title: 'navigation.aboutEvent',
    href: '/',
  },
  {
    title: 'navigation.program',
    href: '/',
  },
  {
    title: 'navigation.speakers',
    href: '/',
  },
  {
    title: 'navigation.patrons',
    href: '/',
  },
  {
    title: 'navigation.newsletter',
    href: '/',
  },
]

export default {routes, landingPageRoutes}
