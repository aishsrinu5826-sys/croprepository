const translations = {
  en: {
    app_title: "Crop Advisory",
    language: "Language",
    form_title: "Tell us about your field",
    previous_crop: "Previous crop",
    season: "Season",
    season_kharif: "Kharif (Monsoon)",
    season_rabi: "Rabi (Winter)",
    season_zaid: "Zaid (Summer)",
    location: "Location (State/District)",
    soil_type: "Soil type",
    soil_alluvial: "Alluvial",
    soil_black: "Black (Regur)",
    soil_red: "Red",
    soil_laterite: "Laterite",
    soil_sandy: "Sandy",
    soil_loam: "Loam",
    land_area: "Land area",
    area_unit: "Unit",
    unit_acre: "Acre",
    unit_hectare: "Hectare",
    mixed_cropping: "Mixed/Multi-cropping?",
    num_crops: "Number of crops",
    get_advice: "Get advice",
    reset: "Reset",
    recommendations: "Recommendations",
    footer_note: "Advisory based on general agronomic and market heuristics. Validate locally.",
    select_placeholder: "Select…",
    yes: "Yes",
    no: "No",
    crop_rice: "Rice",
    crop_wheat: "Wheat",
    crop_maize: "Maize",
    crop_soybean: "Soybean",
    crop_chickpea: "Chickpea",
    crop_cotton: "Cotton",
    crop_groundnut: "Groundnut",
    crop_millet: "Millet",
    crop_vegetables: "Vegetables",
    summary_single: (loc, season, soil, area, unit) => `For ${loc}, ${season}, ${soil} soil, ${area} ${unit}.`,
    summary_mixed: (n) => `Mixed cropping: ${n} crops suggested with split.`,
    best_match: "Best match",
    good_match: "Good match",
    fair_match: "Fair",
    area_split: (v, unit) => `Estimated area: ${v} ${unit}`,
    pair_note: (names) => `Pairs well with: ${names}`,
    demand_note: (level) => `Market demand: ${level}`
  },
  hi: {
    app_title: "फसल सलाह",
    language: "भाषा",
    form_title: "अपने खेत के बारे में बताइए",
    previous_crop: "पिछली फसल",
    season: "मौसम",
    season_kharif: "खरीफ (बरसात)",
    season_rabi: "रबी (सर्दी)",
    season_zaid: "जायद (गर्मी)",
    location: "स्थान (राज्य/जिला)",
    soil_type: "मृदा प्रकार",
    soil_alluvial: "जलोढ़",
    soil_black: "काली (रेगुर)",
    soil_red: "लाल",
    soil_laterite: "लेटराइट",
    soil_sandy: "बलुई",
    soil_loam: "दोमट",
    land_area: "जमीन का रकबा",
    area_unit: "इकाई",
    unit_acre: "एकड़",
    unit_hectare: "हेक्टेयर",
    mixed_cropping: "मिश्रित/बहु फसली?",
    num_crops: "फसलों की संख्या",
    get_advice: "सलाह लें",
    reset: "रीसेट",
    recommendations: "सिफारिशें",
    footer_note: "सलाह सामान्य कृषि व बाजार अनुमान पर आधारित है। स्थानीय रूप से सत्यापित करें।",
    select_placeholder: "चुनें…",
    yes: "हाँ",
    no: "नहीं",
    crop_rice: "धान",
    crop_wheat: "गेहूं",
    crop_maize: "मक्का",
    crop_soybean: "सोयाबीन",
    crop_chickpea: "चना",
    crop_cotton: "कपास",
    crop_groundnut: "मूंगफली",
    crop_millet: "बाजरा/मिलेट",
    crop_vegetables: "सब्जियां",
    summary_single: (loc, season, soil, area, unit) => `${loc}, ${season}, ${soil} मिट्टी, ${area} ${unit}.`,
    summary_mixed: (n) => `मिश्रित खेती: ${n} फसलें सुझाई गईं।`,
    best_match: "सबसे उपयुक्त",
    good_match: "उपयुक्त",
    fair_match: "ठीक-ठाक",
    area_split: (v, unit) => `अनुमानित क्षेत्र: ${v} ${unit}`,
    pair_note: (names) => `इनके साथ उपयुक्त: ${names}`,
    demand_note: (level) => `बाजार मांग: ${level}`
  },
  kn: {
    app_title: "ಬೆಳೆ ಸಲಹೆ",
    language: "ಭಾಷೆ",
    form_title: "ನಿಮ್ಮ ಹೊಲದ ಬಗ್ಗೆ ಮಾಹಿತಿ",
    previous_crop: "ಹಿಂದಿನ ಬೆಳೆ",
    season: "ಋತು",
    season_kharif: "ಖರೀಫ್ (ಮಳೆಗಾಲ)",
    season_rabi: "ರಬಿ (ಚಳಿಗಾಲ)",
    season_zaid: "ಜೈಡ್ (ಬೇಸಿಗೆ)",
    location: "ಪ್ರദേശം (ರಾಜ್ಯ/ಜಿಲ್ಲೆ)",
    soil_type: "ಮಣ್ಣಿನ ವಿಧ",
    soil_alluvial: "ಅಲ್ಯುವಿಯಲ್",
    soil_black: "ಕರಿ (ರೆಗೂರು)",
    soil_red: "ಕೆಂಪು",
    soil_laterite: "ಲೇಟರೈಟ್",
    soil_sandy: "ಮರಳು",
    soil_loam: "ಲೋಮ್",
    land_area: "ಜಮೀನು ವಿಸ್ತೀರ್ಣ",
    area_unit: "ಘಟಕ",
    unit_acre: "ಏಕರ್",
    unit_hectare: "ಹೆಕ್ಟೇರ್",
    mixed_cropping: "ಮಿಶ್ರ/ಬಹು ಬೆಳೆ?",
    num_crops: "ಬೆಳೆಗಳ ಸಂಖ್ಯೆ",
    get_advice: "ಸಲಹೆ ಪಡೆಯಿರಿ",
    reset: "ರಿಸೆಟ್",
    recommendations: "ಶಿಫಾರಸುಗಳು",
    footer_note: "ಸಲಹೆ ಸಾಮಾನ್ಯ ಕೃಷಿ ಹಾಗೂ ಮಾರುಕಟ್ಟೆ ಅಂದಾಜುಗಳ ಆಧಾರಿತ. ಸ್ಥಳೀಯವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
    select_placeholder: "ಆಯ್ಕೆಮಾಡಿ…",
    yes: "ಹೌದು",
    no: "ಇಲ್ಲ",
    crop_rice: "ಅಕ್ಕಿ",
    crop_wheat: "ಗೋಧಿ",
    crop_maize: "ಜೋಳ",
    crop_soybean: "ಸೋಯಾಬೀನ್",
    crop_chickpea: "ಕಡಲೆ",
    crop_cotton: "ಹತ್ತಿ",
    crop_groundnut: "ಕಡಲೆಕಾಯಿ",
    crop_millet: "ಸಿರಿಧಾನ್ಯ/ಮಿಲ್ಲೆಟ್",
    crop_vegetables: "ತರಕಾರಿಗಳು",
    summary_single: (loc, season, soil, area, unit) => `${loc}, ${season}, ${soil} ಮಣ್ಣು, ${area} ${unit}.`,
    summary_mixed: (n) => `ಮಿಶ್ರ ಬೆಳೆ: ${n} ಬೆಳೆಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.`,
    best_match: "ಉತ್ತಮ ಹೊಂದಿಕೆ",
    good_match: "ಚೆನ್ನಾಗಿದೆ",
    fair_match: "ಸರಾಸರಿ",
    area_split: (v, unit) => `ಅಂದಾಜು ವಿಸ್ತೀರ್ಣ: ${v} ${unit}`,
    pair_note: (names) => `ಇವುಗಳೊಂದಿಗೆ ಉತ್ತಮ: ${names}`,
    demand_note: (level) => `ಮಾರ್ಕೆಟ್ ಬೇಡಿಕೆ: ${level}`
  }
};

