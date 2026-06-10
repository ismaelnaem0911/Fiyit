// ============================================
// FIYIT — books.js
// Digital Library System
// ============================================

// ============================================
// BOOKS DATA
// ============================================

const BOOKS_DATA = {
  6: {
    type: 'region',
    subjects: {
      'Mathematics': { icon: '📐', units: ['Unit 1: Divisibility of Whole Numbers','Unit 2: Fractions, Decimals and Percentages','Unit 3: Fractions, Decimals and Four Operations','Unit 4: Inequalities and Proportionality','Unit 5: Plane and Solid Figures','Unit 6: Data Handling'] },
      'English': { icon: '📖', units: ['Unit 1: Traditional Games','Unit 2: Seasons and Human Activities','Unit 3: Traffic Police Officers','Unit 4: Farm Animals','Unit 5: Poultry','Unit 6: Water Pollution','Unit 7: Hard Work','Unit 8: First Aid','Unit 9: Unity is Strength','Unit 10: Mobile Phones'] },
      'Amharic': { icon: '📝', units: ['Unit 1: Traditional Clothes','Unit 2: Famous Athletes','Unit 3: Poems','Unit 4: Modern Agriculture','Unit 5: Tourism','Unit 6: Anti-Narcotic Substances','Unit 7: Speech on Poverty','Unit 8: HIV/AIDS','Unit 9: Traditional Customs','Unit 10: Empowering Women'] },
      'Civics': { icon: '⚖️', units: ['Unit 1: Democratic System','Unit 2: The Rule of Law','Unit 3: Equality','Unit 4: Justice','Unit 5: Patriotism','Unit 6: Responsibility','Unit 7: Industriousness','Unit 8: Self-Reliance','Unit 9: Saving','Unit 10: Active Community Participation','Unit 11: The Pursuit of Wisdom'] },
      'Environmental Science': { icon: '🌿', units: ['Unit 1: Coming Soon 📚','Unit 2: Coming Soon 📚','Unit 3: Coming Soon 📚','Unit 4: Coming Soon 📚','Unit 5: Coming Soon 📚'] },
      'Arts (PVA)': { icon: '🎨', units: ['Coming Soon 📚'] },
      'Afaan Oromo': { icon: '📗', units: ['Coming Soon 📚'] },
      'IT': { icon: '💻', units: ['Coming Soon 📚'] }
    }
  },
  7: {
    type: 'region',
    subjects: {
      'Mathematics': { icon: '📐', units: ['Unit 1: Basic Concept of Sets','Unit 2: Integers','Unit 3: Linear Equations','Unit 4: Ratio, Proportions and Percentage','Unit 5: Perimeter and Area of Plane Figure','Unit 6: Concurrency of Plane Figure','Unit 7: Data Handling'] },
      'English': { icon: '📖', units: ['Unit 1: Life in the Countryside','Unit 2: My Family','Unit 3: Health and Hospital','Unit 4: Jobs and Occupations','Unit 5: Time and Date','Unit 6: Royal Family','Unit 7: Culture and Tradition','Unit 8: Environment and Nature','Unit 9: Technology','Unit 10: Festivals and Celebrations'] },
      'Amharic': { icon: '📝', units: ['Unit 1: Appreciating Nature','Unit 2: Family Planning','Unit 3: Kindness','Unit 4: Famous People Life Stories','Unit 5: Water and Its Benefits','Unit 6: Human Migration','Unit 7: Social Relations','Unit 8: Drugs and Substance Abuse','Unit 9: Love for Country','Unit 10: Poems'] },
      'Civics': { icon: '⚖️', units: ['Unit 1: Concepts of Citizenship','Unit 2: National Identity and Unity','Unit 3: Democratic Governance','Unit 4: Human Rights','Unit 5: Equality and Justice','Unit 6: Conflict Resolution and Peace Building','Unit 7: Active Citizenship and Community Participation'] },
      'General Science': { icon: '🔬', units: ['Coming Soon 📚'] },
      'Social Studies': { icon: '🌍', units: ['Coming Soon 📚'] },
      'IT': { icon: '💻', units: ['Coming Soon 📚'] },
      'Afaan Oromo': { icon: '📗', units: ['Coming Soon 📚'] },
      'CTE': { icon: '🔧', units: ['Coming Soon 📚'] },
      'Arts (PVA)': { icon: '🎨', units: ['Coming Soon 📚'] }
    }
  },
  8: {
    type: 'region',
    subjects: {
      'Mathematics': { icon: '📐', units: ['Unit 1: Rational Numbers','Unit 2: Squares, Square Roots, Cubes and Cube Roots','Unit 3: Linear Equations and Linear Inequalities','Unit 4: Similarity of Figures','Unit 5: Theorems of Triangles','Unit 6: Circle','Unit 7: Solid Figures and Measurement','Unit 8: Introduction to Probability'] },
      'English': { icon: '📖', units: ['Coming Soon 📚'] },
      'Amharic': { icon: '📝', units: ['Coming Soon 📚'] },
      'General Science': { icon: '🔬', units: ['Unit 1: Basics of Scientific Investigation','Unit 2: Composition of Matter','Unit 3: Classification of Compounds','Unit 4: Human Body Systems and Health','Unit 5: Ecosystem and Conservation of Natural Resources','Unit 6: The Solar System','Unit 7: Physical Phenomena in the Surrounding'] },
      'Social Studies': { icon: '🌍', units: ['Unit 1: Coming Soon 📚','Unit 2: Coming Soon 📚','Unit 3: Coming Soon 📚','Unit 4: Coming Soon 📚','Unit 5: Coming Soon 📚','Unit 6: Modern History of Ethiopia','Unit 7: Coming Soon 📚'] },
      'Civics': { icon: '⚖️', units: ['Coming Soon 📚'] },
      'IT': { icon: '💻', units: ['Coming Soon 📚'] },
      'Afaan Oromo': { icon: '📗', units: ['Coming Soon 📚'] },
      'CTE': { icon: '🔧', units: ['Coming Soon 📚'] },
      'Arts (PVA)': { icon: '🎨', units: ['Coming Soon 📚'] }
    }
  },
  9: {
    type: 'region',
    subjects: {
      'Mathematics': { icon: '📐', units: ['Unit 1: Further on Sets','Unit 2: The Number System','Unit 3: Solving Equations','Unit 4: Solving Inequalities','Unit 5: Introduction to Trigonometry','Unit 6: Regular Polygons','Unit 7: Congruency and Similarity','Unit 8: Vectors in Two Dimensions','Unit 9: Statistics and Probability'] },
      'English': { icon: '📖', units: ['Unit 1: Daily Life','Unit 2: Education','Unit 3: Science and Technology','Unit 4: Culture and Tradition','Unit 5: Health and Environment','Unit 6: Work and Employment','Unit 7: Travel and Tourism','Unit 8: Media and Communication','Unit 9: Sports and Recreation','Unit 10: Future Plans'] },
      'Amharic': { icon: '📝', units: ['Unit 1: Guest Etiquette','Unit 2: Mythology','Unit 3: Vocational and Technical','Unit 4: Science and Technology','Unit 5: Traditional Speech','Unit 6: Poetry','Unit 7: History of War','Unit 8: Community and Relations','Unit 9: Water and Health','Unit 10: Future Plans'] },
      'Biology': { icon: '🌱', units: ['Unit 1: Introduction to Biology','Unit 2: Characteristics and Classification of Organisms','Unit 3: Cells','Unit 4: Reproduction','Unit 5: Human Health, Nutrition and Disease','Unit 6: Ecology'] },
      'Chemistry': { icon: '🧪', units: ['Unit 1: Chemistry and Its Importance','Unit 2: Measurements and Scientific Methods','Unit 3: Structure of the Atom','Unit 4: Periodic Classification of Elements','Unit 5: Chemical Bonding'] },
      'Physics': { icon: '⚡', units: ['Unit 1: Physics and Human Society','Unit 2: Physical Quantities','Unit 3: Motion in a Straight Line','Unit 4: Force, Work, Energy and Power','Unit 5: Simple Machines','Unit 6: Mechanical Oscillation and Sound Wave','Unit 7: Temperature and Thermometry'] },
      'Geography': { icon: '🌍', units: ['Coming Soon 📚'] },
      'History': { icon: '📜', units: ['Coming Soon 📚'] },
      'Economics': { icon: '💰', units: ['Coming Soon 📚'] },
      'IT': { icon: '💻', units: ['Coming Soon 📚'] },
      'Civics': { icon: '⚖️', units: ['Coming Soon 📚'] }
    }
  },
  10: {
    type: 'region',
    subjects: {
      'Mathematics': { icon: '📐', units: ['Unit 1: Relations and Functions','Unit 2: Polynomial Functions','Unit 3: Exponential and Logarithmic Functions','Unit 4: Trigonometric Functions','Unit 5: Circles','Unit 6: Solid Figures','Unit 7: Coordinate Geometry'] },
      'English': { icon: '📖', units: ['Unit 1: Places and Locations','Unit 2: Education and Learning','Unit 3: Science and Innovation','Unit 4: Culture and Heritage','Unit 5: Health and Wellness','Unit 6: Employment and Career','Unit 7: Travel and Exploration','Unit 8: Communication and Media','Unit 9: Sports and Fitness','Unit 10: Career and Future Planning'] },
      'Amharic': { icon: '📝', units: ['Unit 1: Personality and Social Relations','Unit 2: Science and Technology','Unit 3: Traditional Practices','Unit 4: Poetry Art','Unit 5: Education and News','Unit 6: Work and Profession','Unit 7: Sports and Health','Unit 8: Water and Benefits','Unit 9: Language Differences','Unit 10: Future Plan and Opportunity'] },
      'Biology': { icon: '🌱', units: ['Coming Soon 📚'] },
      'Chemistry': { icon: '🧪', units: ['Coming Soon 📚'] },
      'Physics': { icon: '⚡', units: ['Coming Soon 📚'] },
      'Geography': { icon: '🌍', units: ['Coming Soon 📚'] },
      'History': { icon: '📜', units: ['Coming Soon 📚'] },
      'Economics': { icon: '💰', units: ['Coming Soon 📚'] },
      'IT': { icon: '💻', units: ['Coming Soon 📚'] },
      'Civics': { icon: '⚖️', units: ['Coming Soon 📚'] }
    }
  },
  11: {
    type: 'stream',
    streams: {
      natural: {
        'Biology': { icon: '🌱', units: ['Unit 1: Introduction to Biology','Unit 2: Cell Biology','Unit 3: Genetics and Evolution','Unit 4: Ecology and Environment','Unit 5: Human Physiology'] },
        'Chemistry': { icon: '🧪', units: ['Unit 1: Introduction to Chemistry','Unit 2: Atomic Structure','Unit 3: Chemical Bonding','Unit 4: Chemical Reactions','Unit 5: Organic Chemistry','Unit 6: Acids and Bases'] },
        'Physics': { icon: '⚡', units: ['Unit 1: Introduction to Physics','Unit 2: Mechanics','Unit 3: Energy and Work','Unit 4: Waves and Sound','Unit 5: Electricity and Magnetism','Unit 6: Thermodynamics','Unit 7: Light and Optics','Unit 8: Modern Physics'] },
        'Mathematics': { icon: '📐', units: ['Unit 1: Relations and Functions','Unit 2: Rational Expression and Rational Functions','Unit 3: Matrices','Unit 4: Determinants and Their Properties','Unit 5: Vectors','Unit 6: Transformations of the Plane','Unit 7: Statistics','Unit 8: Probability'] },
        'English': { icon: '📖', units: ['Unit 1: Communication Skills','Unit 2: Academic Writing','Unit 3: Research Skills','Unit 4: Presentation Skills','Unit 5: Critical Reading'] },
        'Civics': { icon: '⚖️', units: ['Unit 1: Human Rights','Unit 2: Democracy','Unit 3: Citizenship','Unit 4: Ethiopian Governance','Unit 5: Global Issues','Unit 6: Ethics and Values','Unit 7: Environmental Ethics','Unit 8: Gender Equality','Unit 9: Peace Building','Unit 10: Sustainable Development','Unit 11: National Identity'] },
        'Technical Drawing': { icon: '📏', units: ['Coming Soon 📚'] },
        'IT': { icon: '💻', units: ['Coming Soon 📚'] }
      },
      social: {
        'Geography': { icon: '🌍', units: ['Unit 1: Introduction to Geography','Unit 2: Physical Geography','Unit 3: Human Geography','Unit 4: Economic Geography','Unit 5: Environmental Geography','Unit 6: Regional Geography of Ethiopia'] },
        'History': { icon: '📜', units: ['Unit 1: Introduction to History','Unit 2: African History','Unit 3: Ethiopian History','Unit 4: World History','Unit 5: Colonialism and Independence','Unit 6: Modern History'] },
        'Economics': { icon: '💰', units: ['Unit 1: Introduction to Economics','Unit 2: Microeconomics','Unit 3: Macroeconomics','Unit 4: International Economics','Unit 5: Ethiopian Economy','Unit 6: Development Economics','Unit 7: Applied Economics'] },
        'General Business': { icon: '💼', units: ['Coming Soon 📚'] },
        'Mathematics': { icon: '📐', units: ['Unit 1: Algebra','Unit 2: Geometry','Unit 3: Trigonometry','Unit 4: Statistics','Unit 5: Calculus Basics'] },
        'English': { icon: '📖', units: ['Unit 1: Communication Skills','Unit 2: Academic Writing','Unit 3: Research Skills','Unit 4: Presentation Skills','Unit 5: Critical Reading'] },
        'Civics': { icon: '⚖️', units: ['Unit 1: Human Rights','Unit 2: Democracy','Unit 3: Citizenship','Unit 4: Ethiopian Governance','Unit 5: Global Issues','Unit 6: Ethics and Values','Unit 7: Environmental Ethics','Unit 8: Gender Equality','Unit 9: Peace Building','Unit 10: Sustainable Development','Unit 11: National Identity'] },
        'IT': { icon: '💻', units: ['Coming Soon 📚'] }
      }
    }
  },
  12: {
    type: 'stream',
    streams: {
      natural: {
        'Biology': { icon: '🌱', units: ['Unit 1: Applications of Biology','Unit 2: Advanced Cell Biology','Unit 3: Molecular Genetics','Unit 4: Plant Physiology','Unit 5: Human Physiology Advanced','Unit 6: Ecology and Conservation','Unit 7: Evolution and Biodiversity','Unit 8: Biotechnology'] },
        'Chemistry': { icon: '🧪', units: ['Unit 1: Advanced Chemistry','Unit 2: Chemical Kinetics','Unit 3: Thermodynamics','Unit 4: Electrochemistry','Unit 5: Organic Chemistry Advanced','Unit 6: Polymer Chemistry','Unit 7: Environmental Chemistry','Unit 8: Industrial Chemistry'] },
        'Physics': { icon: '⚡', units: ['Unit 1: Advanced Mechanics','Unit 2: Energy and Momentum','Unit 3: Electromagnetic Fields','Unit 4: Electromagnetic Waves','Unit 5: Quantum Physics','Unit 6: Nuclear Physics','Unit 7: Astrophysics','Unit 8: Modern Physics Applications'] },
        'Mathematics': { icon: '📐', units: ['Unit 1: Advanced Algebra','Unit 2: Calculus Integration and Differentiation','Unit 3: Differential Equations','Unit 4: Linear Algebra','Unit 5: Probability Theory','Unit 6: Advanced Statistics','Unit 7: Mathematical Modeling','Unit 8: Applied Mathematics'] },
        'English': { icon: '📖', units: ['Unit 1: Advanced Communication','Unit 2: Academic Writing Thesis','Unit 3: Research Methodology','Unit 4: Critical Analysis','Unit 5: Presentation Skills Advanced','Unit 6: Professional English','Unit 7: English for Specific Purposes','Unit 8: Literary Analysis'] },
        'Civics': { icon: '⚖️', units: ['Unit 1: Constitutional Democracy','Unit 2: Human Rights Advanced','Unit 3: Good Governance','Unit 4: Anti-Corruption','Unit 5: Sustainable Development','Unit 6: Environmental Citizenship','Unit 7: Peace and Conflict Resolution','Unit 8: Gender Justice','Unit 9: Global Citizenship','Unit 10: Professional Ethics','Unit 11: National Security','Unit 12: Civic Responsibility'] },
        'Technical Drawing': { icon: '📏', units: ['Coming Soon 📚'] },
        'IT': { icon: '💻', units: ['Coming Soon 📚'] }
      },
      social: {
        'Economics': { icon: '💰', units: ['Unit 1: Advanced Microeconomics','Unit 2: Advanced Macroeconomics','Unit 3: Money and Banking','Unit 4: Fiscal Policy','Unit 5: International Trade','Unit 6: Ethiopian Economic Development','Unit 7: Economic Planning','Unit 8: Applied Economics'] },
        'Geography': { icon: '🌍', units: ['Unit 1: Advanced Physical Geography','Unit 2: Climatology','Unit 3: Oceanography','Unit 4: Advanced Human Geography','Unit 5: Population Geography','Unit 6: Urban Geography','Unit 7: Ethiopian Regional Geography','Unit 8: Environmental Management'] },
        'History': { icon: '📜', units: ['Unit 1: Advanced Historical Methods','Unit 2: African Independence Movements','Unit 3: Ethiopian Modern History','Unit 4: World Wars and Impact','Unit 5: Cold War Era','Unit 6: Contemporary African History','Unit 7: Globalization','Unit 8: History of Ethiopias Development'] },
        'General Business': { icon: '💼', units: ['Coming Soon 📚'] },
        'Mathematics': { icon: '📐', units: ['Unit 1: Advanced Algebra','Unit 2: Calculus Integration and Differentiation','Unit 3: Differential Equations','Unit 4: Linear Algebra','Unit 5: Probability Theory','Unit 6: Advanced Statistics','Unit 7: Mathematical Modeling','Unit 8: Applied Mathematics'] },
        'English': { icon: '📖', units: ['Unit 1: Advanced Communication','Unit 2: Academic Writing Thesis','Unit 3: Research Methodology','Unit 4: Critical Analysis','Unit 5: Presentation Skills Advanced','Unit 6: Professional English','Unit 7: English for Specific Purposes','Unit 8: Literary Analysis'] },
        'Civics': { icon: '⚖️', units: ['Unit 1: Constitutional Democracy','Unit 2: Human Rights Advanced','Unit 3: Good Governance','Unit 4: Anti-Corruption','Unit 5: Sustainable Development','Unit 6: Environmental Citizenship','Unit 7: Peace and Conflict Resolution','Unit 8: Gender Justice','Unit 9: Global Citizenship','Unit 10: Professional Ethics','Unit 11: National Security','Unit 12: Civic Responsibility'] },
        'IT': { icon: '💻', units: ['Coming Soon 📚'] }
      }
    }
  }
};

