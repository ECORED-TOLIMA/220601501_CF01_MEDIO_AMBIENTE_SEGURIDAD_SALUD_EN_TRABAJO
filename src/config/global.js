export default {
  global: {
    componenteFormativo:
      'Fundamentos de medio ambiente, seguridad y salud en el trabajo',
    descripcionCurso:
      'Este componente formativo introduce los conceptos básicos del medio ambiente, la seguridad y la salud en el trabajo, resaltando su importancia en la prevención de riesgos laborales y la sostenibilidad. Se abordan principios fundamentales que permiten reconocer condiciones seguras y saludables en el entorno laboral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de medio ambiente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes del medio ambiente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ecosistemas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Servicios ecosistémicos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Transformación de los ecosistemas y cambio ambiental global',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Impacto en los ecosistemas terrestres en Colombia',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'La huella ecológica',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Cambio climático y sus efectos en Colombia',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Marco normativo ambiental en Colombia',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Conservación del medio ambiente',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación de peligros',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Riesgos y medidas de intervención',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Exposición',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Actos y condiciones subestándar',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Enfermedad y accidente laboral',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Condiciones de salud',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Estructuras organizacionales del SG-SST',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Programas de higiene y seguridad en el trabajo',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Reglamentos de higiene, seguridad y salud en el trabajo',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Políticas de seguridad y salud en el trabajo',
            hash: 't_2_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1. Componentes del medio ambiente',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Indicadores ambientales [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YnI3J9G8FiA',
    },
    {
      tema: '1.9. Conservación del medio ambiente',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). ¿Qué es un promotor ambiental? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Xkx0ArrW9RY',
    },
    {
      tema: '2.1. Identificación de peligros',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Identificación de peligros [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UB3KeVKsAxY',
    },
    {
      tema: '2.5. Enfermedad y accidente laboral',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Reporte de accidentes laborales [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZB1yjVV8n5g',
    },
  ],
  glosario: [
    {
      termino: 'Accidente laboral',
      significado:
        'suceso repentino que ocurre durante el trabajo o con ocasión del mismo, que causa una lesión física o mental al trabajador. Está reconocido legalmente como riesgo profesional.',
    },
    {
      termino: 'Actos subestándar',
      significado:
        'comportamientos humanos inseguros que pueden generar incidentes o accidentes laborales, como no seguir procedimientos o manipular equipos de forma indebida.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'alteración global del clima atribuida en gran parte a las actividades humanas, como la quema de combustibles fósiles, que provocan el calentamiento global y fenómenos extremos.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'conjunto de seres vivos que interactúan entre sí y con su entorno físico en un área determinada, manteniendo un equilibrio natural.',
    },
    {
      termino: 'Elemento de protección personal',
      significado:
        'dispositivo que sirve como barrera entre un peligro y alguna parte del cuerpo.',
    },
    {
      termino: 'Enfermedad laboral',
      significado:
        'patología contraída como resultado de la exposición prolongada a factores de riesgo inherentes al trabajo o al medio en el que se labora.',
    },
    {
      termino: 'Huella ecológica',
      significado:
        'medida del impacto ambiental de una persona, organización o país, expresada en hectáreas necesarias para producir los recursos que consume y absorber los residuos que genera.',
    },
    {
      termino: 'Marco normativo ambiental',
      significado:
        'conjunto de leyes, políticas y reglamentos que establecen las responsabilidades, procedimientos y límites para proteger el medio ambiente.',
    },
    {
      termino: 'Riesgo',
      significado:
        'probabilidad de que un peligro cause daño, considerando la severidad del resultado y la frecuencia de la exposición.',
    },
    {
      termino: 'Servicios ecosistémicos',
      significado:
        'funciones y beneficios que la naturaleza proporciona a los seres humanos, tales como la regulación del clima, la fertilidad del suelo o el suministro de agua potable.',
    },
  ],
  referencias: [
    {
      referencia: 'Arana, F. (1982). Ecología para principiantes. Trillas.',
    },
    {
      referencia:
        'Arboleda, J. (2008). Manual para la evaluación de impacto ambiental. Medellín: Ediciones Universidad de Medellín.',
    },
    {
      referencia:
        'Becerra, M., Moreno, L., & Rueda, C. (2009). Cambio climático: lo que está en juego. Foro Nacional Ambiental.',
    },
    {
      referencia:
        'Bermúdez, O. (2016). Educación ambiental y prácticas sustentables. Instituto de Estudios Ambientales (IDEA), Universidad Nacional de Colombia.',
    },
    {
      referencia:
        'Crisci, J. V. (2006). Biodiversidad: crisis y conocimiento. Revista de la Academia Colombiana de Ciencias Exactas, Físicas y Naturales, 30(114), 499–507.',
    },
    {
      referencia:
        'CONABIO. (2010). Capital natural y bienestar social: hacia la valoración de los servicios ecosistémicos de México. Comisión Nacional para el Conocimiento y Uso de la Biodiversidad.',
    },
    {
      referencia:
        'Decreto 1072 de 2015. Decreto Único Reglamentario del Sector Trabajo. Diario Oficial No. 49.523, de 26 de mayo de 2015.',
    },
    {
      referencia:
        'Decreto 1076 de 2015. Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Diario Oficial No. 49.523, de 26 de mayo de 2015.',
    },
    {
      referencia:
        'Decreto Ley 2811 de 1974. Por el cual se dicta el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente. Diario Oficial No. 34.243, de 18 de diciembre de 1974.',
    },
    {
      referencia:
        'Earth Observatory. (2016). Visualización de agosto más cálido en 136 años.',
    },
    {
      referencia: 'Encolombia. (s.f.). Contaminación biológica.',
      link: 'https://encolombia.com/medio-ambiente/contaminacion-biologica/',
    },
    {
      referencia:
        'GTC 45. (2012). Guía técnica colombiana para la identificación de peligros y valoración de riesgos (3.ª ed.). ICONTEC.',
    },
    {
      referencia:
        'IDEAM, IAvH, & IIAP. (2017). Mapa de ecosistemas continentales, costeros y marinos de Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales.',
    },
    {
      referencia:
        'ISO. (2015). ISO 14001:2015 - Environmental management systems - Requirements with guidance for use. International Organization for Standardization.',
    },
    {
      referencia:
        'ISO. (2011). ISO 50001:2011 - Energy management systems - Requirements with guidance for use. International Organization for Standardization.',
    },
    {
      referencia:
        'ISO. (2018). ISO 14064-1:2018 - Greenhouse gases - Part 1: Specification with guidance at the organization level for quantification and reporting of greenhouse gas emissions and removals. International Organization for Standardization.',
    },
    {
      referencia:
        'Ley 23 de 1973. Por la cual se dictan normas sobre protección y aprovechamiento de los recursos naturales renovables. Diario Oficial No. 33.308, de 19 de diciembre de 1973.',
    },
    {
      referencia:
        'Ley 70 de 1993. Por la cual se desarrolla el artículo transitorio 55 de la Constitución Política. Diario Oficial No. 41.013, de 27 de agosto de 1993.',
    },
    {
      referencia:
        'Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente y se reordena el Sistema Nacional Ambiental, SINA. Diario Oficial No. 41.146, de 22 de diciembre de 1993.',
    },
    {
      referencia:
        'Ley 1523 de 2012. Por la cual se adopta la Política Nacional de Gestión del Riesgo de Desastres. Diario Oficial No. 48.426, de 24 de abril de 2012.',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales. Diario Oficial No. 48.488, de 11 de julio de 2012.',
    },
    {
      referencia:
        'Ley 165 de 1994. Por medio de la cual se aprueba el Convenio sobre la Diversidad Biológica. Diario Oficial No. 41.563, de 9 de noviembre de 1994.',
    },
    {
      referencia:
        'Ley 1715 de 2014. Por medio de la cual se regula la integración de las energías renovables no convencionales al sistema energético nacional. Diario Oficial No. 49.129, de 13 de mayo de 2014.',
    },
    {
      referencia:
        'Llorente-Bousquets, J., & Ocegueda, S. (2008). Estado del conocimiento de la biota. En: Capital Natural de México, vol. I: Conocimiento actual de la biodiversidad (pp. 283–322). Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO).',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). La contaminación atmosférica en Colombia.',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/contaminacion-atmosferica/',
    },
    {
      referencia:
        'Moreno, C. E. (2001). Métodos para medir la biodiversidad. Zaragoza: Sociedad Entomológica Aragonesa.',
    },
    {
      referencia:
        'Moreno, L., Rueda, C., & Andrade, G. (Eds.). (2018). Biodiversidad 2017: Estado y tendencias de la biodiversidad continental de Colombia. Instituto Humboldt.',
    },
    {
      referencia:
        'OCA UNAL. (2020). Observatorio de Conflictos Ambientales. Universidad Nacional de Colombia.',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2024). Contaminación del aire ambiente (exterior) y salud.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health',
    },
    {
      referencia:
        'Resolución 0312 de 2019. Por la cual se definen los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Ministerio del Trabajo. Diario Oficial No. 51.030, de 13 de febrero de 2019.',
    },
    {
      referencia:
        'Resolución 2013 de 1986. Por la cual se dictan disposiciones sobre el funcionamiento de los Comités Paritarios de Medicina, Higiene y Seguridad Industrial. Ministerio de Trabajo y Seguridad Social. Diario Oficial No. 37.172, de 29 de junio de 1986.',
    },
    {
      referencia:
        'Rodríguez, J. (2010). Contaminación del agua: una visión global. Fundación en causa por el desarrollo humano.',
    },
    {
      referencia:
        'Rodríguez-Eugenio, N., McLaughlin, M., & Pennock, D. (2019). Contaminación del suelo: una realidad oculta. FAO. https://www.fao.org',
    },
    {
      referencia:
        'Sánchez-Hidalgo, N. (2010). ABC del cambio climático. ACIAC.',
    },
    {
      referencia:
        'SiB Colombia. (2025). Cifras de biodiversidad en Colombia. Sistema de Información sobre Biodiversidad.',
      link: 'https://cifras.biodiversidad.co/colombia ',
    },
    {
      referencia:
        'WWF. (2017). Informe Planeta Vivo: Reducción de la biocapacidad y aumento de la huella ecológica.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander. Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Ligia Marcela Arévalo Guio',
          cargo: 'Experta disciplinar',
          centro: 'Regional Distrito Capital. Centro de Gestión Industrial.',
        },
        {
          nombre: 'Nidya Solórzano Ochoa',
          cargo: 'Experta disciplinar',
          centro: 'Regional Distrito Capital. Centro de Gestión Industrial.',
        },
        {
          nombre: 'Germán Leonel Sarmiento Cruz',
          cargo: 'Experto disciplinar',
          centro: 'Regional Distrito Capital. Centro de Gestión Industrial.',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Evaluadora instruccional',
          centro:
            'Regional Distrito Capital. Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Revisora de estilo',
          centro:
            'Regional Distrito Capital. Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
