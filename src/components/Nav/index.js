const routes = [
  {
    title: 'navigation.aboutConference',
    href: '#about_conference',
  },
  {
    title: 'navigation.editions',

    el: [
      {elTitle: '2022', elHref: 'https://uwagasmartfon.pl/edycja2022'},
      {elTitle: '2023', elHref: 'https://uwagasmartfon.pl/edycja2023'},
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

const volunteeringPageRoutes = [
  {
    title: 'navigation.aboutVolunteer',
    href: '#about_volunteering',
  },
  {
    title: 'navigation.volunteeringAreas',
    href: '#volunteering_areas',
  },
  {
    title: 'navigation.volunteerForm',
    href: '#volunteer_form',
  },
  {
    title: 'navigation.ourVolunteers',
    href: '#our_volunteers',
  },
  {
    title: 'navigation.dearVolunteers',
    href: '#dear_volunteers',
  },
]

export default {routes, landingPageRoutes, volunteeringPageRoutes}
