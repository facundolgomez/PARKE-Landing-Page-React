export const solutionsByMachineType = {
  embolsadoras: {
    bocaAbierta: {
      titles: ["EP5BA", "EP5BTC", "EP5BSF", "EPB", "EPN", "EEI"],
      title: "Máquinas de Boca Abierta",
      characteristics: [
        "Diseñadas para empaquetar productos de manera rápida y precisa.",
        "Ideal para procesos industriales de alta demanda, garantizando velocidad y calidad.",
      ],
      EP5BA: {
        title: "EP5BA",
        image: "/img/maquina1.jpg",
        description:
          "La EP5BA es una máquina de alta eficiencia diseñada para empaquetar productos de manera rápida y precisa. Ideal para procesos industriales de alta demanda, garantiza una velocidad constante sin comprometer la calidad del sellado, con un sistema avanzado de control de temperatura que asegura la perfecta hermeticidad de las bolsas.",
      },
      EP5BTC: {
        title: "EP5B-TC",
        image: "/img/maquina2.jpg",
        description:
          "La EP5B-TC es una versión mejorada de la EP5BA, con tecnología de control térmico continuo. Esta máquina está diseñada para un rendimiento superior en entornos de producción de gran volumen, con ajustes automáticos que permiten adaptarse a diferentes tipos de materiales y tamaños de bolsas, optimizando el consumo energético.",
      },
      EP5BSF: {
        title: "EP5B-SF",
        image: "/img/maquina3.jpg",
        description:
          "La EP5B-SF es una máquina especializada en el sellado de bolsas con materiales de alta resistencia. Su sistema de sellado de alta frecuencia permite trabajar con una amplia gama de materiales, desde plásticos livianos hasta materiales más gruesos, ofreciendo una excelente calidad de sellado.",
      },
      EPB: {
        title: "EPB",
        image: "/img/maquina1.jpg",
        description:
          "La EPB es una máquina robusta y confiable para aplicaciones industriales que requieren un sellado de bolsas eficiente y rápido. Su diseño ergonómico y su facilidad de operación la hacen ideal para líneas de producción automatizadas, garantizando la seguridad del operario y el rendimiento constante.",
      },
      EPN: {
        title: "EPN",
        image: "/img/maquina1.jpg",
        description:
          "La EPN está diseñada para operar en ambientes de alta demanda, donde la velocidad y la precisión son esenciales. Con una tecnología de control avanzado, permite ajustar automáticamente los parámetros de sellado según el material y el tamaño de la bolsa, reduciendo el tiempo de inactividad y mejorando la productividad.",
      },
      EEI: {
        title: "EEI",
        image: "/img/maquina1.jpg",
        description:
          "La EEI es una máquina de embolsado de alto rendimiento que combina velocidad y precisión. Su sistema de control inteligente adapta la temperatura y la presión de sellado en función del material utilizado, lo que permite trabajar con diferentes tipos de plásticos y otros materiales, asegurando un sellado seguro y eficiente.",
      },
    },
    valvuladas: {
      titles: ["LBVSF", "LBVI"],
      title: "Máquinas de Bolsas con Válvula",
      characteristics: [
        "Especializadas en el sellado de bolsas con válvula para evacuación de aire.",
        "Garantizan un sellado hermético y de alta calidad en procesos industriales.",
      ],
      LBVSF: {
        title: "LBV SF",
        image: "/img/maquina1.jpg",
        description:
          "La LBV SF es una máquina de sellado de bolsas con válvula que se destaca por su alta eficiencia y durabilidad. Con un diseño optimizado para un rendimiento continuo, es ideal para empaques industriales que requieren una válvula de evacuación de aire, garantizando la calidad del producto en todo momento.",
      },
      LBVI: {
        title: "LBV I",
        image: "/img/maquina1.jpg",
        description:
          "La LBV I es una máquina de sellado de bolsas con válvula, especialmente diseñada para aplicaciones que requieren un sellado hermético. Con su sistema de control automatizado, asegura un rendimiento constante y una calidad de sellado superior, lo que la convierte en una opción ideal para procesos industriales de alto volumen.",
      },
    },
    bigBag: {
      titles: ["EPBBB", "EPNBB", "EP5BBB"],
      title: "Máquinas para Big Bags",
      characteristics: [
        "Diseñadas para el sellado de grandes bolsas tipo big bag.",
        "Ideales para industrias que manejan grandes volúmenes de productos.",
      ],
      EPBBB: {
        title: "EPB-BB",
        image: "/img/maquina1.jpg",
        description:
          "La EPB-BB es una máquina de alto rendimiento, diseñada específicamente para el sellado de grandes bolsas tipo big bag. Su robustez y capacidad de adaptación a distintos tamaños y materiales hacen que sea ideal para industrias que requieren un sellado rápido y eficiente en grandes volúmenes.",
      },
      EPNBB: {
        title: "EPN-BB",
        image: "/img/maquina1.jpg",
        description:
          "La EPN-BB es una máquina avanzada para el sellado de big bags, ideal para entornos industriales de gran capacidad. Su tecnología de control de temperatura asegura un sellado perfecto en todo momento, mientras que su sistema automático de ajuste permite trabajar con diferentes tipos de materiales y tamaños.",
      },
      EP5BBB: {
        title: "EP5B-BB",
        image: "/img/maquina1.jpg",
        description:
          "La EP5B-BB es una máquina de sellado de última generación para big bags, diseñada para un rendimiento superior en ambientes de alta demanda. Con su tecnología de control térmico, garantiza un sellado hermético de calidad constante, incluso en condiciones de producción intensiva.",
      },
    },
    pequenasBolsas: {
      titles: ["M1", "M2"],
      title: "Máquinas para Pequeñas Bolsas",
      characteristics: [
        "Compactas y eficientes, diseñadas para el sellado de bolsas pequeñas.",
        "Perfectas para procesos industriales de bajo a medio volumen.",
      ],
      M1: {
        title: "M1",
        image: "/img/maquina1.jpg",
        description:
          "La M1 es una máquina compacta y eficiente, diseñada para el sellado de pequeñas bolsas. Su sistema de sellado de alta precisión permite trabajar con una variedad de materiales, asegurando un sellado confiable y rápido, lo que la convierte en una opción ideal para procesos industriales de bajo a medio volumen.",
      },
      M2: {
        title: "M2",
        image: "/img/maquina1.jpg",
        description:
          "La M2 es una máquina versátil para el sellado de bolsas pequeñas, que ofrece un excelente rendimiento y fiabilidad. Con su tecnología avanzada, es capaz de adaptar los parámetros de sellado según el material y el tamaño de la bolsa, garantizando un proceso de embalaje eficiente y sin fallos.",
      },
    },
  },
  costuraysellado: {
    cosedoras: {
      titles: ["hasta8xminuto", "hasta16xminuto"],
      title: "Máquinas Cosedoras",
      characteristics: [
        "Diseñadas para la costura de bolsas en procesos industriales.",
        "Ofrecen velocidad y precisión en el sellado de materiales.",
      ],
      hasta8xminuto: {
        title: "Hasta 8 bolsas x minuto",
        image: "/img/maquina1.jpg",
        description:
          "La máquina hasta 8 bolsas x minuto es ideal para procesos de costura de bolsas en entornos industriales de bajo volumen. Su diseño compacto y eficiente permite una operación rápida y sin problemas, ofreciendo resultados consistentes a lo largo del tiempo.",
      },
      hasta16xminuto: {
        title: "Hasta 16 bolsas x minuto",
        image: "/img/maquina1.jpg",
        description:
          "La máquina hasta 16 bolsas x minuto es perfecta para aplicaciones de mayor volumen. Con su sistema avanzado de costura y alta velocidad, permite una producción constante y eficiente, asegurando un sellado duradero y de alta calidad en cada ciclo.",
      },
    },
    selladoras: {
      titles: ["termicaImpulso", "termicaContinua"],
      title: "Máquinas Selladoras",
      characteristics: [
        "Especializadas en el sellado térmico de materiales.",
        "Garantizan un sellado fuerte y duradero en procesos industriales.",
      ],
      termicaImpulso: {
        title: "TERMICA DE IMPULSO",
        image: "/img/maquina1.jpg",
        description:
          "La selladora térmica de impulso es ideal para sellar materiales termoplásticos de manera rápida y eficiente. Su sistema de impulsos de calor asegura un sellado fuerte y confiable, incluso con materiales gruesos, proporcionando una excelente calidad de embalaje.",
      },
      termicaContinua: {
        title: "TERMICA CONTINUA",
        image: "/img/maquina1.jpg",
        description:
          "La selladora térmica continua es perfecta para procesos de producción de alto volumen. Su tecnología de sellado constante asegura una alta eficiencia y calidad en el sellado de productos, ideal para mantener un flujo continuo de producción.",
      },
    },
  },
  transportadores: {
    bolsasYCajas: {
      titles: ["TCPF", "TCPE"],
      title: "Bolsas y Cajas de Alta Resistencia",
      characteristics: [
        "Diseñadas para ofrecer una solución segura y confiable en el almacenamiento y transporte de productos.",
        "Resistentes y fáciles de manejar, ideales para el embalaje de artículos frágiles y pesados.",
      ],
      TCPF: {
        title: "TCPF",
        image: "/img/maquina1.jpg",
        description:
          "El TCPF es un transportador de alta capacidad, diseñado para transportar bolsas y cajas en procesos industriales. Su robusto diseño permite un funcionamiento continuo, mientras que su sistema de control asegura un movimiento eficiente y sin interrupciones.",
      },
      TCPE: {
        title: "TCPE",
        image: "/img/maquina1.jpg",
        description:
          "El TCPE es un transportador especializado para el manejo de bolsas y cajas. Con su sistema de transporte continuo, garantiza un proceso de producción fluido y eficiente, reduciendo los tiempos de inactividad y mejorando la productividad en las líneas de montaje.",
      },
    },
    pelletsYBigBag: {
      titles: ["TCP", "TPR", "TBB"],
      title: "Pellets y Big Bag para Almacenaje y Transporte",
      characteristics: [
        "Perfectos para el almacenamiento y transporte de grandes volúmenes de material.",
        "Diseñados para ser robustos y fáciles de manejar en procesos industriales.",
      ],
      TCP: {
        title: "TCP",
        image: "/img/maquina1.jpg",
        description:
          "El TCP es un transportador ideal para el manejo de pellets y big bags. Con su estructura robusta y su capacidad de carga, es perfecto para entornos industriales que requieren un flujo continuo de material, garantizando una alta eficiencia operativa.",
      },
      TPR: {
        title: "TPR",
        image: "/img/maquina1.jpg",
        description:
          "El TPR es un transportador diseñado para mover pellets y big bags con gran facilidad. Su sistema de transporte continuo permite optimizar los tiempos de producción, mejorando la eficiencia general en las líneas de producción de gran volumen.",
      },
      TBB: {
        title: "TBB",
        image: "/img/maquina1.jpg",
        description:
          "El TBB es un transportador especializado para el movimiento de big bags. Con su diseño robusto y su capacidad de carga, asegura una manipulación segura y eficiente en entornos industriales, optimizando el flujo de material durante el proceso de producción.",
      },
    },
    granel: {
      titles: ["TCG"],
      title: "Transporte y Almacenaje de Materiales a Granel",
      characteristics: [
        "Ideales para el manejo de materiales a granel en diversos procesos industriales.",
        "Fáciles de transportar y optimizan el almacenamiento de grandes volúmenes de material.",
      ],
      TCG: {
        title: "TCG",
        image: "/img/maquina1.jpg",
        description:
          "El TCG es un transportador ideal para materiales a granel. Con su estructura resistente y su sistema de control avanzado, proporciona un transporte eficiente y confiable en aplicaciones industriales que requieren el manejo de grandes volúmenes de material.",
      },
    },
    accesorios: {
      titles: ["aplanadordebolsas", "derivadordeBolsasOCajas"],
      title: "Accesorios para el Manejo de Bolsas",
      characteristics: [
        "Facilitan el manejo y sellado de bolsas durante el proceso de empaquetado.",
        "Optimiza la eficiencia en la producción y reduce el riesgo de errores en el sellado.",
      ],
      aplanadorDeBolsas: {
        title: "Aplanador de Bolsas",
        image: "/img/maquina1.jpg",
        description:
          "El aplanador de bolsas es una herramienta indispensable en procesos de embalaje. Su diseño eficiente permite aplanar las bolsas antes del sellado, optimizando el proceso y garantizando un sellado más uniforme y de mayor calidad.",
      },
      derivadordeBolsasOCajas: {
        title: "Derivador de Bolsas o Cajas",
        image: "/img/maquina1.jpg",
        description:
          "El derivador de bolsas o cajas es un accesorio esencial para automatizar el proceso de embalaje. Su sistema de derivación asegura que las bolsas o cajas sean transportadas de manera eficiente a diferentes líneas de producción, mejorando la productividad y reduciendo los tiempos de espera.",
      },
    },
  },
  reciclaje: {
    prensasCompactadoras: {
      titles: ["PH3", "PH5"],
      title: "Equipos de Reciclaje",
      characteristics: [
        "Diseñados para optimizar el proceso de compactación de residuos.",
        "Garantizan un alto rendimiento y eficiencia en el manejo de desechos.",
      ],
      PH_3: {
        title: "PH 3",
        image: "/img/maquina1.jpg",
        description:
          "La prensa compactadora PH 3 es una máquina diseñada para optimizar el proceso de compactación de residuos, garantizando un alto rendimiento y eficiencia. Su sistema hidráulico de alta potencia permite manejar una gran variedad de materiales, logrando una reducción significativa del volumen para facilitar su almacenamiento y transporte.",
      },
      PH_5: {
        title: "PH 5",
        image: "/img/maquina1.jpg",
        description:
          "La prensa compactadora PH 5 es una opción ideal para la compactación de grandes volúmenes de residuos. Gracias a su tecnología avanzada, ofrece una compresión precisa y controlada, aumentando la capacidad de carga y reduciendo costos operativos. Es ideal para entornos industriales que requieren manejo de desechos a gran escala.",
      },
    },
  },
  acondicionamiento: {
    titles: ["Zarandas", "Desterronadores"],

    zarandas: {
      title: "Equipos de Acondicionamiento",
      characteristics: [
        "Diseñados para la clasificación y acondicionamiento de materiales.",
        "Mejoran la calidad del producto final y optimizan la producción.",
      ],
      Z3_200: {
        title: "Z3 200",
        image: "/img/maquina1.jpg",
        description:
          "La zaranda Z3 200 es una máquina eficiente para la clasificación de materiales, diseñada para separar partículas según su tamaño. Con un sistema de cribado robusto y preciso, permite un control óptimo del proceso de acondicionamiento, mejorando la calidad del producto final y optimizando la producción.",
      },
      Z2_100: {
        title: "Z2 100",
        image: "/img/maquina1.jpg",
        description:
          "La zaranda Z2 100 es una máquina compacta y eficiente, ideal para el cribado de materiales en procesos de acondicionamiento. Su diseño modular y flexible permite adaptarse a distintas necesidades de producción, proporcionando una clasificación de alta precisión para una variedad de aplicaciones industriales.",
      },
    },
    desterronadores: {
      title: "Equipos de Acondicionamiento",
      characteristics: [
        "Diseñados para la clasificación y acondicionamiento de materiales.",
        "Mejoran la calidad del producto final y optimizan la producción.",
      ],
      DST: {
        title: "DST",
        image: "/img/maquina1.jpg",
        description:
          "El desterronador DST es una máquina diseñada para la desintegración y acondicionamiento de materiales con alta densidad o que tienden a formar terrones. Su sistema de trabajo permite obtener un material más homogéneo, facilitando procesos posteriores como el transporte o almacenamiento de productos a granel.",
      },
    },
  },
};
