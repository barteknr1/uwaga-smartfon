const routes = [
  {
    title: 'O konferencji',
    href: '#about_conference',
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
    href: '/volunteering',
  },
  {
    title: 'Partnerzy i Patroni',
    href: '#patrons',
  },
  {
    title: 'Newsletter',
    href: '#newsletter',
  },
]

const landingPageRoutes = [
  {
    title: 'O wydarzeniu',
    href: '#about_conference',
  },
  {
    title: 'Program',
    href: '#program',
  },
  {
    title: 'Prelegenci',
    href: '#speakers',
  },
  {
    title: 'Partnerzy i Patroni',
    href: '#patrons',
  },
  {
    title: 'Newsletter',
    href: '#newsletter',
  },
]

const volunteeringPageRoutes = [
  {
    title: 'O wolontariace',
    href: '#about_volunteering',
  },
  {
    title: 'Obszary działania',
    href: '#volunteering_areas',
  },
  {
    title: 'Formularz zgłoszeniowy',
    href: '#volunteer_form',
  },
  {
    title: 'Nasi wolontariusze',
    href: '#our_volunteers',
  },
  {
    title: 'Podziękowania',
    href: '#dear_volunteers',
  },
]

export default {routes, landingPageRoutes, volunteeringPageRoutes}