const crops = [
  { key: 'rice', seasons:['kharif','rabi'], soils:['alluvial','clay','loam','black'], demand: 0.8, family:'grass', water:'high', companions:['pulses','vegetables'] },
  { key: 'wheat', seasons:['rabi'], soils:['alluvial','loam','black'], demand: 0.75, family:'grass', water:'medium', companions:['chickpea','mustard'] },
  { key: 'maize', seasons:['kharif','rabi','zaid'], soils:['alluvial','red','loam','black'], demand: 0.7, family:'grass', water:'medium', companions:['beans','pumpkin'] },
  { key: 'soybean', seasons:['kharif'], soils:['black','loam','red'], demand: 0.77, family:'legume', water:'medium', companions:['maize','sorghum'] },
  { key: 'chickpea', seasons:['rabi'], soils:['alluvial','black','loam'], demand: 0.73, family:'legume', water:'low', companions:['wheat','mustard'] },
  { key: 'cotton', seasons:['kharif'], soils:['black','alluvial'], demand: 0.76, family:'malvaceae', water:'medium', companions:['pigeonpea','groundnut'] },
  { key: 'groundnut', seasons:['kharif','rabi'], soils:['sandy','red','loam'], demand: 0.68, family:'legume', water:'low', companions:['millet','cotton'] },
  { key: 'millet', seasons:['kharif','rabi','zaid'], soils:['sandy','red','laterite','loam'], demand: 0.85, family:'grass', water:'low', companions:['pulses','sesame'] },
  { key: 'vegetables', seasons:['kharif','rabi','zaid'], soils:['loam','alluvial','red','black'], demand: 0.9, family:'mixed', water:'variable', companions:['pulses','maize'] }
];

