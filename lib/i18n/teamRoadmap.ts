import { type Locale } from '@/lib/i18n'
import { type MigrazioneProcessCopy } from '@/lib/i18n/migrazione'

// Roadmap copy for the dedicated-team (Data-Driven Team) page.
// Reuses the MigrazioneProcess graphic but with a 90-day, team-focused narrative.
type ProcessCopy = MigrazioneProcessCopy

const it: ProcessCopy = {
  label: 'come entriamo',
  headingPart1: 'Trenta giorni per entrare. ',
  headingEm: 'Poi restiamo per anni.',
  description:
    'Il primo mese è uno sprint di ingresso: entriamo nel progetto, impostiamo il team, colleghiamo i dati e costruiamo le fondamenta.\nDa lì parte una collaborazione che, con i nostri clienti, dura anni.',
  phases: [
    {
      number: '01',
      title: 'Il primo sprint di ingresso',
      duration: '30 giorni',
      description:
        'In 30 giorni entriamo davvero nel tuo eCommerce. Analizziamo dati, store e canali. Impostiamo il team giusto per le aree che servono. Colleghiamo tracciamento, dashboard e reportistica. Definiamo insieme obiettivi chiari e le prime priorità. Alla fine dello sprint il progetto ha una regia, un team e una direzione.',
    },
    {
      number: '02',
      title: 'Una collaborazione che dura nel tempo',
      duration: 'per anni',
      description:
        'Finito lo sprint non finisce niente: comincia il lavoro vero. Seguiamo la crescita dell’eCommerce mese dopo mese e adattiamo team e strategia in base ai dati e agli obiettivi. Abbiamo clienti che ci seguono da anni, perché un partner non si cambia ogni stagione.',
    },
  ],
  fourMonths: {
    title: 'I primi 30 giorni a 50% del prezzo.',
    description:
      'Vogliamo entrare senza barriere e dimostrarti come lavoriamo. Per questo il primo mese di sprint costa il 50%: in 30 giorni imposti tutto il team e vedi con i tuoi occhi il nostro metodo. Nessun vincolo dopo il primo mese: decidi tu se continuare.',
  },
  closingLine:
    'Cumini ci segue da 4 anni.\nUn partner non si cambia ogni stagione.',
}

const en: ProcessCopy = {
  label: 'how we start',
  headingPart1: 'Thirty days to get in. ',
  headingEm: 'Then we stay for years.',
  description:
    'The first month is an onboarding sprint: we get into the project, set up the team, connect the data and build the foundations.\nFrom there begins a partnership that, with our clients, lasts for years.',
  phases: [
    {
      number: '01',
      title: 'The onboarding sprint',
      duration: '30 days',
      description:
        'In 30 days we truly get inside your eCommerce. We analyze data, store and channels. We set up the right team for the areas that matter. We connect tracking, dashboards and reporting. Together we define clear goals and the first priorities. By the end of the sprint the project has direction, a team and a lead.',
    },
    {
      number: '02',
      title: 'A partnership that lasts',
      duration: 'for years',
      description:
        'When the sprint ends, nothing ends: the real work begins. We follow your eCommerce growth month after month and adapt the team and strategy based on data and goals. We have clients who have stayed with us for years, because you do not swap partners every season.',
    },
  ],
  fourMonths: {
    title: 'Your first 30 days at 50% off.',
    description:
      'We want to get in with no barriers and show you how we work. That is why the first sprint month is 50%: in 30 days you set up the whole team and see our method with your own eyes. No commitment after the first month: you decide whether to continue.',
  },
  closingLine:
    'Cumini has trusted us for 4 years.\nYou do not swap a partner every season.',
}

export function getTeamRoadmapCopy(locale: Locale): ProcessCopy {
  return locale === 'it' ? it : en
}
