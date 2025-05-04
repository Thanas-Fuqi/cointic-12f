// Default look of the info section
const defaultInformation = "Klikoni mbi njërin prej numrave për të marrë informacion mbi simbolin përkatës ose shtypni mbi monedhën për të parë kahun tjetër të saj!"

// All data for each coin of each state
const data = [
  // Australi (shembull origjinal)
  {
    "country": "Australi",
    "code": "AUD",
    "color": "blue",
    "name": ["5 Cent", "10 Cent", "20 Cent", "50 Cent", "1 Dollar", "2 Dollar"],
    "coins": [
      [
        {
          "18": "Paraqitet një Ekidnë, që është endemike për Australinë, mbledhur në formë topi. Ky dizajn është krijuar nga Stuart Devlin.",
          "61": "Vlera numerike e monedhës: 5 Cent.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar.",
        }
      ],
      [
        {
          "48": "Paraqitet një 'Lyrebird', që është endemik për Australinë. Ky dizajn është krijuar nga Stuart Devlin.",
          "24": "Vlera numerike e monedhës: 10 Cent.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar.",
        }
      ],
      [
        {
          "60": "Paraqitet një Platipus, që është endemik për Australinë. Ky dizajn është krijuar nga Stuart Devlin.",
          "20": "Vlera numerike e monedhës: 20 Cent.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar.",
        }
      ],
      [
        {
          "26": "Paraqitet Stema e Australisë, ku shfaqen simbolet shtetërore përfshirë kangurët dhe emu-të. Dizajn i krijuar nga Stuart Devlin.",
          "61": "Vlera numerike e monedhës: 50 Cent.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar.",
        }
      ],
      [
        {
          "28": "Paraqiten 5 kangurë, një simbol unik për natyrën e Australisë. Dizajn nga Stuart Devlin.",
          "60": "Vlera numerike e monedhës: 1 Dollar.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar.",
        }
      ],
      [
        {
          "52": "Paraqitet një i moshuar Aborigjen, që nderon trashëgiminë kulturore të vendit. Dizajn nga Horst Hahne.",
          "56": "Vlera numerike e monedhës: 2 Dollar.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar.",
        }
      ]
    ]
  },
  // Shtetet e Bashkuara (USD)
  {
    "country": "Shtetet e Bashkuara të Amerikës",
    "code": "USD",
    "color": "brown",
    "name": ["1 Cent", "5 Cent", "10 Cent", "25 Cent", "50 Cent", "1 Dollar"],
    "coins": [
      [
        {
          "26": "Paraqitet Memoriali i Abraham Lincoln, i përdorur në reverse nga viti 1959 deri në 2008. Dizajn nga Frank Gasparro.",
          "68": "Vlera numerike e monedhës: 1 Cent.",
        },
        {
          "26": "Tregon portretin e Abraham Lincoln, bazuar në një medaljon të Victor David Brenner.",
          "2": "Teksti 'IN GOD WE TRUST'.",
          "42": "Teksti 'LIBERTY'.",
        }
      ],
      [
        {
          "26": "Paraqitet Monticello, shtëpia e Thomas Jefferson. Dizajn nga Felix Schlag.",
          "61": "Vlera numerike e monedhës: 5 Cent.",
        },
        {
          "26": "Tregon portretin e Thomas Jefferson, Dizajn nga Felix Schlag.",
          "22": "Teksti 'IN GOD WE TRUST'.",
          "30": "Teksti 'LIBERTY'.",
          "57": "Teksti tregon vitin e prerjes.",
        }
      ],
      [
        {
          "45": "Paraqitet një degë dushku dhe një degë ulliri, simbol i unitetit dhe paqes. Dizajn nga John R. Sinnock.",
          "68": "Vlera numerike e monedhës: 10 Cent(ONE DIME).",
        },
        {
          "26": "Tregon portretin e Franklin D. Roosevelt, Dizajn nga John R. Sinnock.",
          "66": "Teksti 'IN GOD WE TRUST'.",
          "22": "Teksti 'LIBERTY'.",
          "64": "Teksti tregon vitin e prerjes dhe shenjën e prerjes.",
        }
      ],
      [
        {
          "26": "Paraqitet një shqiponjë fluturake. Dizajn nga John Flanagan.",
          "66": "Vlera numerike e monedhës: 25 Cent.",
        },
        {
          "26": "Tregon portretin e George Washington, Dizajn nga John Flanagan.",
          "51": "Teksti 'IN GOD WE TRUST'.",
          "2": "Teksti 'LIBERTY'.",
          "67": "Teksti tregon vitin e prerjes dhe shenjën e prerjes.",
        }
      ],
      [
        {
          "45": "Paraqitet Shënjali Presidencial me një shqiponjë e mbështetur te një mburojë. Dizajn nga Frank Gasparro.",
          "66": "Vlera numerike e monedhës: 50 Cent.",
        },
        {
          "26": "Tregon portretin e John F. Kennedy, Dizajn nga Gilroy Roberts.",
          "59": "Teksti 'IN GOD WE TRUST'.",
          "30": "Teksti 'LIBERTY'.",
          "66": "Teksti tregon vitin e prerjes dhe shenjën e prerjes.",
        }
      ],
      [
        {
          "52": "Paraqitet një shqiponjë fluturake, simbol i lirive. Dizajn nga Thomas D. Rogers për Golden Dollar.",
          "56": "Vlera numerike e monedhës: 1 Dollar.",
        },
        {
          "26": "Tregon portretin e Teodor Ruzvelt.",
          "58": "Teksti 'IN GOD WE TRUST'.",
        }
      ]
    ]
  },
  // Kanada (CAD)
  {
    "country": "Kanada",
    "code": "CAD",
    "color": "red",
    "name": ["5 Cent", "10 Cent", "25 Cent", "50 Cent", "1 Dollar", "2 Dollar"],
    "coins": [
      [
        {
          "35": "Paraqitet një kërmill (beaver), simbol i Kanadasë. Dizajn nga G.E. Kruger-Gray.",
          "3": "Vlera numerike e monedhës: 5 Cent.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1953 përfshihet Mbretëresha Elizabeth II; pas vdekjes së saj në 2022 tani parashikohet portreti i Mbretit Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
        }
      ],
      [
        {
          "45": "Paraqitet anija ‘Bluenose’, simbol i trashëgimisë detare të Kanadasë. Dizajn nga Emanuel Hahn.",
          "67": "Vlera numerike e monedhës: 10 Cent.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1953 përfshihet Mbretëresha Elizabeth II; pas vdekjes së saj në 2022 tani parashikohet portreti i Mbretit Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
        }
      ],
      [
        {
          "54": "Paraqitet një karibu (caribou), simbol i natyrës së veriut kanadez. Dizajn nga Emanuel Hahn.",
          "10": "Vlera numerike e monedhës: 25 Cent.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1953 përfshihet Mbretëresha Elizabeth II; pas vdekjes së saj në 2022 tani parashikohet portreti i Mbretit Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
        }
      ],
      [
        {
          "26": "Paraqitet Stema e Kanadasë, me luanët dhe fishkëllima. Dizajn nga G.E. Kruger-Gray.",
          "30": "Vlera numerike e monedhës: 50 Cent.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1953 përfshihet Mbretëresha Elizabeth II; pas vdekjes së saj në 2022 tani parashikohet portreti i Mbretit Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
        }
      ],
      [
        {
          "54": "Paraqitet një patë e egër (loon), ikonë e liqeneve kanadeze. Dizajn nga Robert R. Davidson.",
          "68": "Vlera numerike e monedhës: 1 Dollar.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1953 përfshihet Mbretëresha Elizabeth II; pas vdekjes së saj në 2022 tani parashikohet portreti i Mbretit Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
        }
      ],
      [
        {
          "45": "Paraqitet një arush polar, simbol i Arktikut kanadez. Dizajn nga Brent K. Lewis.",
          "68": "Vlera numerike e monedhës: 2 Dollar.",
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1953 përfshihet Mbretëresha Elizabeth II; pas vdekjes së saj në 2022 tani parashikohet portreti i Mbretit Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
        }
      ]
    ]
  },
  // Mbretëria e Bashkuar (GBP)
  {
    "country": "Mbretëria e Bashkuar",
    "code": "GBP",
    "color": "gold",
    "name": ["1 Penny", "2 Pence", "5 Pence", "10 Pence", "20 Pence", "50 Pence"],
    "coins": [
      [
        {
          "35": "Paraqitet portkullisi i Mbretërisë Angleze, simbol i mburojës mbretërore. Dizajn origjinal nga William Wyon.",
          "2": "Vlera numerike e monedhës: 1 Penny.",
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, dizajn nga Jody Clark (2015–sot).",
          "22": "Teksti 'ELIZABETH II D G REG F D'.",
          "69": "Teksti tregon vitin e prerjes.",
        }
      ],
      [
        {
          "35": "Paraqitet stema e Princes së Uellsit: tre pendona të ndërlidhura me një kurorë. Dizajn nga Christopher Ironside.",
          "2": "Vlera numerike e monedhës: 2 Pence.",
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, dizajn nga Jody Clark (2015–sot).",
          "22": "Teksti 'ELIZABETH II D G REG F D'.",
          "69": "Teksti tregon vitin e prerjes.",
        }
      ],
      [
        {
          "35": "Paraqitet një kardhu i kurorëzuar (thistle), simbol i Skocisë. Dizajn nga Christopher Ironside.",
          "61": "Vlera numerike e monedhës: 5 Pence.",
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, dizajn nga Jody Clark (2015–sot).",
          "22": "Teksti 'ELIZABETH II D G REG F D'.",
        }
      ],
      [
        {
          "26": "Paraqitet një luan rampant, simbol i Anglisë. Dizajn nga Christopher Ironside.",
          "61": "Vlera numerike e monedhës: 10 Pence.",
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, dizajn nga Jody Clark (2015–sot).",
          "22": "Teksti 'ELIZABETH II D G REG F D'.",
          "64": "Teksti tregon vitin e prerjes.",
        }
      ],
      [
        {
          "35": "Paraqitet trëndafili Tudor, simbol i unitetit kombëtar. Dizajn nga William Wyon.",
          "60": "Vlera numerike e monedhës: 20 Pence.",
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, dizajn nga Jody Clark (2015–sot).",
          "22": "Teksti 'ELIZABETH II D G REG F D'.",
        }
      ],
      [
        {
          "44": "Paraqitet Britannia duke mbajtur shtizën dhe degën e ullirit, simbol i fuqisë dhe paqes. Dizajn nga Philip Nathan.",
          "67": "Vlera numerike e monedhës: 50 Pence.",
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, dizajn nga Jody Clark (2015–sot).",
          "22": "Teksti 'ELIZABETH II D G REG F D'.",
          "69": "Teksti tregon vitin e prerjes.",
        }
      ]
    ]
  },
  // Zvicra (CHF)
  {
    "country": "Konfederata e Zvicrës",
    "code": "CHF",
    "color": "silver",
    "name": ["5 Rappen", "10 Rappen", "20 Rappen", "50 Rappen", "1 Franc", "2 Franc", "5 Franc"],
    "coins": [
      [
        {
          "7": "Kurora dafineje që rrethon numrin, simbol i fitoreve dhe qëndrueshmërisë në Zvicër. Ky dizajn ekziston që nga 1874.",
          "35": "Vlera numerike e monedhës: 5 Rappen.",
        },
        {
          "26": "Portreti i Helvetias, aligorike e Zvicrës si grua të fortë, me kurorë dafineje. Dizajn nga Karl Schwenzer (v. 1874).",
          "22": "Teksti 'HELVETIA' (emri latin i Zvicrës).",
          "67": "Viti i prerjes së monedhës.",
        }
      ],
      [
        {
          "7": "Gjethe ulliri dhe dafine të ndërthura që rrethojnë numrin, simbol i paqes dhe unitetit kombëtar.",
          "35": "Vlera numerike e monedhës: 10 Rappen.",
        },
        {
          "26": "Portreti i Helvetias me profil të butë, me kurorë dafineje. Dizajn nga Karl Schwenzer (v. 1874).",
          "22": "Teksti 'HELVETIA'.",
          "67": "Viti i prerjes së monedhës.",
        }
      ],
      [
        {
          "7": "Kurora gjethe firash, që simbolizon peizazhet malore të Zvicrës, rreth numrit.",
          "35": "Vlera numerike e monedhës: 20 Rappen.",
        },
        {
          "26": "Portreti i Helvetias me detaje të jamës në flokë, me kurorë dafineje. Dizajn nga Karl Schwenzer.",
          "22": "Teksti 'HELVETIA'.",
          "67": "Viti i prerjes së monedhës.",
        }
      ],
      [
        {
          "7": "Kurora kombinuese dafineje dhe ulliri, që rrethon numrin, simbol i unitetit.",
          "35": "Vlera numerike e monedhës: 1/2 Frang dhe viti i prodhimit.",
        },
        {
          "26": "Portreti i Helvetias në profil, e kuruar me kurorë dafineje. Dizajn nga Karl Schwenzer.",
        }
      ],
      [
        {
          "60": "Kurora gjethe dafineje drejtkëndëshe, që përfshin numrin—shenjë e traditës monetare zvicerane.",
          "26": "Vlera numerike e monedhës: 1 Franc dhe viti i prodhimit.",
        },
        {
          "26": "Portreti i Helvetias, shprehje e vendosur me kurorë dafineje. Dizajn nga R. Studer (v. 1888).",
        }
      ],
      [
        {
          "57": "Kurora ulliri e mbështjellur me rrip, simbol i lirisë dhe besueshmërisë financiare.",
          "26": "Vlera numerike e monedhës: 2 Franc dhe viti i prodhimit.",
        },
        {
          "26": "Portreti i Helvetias me vendosmëri, me kurorë dafineje. Dizajn nga R. Studer.",
        }
      ],
      [
        {
          "36": "Kurora e pasur dafineje dhe ulliri rreth vlerës më të madhe, simbol i stabilitetit financiar zviceran.",
          "61": "Viti i prodhimit.",
        },
        {
          "26": "Portreti i Helvetias me detaje të holla, kurorë dafineje dhe rripa flokësh të lidhur. Dizajn nga R. Studer.",
          "22": "Teksti 'HELVETIA'.",
        }
      ]
    ]
  },
  // Japoni (JPY)
  {
    "country": "日本国",
    "code": "JPY",
    "color": "bronze",
    "name": ["1 Yen", "5 Yen", "10 Yen", "50 Yen", "100 Yen", "500 Yen"],
    "coins": [
      [
        {
          "67": "Viti i prerjes së monedhës në kalendarin japonez (p.sh. 令和4年).",
          "45": "Vlera numerike e monedhës: 1 Yen.",
        },
        {
          "45": "Paraqitet një fidan i vogël i paralajmërimit të gjelbërimit—simbol i rigjenerimit dhe zhvillimit ekonomik (1円).",
          "61": "Shënuesi në kanji për valutat: '一円'.",
          "3": "Teksti '日本国' tregon emrin e shtetit në kanji.",
        }
      ],
      [
        {
          "10": "Paraqiten tri dërrasa fasuleje orizi, rrotull një vrimë qendrore—simbol i begatisë së risive bujqësore (5円).",
          "61": "Shënuesi në kanji: '五円'.",
        },
        {
          "10": "Teksti '日本国'.",
          "61": "Viti i prerjes (令和4年 etj.).",
        }
      ],
      [
        {
          "26": "Viti i prerjes (令和4年 etj.) dhe vlera numerike.",
        },
        {
          "10": "Teksti '日本国'.",
          "68": "Shënuesi në kanji: '十円'.",
          "45": "Paraqitet Pallati Phoenix i tempullit Byōdō-in, monument UNESCO në Uji—simbol i trashëgimisë kulturore (10円).",
        }
      ],
      [
        {
          "10": "Vlera numerike e monedhës: 50 Yen.",
          "67": "Viti i prerjes (令和4年 etj.).",
        },
        {
          "33": "Nënvizon një lule krizantemeje me vrimë qendrore—simboli zyrtar perandorak i Japonisë (50円).",
          "3": "Teksti '日本国'.",
          "61": "Shënuesi në kanji: '五十円'.",
        }
      ],
      [
        {
          "26": "Vlera numerike e monedhës: 100 Yen.",
          "68": "Viti i prerjes (令和4年 etj.).",
        },
        {
          "26": "Paraqitet degë lules së qershisë (sakura), simbol i bukurisë së përkohshme dhe ringjalljes (100円).",
          "3": "Teksti '日本国'.",
          "67": "Shënuesi në kanji: '百円'.",
        }
      ],
      [
        {
          "26": "Vlera numerike e monedhës: 500 Yen.",
          "67": "Viti i prerjes (令和4年 etj.).",
        },
        {
          "45": "Paraqitet një degë paulowniaje (kiri), simbol i autoritetit imperial dhe rimëkëmbjes (500円).",
          "3": "Teksti '日本国'.",
          "67": "Shënuesi në kanji: '五百円'.",
        }
      ]
    ]
  },
  // Meksika (MXN)
  {
    "country": "Estados Unidos Mexicanos",
    "code": "MXN",
    "color": "bimetallic",
    "name": ["5 Centavos", "10 Centavos", "20 Centavos", "50 Centavos", "1 Peso", "2 Pesos"],
    "coins": [
      [
        {
          "3": "Viti i prerjes së monedhës.",
          "45": "Vlera numerike e monedhës: 5 Centavos.",
        },
        {
          "26": "Stema kombëtare me shqiponjën dhe gjarpërin.",
          "14": "Teksti 'ESTADOS UNIDOS MEXICANOS'.",
        }
      ],
      [
        {
          "3": "Viti i prerjes së monedhës.",
          "45": "Vlera numerike e monedhës: 10 Centavos.",
        },
        {
          "26": "Stema kombëtare me shqiponjën dhe gjarpërin.",
          "14": "Teksti 'ESTADOS UNIDOS MEXICANOS'.",
        }
      ],
      [
        {
          "3": "Viti i prerjes së monedhës.",
          "45": "Vlera numerike e monedhës: 20 Centavos.",
        },
        {
          "26": "Stema kombëtare me shqiponjën dhe gjarpërin.",
          "14": "Teksti 'ESTADOS UNIDOS MEXICANOS'.",
        }
      ],
      [
        {
          "3": "Viti i prerjes së monedhës.",
          "45": "Vlera numerike e monedhës: 50 Centavos.",
        },
        {
          "26": "Stema kombëtare me shqiponjën dhe gjarpërin.",
          "14": "Teksti 'ESTADOS UNIDOS MEXICANOS'.",
        }
      ],
      [
        {
          "10": "Viti i prerjes së monedhës.",
          "45": "Vlera numerike e monedhës: 1 Pesos.",
        },
        {
          "26": "Stema kombëtare me shqiponjën dhe gjarpërin.",
          "14": "Teksti 'ESTADOS UNIDOS MEXICANOS'.",
        }
      ],
      [
        {
          "16": "Viti i prerjes së monedhës.",
          "46": "Vlera numerike e monedhës: 2 Pesos.",
        },
        {
          "26": "Stema kombëtare me shqiponjën dhe gjarpërin.",
          "14": "Teksti 'ESTADOS UNIDOS MEXICANOS'.",
        }
      ],
    ]
  }
];

