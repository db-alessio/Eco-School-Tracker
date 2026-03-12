// Fattori di conversione (kg CO2e per unità indicata)
const GAS_METANO = 2.02; // kg CO2e per m3 di gas metano
const ENERGIA_MIX = 0.352; // kg CO2e per kWh da fonti non rinnovabili (mix nazionale)
const ENERGIA_RENEW = 0; // kg CO2e per kWh da fonti rinnovabili
const ENERGIA_AUTOPROD = 0.0724; // kg CO2e per kWh da energia autoprodotta
const ENERGIA_AUTOCONS = 0.0724; // kg CO2e per kWh da energia autoconsumata

// Altri combustibili (es. pellet, gasolio), valore indicativo
const ALTRI_COMBUSTIBILI = 2.5; // kg CO2e per kg

// Valori medi indicativi per i diversi mezzi (kg CO2e/km)
const AUTO_MEDIA = 0.351;
const AUTOBUS_MEDIA = 0.09;
const AUTO_ELETTRICA = 0.05;
const A_PIEDI = 0;

// Rifiuti: fattori molto semplificati per tipologia (kg CO2e per kg)
const RIFIUTI_PLASTICA = 0;
const RIFIUTI_CARTA = 0;
const RIFIUTI_VETRO = 0.3;
const RIFIUTI_METALLI = 0.6;
const RIFIUTI_LEGNO = 0.4;
const RIFIUTI_INDIFFERENZIATI = 0.643;

// Benchmark di riferimento storico (kg CO2e/anno) basato su una scuola tipo italiana.
// Non viene più utilizzato direttamente per il calcolo del punteggio, che ora si basa
// su fasce di emissioni pro-capite (kg CO2e per persona/anno).
const BENCHMARK = 6000;

function calculateScope1(inputs) {
  const gasMetanoMc = inputs.gasMetanoMc || 0;
  const altriCombustibiliKg = inputs.altriCombustibiliKg || 0;
  const emissioniGas = gasMetanoMc * GAS_METANO;
  const emissioniAltriCombustibili = altriCombustibiliKg * ALTRI_COMBUSTIBILI;
  return emissioniGas + emissioniAltriCombustibili;
}

function calculateScope2(inputs) {
  const energiaNonRinnovabiliKwh = inputs.energiaNonRinnovabiliKwh || 0;
  const energiaRinnovabiliKwh = inputs.energiaRinnovabiliKwh || 0;
  const energiaAutoprodottaKwh = inputs.energiaAutoprodottaKwh || 0;
  const energiaAutoconsumataKwh = inputs.energiaAutoconsumataKwh || 0;

  const emissioniNonRinnovabili = energiaNonRinnovabiliKwh * ENERGIA_MIX;
  const emissioniRinnovabili = energiaRinnovabiliKwh * ENERGIA_RENEW;
  const emissioniAutoprodotta = energiaAutoprodottaKwh * ENERGIA_AUTOPROD;
  const emissioniAutoconsumata = energiaAutoconsumataKwh * ENERGIA_AUTOCONS;

  return (
    emissioniNonRinnovabili +
    emissioniRinnovabili +
    emissioniAutoprodotta +
    emissioniAutoconsumata
  );
}

function calculateScope3Waste(inputs) {
  const plastica = inputs.rifiutiPlasticaKg || 0;
  const carta = inputs.rifiutiCartaKg || 0;
  const vetro = inputs.rifiutiVetroKg || 0;
  const metalli = inputs.rifiutiMetalliKg || 0;
  const legno = inputs.rifiutiLegnoKg || 0;
  const indifferenziati = inputs.rifiutiIndifferenziatiKg || 0;

  const emissioniPlastica = plastica * RIFIUTI_PLASTICA;
  const emissioniCarta = carta * RIFIUTI_CARTA;
  const emissioniVetro = vetro * RIFIUTI_VETRO;
  const emissioniMetalli = metalli * RIFIUTI_METALLI;
  const emissioniLegno = legno * RIFIUTI_LEGNO;
  const emissioniIndifferenziati = indifferenziati * RIFIUTI_INDIFFERENZIATI;

  return (
    emissioniPlastica +
    emissioniCarta +
    emissioniVetro +
    emissioniMetalli +
    emissioniLegno +
    emissioniIndifferenziati
  );
}

function calculateScope3Transport(inputs) {
  const kmAutobus = inputs.kmAutobusAnnui || 0;
  const kmMacchina = inputs.kmMacchinaAnnui || 0;
  const kmPiedi = inputs.kmPiediAnnui || 0;
  const kmElettrica = inputs.kmElettricaAnnui || 0;

  const emissioniAutobus = kmAutobus * AUTOBUS_MEDIA;
  const emissioniMacchina = kmMacchina * AUTO_MEDIA;
  const emissioniPiedi = kmPiedi * A_PIEDI;
  const emissioniElettrica = kmElettrica * AUTO_ELETTRICA;

  return (
    emissioniAutobus +
    emissioniMacchina +
    emissioniPiedi +
    emissioniElettrica
  );
}

function calculateTotalEmissions(allInputs) {
  const scope1 = calculateScope1(allInputs);
  const scope2 = calculateScope2(allInputs);
  const scope3Waste = calculateScope3Waste(allInputs);
  const scope3Transport = calculateScope3Transport(allInputs);

  return {
    scope1,
    scope2,
    scope3Waste,
    scope3Transport,
    total: scope1 + scope2 + scope3Waste + scope3Transport,
  };
}

function calculateScoreFromPerCapita(perCapitaKg) {
  if (!isFinite(perCapitaKg) || perCapitaKg < 0) {
    return 1;
  }

  // Scala a fasce rigide basata su emissioni pro-capite (kg CO2e per persona/anno)
  // 10: <150
  // 9: 150–200
  // 8: 201–275
  // 7: 276–350
  // 6: 351–425
  // 5: 426–500
  // 4: 501–575
  // 3: 576–650
  // 2: 651–750
  // 1: >750

  if (perCapitaKg < 150) return 10;
  if (perCapitaKg <= 200) return 9;
  if (perCapitaKg <= 275) return 8;
  if (perCapitaKg <= 350) return 7;
  if (perCapitaKg <= 425) return 6;
  if (perCapitaKg <= 500) return 5;
  if (perCapitaKg <= 575) return 4;
  if (perCapitaKg <= 650) return 3;
  if (perCapitaKg <= 750) return 2;
  return 1;
}

// Esponiamo le funzioni in uno spazio dei nomi globale semplice
window.EcoCalculator = {
  calculateTotalEmissions,
  calculateScoreFromPerCapita,
};

