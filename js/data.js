// ============================================
// FIYIT — data.js
// Curriculum Data Structure (Grades 9-12)
// ============================================

const CURRICULUM_DATA = {

  // ============================================
  // GRADE 9 (No Stream)
  // ============================================
  9: {
    hasStream: false,
    subjects: {
      "Mathematics": {
        icon: "math",
        units: [
          { name: "Unit 1: Number Systems", subunits: [
            "Real Numbers, Rational and Irrational Numbers",
            "Scientific Notation",
            "Integers",
            "Laws of Exponents and Indices"
          ]},
          { name: "Unit 2: Algebra", subunits: [
            "Linear Equations and Inequalities (One and Two Variables)",
            "Simplifying Expressions",
            "Polynomial Operations and Factoring",
            "Introduction to Quadratics"
          ]},
          { name: "Unit 3: Geometry", subunits: [
            "Cartesian Coordinate Planes",
            "Parallel Lines Cut by a Transversal",
            "Properties of Triangles and Polygons",
            "Congruency and Similarity"
          ]},
          { name: "Unit 4: Trigonometry", subunits: [
            "Right-Angled Triangle Properties",
            "Pythagoras' Theorem",
            "Basic Trigonometric Ratios (Sine, Cosine, Tangent)"
          ]},
          { name: "Unit 5: Statistics and Probability", subunits: [
            "Data Presentation (Histograms, Bar Graphs)",
            "Mean, Median, and Mode",
            "Bivariate Statistics",
            "Calculating Simple Probability"
          ]}
        ]
      },
      "Biology": {
        icon: "biology",
        units: [
          { name: "Unit 1: The Science of Biology", subunits: [
            "Introduction to Life Science",
            "The Scientific Method",
            "Biological Tools"
          ]},
          { name: "Unit 2: Cell Biology", subunits: [
            "Structure and Function of Plant and Animal Cells",
            "Cell Organelles",
            "The Cell Cycle (Mitosis and Meiosis)"
          ]},
          { name: "Unit 3: Biodiversity and Classification", subunits: [
            "The Five Kingdoms of Living Organisms",
            "Taxonomy",
            "Binomial Nomenclature"
          ]},
          { name: "Unit 4: Plant and Human Nutrition", subunits: [
            "Photosynthesis",
            "Plant Transport Systems",
            "Human Digestive System",
            "Macronutrients and Micronutrients"
          ]},
          { name: "Unit 5: Movement of Molecules", subunits: [
            "Diffusion",
            "Osmosis",
            "Active Transport Across Cell Membranes"
          ]}
        ]
      },
      "Chemistry": {
        icon: "chemistry",
        units: [
          { name: "Unit 1: Matter and Its Properties", subunits: [
            "States of Matter",
            "Physical and Chemical Changes",
            "Mixtures, Elements, and Compounds"
          ]},
          { name: "Unit 2: Atomic Structure", subunits: [
            "Subatomic Particles (Protons, Neutrons, Electrons)",
            "Atomic Number and Mass Number",
            "Isotopes"
          ]},
          { name: "Unit 3: The Periodic Table", subunits: [
            "Organization of Elements",
            "Periods and Groups",
            "Trends in Chemical Reactivity"
          ]},
          { name: "Unit 4: Chemical Bonding", subunits: [
            "Ionic and Covalent Bonding",
            "Valence Electrons",
            "Writing Simple Chemical Formulas"
          ]}
        ]
      },
      "Physics": {
        icon: "physics",
        units: [
          { name: "Unit 1: Physical Quantities and Measurement", subunits: [
            "SI Units",
            "Measuring Volume and Density",
            "Standard Measuring Instruments (Calipers, Balances)"
          ]},
          { name: "Unit 2: Kinematics and Motion", subunits: [
            "Distance, Displacement, Speed, Velocity, Acceleration",
            "Interpreting Motion Graphs"
          ]},
          { name: "Unit 3: Dynamics and Forces", subunits: [
            "Newton's Laws of Motion",
            "Types of Forces (Gravity, Friction)",
            "Balanced and Unbalanced Forces",
            "Free Fall"
          ]},
          { name: "Unit 4: Work, Energy, and Power", subunits: [
            "Forms of Energy (Kinetic and Potential)",
            "Conservation of Energy",
            "Simple Machines"
          ]}
        ]
      },
      "English": {
        icon: "english",
        units: [
          { name: "Unit 1: Grammar and Mechanics", subunits: [
            "Advanced Sentence Structures",
            "Tenses",
            "Active and Passive Voice, Direct and Indirect Speech",
            "Punctuation"
          ]},
          { name: "Unit 2: Reading and Comprehension", subunits: [
            "Analyzing Short Stories",
            "Informational Articles",
            "Poetry and Prose"
          ]},
          { name: "Unit 3: Writing Skills", subunits: [
            "Formal and Informal Letters",
            "Descriptive Essays",
            "Emails, Summaries, and Creative Stories"
          ]},
          { name: "Unit 4: Oral Communication", subunits: [
            "Presentation Skills",
            "Group Discussions",
            "Listening Comprehension",
            "Speech Delivery"
          ]}
        ]
      },
      "Geography": {
        icon: "geography",
        units: [
          { name: "Unit 1: Physical Geography", subunits: [
            "Earth's Structure",
            "Plate Tectonics",
            "Weathering and Erosion",
            "Climate Patterns"
          ]},
          { name: "Unit 2: Human and Economic Geography", subunits: [
            "Population Distribution",
            "Human Settlement Patterns",
            "Resource Utilization",
            "Sustainability"
          ]},
          { name: "Unit 3: Map Work and Spatial Skills", subunits: [
            "Reading Coordinates",
            "Map Scales and Symbols",
            "Basic GIS Concepts"
          ]}
        ]
      },
      "History & Civics": {
        icon: "history",
        units: [
          { name: "Unit 1: World History", subunits: [
            "Major World Civilizations",
            "Early Human Developments",
            "The Stone Age",
            "Global Exploration and Foundational National History"
          ]},
          { name: "Unit 2: Civics and Citizenship", subunits: [
            "Concepts of Equality",
            "Human Rights",
            "Structures of Local and State Governments",
            "Civic Duties"
          ]},
          { name: "Unit 3: Media and Society", subunits: [
            "Public Spaces and Markets",
            "Advertising",
            "Global Interactions"
          ]}
        ]
      },
      "ICT": {
        icon: "ict",
        units: [
          { name: "Unit 1: Computer Systems", subunits: [
            "Hardware Components",
            "Software Applications",
            "Internal Memory",
            "Operating Systems"
          ]},
          { name: "Unit 2: Data Representation", subunits: [
            "Binary Numbers",
            "Data Storage Units",
            "How Computers Process Information"
          ]},
          { name: "Unit 3: Algorithms and Computational Thinking", subunits: [
            "Introduction to Logic",
            "Problem-Solving",
            "Flowcharts",
            "Basic Coding and Scripting Concepts"
          ]}
        ]
      }
    }
  },

  // ============================================
  // GRADE 10 (No Stream)
  // ============================================
  10: {
    hasStream: false,
    subjects: {
      "Mathematics": {
        icon: "math",
        units: [
          { name: "Unit 1: Functions & Relations", subunits: [
            "Quadratic Functions",
            "Domain and Range",
            "Absolute Value Functions",
            "Exponential Models"
          ]},
          { name: "Unit 2: Algebraic Operations", subunits: [
            "Logarithms",
            "Factoring Complex Polynomials",
            "Solving Systems of Linear Equations in Three Variables",
            "Rational Expressions"
          ]},
          { name: "Unit 3: Coordinate Geometry", subunits: [
            "Distance Formula",
            "Midpoint Formula",
            "Slopes of Parallel and Perpendicular Lines",
            "Equations of Circles"
          ]},
          { name: "Unit 4: Advanced Trigonometry", subunits: [
            "Unit Circle",
            "Sine and Cosine Laws for Non-Right Triangles",
            "Basic Trigonometric Identities"
          ]},
          { name: "Unit 5: Statistics & Probability", subunits: [
            "Standard Deviation and Variance",
            "Combinations and Permutations",
            "Conditional Probability"
          ]}
        ]
      },
      "Biology": {
        icon: "biology",
        units: [
          { name: "Unit 1: Genetics & Heredity", subunits: [
            "DNA Structure",
            "Mendelian Inheritance",
            "Monohybrid Crosses",
            "Genotypes, Phenotypes, and Genetic Mutations"
          ]},
          { name: "Unit 2: Human Physiology", subunits: [
            "Respiration and Gas Exchange",
            "Circulatory System",
            "Excretion (Kidneys)",
            "Nervous and Endocrine Systems"
          ]},
          { name: "Unit 3: Ecology & Ecosystems", subunits: [
            "Energy Flow and Food Webs",
            "Nutrient Cycles (Carbon and Nitrogen)",
            "Human Impact on Ecosystems"
          ]},
          { name: "Unit 4: Evolution", subunits: [
            "Theory of Natural Selection",
            "Evidence for Evolution",
            "Adaptation"
          ]}
        ]
      },
      "Chemistry": {
        icon: "chemistry",
        units: [
          { name: "Unit 1: Chemical Reactions & Equations", subunits: [
            "Balancing Chemical Equations",
            "Types of Reactions (Synthesis, Decomposition, Redox)",
            "Oxidation Numbers"
          ]},
          { name: "Unit 2: Stoichiometry", subunits: [
            "The Mole Concept",
            "Molar Mass",
            "Empirical and Molecular Formulas",
            "Limiting Reactants"
          ]},
          { name: "Unit 3: Acids, Bases, & Salts", subunits: [
            "pH Scale",
            "Neutralization Reactions",
            "Strong vs Weak Acids and Bases",
            "Indicators"
          ]},
          { name: "Unit 4: Introductory Organic Chemistry", subunits: [
            "Hydrocarbons (Alkanes, Alkenes, Alkynes)",
            "Functional Groups",
            "Structural Isomerism"
          ]}
        ]
      },
      "Physics": {
        icon: "physics",
        units: [
          { name: "Unit 1: Waves & Optics", subunits: [
            "Properties of Waves",
            "Reflection and Refraction",
            "Lenses and Mirrors",
            "The Electromagnetic Spectrum and Behavior of Light"
          ]},
          { name: "Unit 2: Electricity & Magnetism", subunits: [
            "Electric Current, Voltage, Resistance",
            "Ohm's Law",
            "Series and Parallel Circuits",
            "Electromagnetism"
          ]},
          { name: "Unit 3: Thermal Physics", subunits: [
            "Temperature Scales",
            "Heat Transfer (Conduction, Convection, Radiation)",
            "Specific Heat Capacity"
          ]},
          { name: "Unit 4: Nuclear Physics", subunits: [
            "Radioactivity",
            "Alpha, Beta, and Gamma Decay",
            "Half-Life",
            "Nuclear Fission and Fusion"
          ]}
        ]
      },
      "English": {
        icon: "english",
        units: [
          { name: "Unit 1: Complex Grammar", subunits: [
            "Advanced Clauses",
            "Conditional Sentences",
            "Active vs Passive Voice in Academic Writing",
            "Advanced Vocabulary"
          ]},
          { name: "Unit 2: Literary Analysis", subunits: [
            "Analyzing Themes and Motifs",
            "Character Development",
            "Symbolism in Novels, Plays, and Poetry"
          ]},
          { name: "Unit 3: Advanced Writing", subunits: [
            "Argumentative Essays",
            "Persuasive Speeches",
            "Formal Research Summaries",
            "Analytical Reports"
          ]}
        ]
      },
      "Geography": {
        icon: "geography",
        units: [
          { name: "Unit 1: Economic Geography", subunits: [
            "Global Manufacturing",
            "Trade Networks and Globalization",
            "Primary, Secondary, and Tertiary Sectors"
          ]},
          { name: "Unit 2: Environmental Geography", subunits: [
            "Climate Change",
            "Deforestation and Soil Degradation",
            "Global Water Resource Management"
          ]},
          { name: "Unit 3: Advanced Map Work", subunits: [
            "Topographic Maps",
            "Contour Lines and Cross-Sections",
            "Remote Sensing and GIS Applications"
          ]}
        ]
      },
      "History & Civics": {
        icon: "history",
        units: [
          { name: "Unit 1: Modern History", subunits: [
            "The World Wars",
            "The Cold War",
            "Decolonization Movements",
            "Major 20th-Century Global Shifts"
          ]},
          { name: "Unit 2: Political Science & Governance", subunits: [
            "Comparative Government Systems",
            "Constitutions",
            "International Organizations (UN, AU)",
            "Global Conflict Resolution"
          ]}
        ]
      },
      "ICT": {
        icon: "ict",
        units: [
          { name: "Unit 1: Computer Networks", subunits: [
            "LAN and WAN",
            "Internet Protocols",
            "Network Topologies",
            "Data Transmission Media"
          ]},
          { name: "Unit 2: Databases", subunits: [
            "Relational Database Management Systems (RDBMS)",
            "Primary and Foreign Keys",
            "Basic SQL Queries"
          ]},
          { name: "Unit 3: Programming Fundamentals", subunits: [
            "Writing Structural Programs",
            "Variables",
            "Loops (For, While)",
            "Conditional Logic (If-Else) and Arrays"
          ]}
        ]
      }
    }
  },

  // ============================================
  // GRADE 11 (Has Stream)
  // ============================================
  11: {
    hasStream: true,
    streams: {
      natural: {
        "Mathematics": {
          icon: "math",
          units: [
            { name: "Unit 1: Relations and Functions", subunits: [
              "Revision of Relations",
              "Power Functions",
              "Modulus (Absolute Value) Functions",
              "Signum and Greatest Integer Functions"
            ]},
            { name: "Unit 2: Rational Expressions & Functions", subunits: [
              "Simplifying Rational Expressions",
              "Solving Rational Equations",
              "Graphing Rational Functions"
            ]},
            { name: "Unit 3: Coordinate Geometry", subunits: [
              "Advanced Equations of Straight Lines",
              "Circles",
              "Parabolas, Ellipses, and Hyperbolas"
            ]},
            { name: "Unit 4: Mathematical Reasoning", subunits: [
              "Logic Statements and Truth Tables",
              "Quantifiers and Open Statements",
              "Methods of Mathematical Proof"
            ]},
            { name: "Unit 5: Statistics & Probability", subunits: [
              "Measures of Central Tendency for Grouped Data",
              "Standard Deviation and Variance",
              "Independent and Dependent Events"
            ]},
            { name: "Unit 6: Matrices and Determinants", subunits: [
              "Basic Operations on Matrices",
              "Finding Determinants of 2x2 and 3x3 Matrices",
              "Solving Systems Using Cramer's Rule"
            ]}
          ]
        },
        "Biology": {
          icon: "biology",
          units: [
            { name: "Unit 1: The Science of Biology", subunits: [
              "Scientific Methods",
              "Advanced Laboratory Tools of a Biologist",
              "Safety Rules"
            ]},
            { name: "Unit 2: Biomolecules", subunits: [
              "Organic and Inorganic Compounds",
              "Structural Functions of Carbohydrates and Lipids",
              "Proteins and Nucleic Acids (DNA/RNA)"
            ]},
            { name: "Unit 3: Enzymes", subunits: [
              "Mechanisms of Enzyme Action",
              "Factors Affecting Enzyme Activity",
              "Role in Metabolic Pathways"
            ]},
            { name: "Unit 4: Cell Biology", subunits: [
              "Prokaryotic vs Eukaryotic Cells",
              "Fluid Mosaic Model of Cell Membranes",
              "Cellular Respiration (Glycolysis, Krebs Cycle)",
              "Photosynthesis"
            ]},
            { name: "Unit 5: Microorganisms", subunits: [
              "Structure and Reproduction of Bacteria and Viruses",
              "Fungi and Protists",
              "Economic Importance of Microorganisms"
            ]}
          ]
        },
        "Chemistry": {
          icon: "chemistry",
          units: [
            { name: "Unit 1: Atomic Structure & Periodic Table", subunits: [
              "Quantum Numbers",
              "Electron Configuration and Atomic Orbitals",
              "Periodic Trends (Ionization Energy, Electron Affinity)"
            ]},
            { name: "Unit 2: Chemical Bonding & Structure", subunits: [
              "Molecular Geometry (VSEPR Theory)",
              "Hybridization of Orbitals",
              "Intermolecular Forces (Dipole-Dipole, Hydrogen Bonding)"
            ]},
            { name: "Unit 3: Physical States of Matter", subunits: [
              "Gas Laws (Boyle's, Charles's, Ideal Gas Law)",
              "Kinetic Molecular Theory",
              "Properties of Liquids and Solids"
            ]},
            { name: "Unit 4: Chemical Kinetics", subunits: [
              "Rates of Chemical Reactions",
              "Collision Theory",
              "Factors Affecting Reaction Rates",
              "Chemical Equilibrium Principles"
            ]}
          ]
        },
        "Physics": {
          icon: "physics",
          units: [
            { name: "Unit 1: Physics and Human Society", subunits: [
              "Relationship Between Physics, Technology, and Society",
              "Historical Development of Physical Sciences"
            ]},
            { name: "Unit 2: Vectors", subunits: [
              "Vector Addition and Subtraction",
              "Resolving Vectors into Components",
              "Vector Products (Dot and Cross Products)"
            ]},
            { name: "Unit 3: Kinematics", subunits: [
              "Linear Motion",
              "Projectile Motion",
              "Uniform Circular Motion",
              "Relative Velocity in Two Dimensions"
            ]},
            { name: "Unit 4: Dynamics", subunits: [
              "Applications of Newton's Laws",
              "Friction Forces",
              "Linear Momentum, Impulses, and Collisions"
            ]},
            { name: "Unit 5: Work, Energy, and Power", subunits: [
              "Work Done by Variable Forces",
              "Conservation of Mechanical Energy",
              "Power and Efficiency Calculations"
            ]},
            { name: "Unit 6: Rotational Motion", subunits: [
              "Torque and Angular Momentum",
              "Rotational Kinetic Energy",
              "Moment of Inertia"
            ]}
          ]
        },
        "English": {
          icon: "english",
          units: [
            { name: "Unit 1: Advanced Grammar & Usage", subunits: [
              "Complex Conditional Sentences",
              "Reported Speech",
              "Passive Voice Variations",
              "Participle Clauses"
            ]},
            { name: "Unit 2: Reading & Vocabulary", subunits: [
              "Analysis of Multi-Paragraph Academic Articles",
              "Making Inferences",
              "Subject-Specific Context Clues"
            ]},
            { name: "Unit 3: Writing and Research", subunits: [
              "Structuring Complex Essays",
              "Writing Formal Reports",
              "Bibliography Creation and Citation Formats"
            ]},
            { name: "Unit 4: Listening & Speaking", subunits: [
              "Participating in Formal Debates",
              "Active Listening Exercises",
              "Delivery of Researched Presentations"
            ]}
          ]
        },
        "ICT": {
          icon: "ict",
          units: [
            { name: "Unit 1: Information Systems", subunits: [
              "Data, Information, Knowledge, and Wisdom Hierarchy",
              "System Components and Practical Application Fields"
            ]},
            { name: "Unit 2: Emerging Technologies", subunits: [
              "Artificial Intelligence (AI)",
              "Augmented Reality (AR) and Virtual Reality (VR)",
              "Introduction to Data Science"
            ]},
            { name: "Unit 3: Database Management", subunits: [
              "Data Management Approaches",
              "Data Modeling and Relational Databases",
              "Basics of SQL Queries"
            ]},
            { name: "Unit 4: Web Development", subunits: [
              "Fundamentals of Building Websites Using HTML",
              "Styling with CSS",
              "Standard Web Layout Practices"
            ]}
          ]
        }
      },
      social: {
        "Mathematics": {
          icon: "math",
          units: [
            { name: "Unit 1: Relations and Functions", subunits: [
              "Revision of Relations",
              "Power Functions",
              "Modulus (Absolute Value) Functions",
              "Signum and Greatest Integer Functions"
            ]},
            { name: "Unit 2: Rational Expressions & Functions", subunits: [
              "Simplifying Rational Expressions",
              "Solving Rational Equations",
              "Graphing Rational Functions"
            ]},
            { name: "Unit 3: Coordinate Geometry", subunits: [
              "Advanced Equations of Straight Lines",
              "Circles",
              "Parabolas, Ellipses, and Hyperbolas"
            ]},
            { name: "Unit 4: Mathematical Reasoning", subunits: [
              "Logic Statements and Truth Tables",
              "Quantifiers and Open Statements",
              "Methods of Mathematical Proof"
            ]},
            { name: "Unit 5: Statistics & Probability", subunits: [
              "Measures of Central Tendency for Grouped Data",
              "Standard Deviation and Variance",
              "Independent and Dependent Events"
            ]},
            { name: "Unit 6: Matrices and Determinants", subunits: [
              "Basic Operations on Matrices",
              "Finding Determinants of 2x2 and 3x3 Matrices",
              "Solving Systems Using Cramer's Rule"
            ]}
          ]
        },
        "History": {
          icon: "history",
          units: [
            { name: "Unit 1: Foundations of History", subunits: [
              "Historiography and Historical Sources",
              "Human Evolution",
              "Early States and Civilizations",
              "The History of Africa"
            ]}
          ]
        },
        "Geography": {
          icon: "geography",
          units: [
            { name: "Unit 1: Geographic Information & Africa", subunits: [
              "Geo-Spatial Information and Data Processing (GIS)",
              "Physical Geography of Africa",
              "Human and Economic Geography"
            ]}
          ]
        },
        "Economics": {
          icon: "economics",
          units: [
            { name: "Unit 1: Foundations of Economics", subunits: [
              "Consumer Behavior and Demand Theories",
              "Production and Cost Analysis",
              "Market Structures",
              "Macroeconomics Basics"
            ]}
          ]
        },
        "General Business": {
          icon: "business",
          units: [
            { name: "Unit 1: Business Education Foundations", subunits: [
              "Core Concepts of Business Ownership",
              "Marketing Strategies",
              "International Trade",
              "Introduction to Accounting Systems"
            ]}
          ]
        },
        "English": {
          icon: "english",
          units: [
            { name: "Unit 1: Advanced Grammar & Usage", subunits: [
              "Complex Conditional Sentences",
              "Reported Speech",
              "Passive Voice Variations",
              "Participle Clauses"
            ]},
            { name: "Unit 2: Reading & Vocabulary", subunits: [
              "Analysis of Multi-Paragraph Academic Articles",
              "Making Inferences",
              "Subject-Specific Context Clues"
            ]},
            { name: "Unit 3: Writing and Research", subunits: [
              "Structuring Complex Essays",
              "Writing Formal Reports",
              "Bibliography Creation and Citation Formats"
            ]},
            { name: "Unit 4: Listening & Speaking", subunits: [
              "Participating in Formal Debates",
              "Active Listening Exercises",
              "Delivery of Researched Presentations"
            ]}
          ]
        },
        "ICT": {
          icon: "ict",
          units: [
            { name: "Unit 1: Information Systems", subunits: [
              "Data, Information, Knowledge, and Wisdom Hierarchy",
              "System Components and Practical Application Fields"
            ]},
            { name: "Unit 2: Emerging Technologies", subunits: [
              "Artificial Intelligence (AI)",
              "Augmented Reality (AR) and Virtual Reality (VR)",
              "Introduction to Data Science"
            ]},
            { name: "Unit 3: Database Management", subunits: [
              "Data Management Approaches",
              "Data Modeling and Relational Databases",
              "Basics of SQL Queries"
            ]},
            { name: "Unit 4: Web Development", subunits: [
              "Fundamentals of Building Websites Using HTML",
              "Styling with CSS",
              "Standard Web Layout Practices"
            ]}
          ]
        }
      }
    }
  },

  // ============================================
  // GRADE 12 (Has Stream)
  // ============================================
  12: {
    hasStream: true,
    streams: {
      natural: {
        "Mathematics": {
          icon: "math",
          units: [
            { name: "Unit 1: Sequences and Series", subunits: [
              "Arithmetic and Geometric Sequences",
              "Sigma Notation",
              "Infinite Series"
            ]},
            { name: "Unit 2: Introduction to Calculus", subunits: [
              "Limits and Continuity",
              "Derivatives and Rules of Differentiation",
              "Applications of Derivatives (Optimization, Curve Sketching)",
              "Basic Integration"
            ]},
            { name: "Unit 3: Three-Dimensional Geometry", subunits: [
              "Vectors in Space",
              "Coordinates in 3D",
              "Lines and Planes in Space"
            ]},
            { name: "Unit 4: Complex Numbers", subunits: [
              "Definition and Operations",
              "Polar Form",
              "De Moivre's Theorem"
            ]}
          ]
        },
        "Biology": {
          icon: "biology",
          units: [
            { name: "Unit 1: Application of Biology", subunits: [
              "Biotechnology and Genetic Engineering",
              "Cloning and Stem Cell Research",
              "Ethical Issues"
            ]},
            { name: "Unit 2: Microorganisms in Industry and Health", subunits: [
              "Industrial Uses of Bacteria and Fungi (Brewing, Baking, Antibiotics)",
              "Infectious Diseases"
            ]},
            { name: "Unit 3: Human Biology and Health", subunits: [
              "The Immune System and Vaccination",
              "Homeostatic Mechanisms",
              "Reproductive Health"
            ]},
            { name: "Unit 4: Ecosystems and Conservation", subunits: [
              "Biomes",
              "Population Ecology",
              "Conservation Strategies and Sustainable Development"
            ]}
          ]
        },
        "Chemistry": {
          icon: "chemistry",
          units: [
            { name: "Unit 1: Acid-Base Equilibria", subunits: [
              "Weak Acids and Bases, Ka and Kb",
              "Buffer Solutions",
              "Hydrolysis of Salts and Acid-Base Titrations"
            ]},
            { name: "Unit 2: Electrochemistry", subunits: [
              "Conductance",
              "Galvanic/Voltaic and Electrolytic Cells",
              "Faraday's Laws and Commercial Batteries"
            ]},
            { name: "Unit 3: Industrial Chemistry", subunits: [
              "Production of Ammonia (Haber Process)",
              "Production of Sulfuric Acid (Contact Process)",
              "Fertilizers and Metallurgy of Common Metals"
            ]},
            { name: "Unit 4: Polymers and Macromolecules", subunits: [
              "Natural and Synthetic Polymers",
              "Polymerization Reactions (Addition and Condensation)",
              "Plastics"
            ]}
          ]
        },
        "Physics": {
          icon: "physics",
          units: [
            { name: "Unit 1: Fluid Mechanics", subunits: [
              "Hydrostatics (Pressure, Pascal's Principle, Archimedes' Principle)",
              "Hydrodynamics (Bernoulli's Equation)"
            ]},
            { name: "Unit 2: Thermodynamics", subunits: [
              "Gas Laws",
              "First and Second Laws of Thermodynamics",
              "Heat Engines and Entropy"
            ]},
            { name: "Unit 3: Oscillations and Waves", subunits: [
              "Simple Harmonic Motion",
              "Wave Equations",
              "Sound Waves and the Doppler Effect"
            ]},
            { name: "Unit 4: Electromagnetism", subunits: [
              "Electromagnetic Induction",
              "Faraday's Law and Lenz's Law",
              "Alternating Current (AC) Circuits"
            ]},
            { name: "Unit 5: Atomic and Nuclear Physics", subunits: [
              "Photoelectric Effect",
              "Bohr's Model",
              "Radioactivity, Half-Life, and Nuclear Reactions"
            ]}
          ]
        },
        "English": {
          icon: "english",
          units: [
            { name: "Unit 1: Advanced Communication", subunits: [
              "Critical Listening",
              "Argumentative Speaking",
              "Formal Academic Debating"
            ]},
            { name: "Unit 2: Reading Analysis", subunits: [
              "Comprehension of Complex Academic Texts",
              "Identifying Bias",
              "Evaluating Evidence"
            ]},
            { name: "Unit 3: Academic Writing", subunits: [
              "Essay Genres (Cause-Effect, Argumentative)",
              "Writing Formal Research Abstracts and Summaries",
              "Resumes and CVs"
            ]},
            { name: "Unit 4: Grammar Mastery", subunits: [
              "Advanced Conjunctions",
              "Inversion",
              "Relative Clauses",
              "Perfective Verb Forms"
            ]}
          ]
        },
        "ICT": {
          icon: "ict",
          units: [
            { name: "Unit 1: Computer Network & Security", subunits: [
              "Network Architectures",
              "Wireless Networks",
              "Network Security Protocols, Firewalls, and Encryption"
            ]},
            { name: "Unit 2: Information System Development", subunits: [
              "Systems Development Life Cycle (SDLC) Models",
              "System Analysis, Design, and Implementation"
            ]},
            { name: "Unit 3: Advanced Web Development", subunits: [
              "Introduction to Client-Side Scripting",
              "Interactive Web Elements",
              "Web Hosting Basics"
            ]}
          ]
        }
      },
      social: {
        "Mathematics": {
          icon: "math",
          units: [
            { name: "Unit 1: Sequences and Series", subunits: [
              "Arithmetic and Geometric Progressions",
              "Compound Interest Applications"
            ]},
            { name: "Unit 2: Introduction to Linear Programming", subunits: [
              "Systems of Linear Inequalities",
              "Graphing Regions",
              "Optimizing Objective Functions"
            ]},
            { name: "Unit 3: Basic Calculus", subunits: [
              "Simplified Limits",
              "Basic Derivatives",
              "Business and Economics Applications (Marginal Cost/Revenue)"
            ]},
            { name: "Unit 4: Statistics & Probability", subunits: [
              "Probability Distributions",
              "Permutations and Combinations",
              "Basic Regression"
            ]}
          ]
        },
        "History": {
          icon: "history",
          units: [
            { name: "Unit 1: Modern World History", subunits: [
              "The Aftermath of WWII",
              "The Rise and Fall of the USSR",
              "Globalization and Contemporary Global Conflicts"
            ]},
            { name: "Unit 2: Modern African History", subunits: [
              "The Fight Against Colonialism",
              "Post-Independence Challenges",
              "Formation of Regional Bodies (AU, ECOWAS)"
            ]}
          ]
        },
        "Geography": {
          icon: "geography",
          units: [
            { name: "Unit 1: Economic Development", subunits: [
              "Theories of Economic Growth",
              "Indicators of Development",
              "Disparities Between Global Regions"
            ]},
            { name: "Unit 2: Sustainable Resource Management", subunits: [
              "Conservation of Global Ecosystems",
              "Renewable Energy Sources",
              "Climate Change Mitigation Strategies"
            ]}
          ]
        },
        "Economics": {
          icon: "economics",
          units: [
            { name: "Unit 1: Macroeconomics", subunits: [
              "National Income Accounting (GDP, GNP)",
              "Inflation and Unemployment",
              "Monetary Policy and Fiscal Policy"
            ]},
            { name: "Unit 2: International Trade", subunits: [
              "Balance of Payments",
              "Exchange Rates",
              "Trade Barriers and International Financial Institutions (IMF, World Bank)"
            ]}
          ]
        },
        "English": {
          icon: "english",
          units: [
            { name: "Unit 1: Advanced Communication", subunits: [
              "Critical Listening",
              "Argumentative Speaking",
              "Formal Academic Debating"
            ]},
            { name: "Unit 2: Reading Analysis", subunits: [
              "Comprehension of Complex Academic Texts",
              "Identifying Bias",
              "Evaluating Evidence"
            ]},
            { name: "Unit 3: Academic Writing", subunits: [
              "Essay Genres (Cause-Effect, Argumentative)",
              "Writing Formal Research Abstracts and Summaries",
              "Resumes and CVs"
            ]},
            { name: "Unit 4: Grammar Mastery", subunits: [
              "Advanced Conjunctions",
              "Inversion",
              "Relative Clauses",
              "Perfective Verb Forms"
            ]}
          ]
        },
        "ICT": {
          icon: "ict",
          units: [
            { name: "Unit 1: Computer Network & Security", subunits: [
              "Network Architectures",
              "Wireless Networks",
              "Network Security Protocols, Firewalls, and Encryption"
            ]},
            { name: "Unit 2: Information System Development", subunits: [
              "Systems Development Life Cycle (SDLC) Models",
              "System Analysis, Design, and Implementation"
            ]},
            { name: "Unit 3: Advanced Web Development", subunits: [
              "Introduction to Client-Side Scripting",
              "Interactive Web Elements",
              "Web Hosting Basics"
            ]}
          ]
        }
      }
    }
  }

};
