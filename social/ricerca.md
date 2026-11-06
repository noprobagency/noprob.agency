# Build in public: come hanno iniziato 15 builder su X (e cosa cambia su Threads)

Ricerca di Gabri, 6 novembre 2026. Serve a capire **come si parte** con un build in public vero, non cosa dire: la voce resta quella di Antonio (`voce-antonio.md`). Mai copiare frasi o format riconoscibili di questi profili.

## Metodo

- **X**: 15 profili scelti tra indie hacker, SaaS, AI e app Shopify che sono cresciuti davvero (da 19 mila a 990 mila follower oggi). Per ognuno: inizio del build in public trovato con una scansione per semestri, poi i post originali dei **primi 90 giorni** (cronologici) e i post migliori dei **primi 6 e 12 mesi**. Fonte: treg, provider AnyAPI (`anyapi.x.search.posts` con `from:`, `since:`, `until:`), circa 1.900 post.
- **Threads**: ultimi post di 7 builder attivi lì e ricerca per "build in public", "buildinpublic", "indie hacker MRR". Provider ScrapeCreators. Threads non dà lo storico: si guarda solo come parla chi ci cresce oggi.
- **Limite**: l'indice di ricerca di X sui post 2014-2021 è incompleto, quindi i conteggi sono minimi, non totali. Le tendenze reggono, i numeri esatti no.
- Grezzi in `social/private/raw/` (gitignored). Spesa: circa $0,35 (vedi `piano.md`, "Costi").

## I 15 profili

"Primi 90 giorni" = post originali, senza risposte. "Al primo post da 100 like" = giorni dal primo post trovato.

| Profilo | Cosa costruisce | Follower oggi | Inizio | Post a settimana (primi 90 gg) | Like mediani (primi 90 gg) | Al primo post da 100 like | Il post che ha sbloccato |
|---|---|---|---|---|---|---|---|
| levelsio | 12 startup in 12 mesi, poi Nomad List e Photo AI | 990K | gen 2014 | 10,7 | 0 | 274 gg | Una frase sul lancio: il lavoro vero inizia quando tutti smettono di parlarne |
| marclou | decine di micro SaaS (ShipFast, DataFast) | 423K | nov 2021 | 8,4 | 1 | 14 gg dall'inizio vero | Ammette 5 anni passati a costruire di nascosto e fa 3 promesse pubbliche |
| tdinh_me | DevUtils, poi TypingMind | 207K | dic 2020 | 5,5 | 1 | 129 gg | Demo: ricrea in HTML e CSS l'animazione del cuore di Twitter |
| dannypostma | Landingfolio, poi HeadshotPro (AI) | 189K | 2019 | 7,2 | 1 | 96 gg | Analisi in thread della landing di un prodotto noto (74 salvataggi) |
| arvidkahl | FeedbackPanda venduta, libro Zero to Sold | 215K | 2019 | 2,8 | 0 | 300 gg | Una frase su cosa la gente paga volentieri (224 salvataggi) |
| yongfook | Bannerbear | 175K | lug 2018 | 11,5 | 4 | 34 gg | Lascia il lavoro e annuncia 12 startup in 12 mesi |
| thepatwalls | Starter Story | 143K | gen 2018 | 4,8 | 1 | 262 gg | Una startup costruita in diretta su Twitch in 17 ore |
| tibo_maker | Tweet Hunter, Taplio | 217K | feb 2021 | 12,3 | 4 | 21 gg | Esperimento con GPT-3: "saluta e l'AI ti dice di cosa parli" (1.462 risposte) |
| SimonHoiberg | FeedHive | 165K | 2019 | 10,1 | 0 | oltre un anno | Articoli tecnici con hashtag: crescita lentissima |
| DamonChen | Testimonial.to | 100K | gen 2020 | 5,2 | 0 | oltre un anno | Rifiuta un'offerta d'acquisto per un progetto di 10 giorni |
| dagorenouf | Logology e altri | 131K | ott 2020 | 2,8 | 0 | 282 gg | Meme sulla vita del founder (1.390 like) |
| mckaywrigley | oggi AI e agenti, prima learn to code | 230K | gen 2019 | 12,3 | 7 | 55 gg | Prima e dopo: la stessa app in 5 ore, un mese dopo in 30 minuti |
| nutlope | app AI open source | 105K | mag 2020 | 6,5 | 0 | 194 gg | I 10 punti di una lezione famosa (532 salvataggi) |
| DsMatie | app Shopify (WideBundle) | 34K | mag 2021 | 1,4 | 1 | subito | Primo post: un anno di app Shopify, MRR, utenti, installazioni |
| gilgNYC | app Shopify per il checkout, poi acquisita | 23K | mar 2020 | 5,5 | 2 | 190 gg | Il primo traguardo di MRR, 82 giorni dopo l'App Store (300 volte la sua mediana) |

## I 5 pattern più forti

