(() => {
  const STORAGE_KEY = "ecoSchoolLang";

  const translations = {
    it: {
      header_subtitle_index:
        "Uno strumento semplice per il calcolo dell'impronta di carbonio.",
      header_subtitle_results:
        "Risultati del calcolo dell’impronta di carbonio della scuola.",
      home_link_label: "Torna alla pagina iniziale",
      language_selection: "Selezione lingua",
      landing_page_title: "Eco-School Tracker: calcola l’impronta di carbonio della tua scuola",
      landing_meta_description:
        "Scopri il progetto Eco-School Tracker e calcola le emissioni annue della tua scuola.",
      landing_badge: "Progetto RISE · Liceo G. Marconi",
      landing_hero_title: "Quanta CO<span class=\"subscript\">2</span> emette la nostra scuola?",
      landing_hero_intro:
        "Eco-School Tracker è un calcolatore dell’impronta di carbonio per tutti. È nato dal lavoro di un gruppo interclasse del nostro liceo: qui trovi come è andata e chi ci ha aiutato.",
      landing_toc_label: "Indice della pagina",
      landing_toc_title: "In questa pagina",
      landing_toc_origin: "Come è nato",
      landing_toc_development: "Sviluppo e team",
      landing_toc_partners: "Collaborazioni",
      landing_toc_calculator: "Calcolatore",
      landing_origin_title: "Come è nato il progetto",
      landing_origin_intro:
        "Il nostro è un edificio <strong>nZEB</strong> (Nearly Zero Energy Building, a energia quasi zero) di classe energetica A4, con pannelli fotovoltaici sul tetto: un punto di partenza interessante per capire che cosa pesa davvero sulla nostra impronta.",
      landing_origin_rise:
        "Così è nato <strong>RISE</strong> (<em>Renewable and Innovative School for local Engagement</em>), portato avanti da un gruppo interclasse delle classi 4ASA, 4BSA e 4AART. Gli obiettivi erano due: costruire lo strumento <strong>Eco-School Tracker</strong> e progettare soluzioni più verdi per gli spazi esterni della scuola.",
      landing_sdg_intro: "Obiettivi dell’Agenda 2030 su cui abbiamo lavorato:",
      landing_sdg_label: "Obiettivi di sviluppo sostenibile",
      landing_sdg_4: "Obiettivo 4: Istruzione di qualità",
      landing_sdg_7: "Obiettivo 7: Energia pulita e accessibile",
      landing_sdg_11: "Obiettivo 11: Città e comunità sostenibili",
      landing_sdg_12: "Obiettivo 12: Consumo e produzione responsabili",
      landing_sdg_13: "Obiettivo 13: Azione per il clima",
      landing_sdg_15: "Obiettivo 15: La vita sulla terra",
      landing_development_title: "Come è stato sviluppato e chi lo ha portato avanti",
      landing_method_title: "Il metodo",
      landing_method_intro:
        "Seguendo gli <em>scope</em> del Greenhouse Gas Protocol (emissioni dirette, emissioni indirette da energia e altre emissioni indirette, come mobilità e rifiuti), abbiamo costruito un database con i dati della scuola:",
      landing_method_direct: "<strong>Emissioni dirette:</strong> la scuola non ne ha.",
      landing_method_energy: "<strong>Energia:</strong> usa solo elettricità da fonti rinnovabili.",
      landing_method_waste:
        "<strong>Rifiuti:</strong> abbiamo pesato ogni settimana plastica, carta e indifferenziato e ricavato il dato annuo.",
      landing_method_transport:
        "<strong>Trasporti:</strong> abbiamo fatto un’indagine tra tutti gli utenti della scuola per calcolare i chilometri medi percorsi in autobus, auto, a piedi e con auto elettriche.",
      landing_site_title: "Il sito",
      landing_site_text:
        "Per lo sviluppo abbiamo scelto il <em>vibe coding</em>: invece di definire il codice riga per riga, abbiamo posto obiettivi e regole di calcolo in un file di istruzioni (<code>agents.md</code>), generato con un Gem personalizzato, che ha guidato l’agente di Cursor. Attraverso vari linguaggi di programmazione (HTML, CSS e JavaScript), ai quattro <em>scope</em> sono stati associati i fattori di conversione della CO<span class=\"subscript\">2</span>. Il risultato è un sito semplice, in italiano e in inglese, che restituisce il totale, il dato pro capite e un punteggio da 1 a 10 dell'impronta di carbonio.",
      landing_school_emissions:
        "Nella nostra scuola la CO<sub>2</sub> emessa è di <strong>188.549 kg CO<sub>2</sub>e all’anno</strong>, pari a <strong>436 kg CO<sub>2</sub>e per persona</strong>.",
      landing_footprint_alt: "Illustrazione di un’impronta",
      landing_discovery_title: "Che cosa abbiamo scoperto",
      landing_scenarios_intro:
        "Abbiamo confrontato tre scenari, in kg di CO<span class=\"subscript\">2</span>e per persona all’anno:",
      landing_scenario_better: "Scenario migliorativo",
      landing_scenario_current: "Situazione attuale",
      landing_scenario_worse: "Scenario peggiorativo (riscaldamento a gas ed elettricità non rinnovabile)",
      landing_mobility_proposals:
        "Nella situazione attuale gli spostamenti casa–scuola pesano circa 401 kg su 436, cioè oltre il 90% dell’impronta pro capite. Per questo le nostre proposte puntano su un piano di mobilità urbana per favorire trasporto pubblico e bicicletta, e su un’app, da sviluppare insieme alle istituzioni locali, per monitorare gli ingressi a scuola con mobilità dolce o mezzi pubblici.",
      landing_schoolyard_proposals:
        "Per gli spazi esterni proponiamo una <strong>scuola “vivente”</strong>, con pavimentazioni drenanti e aree verdi che rispettano la biodiversità e vivibilità secondo i criteri delle NBS (Nature Based Solutions), e nuovi alberi nel parcheggio accanto all’edificio.",
      landing_team_title: "Chi ci ha lavorato",
      landing_team_intro:
        "Il gruppo interclasse delle classi 4ASA, 4BSA e 4AART, con il supporto di:",
      landing_role_project: "Coordinamento del progetto",
      landing_role_it: "Coordinamento informatico",
      landing_role_graphic: "Coordinamento grafico",
      landing_role_carbon: "Specialista di impronta di carbonio",
      landing_partners_title: "Terzi con cui abbiamo collaborato",
      landing_legambiente:
        "Ha proposto il progetto “Per un salto di classe”. Il presidente di Legambiente Umbria, Maurizio Zara, ha commentato il nostro lavoro. Con Legambiente Foligno e il progetto PiantiAMO abbiamo ragionato sulla proposta di nuovi alberi nel parcheggio accanto alla scuola.",
      landing_arpa:
        "Agenzia regionale per la protezione ambientale. Abbiamo chiesto la sua collaborazione, insieme a quella di Legambiente, per la raccolta dei dati e la diffusione del progetto.",
      landing_other_schools_title: "Verso altre scuole",
      landing_other_schools:
        "Vorremmo che le scuole delle nostre reti e quelle partner provassero l’Eco-Tracker. Per farlo guardiamo a iniziative e realtà come il Premio Scuola Sostenibile, il progetto ENNE+ (<em>Enhancing VET National Networks through Ecoinnovation</em>) e FELCOS Umbria, l’associazione di Comuni per lo sviluppo sostenibile.",
      landing_cta_title: "Ora tocca a te",
      landing_cta_text:
        "Inserisci i dati della tua scuola, anche approssimativi, e scopri il punteggio. È un modello semplificato a scopo educativo, non una certificazione.",
      landing_cta_button: "Vai al calcolatore",
      landing_footer: "Liceo G. Marconi · Progetto RISE · Eco-Digithon · scientificofoligno@libero.it",
      index_intro:
        "Compila i dati nelle quattro sezioni qui sotto per stimare le emissioni annue di CO<span class=\"subscript\">2</span> equivalente della tua scuola. I testi sono pensati per utenti non esperti: inserisci valori anche approssimativi.",
      index_people_label: "Numero totale di persone nella scuola",
      index_people_placeholder: "Es. 432",
      index_people_help:
        "Includi sia studenti sia personale (docenti, ATA, ecc.). Questo valore verrà usato per calcolare il risultato pro-capite (CO<span class=\"subscript\">2</span>e per persona).",
      index_how_title: "Come funziona?",
      index_how_1: "Inserisci i consumi e gli spostamenti.",
      index_how_2: "Indica il numero totale di persone.",
      index_how_3: "Clicca su Calcola impronta.",
      index_how_4: "Guarda il punteggio, il risultato totale e quello pro-capite.",
      index_calc_btn: "Calcola impronta",
      index_calc_help:
        "I campi lasciati vuoti verranno considerati come zero. Verrai portato alla pagina dei risultati per vedere il punteggio.",
      scope1_title: "Scope 1 – Emissioni dirette",
      scope1_desc:
        "Emissioni generate direttamente, ad esempio dal gas metano usato per il riscaldamento o da altri combustibili.",
      scope1_gas_label:
        "Gas metano per riscaldamento (m<span class=\"superscript\">3</span> / anno)",
      scope1_gas_placeholder: "Es. 0 m³",
      scope1_gas_help:
        "Se non conosci il dato esatto, inserisci una stima complessiva per l’edificio.",
      scope1_other_label: "Altri combustibili (kg / anno)",
      scope1_other_placeholder: "Es. 0 kg",
      scope1_other_help:
        "Includi, ad esempio, pellet, gasolio, GPL o altri combustibili solidi/liquidi.",

      scope2_title: "Scope 2 – Energia",
      scope2_desc:
        "Emissioni indirette legate all’energia elettrica acquistata e utilizzata durante l’anno scolastico.",
      scope2_nonren_label:
        "Energia elettrica da fonti non rinnovabili (kWh/anno)",
      scope2_nonren_placeholder: "Es. 0 kWh",
      scope2_nonren_help:
        "Somma di tutti i kWh acquistati da fornitori con mix non 100% rinnovabile.",
      scope2_ren_label: "Energia elettrica da fonti rinnovabili (kWh/anno)",
      scope2_ren_placeholder: "Es. 20.664 kWh",
      scope2_ren_help:
        "Nel modello semplificato questa quota non genera emissioni (fattore 0 kg CO<span class=\"subscript\">2</span>/kWh).",
      scope2_selfprod_label: "Energia elettrica autoprodotta annuale (kWh)",
      scope2_selfprod_placeholder: "Es. 45.743 kWh",
      scope2_selfprod_help:
        "Energia prodotta da impianti della scuola (es. fotovoltaico sul tetto).",
      scope2_selfcons_label: "Energia elettrica autoconsumata (kWh/anno)",
      scope2_selfcons_placeholder: "Es. 66.407 kWh",
      scope2_selfcons_help:
        "Considerata rinnovabile e a impatto nullo nel modello educativo di questa app.",

      scope3w_title: "Scope 3 – Rifiuti",
      scope3w_desc:
        "Inserisci una stima della quantità annua per ciascuna tipologia di rifiuto prodotto dalla scuola.",
      scope3w_table_title:
        "Tipologia di rifiuti prodotti e quantità annua (kg)",
      scope3w_plastic_label: "Plastica (kg/anno)",
      scope3w_plastic_placeholder: "Es. 420 kg",
      scope3w_plastic_help:
        "Bottiglie, imballaggi e altri rifiuti di plastica.",
      scope3w_paper_label: "Carta (kg/anno)",
      scope3w_paper_placeholder: "Es. 480 kg",
      scope3w_paper_help:
        "Carta e cartone prodotti in un anno (esclusi archivi).",
      scope3w_glass_label: "Vetro (kg/anno)",
      scope3w_glass_placeholder: "Es. 0 kg",
      scope3w_glass_help: "Bottiglie e contenitori di vetro.",
      scope3w_metals_label: "Metalli (kg/anno)",
      scope3w_metals_placeholder: "Es. 0 kg",
      scope3w_metals_help: "Lattine o altri rifiuti metallici.",
      scope3w_wood_label: "Legno (kg/anno)",
      scope3w_wood_placeholder: "Es. 0 kg",
      scope3w_wood_help:
        "Scarti di legno provenienti, ad esempio, da piccoli lavori.",
      scope3w_unsorted_label: "Indifferenziati (kg/anno)",
      scope3w_unsorted_placeholder: "Es. 1.100 kg",
      scope3w_unsorted_help:
        "Tutto ciò che non viene differenziato (secco residuo).",

      scope4_title: "Scope 3 – Trasporti",
      scope4_desc:
        "Emissioni dovute agli spostamenti casa–scuola (o casa–lavoro) abituali per ciascun mezzo.",
      scope4_days_label: "Numero di giorni di scuola totali",
      scope4_days_placeholder: "Es. 200",
      scope4_days_help:
        "Indica il numero di giorni di scuola considerati per i calcoli degli spostamenti.",
      scope4_col_vehicle: "Descrizione mezzo di trasporto",
      scope4_col_people: "Numero di persone",
      scope4_col_distance: "Distanza giornaliera percorsa [km/giorno]",
      scope4_col_total: "Totale km annui (km × giorni × persone)",
      scope4_bus_people_placeholder: "Es. 86",
      scope4_bus_km_placeholder: "Es. 21 km/giorno",
      scope4_car_people_placeholder: "Es. 259",
      scope4_car_km_placeholder: "Es. 8 km/giorno",
      scope4_walk_people_placeholder: "Es. 65",
      scope4_walk_km_placeholder: "Es. 1.5 km/giorno",
      scope4_ev_people_placeholder: "Es. 22",
      scope4_ev_km_placeholder: "Es. 8 km/giorno",
      scope4_vehicle_bus: "Autobus",
      scope4_vehicle_car: "Macchina",
      scope4_vehicle_walk: "A piedi",
      scope4_vehicle_ev: "Macchine elettriche",
      results_no_data:
        "⚠️ Nessun dato inserito. Torna al questionario e inserisci almeno alcuni valori di consumi o spostamenti per calcolare l'impronta di carbonio della scuola. Anche stime approssimative sono utili!",
      results_overall_title: "Risultato complessivo",
      results_total_estimated: "Emissioni totali stimate:",
      results_benchmark_label: "Benchmark educativo di riferimento:",
      results_benchmark_text:
        "<strong>scala 1–10 basata sulle emissioni pro-capite</strong> (kg CO<span class=\"subscript\">2</span>e/anno per persona). Una scuola “nella media” si colloca intorno a 351–425 kg pro-capite (voto 6).",
      results_per_capita_label: "Emissioni pro-capite (inclusi i trasporti):",
      unit_kg_co2e_year: "kg CO<span class=\"subscript\">2</span>e/anno",
      unit_kg_co2e_year_person:
        "kg CO<span class=\"subscript\">2</span>e/anno per persona",
      results_score_with_transport: "Punteggio complessivo (con trasporti)",
      results_score_without_transport:
        "Punteggio edificio e rifiuti (senza trasporti)",
      results_interpret_title: "Interpretazione del punteggio",
      results_interpret_placeholder:
        "I risultati verranno interpretati qui in base al punteggio complessivo.",
      results_legend_1:
        "<strong>1–3</strong>: impatto molto alto rispetto alla media.",
      results_legend_2:
        "<strong>4–6</strong>: in linea con la media, ci sono margini di miglioramento.",
      results_legend_3:
        "<strong>7–10</strong>: impatto contenuto, ottime pratiche già in atto.",
      results_breakdown_title: "Ripartizione per Scope",
      results_breakdown_help:
        "La barra mostra il peso sul totale. Seleziona uno scope per vedere il dettaglio.",
      results_detail_methane: "Gas metano",
      results_detail_other_fuels: "Altri combustibili",
      results_detail_help:
        "Le percentuali indicano la quota delle emissioni all’interno di questo scope.",
      results_detail_plastic: "Plastica",
      results_detail_paper: "Carta",
      results_detail_glass: "Vetro",
      results_detail_metals: "Metalli",
      results_detail_wood: "Legno",
      results_detail_unsorted: "Indifferenziati",
      scope2_label_nonren: "Non rinnovabili",
      scope2_label_ren: "Rinnovabili",
      scope2_label_autoprod: "Autoprodotta",
      scope2_label_selfcons: "Autoconsumata",
      scope3_label_autobus: "Autobus",
      scope3_label_macchina: "Macchina",
      scope3_label_walk: "A piedi",
      scope3_label_elettrica: "Elettrica",
      results_back_btn: "Torna al questionario",
    },
    en: {
      header_subtitle_index:
        "A simple tool to estimate your school's carbon footprint.",
      header_subtitle_results:
        "Results of the school's carbon footprint calculation.",
      home_link_label: "Return to home page",
      language_selection: "Language selection",
      landing_page_title: "Eco-School Tracker: calculate your school's carbon footprint",
      landing_meta_description:
        "Discover the Eco-School Tracker project and calculate your school's annual emissions.",
      landing_badge: "RISE project · G. Marconi High School",
      landing_hero_title: "How much CO<span class=\"subscript\">2</span> does our school emit?",
      landing_hero_intro:
        "Eco-School Tracker is a carbon footprint calculator for everyone. It grew out of work by an interdisciplinary group at our high school: find out how it came together and who helped us.",
      landing_toc_label: "Page contents",
      landing_toc_title: "On this page",
      landing_toc_origin: "How it started",
      landing_toc_development: "Development and team",
      landing_toc_partners: "Partners",
      landing_toc_calculator: "Calculator",
      landing_origin_title: "How the project began",
      landing_origin_intro:
        "Our school is an <strong>nZEB</strong> (Nearly Zero Energy Building), rated energy class A4, with solar panels on the roof: an interesting starting point for understanding what really contributes to our footprint.",
      landing_origin_rise:
        "That is how <strong>RISE</strong> (<em>Renewable and Innovative School for local Engagement</em>) began, led by an interdisciplinary group from classes 4ASA, 4BSA, and 4AART. We had two goals: build the <strong>Eco-School Tracker</strong> tool and design greener solutions for the school's outdoor spaces.",
      landing_sdg_intro: "UN Sustainable Development Goals we worked on:",
      landing_sdg_label: "Sustainable Development Goals",
      landing_sdg_4: "Goal 4: Quality Education",
      landing_sdg_7: "Goal 7: Affordable and Clean Energy",
      landing_sdg_11: "Goal 11: Sustainable Cities and Communities",
      landing_sdg_12: "Goal 12: Responsible Consumption and Production",
      landing_sdg_13: "Goal 13: Climate Action",
      landing_sdg_15: "Goal 15: Life on Land",
      landing_development_title: "How it was developed and who worked on it",
      landing_method_title: "The method",
      landing_method_intro:
        "Following the Greenhouse Gas Protocol <em>scopes</em> (direct emissions, indirect emissions from energy, and other indirect emissions such as transport and waste), we built a database using the school's data:",
      landing_method_direct: "<strong>Direct emissions:</strong> the school has none.",
      landing_method_energy: "<strong>Energy:</strong> it uses only electricity from renewable sources.",
      landing_method_waste:
        "<strong>Waste:</strong> we weighed plastic, paper, and unsorted waste each week and used the results to estimate the annual amount.",
      landing_method_transport:
        "<strong>Transport:</strong> we surveyed everyone at the school to estimate the average distance travelled by bus, car, on foot, and by electric car.",
      landing_site_title: "The website",
      landing_site_text:
        "We chose <em>vibe coding</em> for development: instead of defining the code line by line, we set goals and calculation rules in an instruction file (<code>agents.md</code>), generated with a custom Gem that guided the Cursor agent. We used HTML, CSS, and JavaScript and assigned CO<span class=\"subscript\">2</span> conversion factors to the four <em>scopes</em>. The result is a simple website in Italian and English that reports total emissions, the per-person figure, and a carbon footprint score from 1 to 10.",
      landing_school_emissions:
        "Our school emits <strong>188,549 kg CO<sub>2</sub>e per year</strong>, equal to <strong>436 kg CO<sub>2</sub>e per person</strong>.",
      landing_footprint_alt: "Carbon footprint illustration",
      landing_discovery_title: "What we discovered",
      landing_scenarios_intro:
        "We compared three scenarios, measured in kg of CO<span class=\"subscript\">2</span>e per person per year:",
      landing_scenario_better: "Improved scenario",
      landing_scenario_current: "Current situation",
      landing_scenario_worse: "Worse-case scenario (gas heating and non-renewable electricity)",
      landing_mobility_proposals:
        "In the current situation, commuting to school accounts for about 401 of 436 kg, or over 90% of the per-person footprint. That is why our proposals focus on an urban mobility plan to encourage public transport and cycling, and an app to develop with local institutions to monitor arrivals by active or public transport.",
      landing_schoolyard_proposals:
        "For the outdoor areas, we propose a <strong>“living” school</strong>, with permeable paving and green spaces that support biodiversity and quality of life using Nature-Based Solutions (NBS) criteria, as well as new trees in the car park beside the building.",
      landing_team_title: "Who worked on it",
      landing_team_intro:
        "The interdisciplinary group from classes 4ASA, 4BSA, and 4AART, with support from:",
      landing_role_project: "Project coordination",
      landing_role_it: "IT coordination",
      landing_role_graphic: "Graphic design coordination",
      landing_role_carbon: "Carbon footprint specialist",
      landing_partners_title: "External partners",
      landing_legambiente:
        "Legambiente proposed the “Per un salto di classe” project. Maurizio Zara, president of Legambiente Umbria, commented on our work. Together with Legambiente Foligno and the PiantiAMO project, we explored the idea of planting new trees in the car park beside the school.",
      landing_arpa:
        "The regional environmental protection agency. We asked ARPA Umbria to work with us, together with Legambiente, on data collection and sharing the project.",
      landing_other_schools_title: "Connecting with other schools",
      landing_other_schools:
        "We hope schools in our networks and partner schools will try Eco-Tracker. We are looking at initiatives and organizations such as the Sustainable School Award, the ENNE+ project (<em>Enhancing VET National Networks through Ecoinnovation</em>), and FELCOS Umbria, an association of municipalities for sustainable development.",
      landing_cta_title: "Now it’s your turn",
      landing_cta_text:
        "Enter your school's data, even if approximate, and discover its score. This is a simplified educational model, not a certification.",
      landing_cta_button: "Go to the calculator",
      landing_footer: "G. Marconi High School · RISE Project · Eco-Digithon · scientificofoligno@libero.it",
      index_intro:
        "Fill in the four sections below to estimate your school's annual CO<span class=\"subscript\">2</span>e emissions. The texts are designed for non-expert users: approximate values are OK.",
      index_people_label: "Total number of people in the school",
      index_people_placeholder: "e.g. 432",
      index_people_help:
        "Include both students and staff. This value is used to compute the per-capita result (CO<span class=\"subscript\">2</span>e per person).",
      index_how_title: "How does it work?",
      index_how_1: "Enter consumption and commuting data.",
      index_how_2: "Enter the total number of people.",
      index_how_3: "Click Calculate footprint.",
      index_how_4: "See the score, total emissions, and per-capita value.",
      index_calc_btn: "Calculate footprint",
      index_calc_help:
        "Empty fields are treated as zero. You'll be taken to the results page to see your score.",
      scope1_title: "Scope 1 – Direct emissions",
      scope1_desc:
        "Emissions generated directly, for example from methane gas used for heating or other fuels.",
      scope1_gas_label:
        "Methane gas for heating (m<span class=\"superscript\">3</span> / year)",
      scope1_gas_placeholder: "e.g. 0 m³",
      scope1_gas_help:
        "If you don’t know the exact number, enter an overall estimate for the building.",
      scope1_other_label: "Other fuels (kg / year)",
      scope1_other_placeholder: "e.g. 0 kg",
      scope1_other_help:
        "Include, for example, pellets, diesel, LPG, or other solid/liquid fuels.",

      scope2_title: "Scope 2 – Energy",
      scope2_desc:
        "Indirect emissions related to the electricity purchased and used during the school year.",
      scope2_nonren_label: "Electricity from non-renewable sources (kWh/year)",
      scope2_nonren_placeholder: "e.g. 0 kWh",
      scope2_nonren_help:
        "Sum of all kWh purchased from suppliers that are not 100% renewable.",
      scope2_ren_label: "Electricity from renewable sources (kWh/year)",
      scope2_ren_placeholder: "e.g. 20.664 kWh",
      scope2_ren_help:
        "In this simplified model, this share produces no emissions (factor 0 kg CO<span class=\"subscript\">2</span>/kWh).",
      scope2_selfprod_label: "Self-produced electricity per year (kWh)",
      scope2_selfprod_placeholder: "e.g. 45.743 kWh",
      scope2_selfprod_help:
        "Electricity produced by the school's systems (e.g. rooftop solar).",
      scope2_selfcons_label: "Self-consumed electricity (kWh/year)",
      scope2_selfcons_placeholder: "e.g. 66.407 kWh",
      scope2_selfcons_help:
        "Considered renewable and zero-impact in this educational model.",

      scope3w_title: "Scope 3 – Waste",
      scope3w_desc:
        "Enter an estimate of the annual amount for each type of waste produced by the school.",
      scope3w_table_title: "Waste type and annual amount (kg)",
      scope3w_plastic_label: "Plastic (kg/year)",
      scope3w_plastic_placeholder: "e.g. 420 kg",
      scope3w_plastic_help: "Bottles, packaging, and other plastic waste.",
      scope3w_paper_label: "Paper (kg/year)",
      scope3w_paper_placeholder: "e.g. 480 kg",
      scope3w_paper_help:
        "Paper and cardboard produced in a year (excluding archives).",
      scope3w_glass_label: "Glass (kg/year)",
      scope3w_glass_placeholder: "e.g. 0 kg",
      scope3w_glass_help: "Bottles and glass containers.",
      scope3w_metals_label: "Metals (kg/year)",
      scope3w_metals_placeholder: "e.g. 0 kg",
      scope3w_metals_help: "Cans or other metal waste.",
      scope3w_wood_label: "Wood (kg/year)",
      scope3w_wood_placeholder: "e.g. 0 kg",
      scope3w_wood_help:
        "Wood scraps from, for example, small maintenance works.",
      scope3w_unsorted_label: "Unsorted waste (kg/year)",
      scope3w_unsorted_placeholder: "e.g. 1.100 kg",
      scope3w_unsorted_help:
        "Everything that isn’t separated for recycling (residual waste).",

      scope4_title: "Scope 3 – Transport",
      scope4_desc:
        "Emissions due to regular home–school (or home–work) commuting for each mode of transport.",
      scope4_days_label: "Total number of school days",
      scope4_days_placeholder: "e.g. 200",
      scope4_days_help:
        "Enter the number of school days to use for commuting calculations.",
      scope4_col_vehicle: "Transport mode",
      scope4_col_people: "Number of people",
      scope4_col_distance: "Daily distance [km/day]",
      scope4_col_total: "Total annual km (km × days × people)",
      scope4_bus_people_placeholder: "e.g. 86",
      scope4_bus_km_placeholder: "e.g. 21 km/day",
      scope4_car_people_placeholder: "e.g. 259",
      scope4_car_km_placeholder: "e.g. 8 km/day",
      scope4_walk_people_placeholder: "e.g. 65",
      scope4_walk_km_placeholder: "e.g. 1.5 km/day",
      scope4_ev_people_placeholder: "e.g. 22",
      scope4_ev_km_placeholder: "e.g. 8 km/day",
      scope4_vehicle_bus: "Bus",
      scope4_vehicle_car: "Car",
      scope4_vehicle_walk: "On foot",
      scope4_vehicle_ev: "Electric cars",
      results_no_data:
        "⚠️ No data entered. Go back to the questionnaire and enter at least some consumption or transport data to calculate your school's carbon footprint. Even rough estimates are helpful!",
      results_overall_title: "Overall result",
      results_total_estimated: "Estimated total emissions:",
      results_benchmark_label: "Reference educational benchmark:",
      results_benchmark_text:
        "<strong>1–10 scale based on per-capita emissions</strong> (kg CO<span class=\"subscript\">2</span>e/year per person). An “average” school is around 351–425 kg per capita (score 6).",
      results_per_capita_label: "Per-capita emissions (including transport):",
      unit_kg_co2e_year: "kg CO<span class=\"subscript\">2</span>e/year",
      unit_kg_co2e_year_person:
        "kg CO<span class=\"subscript\">2</span>e/year per person",
      results_score_with_transport: "Overall score (including transport)",
      results_score_without_transport:
        "Building & waste score (excluding transport)",
      results_interpret_title: "Score interpretation",
      results_interpret_placeholder:
        "Your results will be interpreted here based on the overall score.",
      results_legend_1:
        "<strong>1–3</strong>: very high impact compared to the average.",
      results_legend_2:
        "<strong>4–6</strong>: around average, there is room for improvement.",
      results_legend_3:
        "<strong>7–10</strong>: low impact, great practices already in place.",
      results_breakdown_title: "Breakdown by scope",
      results_breakdown_help:
        "The bar shows its share of total emissions. Select a scope to see the breakdown.",
      results_detail_methane: "Methane gas",
      results_detail_other_fuels: "Other fuels",
      results_detail_help:
        "Percentages show each source's share of emissions within this scope.",
      results_detail_plastic: "Plastic",
      results_detail_paper: "Paper",
      results_detail_glass: "Glass",
      results_detail_metals: "Metals",
      results_detail_wood: "Wood",
      results_detail_unsorted: "Unsorted waste",
      scope2_label_nonren: "Non-renewable",
      scope2_label_ren: "Renewable",
      scope2_label_autoprod: "Self-produced",
      scope2_label_selfcons: "Self-consumed",
      scope3_label_autobus: "Bus",
      scope3_label_macchina: "Car",
      scope3_label_walk: "Walking",
      scope3_label_elettrica: "Electric",
      results_back_btn: "Back to questionnaire",
    },
  };

  function getInitialLang() {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "it" || stored === "en") return stored;
    const docLang = (document.documentElement.lang || "").toLowerCase();
    if (docLang.startsWith("en")) return "en";
    return "it";
  }

  function setActiveButton(lang) {
    const itBtn = document.getElementById("langItBtn");
    const enBtn = document.getElementById("langEnBtn");
    if (itBtn) itBtn.classList.toggle("active", lang === "it");
    if (enBtn) enBtn.classList.toggle("active", lang === "en");
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.it;
    document.documentElement.lang = lang;
    setActiveButton(lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = dict[key];
      if (typeof value !== "string") return;
      el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      const value = dict[key];
      if (typeof value !== "string") return;
      el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      const value = dict[key];
      if (typeof value !== "string") return;
      el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (!key) return;
      const value = dict[key];
      if (typeof value !== "string") return;
      el.setAttribute("title", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (!key) return;
      const value = dict[key];
      if (typeof value !== "string") return;
      el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.getAttribute("data-i18n-content");
      if (!key) return;
      const value = dict[key];
      if (typeof value !== "string") return;
      el.setAttribute("content", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (!key) return;
      const value = dict[key];
      if (typeof value !== "string") return;
      el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-value]").forEach((el) => {
      const key = el.getAttribute("data-i18n-value");
      if (!key) return;
      const value = dict[key];
      if (typeof value !== "string") return;
      el.setAttribute("value", value);
    });
  }

  function setLang(lang) {
    const safeLang = lang === "en" ? "en" : "it";
    try {
      window.localStorage.setItem(STORAGE_KEY, safeLang);
    } catch (e) {
      // ignore
    }
    applyTranslations(safeLang);
    window.dispatchEvent(new CustomEvent("ecoSchoolLangChanged", { detail: safeLang }));
  }

  function wireButtons() {
    const itBtn = document.getElementById("langItBtn");
    const enBtn = document.getElementById("langEnBtn");
    if (itBtn) itBtn.addEventListener("click", () => setLang("it"));
    if (enBtn) enBtn.addEventListener("click", () => setLang("en"));
  }

  window.EcoI18n = {
    getLang: () => getInitialLang(),
    setLang,
    t: (key, fallback = "") => {
      const lang = getInitialLang();
      return (
        (translations[lang] && translations[lang][key]) ||
        (translations.it && translations.it[key]) ||
        fallback
      );
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    wireButtons();
    applyTranslations(getInitialLang());
  });
})();
