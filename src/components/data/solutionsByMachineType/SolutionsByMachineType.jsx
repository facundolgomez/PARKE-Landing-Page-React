export const solutionsByMachineType = {
  embolsadoras: {
    embolsadorasDeBolsas: {
      bocaAbierta: {
        "4 bolsas x minuto": ["EP5B-TC", "EP5B-BA", "EP5B-SF"],
        "6 bolsas x minuto": ["EPB"],
        "10 o más bolsas x minuto": ["EPN-BA"],
      },
      valvuladas: ["LBV SF", "LBV I"],
      pequeñasBolsas: [],
    },
    embolsadorasDeBigBag: ["EPB-BB", "EPN-BB", "EP5B-BB"],
  },
  envolvedoras: {
    envolvedorasDePalets: {
      EPSA: ["AUTOMATICA", "SEMIAUTOMATICA"],
      EPA: [],
    },
  },
  transportadores: {
    transportadoresDeBolsas: ["TC3-PF", "TC4-PE", "Con derivador de bolsas"],
    transportadoresDePallets: [],
    transportadoresDeBigBag: [],
  },
  cosedoras: ["Siruba AA6", "GK35"],
  selladoras: ["Térmica", "Térmica continua"],
  balanzas: [],
  balanzasDosificadoras: [],
  pesajesContinuos: [],
  cajonesDePaletizado: [],
  tolvasYTorresDeSustentacion: [],
  zarandas: [],
  desterronadores: [],
};