// Circle coordinates from 1 to 70
const coordinates = [
  [15, 60],
  [15, 90],
  [15, 120],
  [15, 150],
  [15, 180],
  [15, 210],
  [45, 45],
  [45, 75],
  [45, 105],
  [45, 135],
  [45, 165],
  [45, 195],
  [45, 225],
  [75, 30],
  [75, 60],
  [75, 90],
  [75, 120],
  [75, 150],
  [75, 180],
  [75, 210],
  [75, 240],
  [105, 15],
  [105, 45],
  [105, 75],
  [105, 105],
  [105, 135],
  [105, 165],
  [105, 195],
  [105, 225],
  [105, 255],
  [135, 0],
  [135, 30],
  [135, 60],
  [135, 90],
  [135, 120],
  [135, 150],
  [135, 180],
  [135, 210],
  [135, 240],
  [135, 270],
  [165, 15],
  [165, 45],
  [165, 75],
  [165, 105],
  [165, 135],
  [165, 165],
  [165, 195],
  [165, 225],
  [165, 255],
  [195, 30],
  [195, 60],
  [195, 90],
  [195, 120],
  [195, 150],
  [195, 180],
  [195, 210],
  [195, 240],
  [225, 45],
  [225, 75],
  [225, 105],
  [225, 135],
  [225, 165],
  [225, 195],
  [225, 225],
  [255, 60],
  [255, 90],
  [255, 120],
  [255, 150],
  [255, 180],
  [255, 210]
];
