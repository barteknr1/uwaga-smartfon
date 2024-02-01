import romanSolecki from '../../assets/images/Speakers/dr-roman-solecki.png'
import piotrCzubaty from '../../assets/images/Speakers/piotr-czubaty.png'
import lukaszCichocki from '../../assets/images/Speakers/dr-lukasz-cichocki.png'
import tomaszLewandowski from '../../assets/images/Speakers/tomasz-lewandowski.png'
import monikaPrzybysz from '../../assets/images/Speakers/monika_przybysz.png'
import paulaArguelles from '../../assets/images/Speakers/paula_arguelles.png'
import catherineLEcuyer from '../../assets/images/Speakers/no-photo.jpg'
import sylwiaJaskulska from '../../assets/images/Speakers/sylwia_jaskulska.png'

const speakersData = [
  {
    id: 1,
    img: romanSolecki,
    name: 'dr Roman Solecki',
    title: 'Ekspert',
    about: [
      'Roman Solecki',
      'Pedagog, profilaktyk, certyfikowany logoterapeuta; psychoterapeuta uzależnień, mediator;',
      'Doktor w dziedzinie nauk społecznych poświęcony Aktywności młodzieży w cyberprzestrzeni. Studia licencjackie z zakresu Poradnictwa Rodzinnego i Mediacji. Bazowy kurs Mediacji w Stowarzyszeniu "Mediatorzy Polscy". Ukończył Małopolski Ośrodek Szkolenia Terapeutów Uzależnień przy Szpitalu Klinicznym im dr. Józefa Babińskiego w Krakowie.',
      'Realizator programu profilaktycznego „Saper – jak rozminować agresję wśród młodzieży"; programu profilaktyczno-wychowawczego „Archezja" i „Cuder". Od 2006 współpracuje z Ośrodkiem Profilaktyki Problemowej „Archezja" jako realizator zajęć profilaktyczno-wychowawczych dla dzieci i młodzieży.',
      'Prowadzi badania nad aktywnością młodzieży w cyberprzestrzeni, profilaktyką i terapią uzależnień od mediów, depresją i poczuciem sensu życia wśród młodzieży.',
      'Od 2020 roku koordynuje prace Krakowskiego Instytutu Logoterapii.',
    ],
  },
  {
    id: 2,
    img: piotrCzubaty,
    name: 'Piotr Czubaty',
    title: 'Specjalista',
    about: [
      'Piotr Czubaty',
      'Ekspert ds. bezpieczeństwa informacji, audytor wiodący SZBI wg normy ISO/IEC 27001, inspektor ochrony danych, specjalista w obszarze compliance.',
      'Trener, wykładowca i publicysta. Autor książki: „RODO: obowiązki pracodawcy. Praktyczny poradnik ze wzorami”.',
      'Założyciel i prezes Fundacji na rzecz ochrony prywatności i bezpieczeństwa cyfrowego „SIECI”, której jednym z celów statutowych jest walka z uzależnieniem cyfrowym.',
      'Na co dzień pracuje z jednostkami administracji publicznej, przedsiębiorcami i trzecim sektorem, podnosząc standardy wewnętrzne i poziom bezpieczeństwa w obliczu wyzwań cyfrowych oraz wymogów prawa międzynarodowego.',
      'Po godzinach inicjuje działania edukacyjne, realizując misję szerzenia wiedzy o zagrożeniach płynących z nadużywania lub nieumiejętnego korzystania z nowych technologii”.',
    ],
  },
  {
    id: 3,
    img: lukaszCichocki,
    name: 'dr Łukasz Cichocki',
    title: 'Specjalista',
    about: [
      'Łukasz Cichocki',
      'Doktor nauk medycznych, psychiatra, psychoterapeuta, nauczyciel akademicki z ponad dwudziestoletnim doświadczeniem.',
      'Dyrektor medyczny Szpitala Klinicznego im. J. Babińskiego w Krakowie.',
      'Autor wielu prac naukowych, popularyzator wiedzy z zakresu zdrowia psychicznego. Wieloletni prezes Polsko - Niemieckiego Towarzystwa Zdrowia Psychicznego.',
      'Działacz społeczny, prezes Instytutu Rozwoju Inicjatyw Społecznych.',
      'Prywatnie: mąż, ojciec czwórki dzieci, w wolnym czasie lubi spać, spacerować, czytać - zwłaszcza Sapkowskiego a ostatnio także Wegnera',
    ],
  },
  {
    id: 4,
    img: tomaszLewandowski,
    name: 'Tomasz Lewandowski',
    title: 'Specjalista',
    about: [
      'Tomasz Lewandowski',
      'Zajmuje się prawem międzynarodowym publicznym, prawem ochrony danych osobowych, międzynarodowym prawem humanitarnym konfliktów zbrojnych oraz filozofią prawa międzynarodowego.',
      'Interesują go: wolność ekspresji artystycznej, suwerenność zarówno w prawie międzynarodowym, jak i krajowym, relacja pomiędzy prawem a psychologią.',
      'Autor kilkunastu publikacji z zakresu prawa konstytucyjnego, ochrony praw człowieka, prawa międzynarodowego publicznego oraz ochrony danych osobowych.',
      'Prelegent międzynarodowych i krajowych konferencji naukowych.',
      'Sędzia prestiżowego Philip C. Jessup International Law Moot Court Competition. Trener drużyn studenckich uczestniczących w konkursach typu moot court.',
      'Realizuje projekty naukowe finansowane przez Narodowe Centrum Nauki oraz Komisję Europejską, często współpracuje z zagranicznymi ośrodkami naukowymi.',
      'Laureat Stypendium Funduszu im. Rodziny Kulczyków oraz Fundacji Uniwersytetu im. Adama Mickiewicza w Poznaniu.',
      'W 2017 r. otrzymał nagrodę specjalną w konkursie Rising Stars Prawnicy – liderzy jutra 2017 organizowanym przez Dziennik Gazetę Prawną i Wolters Kluwer Polska, którego celem jest wyłonienie młodych prawników, wyróżniających się w pracy zawodowej i postawą społeczną.',
    ],
  },
  {
    id: 5,
    img: monikaPrzybysz,
    name: 'Prof. Monika Przybysz',
    title: 'Specjalista',
    about: [
      'prof. Monika Przybysz',
      'Specjalista ds. public relations, crisis management, mediów społecznościowych, medioznawca, wykładowca w Instytucie Edukacji Medialnej i Dziennikarstwa UKSW w Warszawie.',
      'Trener w zakresie komunikacji kryzysowej, kreowania wizerunku, mediów społecznościowych, komunikacji w internecie. Od 3 lat prowadzi warsztaty dla uczniów, rodziców, nauczycieli, pedagogów i wychowawców dotyczące komunikacji za pośrednictwem smartfonów. Przeszkoliła w tym zakresie już ponad 10 tysięcy osób w kilkudziesięciu szkołach.',
      'Nagrodzona przez Prezesa Rady Ministrów RP za doktorat w 2008 r. Ukończyła ze Złotą Odznaką studia podyplomowe w Uniwersytecie Warszawskim z public relations. Doktorat obroniła w 2007 z zakresu zarządzania komunikacją w kryzysie, a habilitację w 2014 roku z zakresu rzecznictwa prasowego.',
      'Kierownik sekcji public relations w Polskim Towarzystwie Komunikacji Społecznej. Współorganizator corocznych warsztatów dla rzeczników prasowych zakonnych i diecezjalnych od 2008 roku.',
      'Laureatka nagrody branży public relations „PRoton 2013”.',
      'Autorka książek i artykułów naukowych z dziedziny komunikacji społecznej i mediów w zakresie: public relations, rzecznictwa prasowego, komunikacji kryzysowej, komunikacji w mediach społecznościowych, komunikacji internetowej, reklamy, społecznej odpowiedzialności biznesu i zrównoważonego rozwoju.',
      'Od 2016 roku członek Grupy Roboczej ds. etyki i standardów odpowiedzialnego prowadzenia biznesu w Ministerstwie Inwestycji i Rozwoju;',
      'Od 2018 r. członek Grupy Roboczej ds. Społecznej Odpowiedzialności Uczelni w Ministerstwie Rozwoju Regionalnego.',
      'Od 2019 r. do 2022 r. przedstawiciel Rzeczypospolitej Polskiej w zespole roboczym Social Dimension w pracach Bologna Follow-Up Group w ramach Bologna Process.',
    ],
  },
  {
    id: 6,
    img: paulaArguelles,
    name: 'Paula Arguelles',
    title: 'Specjalista',
    about: ['Paula Arguelles', 'Lorem ipsum '],
  },
  {
    id: 7,
    img: catherineLEcuyer,
    name: 'Catherine L’Ecuyer',
    title: 'Specjalista',
    about: [
      "Catherine L'Ecuyer",
      'Kanadyjka, obecnie mieszkająca w Barcelonie z czwórką dzieci.',
      'Posiada tytuł MBA z IESE Business School, oficjalny tytuł European Master of Research oraz doktorat z edukacji i psychologii.',
      'W szwajcarskim czasopiśmie Frontiers in Human Neuroscience opublikowano jej artykuł "The Wonder Approach to Learning", który uczynił jej pracę dyplomową nową hipotezą/teorią uczenia się.',
      'W 2015 r. otrzymała nagrodę Pajarita od Hiszpańskiego Stowarzyszenia Producentów Zabawek za promowanie kultury zabawy w mediach, a w 2020 r. została honorowym członkiem Hiszpańskiego Stowarzyszenia Montessori (Association Montessori Española).',
      'Została zaproszona do wystąpienia przed Komisją Edukacji Kongresu Deputowanych Hiszpanii oraz na Drugi Szczyt Edukacyjny organizowany przez Komisję Europejską.',
      'Była konsultantem rządu stanu Puebla w Meksyku w zakresie reformy przedszkolnej, była częścią grupy zadaniowej dla rządu hiszpańskiego w sprawie korzystania z technologii cyfrowych przez nieletnich oraz uczestniczyła w raporcie dla CERLALC (UNESCO) na temat korzystania z mediów cyfrowych w dzieciństwie.',
      'Jest badaczką i autorką wielu publikacji naukowych na temat edukacji Montessori, a także kilku książek i artykułów na temat edukacji w ogóle, w tym It Looks Better in 3D, na temat wykorzystania technologii cyfrowych w dzieciństwie i okresie dojrzewania oraz The Wonder Approach, opublikowanych w ośmiu językach i 60 krajach.',
      'W 2021 r. Editorial Espasa opublikowało jej książkę Conversaciones con mi maestra [Rozmowy z moją nauczycielką], esej w formie sokratejskiego dialogu na temat pochodzenia metod, które można dziś znaleźć w klasach.',
      'Obecnie współpracuje z Mind-Brain Group na Uniwersytecie Nawarry i jest felietonistką w różnych serwisach informacyjnych, w tym El País, La Vanguardia i El Mundo w języku hiszpańskim oraz The Huffington Post w języku francuskim.',
      'Jest założycielką i dyrektorem Fundación CLE, organizacji non-profit zajmującej się promowaniem edukacji klasycznej.',
    ],
  },
  {
    id: 8,
    img: sylwiaJaskulska,
    name: 'Sylwia Jaskulska',
    title: 'Specjalista',
    about: [
      'dr hab. Sylwia Jaskulska prof. UAM',
      'Profesora w Pracowni Pedagogiki Szkolnej na Wydziale Studiów Edukacyjnych Uniwersytetu im. Adama Mickiewicza w Poznaniu.',
      'Autorka i współautorką kilkudziesięciu tekstów naukowych i popularno-naukowych oraz kilku książek. Zaangażowana społecznie w tematyce edukacyjnej za pośrednictwem wielu kanałów, m.in. TVN24, Radiu Zet, Newsweeku Psychologia Dziecka, WTK, Radiu Poznań, TVP3, Wysokich Obcasach Extra.',
      'Prowadzącą webinaria, szkolenia i spotkania autorskie dla Diet & Training by Ann (Anna Lewandowska), Nowej Ery, Librusa, Fundacji Szkoła Bez Ocen, Macmillan Polska, Wydawnictwa Znak.',
      'Ambasadorka akcji Rok Relacji w Edukacji, członkini Rady Programowej Ośrodka Koordynacyjno - Programowego Kształcenia Nauczycieli UAM w  Poznaniu, zastępczyni redaktor naczelnej "Rocznika Pedagogicznego".',
      'Magister pedagogiki specjalnej, doktor nauk społecznych w zakresie pedagogiki, mama dwóch nastolatków.',
    ],
  },
]

export default speakersData
