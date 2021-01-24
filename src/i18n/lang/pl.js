export const pl = {
  frontEndDeveloper: 'Front-end Developer',
  sendOk: 'Ok! Dzięki.',
  sendError: 'Ups... Błąd!',
  menu: {
    main: 'START',
    about: 'O MNIE',
    portfolio: 'PORTFOLIO',
    contact: 'KONTAKT'
  },
  main: {
    mainText1: 'Witaj.',
    mainText2: 'Jestem Web Develeoperem /',
    mainText3: 'Front-end Developerem.',
    mainText4: 'Zajmuję się kodowaniem stron',
    mainText5: 'i aplikacji internetowych.'
  },
  contact: {
    description: '<p>Aktualnie mieszkam w Zielonce blisko Warszawy.</p><p>Jeśli chcesz się ze mną skontaktować użyj proszę przycisków w stopce strony.</p>',
    name: 'Twoje imię',
    email: 'Adres Email',
    subject: 'Temat',
    defaultSubject: 'Nic specjalnego',
    message: 'Wiadomość',
    submit: 'Wyślij',
    minimumError: 'Minimum 3 znaki',
    emailError: 'Zły adres'
  },
  about: {
    introText: '<p>Stronami internetowymi zajmuję się od czasów szkoły średniej, czyli gdzieś od 1996r. Wtedy właśnie siedziałem po nocach przed ekranem monitora i wpatrywałem się w dziwne i niezrozumiałe (dla wielu) tagi języka HTML. Oczywiście nie muszę wspominać, że przerodziło się to w moją pasję. Dzięki tej pasji później ukończyłem studia informatyczne i do dziś uwielbiam kodować w językach używanych do tworzenia stron internetowych.<p><p>Obecnie pracuję jako Front-End Team Leader w firmie <a href=\'https://www.execon.pl/\'>Execon ITS</a>.</p>',
    headerCoding: 'Koduję wwwy:)',
    headerFrameworks: 'Używane frameworki i biblioteki',
    headerTechnologies: 'Używane technologie',
    headerCMS: 'Znane CMS\'y',
    headerSoftware: 'Używane oprogramowanie',
    introSiteHeader: 'Stos technologiczny strony',
    introSiteText: '<p>Do strworzenia tej strony wykorzystałem technologie, frameworki, skrypty i biblioteki takie jak:</p><ul><li>HTML</li><li>Sass - Na stronie nie został użyty żaden plik graficzny (z wyjątkiem portfolio)</li><li>BEM</li><li>RWD - Mobile First</li><li>JavaScript</li><li>Angular JS</li><li>jQuery</li><li>PHP - tylko do wysyłania formularza kontaktowego bo obecny hosting nie obsługuje node.js:(</li><li>JSON - teksty polsko i angielsko języczne</li><li>textillate.js - efekt tekstu na stronie głównej</li><li>lettering.js - wymagane przez textillate.js</li><li>enter-view.js</li><li>Google Fonts - Jura</li><li>Visual Studio Code</li><li>GIT</li><li>GitHub - repozytorium z moją stroną dostępne tu: <a href=\'https://github.com/tomekmy\'>github.com/tomekmy</a></li><li>Webpack</li><li>Chrome Developer Tools</li></ul>',
    introCertificatesHeader: 'Certyfikaty',
    introCertificate: [{
      link: 'https://www.udemy.com/certificate/UC-Q0YJQIKU/',
      description: 'JavaScript: Understanding the Weird Parts'
    },
    {
      link: 'https://www.udemy.com/certificate/UC-Y44IJ397/',
      description: 'Essentials in JavaScript ES6 - A Fun and Clear Introduction'
    },
    {
      link: 'https://www.udemy.com/certificate/UC-05ARETD8/',
      description: 'Quickstart AngularJS'
    },
    {
      link: 'https://www.udemy.com/certificate/UC-44RMZD7S/',
      description: 'Git Started with GitHub'
    },
    {
      link: 'https://www.udemy.com/certificate/UC-15P7OZMB/',
      description: 'Sass Workflow'
    },
    {
      link: 'https://www.udemy.com/certificate/UC-N657IK98/',
      description: 'Learn and Understand AngularJS'
    },
    {
      link: 'https://www.udemy.com/certificate/UC-BHQ717YM/',
      description: 'Learn Webpack 2 from scratch'
    },
    {
      link: 'https://www.udemy.com/certificate/UC-RVYOH4ON/',
      description: 'Angular 6 (formerly Angular 2) - The Complete Guide'
    },
    {
      link: 'https://mysliwiec.pro/assets/bottega_react_certyfikat.pdf',
      description: 'Reaktywne programowanie aplikacji webowych w oparciu o React.js, Redux i ES6',
      target: '_blank'
    },
    {
      link: 'https://www.udemy.com/certificate/UC-QA3KAOPL/',
      description: 'React - The Complete Guide'
    }
    ]
  },
  portfolio: {
    online: {
      header: 'Prace online',
      works: [{
        title: 'Wystaw śmieci',
        url: 'zielonka.wystaw-smieci.pl',
        description: '<p>Aplikacja PWA przypominająca o terminach odbioru nieczystości w mieście Zielonka. Aplikacja pozwala na przegląd terminów odbioru śmieci oraz umożliwia włączanie i wyłączanie powiadomień dla poszczególnych sektorów.</p><p>Apka została napisana w Angular 5 oraz zintegrowana z <a href=\'https://onesignal.com/\'>OneSignal</a> API.</p>',
        img: 'img/wystaw-smieci-pwa'
      },
      {
        title: 'Wystaw śmieci',
        url: 'wystaw-smieci.pl',
        description: '<p>Landing Page aplikacji powiadamiającej o terminach odbioru śmieci w mieście Zielonka. Aplikacja przeznaczona jest dla systemów Android i oprócz powiadomień umożliwia przegląd terminów odbiorów nieczystości.</p><p>W przyszłości na miejscu tej strony powstanie odpowiednik webowy tej aplikacji.</p><p>W projekcie wykorzystałem: <a href=\'https://github.com/vuetifyjs/pwa\'>vuetify.js</a></p>',
        img: 'img/wystaw-smieci-portfolio'
      },
      {
        title: 'TechCalc - Pomocnik Inżyniera',
        url: 'www.techcalc.pl',
        description: '<p>Aplikacja internetowa dla inżynierów, technologów, konstruktorów, zawierająca dużo przydatnych dla nich narzędzi i materiałów.</p><p>Obecną wersję strony oparłem o CMS Wordpress a wszystkie przeliczniki i narzędzia napisałem w JavaScript z jQuery.</p>',
        img: 'img/techcalc-portfolio'
      },
      {
        title: 'Centrum Technologiczne Warszawa',
        url: 'www.centrumtechnologiczne.pl',
        description: '<p>Centrum Technologiczne jest międzynarodową korporacją z ponad 20-letnim doświadczeniem w projektowaniu i produkcji maszyn i form do przetwórstwa tworzyw sztucznych.</p><p>Strona oparta na CMS Joomla. Większość zdjęć na stronie wykonał jeden z moich klientów – <a href=\'http://www.lagocki.pl/\'>Wojciech Łagocki</a>.</p>',
        img: 'img/centrumtechnologiczne-portfolio'
      },
      {
        title: 'BluePhoto | Ireneusz Rek Fotografia',
        url: 'www.bluephoto.pl',
        description: '<p>Ireneusz Rek - reportaż, dokument, fotograficzne spostrzeżenia autora. Portfolio autora, wybór zdjęć z wykonanych prac jak i relacje z podróży, wydarzeń.</p><p>Na stronie wykorzystałem CMS Wordpress.</p>',
        img: 'img/bluephoto-portfolio'
      },
      {
        title: 'Wojciech Łagocki - Fotografia',
        url: 'www.lagocki.pl',
        description: '<p>Wojciech Łagocki pasja - Fotografia. Ulubione tematy: fotografia ślubna fotografia niemowlaków noworodków fotografia dziecięca fotografia rodzinna portret.</p><p>Strona napisana przy użyciu JavaScript, jQuery, PHP w technologii SPA.</p>',
        img: 'img/wojtek-portfolio'
      },
      {
        title: 'KMP Plastics - maszyny i urządzenia peryferyjne dla Przetwórstwa Tworzyw Sztucznych.',
        url: 'www.kmpplastics.com.pl',
        description: '<p>KMP Plastics - oferuje maszyny i urządzenia peryferyjne dla Przetwórstwa Tworzyw Sztucznych.</p><p>Jeden z moich starszych projektów oparty o CMS Joomla</p>',
        img: 'img/kmp-portfolio'
      }
      ]
    },
    offline: {
      header: 'Prace offline',
      works: [{
        title: 'Maciej Majchrzak - Director of photography',
        description: '<p>Strona Macieja Majchrzaka - operatora kamery filmowej.</p><p>Stronę napisałem z wykorzystaniem HTML5, JavaScript, PHP, MySQL. Na tle strony umieściłem film autorstwa Macieja. Film osadzono przy użyciu HTML5 video. Stronę zintegrowano z serwisem YouTube za pomocą prostego CMS.</p>',
        img: 'img/maciejmajchrzak-portfolio.jpg'
      },
      {
        title: 'Skrawek Nieba - Domki letniskowe. Dąbki',
        description: '<p>Strona domków letniskowych usytuowanych nad Polskim morzem w Dąbkach obok Darłowa.</p><p>Strona oparta o CMS Joomla. Projekt graficzny oraz animacja Flash: Maciej Burkowski.</p>',
        img: 'img/skraweknieba-portfolio.jpg'
      },
      {
        title: 'Usługi i Szkolenia BHP. Kursy Pierwszej Pomocy',
        description: '<p>Strona Janusza Gawrycha właściciela firmy GJTECH. GJTECH jest firmą szkoleniowo - doradczą specjalizującą się w dziedzinie Bezpieczeństwa i Higieny Pracy oraz zaopatrywania w artykuły BHP, PPOŻ i Pierwszej Pomocy.</p><p>Stronę napisałem z wykorzystaniem JavaScript, PHP, MySQL. Strona posiada prosty system CMS.</p>',
        img: 'img/bhp-portfolio.jpg'
      }
      ]
    }
  }
};