export type Language = 'sr' | 'en';

export const translations = {
  sr: {
    hero: {
      headline: "Pretvaramo tvoju ideju u funkcionalan digitalni proizvod.",
      subheadline: "MVP, full product development i unapređenje postojećih sistema.",
      ctaPrimary: "Zakaži razgovor",
      ctaSecondary: "Pogledaj usluge"
    },
    trust: {
      developers: "6 developera + 2 project managera",
      endToEnd: "End-to-end development",
      ready: "EU/US ready tim"
    },
    problem: {
      title: "Izazov",
      description: "Imaš sjajnu ideju, ali ne znaš odakle da počneš? Tehnički aspekti te brinu i trebaš tim koji razume i biznis i razvoj?"
    },
    solution: {
      title: "Rešenje",
      description: "Mi preuzimamo kompletan proces - od ideje do lansiranja. Gradiš proizvod sa timom koji kombinuje tehničku ekspertizu i razumevanje biznisa."
    },
    services: {
      title: "Naše usluge",
      items: [
        {
          title: "MVP Development",
          description: "Brzo lansiranje minimalno funkcionalnog proizvoda za testiranje tržišta."
        },
        {
          title: "Full Product Development",
          description: "Kompletna izgradnja skalabilnih, pouzdanih i modernih digitalnih proizvoda."
        },
        {
          title: "System Optimization",
          description: "Poboljšanje performansi i efikasnosti postojećih sistema."
        },
        {
          title: "Architecture & Scaling",
          description: "Dizajniranje arhitekture spremne za rast i skaliranje biznisa."
        },
        {
          title: "Security Analysis",
          description: "Dubinska analiza i zaštita sistema od sigurnosnih pretnji."
        },
        {
          title: "Team Augmentation",
          description: "Proširenje tvojeg tima sa našim stručnjacima kada ti je potrebno."
        }
      ]
    },
    process: {
      title: "Kako radimo",
      steps: [
        { title: "Razumevanje ideje", description: "Analiziramo tvoju viziju i ciljeve" },
        { title: "Planiranje", description: "Kreiramo roadmap i definišemo milestone-e" },
        { title: "Arhitektura", description: "Dizajniramo skalabilnu tehničku osnovu" },
        { title: "Development", description: "Gradimo proizvod sa fokusom na kvalitet" },
        { title: "Testiranje", description: "Osiguravamo stabilnost i pouzdanost" },
        { title: "Launch & podrška", description: "Lansiramo i pružamo kontinuiranu podršku" }
      ]
    },
    whyUs: {
      title: "Zašto mi?",
      items: [
        { title: "Biznis + engineering mindset", description: "Razumemo i tehničke i poslovne izazove" },
        { title: "Brza realizacija", description: "Efikasni procesi i fokus na isporuku" },
        { title: "Čist, skalabilan kod", description: "Kvalitet koji omogućava rast proizvoda" },
        { title: "Transparentna komunikacija", description: "Redovni update-i i jasna saradnja" },
        { title: "Potpuna odgovornost", description: "Preuzimamo vlasništvo nad isporukom" }
      ]
    },
    contact: {
      title: "Imaš ideju? Hajde da je pretvorimo u proizvod.",
      namePlaceholder: "Tvoje ime",
      emailPlaceholder: "Email adresa",
      messagePlaceholder: "Ukaži nam o svojoj ideji...",
      ctaButton: "Pošalji upit",
      successMessage: "Hvala! Javićemo ti se uskoro.",
      errorMessage: "Došlo je do greške. Pokušaj ponovo."
    }
  },
  en: {
    hero: {
      headline: "We turn your idea into a functional digital product.",
      subheadline: "MVP, full product development, and improvement of existing systems.",
      ctaPrimary: "Schedule a call",
      ctaSecondary: "View services"
    },
    trust: {
      developers: "6 developers + 2 project managers",
      endToEnd: "End-to-end development",
      ready: "EU/US ready team"
    },
    problem: {
      title: "The Challenge",
      description: "You have a great idea, but don't know where to start? Technical aspects worry you and you need a team that understands both business and development?"
    },
    solution: {
      title: "The Solution",
      description: "We take care of the entire process - from idea to launch. Build your product with a team that combines technical expertise and business understanding."
    },
    services: {
      title: "Our Services",
      items: [
        {
          title: "MVP Development",
          description: "Rapid launch of a minimum viable product for market testing."
        },
        {
          title: "Full Product Development",
          description: "Complete development of scalable, reliable, and modern digital products."
        },
        {
          title: "System Optimization",
          description: "Performance improvement and efficiency of existing systems."
        },
        {
          title: "Architecture & Scaling",
          description: "Designing architecture ready for business growth and scaling."
        },
        {
          title: "Security Analysis",
          description: "In-depth analysis and protection of systems from security threats."
        },
        {
          title: "Team Augmentation",
          description: "Expanding your team with our experts when you need it."
        }
      ]
    },
    process: {
      title: "How We Work",
      steps: [
        { title: "Understanding the idea", description: "We analyze your vision and goals" },
        { title: "Planning", description: "We create a roadmap and define milestones" },
        { title: "Architecture", description: "We design a scalable technical foundation" },
        { title: "Development", description: "We build the product with focus on quality" },
        { title: "Testing", description: "We ensure stability and reliability" },
        { title: "Launch & support", description: "We launch and provide ongoing support" }
      ]
    },
    whyUs: {
      title: "Why Us?",
      items: [
        { title: "Business + engineering mindset", description: "We understand both technical and business challenges" },
        { title: "Fast execution", description: "Efficient processes and focus on delivery" },
        { title: "Clean, scalable code", description: "Quality that enables product growth" },
        { title: "Transparent communication", description: "Regular updates and clear collaboration" },
        { title: "Full ownership", description: "We take ownership of delivery" }
      ]
    },
    contact: {
      title: "Have an idea? Let's turn it into a product.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Email address",
      messagePlaceholder: "Tell us about your idea...",
      ctaButton: "Send inquiry",
      successMessage: "Thank you! We'll get back to you soon.",
      errorMessage: "An error occurred. Please try again."
    }
  }
};

export function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  // Check if browser language is Serbian
  if (browserLang.startsWith('sr')) {
    return 'sr';
  }
  
  // Default to English for all other languages
  return 'en';
}

export function getTranslations(lang: Language) {
  return translations[lang];
}
