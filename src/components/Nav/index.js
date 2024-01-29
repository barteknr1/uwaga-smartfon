const routes = [
  {
    title: 'O konferencji',
    href: '/',
  },
  {
    title: 'Edycje',

    el: [
      {elTitle: '2022', elHref: '/edycja2022'},
      {elTitle: '2023', elHref: '/edycja2023'},
      {elTitle: '2024', elHref: '/landing-page'},
    ],
  },
  {
    title: 'Wolontariat',
    href: 'volunteering',
  },
  {
    title: 'Newsletter',
    href: '/',
  },
  {
    title: 'Partnerzy i Patroni',
    href: '/',
  },
]

const landingPageRoutes = [
  {
    title: 'O wydarzeniu',
    href: '/',
  },
  {
    title: 'Program',
    href: '/',
  },
  {
    title: 'Prelegenci',
    href: '/',
  },
  {
    title: 'Partnerzy i Patroni',
    href: '/',
  },
  {
    title: 'Newsletter',
    href: '/',
  },
]

export default {routes, landingPageRoutes}