// ============================================
// STATE
// ============================================
let state = { grade: null, region: null, stream: null, subject: null };

// ============================================
// NAVIGATION
// ============================================

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateSteps(active) {
  ['step1Chip','step2Chip','step3Chip','step4Chip'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.className = 'step-chip';
    if (i + 1 < active) el.classList.add('done');
    if (i + 1 === active) el.classList.add('active');
  });
}

function updateBackBtn(screenId) {
  const btn = document.getElementById('backBtn');
  const map = {
    screen1: { text: '⬅ Back to Chat', href: '../index.html', fn: null },
    screen2region: { text: '⬅ Back', fn: () => goToScreen1() },
    screen2stream: { text: '⬅ Back', fn: () => goToScreen1() },
    screen3: { text: '⬅ Back', fn: () => goBack3() },
    screen4: { text: '⬅ Back', fn: () => showScreen('screen3') },
    screen5: { text: '⬅ Back', fn: () => showScreen('screen4') }
  };
  const config = map[screenId];
  if (config.href) { btn.href = config.href; btn.onclick = null; }
  else { btn.href = '#'; btn.onclick = (e) => { e.preventDefault(); config.fn(); }; }
  btn.textContent = config.text;
}

function goToScreen1() { showScreen('screen1'); updateSteps(1); updateBackBtn('screen1'); }