const families = {
  rice:'grass', wheat:'grass', maize:'grass',
  soybean:'legume', chickpea:'legume', groundnut:'legume',
  cotton:'malvaceae', millet:'grass', vegetables:'mixed'
};

const demandLabel = (t, val) => {
  if (val >= 0.82) return t.best_match;
  if (val >= 0.7) return t.good_match;
  return t.fair_match;
};

const humanDemand = (val) => {
  if (val >= 0.85) return 'High';
  if (val >= 0.7) return 'Medium';
  return 'Moderate';
};

const rotationPenalty = (prev, candidate) => {
  if (!prev) return 0;
  const fPrev = families[prev];
  const fCand = families[candidate];
  if (!fPrev || !fCand) return 0;
  if (fPrev === fCand) return -0.12;
  if (fPrev === 'legume' && fCand === 'legume') return -0.18;
  return 0.05;
};

const soilAffinity = (soil, candidate) => {
  const c = crops.find(x => x.key === candidate);
  if (!c) return 0;
  if (c.soils.includes(soil)) return 0.18;
  if (soil === 'loam') return 0.08;
  return -0.05;
};

const seasonAffinity = (season, candidate) => {
  const c = crops.find(x => x.key === candidate);
  if (!c) return 0;
  return c.seasons.includes(season) ? 0.2 : -0.08;
};

const demandAffinity = (candidate) => {
  const c = crops.find(x => x.key === candidate);
  if (!c) return 0;
  return (c.demand - 0.6) * 0.6;
};

const scoreCrop = (prev, season, soil, key) => {
  let s = 0.5;
  s += rotationPenalty(prev, key);
  s += soilAffinity(soil, key);
  s += seasonAffinity(season, key);
  s += demandAffinity(key);
  return Math.max(0, Math.min(1, s));
};

const suggestMixed = (topKeys, n) => {
  const chosen = topKeys.slice(0, n);
  const splits = n === 2 ? [0.6, 0.4] : [0.5, 0.3, 0.2];
  return chosen.map((k, i) => ({ key:k, share: splits[i] }));
};

// Basic normalization for user-typed previous crop
const normalizePrevCrop = (str) => {
  if (!str) return '';
  const s = String(str).trim().toLowerCase();
  const map = {
    rice:'rice', paddy:'rice', dhan:'rice',
    wheat:'wheat', gehu:'wheat',
    maize:'maize', corn:'maize', makka:'maize',
    soybean:'soybean', soya:'soybean',
    chickpea:'chickpea', chana:'chickpea', gram:'chickpea',
    cotton:'cotton', kapus:'cotton',
    groundnut:'groundnut', peanut:'groundnut', singdana:'groundnut',
    millet:'millet', bajra:'millet', jowar:'millet', ragi:'millet',
    vegetables:'vegetables', veggie:'vegetables'
  };
  return map[s] || '';
};

