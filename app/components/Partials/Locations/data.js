const cities = [
  {
    state: 'DF',
    counties: [
      {
        id: 1,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.429757146002!2d-48.01698768514456!3d-15.833994389026666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc37e8befd1d0d4c1!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1646757173837!5m2!1spt-BR!2sbr',
        name: 'Águas Claras',
        phones: ['(61)3246-2678'],
        whatsapp: '(61)99292-3591'
      },
      {
        id: 2,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.2625221411395!2d-47.89670008514571!3d-15.737245589086776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6358f9d953da8e19!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639767902104!5m2!1spt-BR!2sbr',
        name: 'Asa Norte',
        phones: ['(61)3246-2687'],
        whatsapp: '(61)98292-0102'
      },
      {
        id: 3,
        map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3838.740186069049!2d-48.1061055!3d-15.8176479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccebe79ce0c3%3A0xe40ce33704d9b5b1!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639767703930!5m2!1spt-BR!2sbr',
        name: 'Ceilândia',
        phones: ['(61)3246-2690'],
        whatsapp: '(61)99652-4781'
      },
      {
        id: 4,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.9007904020964!2d-48.06794278514227!3d-16.018679188912206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d864345d80bd984!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639767770241!5m2!1spt-BR!2sbr',
        name: 'Gama',
        phones: ['(61)3246-2693'],
        whatsapp: '(61)99672-0288'
      },
      {
        id: 5,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2006847661314!2d-47.897308385144456!3d-15.846046289019155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87a379bf4b607c6d!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639767938849!5m2!1spt-BR!2sbr',
        name: 'Lago Sul',
        phones: ['(61)3246-2682'],
        whatsapp: '(61)99138-4349'
      },
      {
        id: 6,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9979162829613!2d-47.95219448514494!3d-15.804063889045247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a305ae8bbd095%3A0x764d8d62c96c9937!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639758498360!5m2!1spt-BR!2sbr',
        name: 'Matriz Brasília',
        phones: ['(61)3045-5090', '(61)99314-8813', '(61)99312-0192'],
        whatsapp: '(61)99252-2820'
      },
      {
        id: 7,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1517360826742!2d-47.89426408514521!3d-15.795951189050257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3aef72eaaaab%3A0xe337c29d9e33f617!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639767807095!5m2!1spt-BR!2sbr',
        name: 'Pátio Brasil',
        phones: ['(61)3246-2688', '(61)99313-3703'],
        whatsapp: '(61)99137-0268'
      },
      {
        id: 8,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.4794512363524!2d-47.657585985147236!3d-15.61943688916018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6cdafab7c57b%3A0x9f2755471cec298e!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639767979449!5m2!1spt-BR!2sbr',
        name: 'Planaltina',
        phones: ['(61)3246-2692'],
        whatsapp: '(61)99696-6654'
      },
      {
        id: 9,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.079542464314!2d-48.0749061851444!3d-15.852416189015178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaed600a39989d3a9!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639768086795!5m2!1spt-BR!2sbr',
        name: 'Samambaia',
        phones: ['(61)3246-2691'],
        whatsapp: '(61)99913-9704'
      },
      {
        id: 10,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.913772638458!2d-47.796702885146836!3d-15.649579489141336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa3d2eddfe14d0279!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639768399092!5m2!1spt-BR!2sbr',
        name: 'Sobradinho',
        phones: ['(61)3246-2697'],
        whatsapp: '(61)98111-6530'
      },
      {
        id: 11,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.4701563435015!2d-48.05454868514464!3d-15.831867989027929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a32ee4d0a7533%3A0xd8dc9f72d47edbf5!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1640006271726!5m2!1spt-BR!2sbr',
        name: 'Taguatinga',
        phones: [
          '(61)3044-6090',
          '(61)98285-0726',
          '(61)99931-0052',
          '(61)99816-0621'
        ],
        whatsapp: '(61)99519-5346'
      }
    ]
  },
  {
    state: 'GO',
    counties: [
      {
        id: 1,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.3280056508993!2d-48.2854461851458!3d-15.733778089088915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bb9be72cb2edb%3A0x419ba52c52753f0c!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639768156275!5m2!1spt-BR!2sbr',
        name: 'Águas Lindas',
        phones: ['(61)3246-2684'],
        whatsapp: '(61)98292-0286'
      },
      {
        id: 2,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.8826281103698!2d-48.950264085138315!3d-16.32894038872091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea54178f8696b%3A0x4aa96289ca6658cc!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639768230628!5m2!1spt-BR!2sbr',
        name: 'Anápolis',
        phones: ['(62)3771-2210', '(62)99124-4415'],
        whatsapp: '(62)98191-0053'
      },
      {
        id: 3,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.338914763483!2d-49.32584256687814!3d-16.70909674918601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef66013aa7ed7%3A0x6e98d036101a96d3!2sAv.%20Mil%C3%A3o%2C%201894%20-%20Res.%20Eldorado%2C%20Goi%C3%A2nia%20-%20GO%2C%2074325-070!5e0!3m2!1spt-BR!2sbr!4v1640266521295!5m2!1spt-BR!2sbr',
        name: 'Celina Park',
        phones: ['(62)3142-0793'],
        whatsapp: '(62)99857-1538'
      },
      {
        id: 4,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.3998060131034!2d-47.95493788513915!3d-16.251267088768678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599853af5be16d%3A0x6a0fccb3df73d18a!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639768125333!5m2!1spt-BR!2sbr',
        name: 'Luziânia',
        phones: ['(61)3246-2689'],
        whatsapp: '(61)99879-0483'
      },
      {
        id: 5,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.575975709695!2d-49.22596378513317!3d-16.698088988495165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72f042d3f36a5a72!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1646758075033!5m2!1spt-BR!2sbr',
        name: 'Park Lozandes',
        phones: ['(62)3142-0678'],
        whatsapp: '(62)99964-8843'
      },
      {
        id: 6,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.8744574142725!2d-50.937972885117816!3d-17.797596387833938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d46a90b8f81d210!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639768441356!5m2!1spt-BR!2sbr',
        name: 'Rio Verde',
        phones: ['(64)3403-0604'],
        whatsapp: '(64)99241-1368'
      },
      {
        id: 7,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.510210278004!2d-49.27330818513304!3d-16.70137558849313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1d8a53d7765%3A0x6724e95e56d4b724!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639762922818!5m2!1spt-BR!2sbr',
        name: 'Setor Bueno',
        phones: ['(62)3412-1370', '(62)99112-0972'],
        whatsapp: '(62)98191-0026'
      },
      {
        id: 8,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.2049413116783!2d-49.29697278513363!3d-16.66662488851429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5332596f417bde24!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639768298539!5m2!1spt-BR!2sbr',
        name: 'Setor Campinas',
        phones: ['(62)3412-1370'],
        whatsapp: '(62)98270-1569'
      },
      {
        id: 9,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9082567556056!2d-47.9845078851414!3d-16.070249888880255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359854b31fa1f09%3A0xdc591fca057d552d!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639768194048!5m2!1spt-BR!2sbr',
        name: 'Valparaíso',
        phones: ['(61)3246-2683'],
        whatsapp: '(61)98292-0405'
      }
    ]
  },
  {
    state: 'TO',
    counties: [
      {
        id: 1,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.4193568550995!2d-48.20942058464071!3d-7.192898872600603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d90d8bd2a9380b%3A0xdf52c5c774040306!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1657721707943!5m2!1spt-BR!2sbr',
        name: 'Araguaína',
        phones: ['(63)3321-3869'],
        whatsapp: '(63)99289-2568'
      },
      {
        id: 2,
        map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14107.620530412652!2d-48.327566255967575!3d-10.186077551438514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65341f69544e4777!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1640266690908!5m2!1spt-BR!2sbr',
        name: 'Palmas',
        phones: ['(63)3026-6861', '(63)99256-7147'],
        whatsapp: '(63)98116-1949'
      },
      {
        id: 3,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.352887490365!2d-48.415954485199876!3d-10.707240992368483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfbd5415d83caba7!2sSempre%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1650374293442!5m2!1spt-BR!2sbr',
        name: 'Porto Nacional',
        phones: ['(63)3142-1902'],
        whatsapp: '(63)99919-3601'
      }
    ]
  }
];

const states = [
  {
    label: 'Distrito Federal',
    value: 'DF'
  },
  {
    label: 'Goiás',
    value: 'GO'
  },
  {
    label: 'Tocantins',
    value: 'TO'
  }
];

export { cities, states };