function goBack3() {
  const grade = state.grade;
  if (grade >= 11) { showScreen('screen2stream'); updateSteps(2); updateBackBtn('screen2stream'); }
  else { showScreen('screen2region'); updateSteps(2); updateBackBtn('screen2region'); }
}

// ============================================
// STEP 1: SELECT GRADE
// ============================================

function selectGrade(grade) {
  state.grade = grade;
  const data = BOOKS_DATA[grade];

  if (data.type === 'stream') {
    document.getElementById('streamTitle').textContent = `Grade ${grade} — Select Stream`;
    document.getElementById('step2Chip').textContent = '🎓 Stream';
    showScreen('screen2stream');
    updateSteps(2);
    updateBackBtn('screen2stream');
  } else {
    document.getElementById('regionTitle').textContent = `Grade ${grade} — Select Region`;
    document.getElementById('step2Chip').textContent = '📍 Region';
    showScreen('screen2region');
    updateSteps(2);
    updateBackBtn('screen2region');
  }
}

// ============================================
// STEP 2A: SELECT REGION
// ============================================

function selectRegion(region) {
  state.region = region;
  renderSubjects(BOOKS_DATA[state.grade].subjects);
}

// ============================================
// STEP 2B: SELECT STREAM
// ============================================

function selectStream(stream) {
  state.stream = stream;
  renderSubjects(BOOKS_DATA[state.grade].streams[stream]);
}

