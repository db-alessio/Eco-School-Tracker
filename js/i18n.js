(() => {
  const STORAGE_KEY = "ecoSchoolLang";

  const translations = {
    it: {
      header_subtitle_index:
        "Uno strumento semplice per il calcolo dell'impronta di carbonio.",
      header_subtitle_results:
        "Risultati del calcolo dell’impronta di carbonio della scuola.",
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
        "La larghezza di ciascuna barra indica il peso relativo di ogni scope sul totale delle emissioni.",
      results_scope2_details: "📊 Dettagli Scope 2 (Energia)",
      results_scope3transport_details: "🚗 Dettagli Scope 3 (Trasporti)",
      scope2_label_nonren: "Non rinnovabili",
      scope2_label_ren: "Rinnovabili",
      scope2_label_autoprod: "Autoprodotta",
      scope3_label_autobus: "Autobus",
      scope3_label_macchina: "Macchina",
      scope3_label_elettrica: "Elettrica",
      results_back_btn: "Torna al questionario",
    },
    en: {
      header_subtitle_index:
        "A simple tool to estimate your school's carbon footprint.",
      header_subtitle_results:
        "Results of the school's carbon footprint calculation.",
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
        "Each bar's width shows the relative weight of each scope compared to total emissions.",
      results_scope2_details: "📊 Scope 2 details (Energy)",
      results_scope3transport_details: "🚗 Scope 3 details (Transport)",
      scope2_label_nonren: "Non-renewable",
      scope2_label_ren: "Renewable",
      scope2_label_autoprod: "Self-produced",
      scope3_label_autobus: "Bus",
      scope3_label_macchina: "Car",
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

