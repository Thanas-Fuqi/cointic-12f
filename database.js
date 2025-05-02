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
          "61": "Vlera numerike e monedhës: 5 Cent."
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar."
        }
      ],
      [
        {
          "48": "Paraqitet një 'Lyrebird', që është endemik për Australinë. Ky dizajn është krijuar nga Stuart Devlin.",
          "24": "Vlera numerike e monedhës: 10 Cent."
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar."
        }
      ],
      [
        {
          "60": "Paraqitet një Platipus, që është endemik për Australinë. Ky dizajn është krijuar nga Stuart Devlin.",
          "20": "Vlera numerike e monedhës: 20 Cent."
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar."
        }
      ],
      [
        {
          "26": "Paraqitet Stema e Australisë, ku shfaqen simbolet shtetërore përfshirë kangurët dhe emu-të. Dizajn i krijuar nga Stuart Devlin.",
          "61": "Vlera numerike e monedhës: 50 Cent."
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar."
        }
      ],
      [
        {
          "28": "Paraqiten 5 kangurë, një simbol unik për natyrën e Australisë. Dizajn nga Stuart Devlin.",
          "60": "Vlera numerike e monedhës: 1 Dollar."
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar."
        }
      ],
      [
        {
          "52": "Paraqitet një i moshuar Aborigjen, që nderon trashëgiminë kulturore të vendit. Dizajn nga Horst Hahne.",
          "56": "Vlera numerike e monedhës: 2 Dollar."
        },
        {
          "26": "Tregon portretin e monarkut të shtetit. Që nga viti 1966, ka përfshirë Mbretëreshën Elizabeth II. Pas vdekjes së saj në vitin 2022, tani tregon Mbreti Charles III.",
          "22": "Teksti tregon emrin e monarkut të paraqitur në monedhë.",
          "30": "Teksti 'Australi' tregon shtetin që i përket monedha.",
          "64": "Teksti tregon vitin në të cilin monedha është prodhuar."
        }
      ]
    ]
  },
  // Shtetet e Bashkuara (USD)
  {
    "country": "Shtetet e Bashkuara të Amerikës",
    "code": "USD",
    "color": "red",
    "name": ["Penny", "Nickel", "Dime", "Quarter", "Half Dollar", "Dollar"],
    "coins": [
      [
        {
          "18": "Paraqitet portreti i Abraham Lincoln, portreti ikonë i Presidentit të SHBA-së, i dizajnuar nga Victor David Brenner.",
          "61": "Vlera numerike e monedhës: 1 Cent (Penny)."
        },
        {
          "26": "Paraqitet dizajni i Lincoln Memorial, simbol i historisë amerikane, me inskriptet 'In God We Trust' dhe 'United States of America'.",
          "22": "Detaj i hollësishëm i dizajnit të mbrapshëm."
        }
      ],
      [
        {
          "48": "Paraqitet portreti i Thomas Jefferson, figurë historike e rëndësishme, i dizajnuar me mjeshtëri nga Felix Schlag.",
          "24": "Vlera numerike e monedhës: 5 Cent (Nickel)."
        },
        {
          "26": "Paraqitet dizajni i mbrapshëm me simbole të 'Monticello' dhe inskriptet 'United States of America'.",
          "22": "Detaj i hollësishëm i dizajnit të pasqyrës."
        }
      ],
      [
        {
          "60": "Paraqitet portreti i Franklin D. Roosevelt, President i SHBA-së, i dizajnuar nga John R. Sinnock.",
          "20": "Vlera numerike e monedhës: 10 Cent (Dime)."
        },
        {
          "26": "Paraqitet dizajni i mbrapshëm minimalist, me inskriptet 'In God We Trust' dhe 'United States of America'.",
          "22": "Detaj grafik i dizajnit."
        }
      ],
      [
        {
          "26": "Paraqitet portreti i George Washington, themelues dhe figurë kyçe e kombit, i dizajnuar me kujdes.",
          "61": "Vlera numerike e monedhës: 25 Cent (Quarter)."
        },
        {
          "26": "Paraqitet dizajni i mbrapshëm me peizazh amerikan dhe inskriptet 'United States of America' dhe 'E Pluribus Unum'.",
          "22": "Detaje shtesë artistike."
        }
      ],
      [
        {
          "28": "Paraqitet portreti i John F. Kennedy, figurë moderne dhe ikonë amerikane, i dizajnuar me elegancë.",
          "60": "Vlera numerike e monedhës: 50 Cent (Half Dollar)."
        },
        {
          "26": "Paraqitet dizajni i mbrapshëm me inskriptin 'In God We Trust' dhe simbole që nderojnë historinë amerikane.",
          "22": "Detaj grafik dhe inskriptet kombëtare."
        }
      ],
      [
        {
          "52": "Paraqitet portreti i Sacagawea, heroina kulturore, i dizajnuar për të nderuar trashëgiminë amerikane.",
          "56": "Vlera numerike e monedhës: 1 Dollar."
        },
        {
          "26": "Paraqitet dizajni i mbrapshëm me motive indi dhe inskriptet 'United States of America' dhe 'In God We Trust'.",
          "22": "Detaje të hollësishme për dizajnin bashkëkohor."
        }
      ]
    ]
  },
  // Kanada (CAD)
  {
    "country": "Kanada",
    "code": "CAD",
    "color": "red",
    "name": ["1 Cent", "5 Cent", "10 Cent", "25 Cent", "1 Dollar (Loony)", "2 Dollar (Toonie)"],
    "coins": [
      [
        {
          "37": "Paraqitet një dizajn që përfaqëson historinë dhe kulturën kanadeze.",
          "10": "Vlera numerike e monedhës: 1 Cent."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, simbol i monarkisë në Kanada, me inskriptet 'Canada' dhe vitin e prodhimit.",
          "22": "Detaje artistike dhe inskriptet shtetërore."
        }
      ],
      [
        {
          "36": "Paraqitet një dizajn inspiruar nga natyra e mrekullueshme kanadeze, me elemente botanike.",
          "3": "Vlera numerike e monedhës: 5 Cent."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet 'Canada' dhe vitin e prodhimit.",
          "22": "Detaje të hollësishme mbi dizajnin."
        }
      ],
      [
        {
          "37": "Paraqitet një dizajn abstrakt që simbolizon diversitetin kulturor të Kanadasë.",
          "60": "Vlera numerike e monedhës: 10 Cent."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet 'Canada' dhe detaje moderne.",
          "22": "Detaje grafike dhe inskriptet zyrtare."
        }
      ],
      [
        {
          "55": "Paraqitet një dizajn që reflekton pasurinë natyrore të Kanadasë, duke përfshirë motive të pemëve dhe liqeneve.",
          "26": "Vlera numerike e monedhës: 25 Cent."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet 'Canada' dhe vitin e prodhimit.",
          "22": "Detaje artistike dhe simbole kulturore."
        }
      ],
      [
        {
          "47": "Paraqitet figura e zogut 'Loony' – një simbol unik kanadez, i dizajnuar me shumë detaje.",
          "67": "Vlera numerike e monedhës: 1 Dollar."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet 'Canada' dhe elemente të dizajnit bashkëkohor.",
          "22": "Detaje shtesë për identitetin kombëtar."
        }
      ],
      [
        {
          "36": "Paraqitet një dizajn modern me dy ngjyra, që simbolizon dinamizmin dhe bashkimin në Kanada.",
          "68": "Vlera numerike e monedhës: 2 Dollar."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet 'Canada' dhe elemente të artit bashkëkohor.",
          "22": "Detaje të hollësishme mbi motivet kulturore."
        }
      ]
    ]
  },
  // Mbretëria e Bashkuar (GBP)
  {
    "country": "Mbretëria e Bashkuar",
    "code": "GBP",
    "color": "gold",
    "name": ["1 Pence", "2 Pence", "5 Pence", "10 Pence", "20 Pence", "50 Pence"],
    "coins": [
      [
        {
          "18": "Paraqitet një dizajn tradicional me numërin 1, i projektuar me elegancë.",
          "61": "Vlera numerike e monedhës: 1 Pence."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet 'United Kingdom' dhe vitin e prodhimit.",
          "22": "Detaje të hollësishme mbi dizajnin klasik."
        }
      ],
      [
        {
          "48": "Paraqitet një dizajn minimalist me numërin 2, që pasqyron sofistikimin britanik.",
          "24": "Vlera numerike e monedhës: 2 Pence."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptin 'UK' dhe elemente historike.",
          "22": "Detaje artistike dhe inskriptet shtetërore."
        }
      ],
      [
        {
          "60": "Paraqitet një dizajn modern me numërin 5, duke reflektuar traditën britanike.",
          "20": "Vlera numerike e monedhës: 5 Pence."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet 'United Kingdom' dhe detaje të dizajnit.",
          "22": "Elemente grafike dhe simbole kombëtare."
        }
      ],
      [
        {
          "26": "Paraqitet një dizajn i sofistikuar me numërin 10, i krijuar me linja të pasura.",
          "61": "Vlera numerike e monedhës: 10 Pence."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptin 'Britania e Madhe' dhe vitin e prodhimit.",
          "22": "Detaje artistike që lidh traditën me modernitetin."
        }
      ],
      [
        {
          "28": "Paraqitet një dizajn inovativ me numërin 20, që pasqyron trashëgiminë britanike.",
          "60": "Vlera numerike e monedhës: 20 Pence."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet kombëtare dhe detaje të artit monetar.",
          "22": "Elemente të dizajnit bashkëkohor dhe tradicional."
        }
      ],
      [
        {
          "52": "Paraqitet një dizajn modern me numërin 50, që kombinon elemente tradicionale dhe bashkëkohore.",
          "56": "Vlera numerike e monedhës: 50 Pence."
        },
        {
          "26": "Tregon portretin e Mbretëreshës Elizabeth II, me inskriptet 'United Kingdom' dhe vitin e prodhimit.",
          "22": "Detaje të sofistikuara artistike dhe inskriptet shtetërore."
        }
      ]
    ]
  },
  // Zvicra (CHF)
  {
    "country": "Zvicra",
    "code": "CHF",
    "color": "red",
    "name": ["5 Rappen", "10 Rappen", "20 Rappen", "50 Rappen", "1 Frang", "2 Frange"],
    "coins": [
      [
        {
          "18": "Paraqitet një dizajn elegant me numërin 5, që përfaqëson 5 rappen.",
          "61": "Vlera numerike e monedhës: 5 Rappen."
        },
        {
          "26": "Paraqitet simboli kombëtar i Zvicrës me kryq elvetik dhe inskriptin 'Schweiz'.",
          "22": "Detaje të dizajnit që reflektojnë unitetin zvicran."
        }
      ],
      [
        {
          "48": "Paraqitet një dizajn të thjeshtë me numërin 10, i krijuar me precizion artistik.",
          "24": "Vlera numerike e monedhës: 10 Rappen."
        },
        {
          "26": "Tregon simbolin kombëtar dhe emrin 'Schweiz', së bashku me vitin e prodhimit.",
          "22": "Detaje të pasura mbi motivet kulturore."
        }
      ],
      [
        {
          "60": "Paraqitet një dizajn modern me numërin 20, që shpreh elegancinë zvicrane.",
          "20": "Vlera numerike e monedhës: 20 Rappen."
        },
        {
          "26": "Paraqitet simboli kombëtar me kryq elvetik dhe inskriptin 'Schweizerische Eidgenossenschaft'.",
          "22": "Detaje artistike dhe simbole kombëtare."
        }
      ],
      [
        {
          "26": "Paraqitet një dizajn simbolik me numërin 50, që pasqyron trashëgiminë kulturore të Zvicrës.",
          "61": "Vlera numerike e monedhës: 50 Rappen."
        },
        {
          "26": "Paraqitet simboli kombëtar dhe një motiv elvetik, me inskriptin 'Schweiz'.",
          "22": "Detaje të hollësishme mbi artin monetar zvicran."
        }
      ],
      [
        {
          "28": "Paraqitet një dizajn klasik që përfaqëson vlerën 1 frang, me elemente tradicionale.",
          "60": "Vlera numerike e monedhës: 1 Frang."
        },
        {
          "26": "Paraqitet simboli kombëtar i Zvicrës me kryq elvetik dhe emrin 'Confoederatio Helvetica'.",
          "22": "Detaje të sofistikuara kulturore."
        }
      ],
      [
        {
          "52": "Paraqitet një dizajn modern me numërin 2, që simbolizon dytoninë e kulturës zvicrane.",
          "56": "Vlera numerike e monedhës: 2 Frange."
        },
        {
          "26": "Paraqitet simboli kombëtar, me inskriptet dhe vitin e prodhimit.",
          "22": "Detaje të hollësishme mbi dizajnin bashkëkohor."
        }
      ]
    ]
  },
  // Japoni (JPY)
  {
    "country": "Japoni",
    "code": "JPY",
    "color": "red",
    "name": ["1 Yen", "5 Yen", "10 Yen", "50 Yen", "100 Yen", "500 Yen"],
    "coins": [
      [
        {
          "18": "Paraqitet një dizajn i thjeshtë me numërin 1, që përfaqëson 1 yen.",
          "61": "Vlera numerike e monedhës: 1 Yen."
        },
        {
          "26": "Paraqitet simboli kombëtar me inskriptin '日本国' dhe vitin e prodhimit.",
          "22": "Detaje të dizajnit të hollësishme."
        }
      ],
      [
        {
          "48": "Paraqitet një dizajn simbolik me numërin 5, që reflekton vlerën 5 yen.",
          "24": "Vlera numerike e monedhës: 5 Yen."
        },
        {
          "26": "Paraqitet një hapësirë bosh që simbolizon fatin e mirë, me inskriptet tradicionale japoneze.",
          "22": "Detaje të dizajnit minimaliste."
        }
      ],
      [
        {
          "60": "Paraqitet një dizajn modern me numërin 10, i krijuar me linja të pasura.",
          "20": "Vlera numerike e monedhës: 10 Yen."
        },
        {
          "26": "Paraqitet simboli kombëtar me inskriptin '日本国' dhe elemente të frymëzuara nga kultura japoneze.",
          "22": "Detaje të sofistikuara artistike."
        }
      ],
      [
        {
          "26": "Paraqitet një dizajn të detajuar me numërin 50, që përfaqëson 50 yen.",
          "61": "Vlera numerike e monedhës: 50 Yen."
        },
        {
          "26": "Paraqitet një dizajn tradicional me motive japoneze dhe inskriptin '日本国'.",
          "22": "Detaje të hollësishme mbi trashëgiminë kulturore."
        }
      ],
      [
        {
          "28": "Paraqitet një dizajn modern me numërin 100, që simbolizon ekonominë dhe inovacionin japonez.",
          "60": "Vlera numerike e monedhës: 100 Yen."
        },
        {
          "26": "Paraqitet dizajni me motive kulturore dhe inskriptin '日本国', duke nderuar trashëgiminë kombëtare.",
          "22": "Detaje të artit bashkëkohor dhe tradicional."
        }
      ],
      [
        {
          "52": "Paraqitet një dizajn madhështor me numërin 500, që pasqyron vlerën e lartë të monedhës japoneze.",
          "56": "Vlera numerike e monedhës: 500 Yen."
        },
        {
          "26": "Paraqitet një dizajn kompleks që kombinon elemente tradicionale dhe moderne, me inskriptin '日本国' dhe vitin e prodhimit.",
          "22": "Detaje të hollësishme mbi dizajnin bashkëkohor."
        }
      ]
    ]
  },
  // Meksika (MXN)
  {
    "country": "Meksika",
    "code": "MXN",
    "color": "green",
    "name": ["5 Centavos", "10 Centavos", "20 Centavos", "50 Centavos", "1 Peso", "2 Pesos"],
    "coins": [
      [
        {
          "18": "Paraqitet një dizajn që përfaqëson artin tradicional me numërin 5, duke simbolizuar 5 centavos.",
          "61": "Vlera numerike e monedhës: 5 Centavos."
        },
        {
          "26": "Paraqitet imazhi i një simboli kulturor me inskriptin 'Estados Unidos Mexicanos' dhe vitin e prodhimit.",
          "22": "Detaje të hollësishme mbi trashëgiminë kulturore."
        }
      ],
      [
        {
          "48": "Paraqitet një dizajn i detajuar me numërin 10, që përfaqëson 10 centavos.",
          "24": "Vlera numerike e monedhës: 10 Centavos."
        },
        {
          "26": "Paraqitet një motiv tradicional me inskriptin 'México' dhe elemente historike.",
          "22": "Detaje mbi artin dhe simbolikën kombëtare."
        }
      ],
      [
        {
          "60": "Paraqitet një dizajn modern me numërin 20, që reflekton artin dhe historinë meksikanë.",
          "20": "Vlera numerike e monedhës: 20 Centavos."
        },
        {
          "26": "Paraqitet një dizajn simbolik me inskriptet 'Estados Unidos Mexicanos' dhe motive kulturore.",
          "22": "Detaje të hollësishme mbi trashëgiminë artistike."
        }
      ],
      [
        {
          "26": "Paraqitet një dizajn elegant me numërin 50, që simbolizon 50 centavos.",
          "61": "Vlera numerike e monedhës: 50 Centavos."
        },
        {
          "26": "Paraqitet imazhi i një personaliteti historik meksikan, me inskriptet kombëtare dhe vitin e prodhimit.",
          "22": "Detaje mbi motivet historike dhe kulturore."
        }
      ],
      [
        {
          "28": "Paraqitet një dizajn klasik me numërin 1, që përfaqëson 1 peso, me elemente tradicionale.",
          "60": "Vlera numerike e monedhës: 1 Peso."
        },
        {
          "26": "Paraqitet imazhi i një simboli kombëtar, me inskriptin 'México' dhe elemente të trashëgimisë kulturore.",
          "22": "Detaje të hollësishme mbi artin meksikan."
        }
      ],
      [
        {
          "52": "Paraqitet një dizajn modern me numërin 2, që reflekton vlerën 2 pesos, me linja të pasura artistike.",
          "56": "Vlera numerike e monedhës: 2 Pesos."
        },
        {
          "26": "Paraqitet një dizajn simbolik me elemente tradicionale, me inskriptet 'Estados Unidos Mexicanos' dhe vitin e prodhimit.",
          "22": "Detaje mbi kombinimin e traditës dhe modernitetit."
        }
      ]
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