// ============================================
// STEP 3: RENDER SUBJECTS
// ============================================

function renderSubjects(subjects) {
  const grade = state.grade;
  const region = state.region;
  const stream = state.stream;

  let subtitle = `Grade ${grade}`;
  if (region) subtitle += ` · ${region === 'oromia' ? 'Oromia' : 'Amhara'}`;
  if (stream) subtitle += ` · ${stream === 'natural' ? 'Natural Science' : 'Social Science'}`;

  document.getElementById('subjectTitle').textContent = 'Choose a Subject 📚';
  document.getElementById('subjectSubtitle').textContent = subtitle;

  const grid = document.getElementById('subjectGrid');
  grid.innerHTML = '';

  Object.entries(subjects).forEach(([name, data]) => {
    const unitCount = data.units.length;
    const isComingSoon = data.units.length === 1 && data.units[0].includes('Coming Soon');
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <span class="subject-icon">${data.icon}</span>
      <div>
        <div class="subject-name">${name}${isComingSoon ? '<span class="coming-soon-badge">Soon</span>' : ''}</div>
        <div class="subject-units">${isComingSoon ? 'Coming Soon' : unitCount + ' Units'}</div>
      </div>
    `;
    card.onclick = () => selectSubject(name, data);
    grid.appendChild(card);
  });

  showScreen('screen3');
  updateSteps(3);
  updateBackBtn('screen3');
}

// ============================================
// STEP 4: SHOW UNITS
// ============================================

function selectSubject(name, data) {
  state.subject = name;
  document.getElementById('unitTitle').textContent = `${data.icon} ${name}`;
  document.getElementById('unitSubtitle').textContent = `Grade ${state.grade} · ${data.units.length} Unit(s)`;

  const list = document.getElementById('unitList');
  list.innerHTML = '';

  data.units.forEach((unit, i) => {
    const isComingSoon = unit.includes('Coming Soon');
    const item = document.createElement('div');
    item.className = 'unit-item';
    item.innerHTML = `
      <div class="unit-number ${isComingSoon ? 'coming' : ''}">${isComingSoon ? '⏳' : i + 1}</div>
      <div class="unit-info">
        <div class="unit-name">${unit}</div>
        <div class="unit-status">${isComingSoon ? 'Content coming soon' : 'Tap to start reading'}</div>
      </div>
      <div class="unit-arrow">${isComingSoon ? '' : '›'}</div>
    `;
    item.onclick = () => openUnit(unit, isComingSoon);
    list.appendChild(item);
  });

  showScreen('screen4');
  updateSteps(4);
  updateBackBtn('screen4');
}

// ============================================
// STEP 5: OPEN UNIT / LESSON
// ============================================

function openUnit(unitName, isComingSoon) {
  document.getElementById('lessonTitle').textContent = isComingSoon ? 'Coming Soon! 📚' : unitName;
  showScreen('screen5');
  updateBackBtn('screen5');
      }