1. **L'inizio è muto, per tutti.** Nei primi 90 giorni la mediana è tra 0 e 7 like a post, anche per chi oggi ha mezzo milione di follower. Il primo post da 100 like arriva in mediana dopo **circa 5 mesi** (151 giorni). Chi sblocca prima ha già qualcosa in mano il primo giorno: un numero vero (DsMatie, subito), una sfida pubblica (yongfook, 34 giorni), un esperimento che chiede di partecipare (tibo, 21 giorni).
2. **Il numero vero con il contesto piccolo e onesto batte tutto.** I post con soldi o metriche fanno **2,5 volte** la mediana del profilo; il traguardo di gilgNYC ha fatto 300 volte la sua. Funziona perché è un dato e una storia insieme: quanto, in quanto tempo, cosa vuol dire per lui.
3. **La sfida pubblica con il contatore.** "12 in 12 mesi", "3 promesse", "in 24 ore in diretta": dà al pubblico un motivo per tornare (come va a finire?) e a chi scrive una cosa da raccontare ogni settimana. I lanci fanno **2,25 volte** la mediana.
4. **Mostrare la cosa che funziona.** Screenshot e video fanno **1,9 volte** la mediana; i post di tdinh_me che sbloccano sono demo, non opinioni. Su Threads è il formato principale: un video corto dello schermo e 5-10 parole.
5. **Il racconto del processo con i numeri si salva, non si applaude.** I thread fanno **3 volte** la mediana, e i profili con più thread hanno fino a 66 salvataggi ogni 100 like (DsMatie). Salvataggi e risposte portano lontano più dei like. Per Antonio: "come l'ho fatto io", mai "come devi farlo tu".

## Cosa risponde il pubblico

| Cosa | Cosa lo provoca | Esempio |
|---|---|---|
| **Risposte** | un invito a partecipare, una domanda vera, un esperimento | tibo_maker 28 risposte ogni 100 like; il suo esperimento con l'AI 3 risposte per ogni like |
| **Salvataggi** | liste di strumenti, processi passo per passo con numeri, analisi | DsMatie 66 ogni 100 like, marclou 41, dannypostma 38 |
| **Like** | frasi brevi e nette, meme, traguardi | arvidkahl, dagorenouf, levelsio |
| **Repost e citazioni** | opinioni che dividono e traguardi da festeggiare | yongfook, thepatwalls |

Le domande da sole, senza un fatto prima, fanno **0,7 volte** la mediana: chiedere funziona solo dopo aver dato qualcosa.

## Cosa fare

- **Partire da quello che è già vivo.** Il primo post è il numero o la cosa che c'è già, non "inizio a costruire in pubblico".
- **Un filo che si segue**: una serie con un contatore (settimana 1, 2, 3) o una sfida con una data.
- **Un fatto per post**, con screenshot o video vero.
- **Il prima e dopo nel tempo** ("un mese fa ci mettevo 5 ore, oggi 30 minuti"): è anche l'argomento preferito di Antonio sull'AI.
- **Gli errori raccontati come esperimenti** ("ho provato, si è rotto così, ora faccio così"): funzionano quanto la media, e rendono credibili i traguardi.
- **Esperimenti con l'AI che chiamano il pubblico** a partecipare.
- **Rispondere molto**: nei primi 90 giorni tutti rispondono ad altri builder quasi quanto postano. È lì che si trovano i primi follower.

## Cosa non fare (cringe e non autentico)

- **Hashtag a grappolo** e articoli tecnici generici (#React #softwaredevelopment): i profili che sono partiti così sono rimasti fermi oltre un anno.
- **"Kindly RT", "who's building in public? let's connect"**, follow for follow: suona disperato.
- **"5 SECRETS", "THREAD 👇", "you can apply this to any SaaS!"**: il format da guru. Funziona sui numeri, ma non è Antonio, e lui non dà consigli.
- **Moltiplicare per 365** un giorno buono o arrotondare i numeri: chi lo fa viene preso in giro dagli altri builder.
- **"Day 47 of building in public"** senza niente dentro.
- **Uscire dal tema**: borsa, politica, notizie generiche. Nei primi mesi fanno 0.
- **Finta modestia e lamentele**, e il "nessuno mi segue".
- **Il perfettino**: tutto lucido, niente processo. Il pubblico segue chi mostra il cantiere.

## Threads: stessa cosa, più corta

- **Chi c'è**: molti builder di X non ci sono o non postano (levelsio, tdinh_me, tibo_maker, dannypostma non trovati). arvidkahl e yongfook sono arrivati a luglio 2023 e ci parlano di vita, cane, domeniche. marclou ripubblica i suoi traguardi.
- **Chi cresce**: app maker che postano **un video dello schermo con 5-10 parole** (mediana di un profilo: 7 parole e circa 200 like), "sto costruendo una piccola app per divertimento", il buongiorno, il weekend produttivo.
- **Tono**: più caldo e personale, meno hustle, meno gergo, niente link in ogni post, il "thread 🧵" è preso in giro. Le domande semplici funzionano ("voi cosa direste?").
- **Per Antonio**: Threads è il posto per il **dietro le quinte leggero** (lo schermo con gli agenti al lavoro, Lisbona, la giornata), X per i **numeri, i traguardi e le opinioni**.

## Cosa vuol dire per Antonio

- Il suo "numero del primo giorno" c'è già: **un'agenzia Shopify che lavora ogni giorno con una squadra di agenti AI**, ognuno con un nome e un ruolo. È la sua sfida pubblica naturale.
- I suoi casi hanno già **percentuali verificate** (Cumini, Nazzi, DDglobal in `docs/dati-verificati.md`): bastano per i traguardi, senza cifre assolute.
- Il suo prima e dopo sull'AI è già nella voce ("fino all'anno scorso… adesso…").
- Va messo in conto un inizio muto di qualche mese: la regola è la costanza, non il singolo post.