function usePersistentState(key, initial) {
  const [val, setVal] = React.useState(() => {
    try {
      const s = localStorage.getItem(key);
      return s ?? initial;
    } catch { return initial; }
  });
  React.useEffect(() => {
    try { localStorage.setItem(key, val); } catch {}
  }, [key, val]);
  return [val, setVal];
}

function HeaderControls({ lang, setLang, theme, setTheme }) {
  React.useEffect(() => {
    const langSel = document.getElementById('lang-select');
    const themeBtn = document.getElementById('theme-toggle');
    if (langSel) langSel.value = lang;
    const onLang = (e) => setLang(e.target.value);
    const onTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    langSel && langSel.addEventListener('change', onLang);
    themeBtn && themeBtn.addEventListener('click', onTheme);
    return () => {
      langSel && langSel.removeEventListener('change', onLang);
      themeBtn && themeBtn.removeEventListener('click', onTheme);
    };
  }, [lang, theme, setLang, setTheme]);

  React.useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    document.documentElement.lang = lang;
    // header static labels
    const t = translations[lang];
    const lbl = document.querySelector('[data-i18n="language"]');
    const title = document.querySelector('[data-i18n="app_title"]');
    const foot = document.querySelector('[data-i18n="footer_note"]');
    if (lbl) lbl.textContent = t.language;
    if (title) title.textContent = t.app_title;
    if (foot) foot.textContent = t.footer_note;
  }, [lang, theme]);

  return null;
}

function Field({ label, children }){
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  );
}

// Simple hash router
function useHashRoute() {
  const [route, setRoute] = React.useState(() => window.location.hash || '#/');
  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const navigate = (to) => { if (to !== route) window.location.hash = to; };
  return [route, navigate];
}

