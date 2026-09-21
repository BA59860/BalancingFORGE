/* BalancingFORGE reaction bank: 30 per level. Conditions and states omitted. */
window.REACTIONS = [
  {
    "id": "r01",
    "title": "Making water",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "H2",
      "O2"
    ],
    "right": [
      "H2O"
    ],
    "answer": [
      2,
      1,
      2
    ],
    "tip": "Oxygen comes in pairs on the left. First give the products an even number of oxygen atoms, then recount hydrogen."
  },
  {
    "id": "r02",
    "title": "Sodium meets chlorine",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "Na",
      "Cl2"
    ],
    "right": [
      "NaCl"
    ],
    "answer": [
      2,
      1,
      2
    ],
    "tip": "Chlorine starts as Cl2, but each NaCl contains only one Cl. Match chlorine first."
  },
  {
    "id": "r03",
    "title": "Magnesium oxide",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "Mg",
      "O2"
    ],
    "right": [
      "MgO"
    ],
    "answer": [
      2,
      1,
      2
    ],
    "tip": "O2 contains two oxygen atoms. Count how many MgO units you need before balancing Mg."
  },
  {
    "id": "r04",
    "title": "Building ammonia",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "N2",
      "H2"
    ],
    "right": [
      "NH3"
    ],
    "answer": [
      1,
      3,
      2
    ],
    "tip": "Start with nitrogen. Matching N2 changes the hydrogen total in ammonia, so balance H second."
  },
  {
    "id": "r05",
    "title": "Hydrogen chloride",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "H2",
      "Cl2"
    ],
    "right": [
      "HCl"
    ],
    "answer": [
      1,
      1,
      2
    ],
    "tip": "Both elemental reactants contain pairs of atoms. Each HCl contains only one of each."
  },
  {
    "id": "r06",
    "title": "Calcium oxide",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "Ca",
      "O2"
    ],
    "right": [
      "CaO"
    ],
    "answer": [
      2,
      1,
      2
    ],
    "tip": "Match the pair of oxygen atoms first, then adjust calcium to match the product."
  },
  {
    "id": "r07",
    "title": "Aluminum chloride",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "Al",
      "Cl2"
    ],
    "right": [
      "AlCl3"
    ],
    "answer": [
      2,
      3,
      2
    ],
    "tip": "Chlorine appears in groups of 2 and 3. Their least common multiple gives a useful target."
  },
  {
    "id": "r08",
    "title": "Lithium nitride",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "Li",
      "N2"
    ],
    "right": [
      "Li3N"
    ],
    "answer": [
      6,
      1,
      2
    ],
    "tip": "Match nitrogen first. Every Li3N unit brings three lithium atoms with it."
  },
  {
    "id": "r09",
    "title": "Potassium bromide",
    "level": "Easy",
    "type": "Synthesis",
    "left": [
      "K",
      "Br2"
    ],
    "right": [
      "KBr"
    ],
    "answer": [
      2,
      1,
      2
    ],
    "tip": "Bromine is diatomic on the left. Balance bromine before potassium."
  },
  {
    "id": "r10",
    "title": "Hydrogen peroxide breaks down",
    "level": "Easy",
    "type": "Decomposition",
    "left": [
      "H2O2"
    ],
    "right": [
      "H2O",
      "O2"
    ],
    "answer": [
      2,
      2,
      1
    ],
    "tip": "Match hydrogen first. Then notice that oxygen is split between two different products."
  },
  {
    "id": "r11",
    "title": "Splitting water",
    "level": "Easy",
    "type": "Decomposition",
    "left": [
      "H2O"
    ],
    "right": [
      "H2",
      "O2"
    ],
    "answer": [
      2,
      2,
      1
    ],
    "tip": "The O2 product needs an even oxygen total. After matching oxygen, recount hydrogen."
  },
  {
    "id": "r12",
    "title": "Potassium chlorate breaks down",
    "level": "Easy",
    "type": "Decomposition",
    "left": [
      "KClO3"
    ],
    "right": [
      "KCl",
      "O2"
    ],
    "answer": [
      2,
      2,
      3
    ],
    "tip": "Oxygen occurs in groups of 3 and 2. Aim for a common multiple, then match K and Cl."
  },
  {
    "id": "r13",
    "title": "Baking soda breaks down",
    "level": "Easy",
    "type": "Decomposition",
    "left": [
      "NaHCO3"
    ],
    "right": [
      "Na2CO3",
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      1,
      1,
      1
    ],
    "tip": "Na2CO3 has two sodium atoms. Start there, then add carbon and oxygen across all products."
  },
  {
    "id": "r14",
    "title": "Mercury(II) oxide breaks down",
    "level": "Easy",
    "type": "Decomposition",
    "left": [
      "HgO"
    ],
    "right": [
      "Hg",
      "O2"
    ],
    "answer": [
      2,
      2,
      1
    ],
    "tip": "Match the O2 pair by changing the HgO coefficient, then match mercury."
  },
  {
    "id": "r15",
    "title": "Sodium azide breaks down",
    "level": "Easy",
    "type": "Decomposition",
    "left": [
      "NaN3"
    ],
    "right": [
      "Na",
      "N2"
    ],
    "answer": [
      2,
      2,
      3
    ],
    "tip": "Nitrogen appears in groups of 3 and 2. Use their least common multiple, then balance Na."
  },
  {
    "id": "r16",
    "title": "Methane combustion",
    "level": "Easy",
    "type": "Combustion",
    "left": [
      "CH4",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      2,
      1,
      2
    ],
    "tip": "Balance carbon, then hydrogen. Count oxygen in BOTH CO2 and H2O before changing O2."
  },
  {
    "id": "r17",
    "title": "Ethane combustion",
    "level": "Easy",
    "type": "Combustion",
    "left": [
      "C2H6",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      7,
      4,
      6
    ],
    "tip": "Balance C and H first. If products require an odd oxygen total, double the fuel and product coefficients."
  },
  {
    "id": "r18",
    "title": "Propane combustion",
    "level": "Easy",
    "type": "Combustion",
    "left": [
      "C3H8",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      5,
      3,
      4
    ],
    "tip": "Each fuel molecule has three C and eight H atoms. Match CO2 and H2O before O2."
  },
  {
    "id": "r19",
    "title": "Ethene combustion",
    "level": "Easy",
    "type": "Combustion",
    "left": [
      "C2H4",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      3,
      2,
      2
    ],
    "tip": "Carbon sets CO2; hydrogen sets H2O. Oxygen is your last step."
  },
  {
    "id": "r20",
    "title": "Acetylene combustion",
    "level": "Easy",
    "type": "Combustion",
    "left": [
      "C2H2",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      5,
      4,
      2
    ],
    "tip": "After C and H, an odd oxygen total may appear. Scale the fuel and products together to keep whole numbers."
  },
  {
    "id": "r21",
    "title": "Methanol combustion",
    "level": "Easy",
    "type": "Combustion",
    "left": [
      "CH3OH",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      3,
      2,
      4
    ],
    "tip": "CH3OH contains four H atoms and one O atom. Include that fuel oxygen when balancing O2."
  },
  {
    "id": "r22",
    "title": "Zinc displaces hydrogen",
    "level": "Easy",
    "type": "Single replacement",
    "left": [
      "Zn",
      "HCl"
    ],
    "right": [
      "ZnCl2",
      "H2"
    ],
    "answer": [
      1,
      2,
      1,
      1
    ],
    "tip": "ZnCl2 needs two chlorine atoms. Match Cl, then check the diatomic hydrogen product."
  },
  {
    "id": "r23",
    "title": "Magnesium displaces hydrogen",
    "level": "Easy",
    "type": "Single replacement",
    "left": [
      "Mg",
      "HCl"
    ],
    "right": [
      "MgCl2",
      "H2"
    ],
    "answer": [
      1,
      2,
      1,
      1
    ],
    "tip": "Match chlorine in MgCl2 first. The H atoms from the acid pair up as H2."
  },
  {
    "id": "r24",
    "title": "Iron displaces copper",
    "level": "Easy",
    "type": "Single replacement",
    "left": [
      "Fe",
      "CuCl2"
    ],
    "right": [
      "FeCl2",
      "Cu"
    ],
    "answer": [
      1,
      1,
      1,
      1
    ],
    "tip": "Count every element before changing anything. Sometimes the smallest whole-number ratio is already 1:1:1:1."
  },
  {
    "id": "r25",
    "title": "Chlorine displaces bromine",
    "level": "Easy",
    "type": "Single replacement",
    "left": [
      "Cl2",
      "KBr"
    ],
    "right": [
      "KCl",
      "Br2"
    ],
    "answer": [
      1,
      2,
      2,
      1
    ],
    "tip": "Both free halogens are diatomic. Match chlorine in KCl, then potassium and bromine."
  },
  {
    "id": "r26",
    "title": "Sodium displaces hydrogen",
    "level": "Easy",
    "type": "Single replacement",
    "left": [
      "Na",
      "H2O"
    ],
    "right": [
      "NaOH",
      "H2"
    ],
    "answer": [
      2,
      2,
      2,
      1
    ],
    "tip": "Hydrogen ends up in BOTH NaOH and H2. Match Na and O together, then check total H."
  },
  {
    "id": "r27",
    "title": "Barium sulfate precipitates",
    "level": "Easy",
    "type": "Double replacement",
    "left": [
      "BaCl2",
      "Na2SO4"
    ],
    "right": [
      "BaSO4",
      "NaCl"
    ],
    "answer": [
      1,
      1,
      1,
      2
    ],
    "tip": "Keep SO4 together as a unit. Na and Cl then tell you how much NaCl is needed."
  },
  {
    "id": "r28",
    "title": "Silver chloride precipitates",
    "level": "Easy",
    "type": "Double replacement",
    "left": [
      "CaCl2",
      "AgNO3"
    ],
    "right": [
      "AgCl",
      "Ca(NO3)2"
    ],
    "answer": [
      1,
      2,
      2,
      1
    ],
    "tip": "Ca(NO3)2 contains two nitrate groups. Match nitrate, then check silver and chloride."
  },
  {
    "id": "r29",
    "title": "Sulfuric acid neutralization",
    "level": "Easy",
    "type": "Double replacement",
    "left": [
      "H2SO4",
      "NaOH"
    ],
    "right": [
      "Na2SO4",
      "H2O"
    ],
    "answer": [
      1,
      2,
      1,
      2
    ],
    "tip": "Match sodium in Na2SO4 first. Then count all H atoms to set the water coefficient."
  },
  {
    "id": "r30",
    "title": "Magnesium hydroxide neutralization",
    "level": "Easy",
    "type": "Double replacement",
    "left": [
      "HCl",
      "Mg(OH)2"
    ],
    "right": [
      "MgCl2",
      "H2O"
    ],
    "answer": [
      2,
      1,
      1,
      2
    ],
    "tip": "Match chlorine first. Mg(OH)2 contributes two O and two H atoms, not one of each."
  },
  {
    "id": "r31",
    "title": "Aluminum oxide",
    "level": "Medium",
    "type": "Synthesis",
    "left": [
      "Al",
      "O2"
    ],
    "right": [
      "Al2O3"
    ],
    "answer": [
      4,
      3,
      2
    ],
    "tip": "Oxygen appears in groups of 2 and 3. Target six oxygen atoms, then match aluminum."
  },
  {
    "id": "r32",
    "title": "Iron(III) oxide",
    "level": "Medium",
    "type": "Synthesis",
    "left": [
      "Fe",
      "O2"
    ],
    "right": [
      "Fe2O3"
    ],
    "answer": [
      4,
      3,
      2
    ],
    "tip": "Find a common oxygen total for O2 and Fe2O3. Recount iron after setting the product coefficient."
  },
  {
    "id": "r33",
    "title": "Phosphorus(V) oxide",
    "level": "Medium",
    "type": "Synthesis",
    "left": [
      "P4",
      "O2"
    ],
    "right": [
      "P4O10"
    ],
    "answer": [
      1,
      5,
      1
    ],
    "tip": "Phosphorus is already in groups of four on both sides. Match the ten oxygen atoms next."
  },
  {
    "id": "r34",
    "title": "Sulfur trioxide",
    "level": "Medium",
    "type": "Synthesis",
    "left": [
      "SO2",
      "O2"
    ],
    "right": [
      "SO3"
    ],
    "answer": [
      2,
      1,
      2
    ],
    "tip": "Oxygen appears in both reactants. Keep sulfur matched while choosing an even product oxygen total."
  },
  {
    "id": "r35",
    "title": "Nitrogen dioxide",
    "level": "Medium",
    "type": "Synthesis",
    "left": [
      "NO",
      "O2"
    ],
    "right": [
      "NO2"
    ],
    "answer": [
      2,
      1,
      2
    ],
    "tip": "Match nitrogen by keeping NO and NO2 coefficients equal. The oxygen difference comes from O2."
  },
  {
    "id": "r36",
    "title": "Phosphorus trichloride",
    "level": "Medium",
    "type": "Synthesis",
    "left": [
      "P4",
      "Cl2"
    ],
    "right": [
      "PCl3"
    ],
    "answer": [
      1,
      6,
      4
    ],
    "tip": "Start with P4. After matching phosphorus, count all product chlorine atoms before setting Cl2."
  },
  {
    "id": "r37",
    "title": "Calcium nitrate breaks down",
    "level": "Medium",
    "type": "Decomposition",
    "left": [
      "Ca(NO3)2"
    ],
    "right": [
      "CaO",
      "NO2",
      "O2"
    ],
    "answer": [
      2,
      2,
      4,
      1
    ],
    "tip": "One formula unit contains two N and six O. Balance Ca and N first, then account for O in both oxide products."
  },
  {
    "id": "r38",
    "title": "Aluminum hydroxide breaks down",
    "level": "Medium",
    "type": "Decomposition",
    "left": [
      "Al(OH)3"
    ],
    "right": [
      "Al2O3",
      "H2O"
    ],
    "answer": [
      2,
      1,
      3
    ],
    "tip": "Match aluminum first. The parentheses give three H and three O per reactant unit."
  },
  {
    "id": "r39",
    "title": "Ammonium nitrite breaks down",
    "level": "Medium",
    "type": "Decomposition",
    "left": [
      "NH4NO2"
    ],
    "right": [
      "N2",
      "H2O"
    ],
    "answer": [
      1,
      1,
      2
    ],
    "tip": "NH4NO2 contains two nitrogen atoms in total. Count repeated element symbols together."
  },
  {
    "id": "r40",
    "title": "Ammonium nitrate breaks down",
    "level": "Medium",
    "type": "Decomposition",
    "left": [
      "NH4NO3"
    ],
    "right": [
      "N2O",
      "H2O"
    ],
    "answer": [
      1,
      1,
      2
    ],
    "tip": "Start with two total N atoms per reactant unit, then match hydrogen and check both oxygen products."
  },
  {
    "id": "r41",
    "title": "Ammonium dichromate breaks down",
    "level": "Medium",
    "type": "Decomposition",
    "left": [
      "(NH4)2Cr2O7"
    ],
    "right": [
      "Cr2O3",
      "N2",
      "H2O"
    ],
    "answer": [
      1,
      1,
      1,
      4
    ],
    "tip": "The parentheses give two N and eight H atoms. Chromium and nitrogen can stay matched while you set water."
  },
  {
    "id": "r42",
    "title": "Potassium nitrate breaks down",
    "level": "Medium",
    "type": "Decomposition",
    "left": [
      "KNO3"
    ],
    "right": [
      "KNO2",
      "O2"
    ],
    "answer": [
      2,
      2,
      1
    ],
    "tip": "Keep K and N matched. Each nitrate loses one oxygen atom, but the free product is O2."
  },
  {
    "id": "r43",
    "title": "Butane combustion",
    "level": "Medium",
    "type": "Combustion",
    "left": [
      "C4H10",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      13,
      8,
      10
    ],
    "tip": "Balance C and H first. An odd oxygen total means doubling the fuel and both products."
  },
  {
    "id": "r44",
    "title": "Pentane combustion",
    "level": "Medium",
    "type": "Combustion",
    "left": [
      "C5H12",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      8,
      5,
      6
    ],
    "tip": "Five C atoms set the carbon dioxide total. Twelve H atoms set the water total. Finish with oxygen."
  },
  {
    "id": "r45",
    "title": "Benzene combustion",
    "level": "Medium",
    "type": "Combustion",
    "left": [
      "C6H6",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      15,
      12,
      6
    ],
    "tip": "Start with C and H. If the oxygen total is odd, scale the fuel and products together."
  },
  {
    "id": "r46",
    "title": "Ethanol combustion",
    "level": "Medium",
    "type": "Combustion",
    "left": [
      "C2H5OH",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      3,
      2,
      3
    ],
    "tip": "C2H5OH has six H atoms and one O atom. Subtract fuel oxygen from the oxygen needed by the products."
  },
  {
    "id": "r47",
    "title": "Propanol combustion",
    "level": "Medium",
    "type": "Combustion",
    "left": [
      "C3H7OH",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      9,
      6,
      8
    ],
    "tip": "Count eight H per fuel molecule. Include the fuel oxygen; if O2 would need a fraction, scale everything."
  },
  {
    "id": "r48",
    "title": "Glucose oxidation",
    "level": "Medium",
    "type": "Combustion",
    "left": [
      "C6H12O6",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      6,
      6,
      6
    ],
    "tip": "Balance C and H first. Six oxygen atoms are already supplied by each glucose molecule."
  },
  {
    "id": "r49",
    "title": "Aluminum displaces hydrogen",
    "level": "Medium",
    "type": "Single replacement",
    "left": [
      "Al",
      "HCl"
    ],
    "right": [
      "AlCl3",
      "H2"
    ],
    "answer": [
      2,
      6,
      2,
      3
    ],
    "tip": "Chlorine in groups of three must also provide hydrogen in pairs. A common multiple helps."
  },
  {
    "id": "r50",
    "title": "Aluminum displaces copper",
    "level": "Medium",
    "type": "Single replacement",
    "left": [
      "Al",
      "CuSO4"
    ],
    "right": [
      "Al2(SO4)3",
      "Cu"
    ],
    "answer": [
      2,
      3,
      1,
      3
    ],
    "tip": "Treat SO4 as an unchanged group. The product has three sulfate groups and two aluminum atoms."
  },
  {
    "id": "r51",
    "title": "Iron displaces silver",
    "level": "Medium",
    "type": "Single replacement",
    "left": [
      "Fe",
      "AgNO3"
    ],
    "right": [
      "Fe(NO3)2",
      "Ag"
    ],
    "answer": [
      1,
      2,
      1,
      2
    ],
    "tip": "The product contains two nitrate groups. Match nitrate before silver."
  },
  {
    "id": "r52",
    "title": "Bromine displaces iodine",
    "level": "Medium",
    "type": "Single replacement",
    "left": [
      "Br2",
      "NaI"
    ],
    "right": [
      "NaBr",
      "I2"
    ],
    "answer": [
      1,
      2,
      2,
      1
    ],
    "tip": "The free halogens are pairs. Balance Br, then Na, then verify I2."
  },
  {
    "id": "r53",
    "title": "Calcium displaces hydrogen",
    "level": "Medium",
    "type": "Single replacement",
    "left": [
      "Ca",
      "H2O"
    ],
    "right": [
      "Ca(OH)2",
      "H2"
    ],
    "answer": [
      1,
      2,
      1,
      1
    ],
    "tip": "Match oxygen in Ca(OH)2 first. Remember hydrogen appears in both products."
  },
  {
    "id": "r54",
    "title": "Magnesium and phosphoric acid",
    "level": "Medium",
    "type": "Single replacement",
    "left": [
      "Mg",
      "H3PO4"
    ],
    "right": [
      "Mg3(PO4)2",
      "H2"
    ],
    "answer": [
      3,
      2,
      1,
      3
    ],
    "tip": "Keep PO4 together. The salt needs two phosphate groups and three Mg atoms; hydrogen is last."
  },
  {
    "id": "r55",
    "title": "Aluminum hydroxide precipitates",
    "level": "Medium",
    "type": "Double replacement",
    "left": [
      "AlCl3",
      "NaOH"
    ],
    "right": [
      "Al(OH)3",
      "NaCl"
    ],
    "answer": [
      1,
      3,
      1,
      3
    ],
    "tip": "The precipitate has three OH groups. Match hydroxide as a unit, then Na and Cl."
  },
  {
    "id": "r56",
    "title": "Iron(III) hydroxide precipitates",
    "level": "Medium",
    "type": "Double replacement",
    "left": [
      "FeCl3",
      "NaOH"
    ],
    "right": [
      "Fe(OH)3",
      "NaCl"
    ],
    "answer": [
      1,
      3,
      1,
      3
    ],
    "tip": "Match the three OH groups in Fe(OH)3. Sodium and chlorine should then agree."
  },
  {
    "id": "r57",
    "title": "Barium phosphate precipitates",
    "level": "Medium",
    "type": "Double replacement",
    "left": [
      "Ba(NO3)2",
      "Na3PO4"
    ],
    "right": [
      "Ba3(PO4)2",
      "NaNO3"
    ],
    "answer": [
      3,
      2,
      1,
      6
    ],
    "tip": "Start with three Ba and two phosphate groups in the precipitate. Leave NaNO3 until last."
  },
  {
    "id": "r58",
    "title": "Carbonate meets acid",
    "level": "Medium",
    "type": "Double replacement",
    "left": [
      "Na2CO3",
      "HCl"
    ],
    "right": [
      "NaCl",
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      2,
      2,
      1,
      1
    ],
    "tip": "Start with sodium. Carbon goes to CO2; the remaining oxygen and hydrogen form water."
  },
  {
    "id": "r59",
    "title": "Sulfide meets acid",
    "level": "Medium",
    "type": "Double replacement",
    "left": [
      "Na2S",
      "HCl"
    ],
    "right": [
      "NaCl",
      "H2S"
    ],
    "answer": [
      1,
      2,
      2,
      1
    ],
    "tip": "Na2S has two Na atoms. Match NaCl, then use Cl to set the acid coefficient."
  },
  {
    "id": "r60",
    "title": "Copper(II) hydroxide precipitates",
    "level": "Medium",
    "type": "Double replacement",
    "left": [
      "CuSO4",
      "NaOH"
    ],
    "right": [
      "Cu(OH)2",
      "Na2SO4"
    ],
    "answer": [
      1,
      2,
      1,
      1
    ],
    "tip": "Sulfate remains intact. Match the two OH groups, then check the two sodium atoms."
  },
  {
    "id": "r61",
    "title": "Phosphorus pentachloride",
    "level": "Challenge",
    "type": "Synthesis",
    "left": [
      "P4",
      "Cl2"
    ],
    "right": [
      "PCl5"
    ],
    "answer": [
      1,
      10,
      4
    ],
    "tip": "Balance phosphorus first. Each of the resulting PCl5 units contributes five chlorine atoms."
  },
  {
    "id": "r62",
    "title": "Magnetite formation",
    "level": "Challenge",
    "type": "Synthesis",
    "left": [
      "Fe",
      "O2"
    ],
    "right": [
      "Fe3O4"
    ],
    "answer": [
      3,
      2,
      1
    ],
    "tip": "The product has three iron atoms and four oxygen atoms. Set oxygen before iron."
  },
  {
    "id": "r63",
    "title": "Calcium nitride",
    "level": "Challenge",
    "type": "Synthesis",
    "left": [
      "Ca",
      "N2"
    ],
    "right": [
      "Ca3N2"
    ],
    "answer": [
      3,
      1,
      1
    ],
    "tip": "The nitrogen pair already matches one product unit. Check the three calcium atoms next."
  },
  {
    "id": "r64",
    "title": "Iron(III) nitrate breaks down",
    "level": "Challenge",
    "type": "Decomposition",
    "left": [
      "Fe(NO3)3"
    ],
    "right": [
      "Fe2O3",
      "NO2",
      "O2"
    ],
    "answer": [
      4,
      2,
      12,
      3
    ],
    "tip": "Match Fe and N first. Oxygen is distributed across three products; add all three contributions."
  },
  {
    "id": "r65",
    "title": "Copper(II) nitrate breaks down",
    "level": "Challenge",
    "type": "Decomposition",
    "left": [
      "Cu(NO3)2"
    ],
    "right": [
      "CuO",
      "NO2",
      "O2"
    ],
    "answer": [
      2,
      2,
      4,
      1
    ],
    "tip": "Each reactant has two N and six O. Match Cu and N, then distribute the remaining oxygen to O2."
  },
  {
    "id": "r66",
    "title": "Lead(II) nitrate breaks down",
    "level": "Challenge",
    "type": "Decomposition",
    "left": [
      "Pb(NO3)2"
    ],
    "right": [
      "PbO",
      "NO2",
      "O2"
    ],
    "answer": [
      2,
      2,
      4,
      1
    ],
    "tip": "Balance Pb and N before oxygen. If the oxygen remainder is odd, scale the other coefficients together."
  },
  {
    "id": "r67",
    "title": "Potassium permanganate breaks down",
    "level": "Challenge",
    "type": "Decomposition",
    "left": [
      "KMnO4"
    ],
    "right": [
      "K2MnO4",
      "MnO2",
      "O2"
    ],
    "answer": [
      2,
      1,
      1,
      1
    ],
    "tip": "Start with the two K atoms in K2MnO4. Manganese is split between two products."
  },
  {
    "id": "r68",
    "title": "Heptane combustion",
    "level": "Challenge",
    "type": "Combustion",
    "left": [
      "C7H16",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      11,
      7,
      8
    ],
    "tip": "Match seven carbons and sixteen hydrogens, then sum oxygen in both products."
  },
  {
    "id": "r69",
    "title": "Octane combustion",
    "level": "Challenge",
    "type": "Combustion",
    "left": [
      "C8H18",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      25,
      16,
      18
    ],
    "tip": "Balance carbon and hydrogen. Double the fuel and products if oxygen would require a fractional coefficient."
  },
  {
    "id": "r70",
    "title": "Decane combustion",
    "level": "Challenge",
    "type": "Combustion",
    "left": [
      "C10H22",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      31,
      20,
      22
    ],
    "tip": "Twenty-two H atoms give an odd number of water molecules per fuel. Scale to keep O2 whole."
  },
  {
    "id": "r71",
    "title": "Dodecane combustion",
    "level": "Challenge",
    "type": "Combustion",
    "left": [
      "C12H26",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      37,
      24,
      26
    ],
    "tip": "Set carbon dioxide and water from the fuel first. Use an even fuel coefficient if oxygen demands it."
  },
  {
    "id": "r72",
    "title": "Hexane combustion",
    "level": "Challenge",
    "type": "Combustion",
    "left": [
      "C6H14",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      2,
      19,
      12,
      14
    ],
    "tip": "Hydrogen gives seven waters per fuel molecule. That odd oxygen contribution is your cue to scale."
  },
  {
    "id": "r73",
    "title": "Toluene combustion",
    "level": "Challenge",
    "type": "Combustion",
    "left": [
      "C7H8",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      9,
      7,
      4
    ],
    "tip": "Balance C, then H. Count two O per CO2 and one O per H2O."
  },
  {
    "id": "r74",
    "title": "Butanol combustion",
    "level": "Challenge",
    "type": "Combustion",
    "left": [
      "C4H9OH",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      6,
      4,
      5
    ],
    "tip": "There are ten H atoms per fuel molecule. Remember that the fuel also supplies one oxygen atom."
  },
  {
    "id": "r75",
    "title": "Sucrose oxidation",
    "level": "Challenge",
    "type": "Combustion",
    "left": [
      "C12H22O11",
      "O2"
    ],
    "right": [
      "CO2",
      "H2O"
    ],
    "answer": [
      1,
      12,
      12,
      11
    ],
    "tip": "Match C and H, then subtract the eleven oxygen atoms already in the fuel from the products' oxygen total."
  },
  {
    "id": "r76",
    "title": "Aluminum and dilute sulfuric acid",
    "level": "Challenge",
    "type": "Single replacement",
    "left": [
      "Al",
      "H2SO4"
    ],
    "right": [
      "Al2(SO4)3",
      "H2"
    ],
    "answer": [
      2,
      3,
      1,
      3
    ],
    "tip": "Keep SO4 together. Match three sulfates and two aluminum atoms, then balance hydrogen pairs."
  },
  {
    "id": "r77",
    "title": "Chlorine displaces bromine from a salt",
    "level": "Challenge",
    "type": "Single replacement",
    "left": [
      "Cl2",
      "FeBr3"
    ],
    "right": [
      "FeCl3",
      "Br2"
    ],
    "answer": [
      3,
      2,
      2,
      3
    ],
    "tip": "Both salts have three halogen atoms, while free halogens are pairs. Use a common total of six."
  },
  {
    "id": "r78",
    "title": "Thermite reaction",
    "level": "Challenge",
    "type": "Single replacement",
    "left": [
      "Al",
      "Fe2O3"
    ],
    "right": [
      "Al2O3",
      "Fe"
    ],
    "answer": [
      2,
      1,
      1,
      2
    ],
    "tip": "Oxygen is already matched between the two oxides. Use the subscripts to set Al and Fe."
  },
  {
    "id": "r79",
    "title": "Calcium and phosphoric acid",
    "level": "Challenge",
    "type": "Single replacement",
    "left": [
      "Ca",
      "H3PO4"
    ],
    "right": [
      "Ca3(PO4)2",
      "H2"
    ],
    "answer": [
      3,
      2,
      1,
      3
    ],
    "tip": "The salt fixes three Ca and two phosphate groups. Match those before hydrogen."
  },
  {
    "id": "r80",
    "title": "Magnesium displaces iron",
    "level": "Challenge",
    "type": "Single replacement",
    "left": [
      "Mg",
      "FeCl3"
    ],
    "right": [
      "MgCl2",
      "Fe"
    ],
    "answer": [
      3,
      2,
      3,
      2
    ],
    "tip": "Chlorine moves from groups of three to groups of two. Match six chlorine atoms, then each metal."
  },
  {
    "id": "r81",
    "title": "Sulfate and hydroxide exchange",
    "level": "Challenge",
    "type": "Double replacement",
    "left": [
      "Al2(SO4)3",
      "Ca(OH)2"
    ],
    "right": [
      "Al(OH)3",
      "CaSO4"
    ],
    "answer": [
      1,
      3,
      2,
      3
    ],
    "tip": "Match Al first and sulfate groups next. Check that all six hydroxide groups are conserved."
  },
  {
    "id": "r82",
    "title": "Iron(III) sulfate and hydroxide",
    "level": "Challenge",
    "type": "Double replacement",
    "left": [
      "Fe2(SO4)3",
      "KOH"
    ],
    "right": [
      "Fe(OH)3",
      "K2SO4"
    ],
    "answer": [
      1,
      6,
      2,
      3
    ],
    "tip": "Two Fe atoms need two precipitate units. Three sulfate groups then determine the potassium total."
  },
  {
    "id": "r83",
    "title": "Calcium phosphate precipitates",
    "level": "Challenge",
    "type": "Double replacement",
    "left": [
      "CaCl2",
      "Na3PO4"
    ],
    "right": [
      "Ca3(PO4)2",
      "NaCl"
    ],
    "answer": [
      3,
      2,
      1,
      6
    ],
    "tip": "Build the precipitate from three Ca and two PO4 groups. Leave sodium chloride for the final step."
  },
  {
    "id": "r84",
    "title": "Ammonium phosphate and a base",
    "level": "Challenge",
    "type": "Double replacement",
    "left": [
      "(NH4)3PO4",
      "Ba(OH)2"
    ],
    "right": [
      "Ba3(PO4)2",
      "NH3",
      "H2O"
    ],
    "answer": [
      2,
      3,
      1,
      6,
      6
    ],
    "tip": "Match Ba and phosphate first, N next, and water last. The NH4 groups become NH3, so recount H carefully."
  },
  {
    "id": "r85",
    "title": "Barium sulfate from aluminum sulfate",
    "level": "Challenge",
    "type": "Double replacement",
    "left": [
      "Al2(SO4)3",
      "Ba(NO3)2"
    ],
    "right": [
      "BaSO4",
      "Al(NO3)3"
    ],
    "answer": [
      1,
      3,
      3,
      2
    ],
    "tip": "Keep sulfate and nitrate as groups. Three sulfates set BaSO4; two Al atoms set aluminum nitrate."
  },
  {
    "id": "r86",
    "title": "Roasting pyrite",
    "level": "Challenge",
    "type": "Redox",
    "left": [
      "FeS2",
      "O2"
    ],
    "right": [
      "Fe2O3",
      "SO2"
    ],
    "answer": [
      4,
      11,
      2,
      8
    ],
    "tip": "Match Fe, then S. Oxygen lands in two products; an odd total means scaling the Fe and S coefficients together."
  },
  {
    "id": "r87",
    "title": "Ammonia oxidation",
    "level": "Challenge",
    "type": "Redox",
    "left": [
      "NH3",
      "O2"
    ],
    "right": [
      "NO",
      "H2O"
    ],
    "answer": [
      4,
      5,
      4,
      6
    ],
    "tip": "Keep N matched and use an even NH3 coefficient for H2O. Sum oxygen in NO and water, then scale if needed."
  },
  {
    "id": "r88",
    "title": "Copper and dilute nitric acid",
    "level": "Challenge",
    "type": "Redox",
    "left": [
      "Cu",
      "HNO3"
    ],
    "right": [
      "Cu(NO3)2",
      "NO",
      "H2O"
    ],
    "answer": [
      3,
      8,
      3,
      2,
      4
    ],
    "tip": "Nitrogen splits between nitrate and NO. Try three Cu atoms; then coordinate the N, H, and O totals."
  },
  {
    "id": "r89",
    "title": "Permanganate in hydrochloric acid",
    "level": "Challenge",
    "type": "Redox",
    "left": [
      "KMnO4",
      "HCl"
    ],
    "right": [
      "KCl",
      "MnCl2",
      "Cl2",
      "H2O"
    ],
    "answer": [
      2,
      16,
      2,
      2,
      5,
      8
    ],
    "tip": "Match K and Mn first, O with water, then H with acid. Only the leftover chlorine belongs in Cl2."
  },
  {
    "id": "r90",
    "title": "Dichromate in hydrochloric acid",
    "level": "Challenge",
    "type": "Redox",
    "left": [
      "K2Cr2O7",
      "HCl"
    ],
    "right": [
      "KCl",
      "CrCl3",
      "Cl2",
      "H2O"
    ],
    "answer": [
      1,
      14,
      2,
      2,
      3,
      7
    ],
    "tip": "Match K and Cr, then O with water and H with acid. Count chlorine in the salts before assigning the remainder to Cl2."
  }
];