function App(){
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  // migrate any previously saved 'te' to 'kn'
  let initialLang = 'en';
  try {
    const saved = localStorage.getItem('lang');
    if (saved) initialLang = saved === 'te' ? 'kn' : saved;
  } catch {}
  const [lang, setLang] = usePersistentState('lang', initialLang);
  const [theme, setTheme] = usePersistentState('theme', prefersLight ? 'light' : 'dark');
  const t = translations[lang];
  const [route, navigate] = useHashRoute();

  // Apply special background on the Form page
  React.useEffect(() => {
    const onForm = route.startsWith('#/form');
    document.body.classList.toggle('form-bg', onForm);
  }, [route]);

  const [form, setForm] = React.useState({
    previousCrop: '',
    season: '',
    location: '',
    soilType: '',
    landArea: '',
    areaUnit: 'acre',
    mixed: 'no',
    numCrops: '2'
  });
  const prevCropRef = React.useRef(null);
  const [results, setResults] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const reset = () => {
    setForm({ previousCrop:'', season:'', location:'', soilType:'', landArea:'', areaUnit:'acre', mixed:'no', numCrops:'2' });
    if (prevCropRef.current) prevCropRef.current.value = '';
    setResults(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.season || !form.soilType || !form.landArea) {
      alert('Please fill required fields.');
      return;
    }
    const area = parseFloat(form.landArea || '0');
    const unit = form.areaUnit;
    const prev = normalizePrevCrop(prevCropRef.current ? prevCropRef.current.value : '');

    const scored = crops
      .map(c => ({ key:c.key, score: scoreCrop(prev, form.season, form.soilType, c.key) }))
      .sort((a,b) => b.score - a.score);
    const top = scored.slice(0, 5);

    const summaryText = t.summary_single(
      form.location || '—',
      t[`season_${form.season}`] || form.season,
      t[`soil_${form.soilType}`] || form.soilType,
      area,
      t[`unit_${unit}`]
    );

    if (form.mixed === 'yes') {
      const n = Number(form.numCrops) || 2;
      const picks = suggestMixed(top.map(x=>x.key), n);
      setResults({ type:'mixed', summary: summaryText + ' ' + t.summary_mixed(n), picks, area, unit, prev });
    } else {
      setResults({ type:'single', summary: summaryText, top: top.slice(0,3), prev, area, unit });
    }
    navigate('#/recommendations');
  };

  // Pages
  const Welcome = () => (
    <div className="hero">
      <h1 className="hero-title">{t.app_title}</h1>
      <p className="hero-sub">Welcome farmer! Ready to plan your next season?</p>
      <div className="form-actions" style={{justifyContent:'center'}}>
        <button className="btn primary" onClick={()=>navigate('#/form')}>Let's start growing</button>
      </div>
    </div>
  );

  const FormPage = () => (
    <section className="card">
      <h2>{t.form_title}</h2>
      <form className="grid-form" onSubmit={onSubmit}>
        <Field label={t.previous_crop}>
          <input
            className="input"
            name="previousCrop"
            ref={prevCropRef}
            defaultValue={form.previousCrop}
            onBlur={(e)=>setForm(f=>({...f, previousCrop: e.target.value}))}
            placeholder="e.g., paddy / corn / bajra"
            autoComplete="off"
            inputMode="text"
          />
        </Field>

        <Field label={t.season}>
          <select className="select" required name="season" value={form.season} onChange={handleChange}>
            <option value="">{t.select_placeholder}</option>
            <option value="kharif">{t.season_kharif}</option>
            <option value="rabi">{t.season_rabi}</option>
            <option value="zaid">{t.season_zaid}</option>
          </select>
        </Field>

        <Field label={t.location}>
          <input className="input" name="location" placeholder="e.g., Karnataka / Ballari" value={form.location} onChange={handleChange} />
        </Field>

        <Field label={t.soil_type}>
          <select className="select" required name="soilType" value={form.soilType} onChange={handleChange}>
            <option value="">{t.select_placeholder}</option>
            <option value="alluvial">{t.soil_alluvial}</option>
            <option value="black">{t.soil_black}</option>
            <option value="red">{t.soil_red}</option>
            <option value="laterite">{t.soil_laterite}</option>
            <option value="sandy">{t.soil_sandy}</option>
            <option value="loam">{t.soil_loam}</option>
          </select>
        </Field>

        <div className="field field-inline">
          <div>
            <label>{t.land_area}</label>
            <input className="input" type="number" min="0" step="0.01" name="landArea" value={form.landArea} onChange={handleChange} placeholder="5" required />
          </div>
          <div>
            <label>{t.area_unit}</label>
            <select className="select" name="areaUnit" value={form.areaUnit} onChange={handleChange}>
              <option value="acre">{t.unit_acre}</option>
              <option value="hectare">{t.unit_hectare}</option>
            </select>
          </div>
        </div>

        <Field label={t.mixed_cropping}>
          <select className="select" name="mixed" value={form.mixed} onChange={handleChange}>
            <option value="no">{t.no}</option>
            <option value="yes">{t.yes}</option>
          </select>
        </Field>

        {form.mixed === 'yes' && (
          <Field label={t.num_crops}>
            <select className="select" name="numCrops" value={form.numCrops} onChange={handleChange}>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </Field>
        )}

        <div className="form-actions">
          <button type="submit" className="btn primary">Get Started</button>
          <button type="button" onClick={reset} className="btn">{t.reset}</button>
        </div>
      </form>
    </section>
  );

  const RecommendationsPage = () => (
    <section className="card" id="results" aria-live="polite">
      <h2>{t.recommendations}</h2>
      {results ? (
        <>
          <Results t={t} results={results} lang={lang} />
          <div className="form-actions" style={{marginTop:12}}>
            <button className="btn primary" onClick={()=>navigate('#/compare')}>Compare prices</button>
            <button className="btn" onClick={()=>navigate('#/form')}>Edit inputs</button>
          </div>
        </>
      ) : (
        <div style={{ color:'var(--muted)', fontSize:14 }}>—</div>
      )}
    </section>
  );

  const mockOnlinePrices = {
    rice: 22.5, wheat: 20.2, maize: 18.7, soybean: 46.1, chickpea: 51.4, cotton: 61.9, groundnut: 54.3, millet: 26.0, vegetables: 31.5
  };

  const ComparePage = () => {
    if (!results) return (
      <section className="card"><div style={{color:'var(--muted)'}}>No recommendations yet.</div></section>
    );
    const list = results.type === 'mixed' ? results.picks.map(p=>p.key) : results.top.map(t=>t.key);
    const [offline, setOffline] = React.useState({});
    const [online, setOnline] = React.useState({});
    const fetchOnline = async () => {
      try {
        const res = await fetch('./prices.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('net');
        const data = await res.json();
        const o = {};
        list.forEach(k => { o[k] = Number.parseFloat(data[k]) || 0; });
        setOnline(o);
      } catch {
        const o = {};
        list.forEach(k => { o[k] = mockOnlinePrices[k] || 0; });
        setOnline(o);
      }
    };
    return (
      <section className="card">
        <h2>Compare prices</h2>
        <p style={{color:'var(--muted)'}}>Enter offline price (per unit) and optionally fetch mock online prices.</p>
        <div id="recommendations">
          {list.map((key)=>{
            const title = translations[lang][`crop_${key}`] || key;
            const offVal = Number.parseFloat(offline[key]);
            const onVal = Number.isFinite(online[key]) ? online[key] : NaN;
            const off = Number.isFinite(offVal) ? offVal : 0;
            const on = Number.isFinite(onVal) ? onVal : 0;
            const diff = (on - off).toFixed(2);
            return (
              <div key={key} className="rec-card">
                <div className="rec-head"><div className="rec-title">{title}</div></div>
                <div className="meta">Offline price: <input className="input" style={{width:140}} value={Number.isFinite(offVal) ? offVal : ''}
                  onChange={(e)=>setOffline(s=>({...s, [key]: e.target.value}))} placeholder="e.g., 24" /></div>
                <div className="meta">Online price: <strong>{Number.isFinite(on) ? on : '-'}</strong></div>
                <div className="meta">Difference (online - offline): <strong>{diff}</strong></div>
              </div>
            );
          })}
        </div>
        <div className="form-actions" style={{marginTop:12}}>
          <button className="btn" onClick={()=>navigate('#/recommendations')}>Back</button>
          <button className="btn primary" onClick={fetchOnline}>Get online prices</button>
        </div>
      </section>
    );
  };

  let page = null;
  if (route === '#/' || route === '#') page = <Welcome/>;
  else if (route.startsWith('#/form')) page = <FormPage/>;
  else if (route.startsWith('#/recommendations')) page = <RecommendationsPage/>;
  else if (route.startsWith('#/compare')) page = <ComparePage/>;
  else page = <Welcome/>;

  return (
    <>
      <HeaderControls lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      {page}
    </>
  );
}

function RecCard({ title, badge, metas }){
  return (
    <div className="rec-card">
      <div className="rec-head">
        <div className="rec-title">{title}</div>
        <span className="badge">{badge}</span>
      </div>
      {metas.map((m,i)=>(<div key={i} className="meta">{m}</div>))}
    </div>
  );
}

function Results({ t, results, lang }){
  if (results.type === 'mixed') {
    const { picks, area, unit, prev } = results;
    return (
      <>
        <div id="summary">{results.summary}</div>
        <div id="recommendations">
          {picks.map(({key, share}) => {
            const crop = crops.find(c => c.key === key);
            const title = t[`crop_${key}`] || key;
            const score = scoreCrop(prev, undefined, undefined, key); // display label; season/soil not needed here
            const estArea = Number.parseFloat((area * share).toFixed(2));
            return (
              <RecCard
                key={key}
                title={title}
                badge={demandLabel(t, score)}
                metas={[
                  t.area_split(estArea, t[`unit_${unit}`]),
                  t.pair_note((crop.companions||[]).map(k=>t[`crop_${k}`]||k).join(', ')),
                  t.demand_note(humanDemand(crop.demand))
                ]}
              />
            );
          })}
        </div>
      </>
    );
  }

  if (results.type === 'single') {
    const { top, prev } = results;
    return (
      <>
        <div id="summary">{results.summary}</div>
        <div id="recommendations">
          {top.map(({key, score}) => {
            const crop = crops.find(c => c.key === key);
            const title = t[`crop_${key}`] || key;
            return (
              <RecCard
                key={key}
                title={title}
                badge={demandLabel(t, score)}
                metas={[
                  t.pair_note((crop.companions||[]).map(k=>t[`crop_${k}`]||k).join(', ')),
                  t.demand_note(humanDemand(crop.demand))
                ]}
              />
            );
          })}
        </div>
      </>
    );
  }

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
