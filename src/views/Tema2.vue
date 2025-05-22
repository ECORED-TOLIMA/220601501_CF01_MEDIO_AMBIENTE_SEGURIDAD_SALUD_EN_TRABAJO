<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de seguridad y salud en el trabajo

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La Seguridad y Salud en el Trabajo (SST) es una disciplina orientada a promover y mantener el bienestar físico, mental y social de los trabajadores, a través de la prevención de accidentes y enfermedades laborales. En Colombia, todas las organizaciones, sin importar su tamaño o sector económico, están obligadas a implementar el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), de acuerdo con lo establecido en el Decreto 1072 de 2015 y la Ley 1562 de 2012.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 En síntesis, la SST busca evitar que los trabajadores sufran daños a su salud por condiciones propias del trabajo, promoviendo entornos laborales seguros y saludables. El siguiente esquema presenta de manera general los fundamentos de esta disciplina y su alcance:

    .row.justify-content-center.mb-5
      .col-lg
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          i Esquema de Seguridad y Salud en el Trabajo (SST )
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img02.png' alt="En la figura 2 se presenta el objetivo de la Seguridad y Salud en el Trabajo (SST), el cual se centra en la prevención de lesiones y enfermedades derivadas de las condiciones laborales, así como en la promoción y protección de la salud física, mental y social de los trabajadores.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img02a.png' alt="En la figura 2 se presenta el objetivo de la Seguridad y Salud en el Trabajo (SST), el cual se centra en la prevención de lesiones y enfermedades derivadas de las condiciones laborales, así como en la promoción y protección de la salud física, mental y social de los trabajadores.")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Identificación de peligros
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La identificación de peligros es un proceso fundamental en la gestión de la Seguridad y Salud en el Trabajo (SST). Este consiste en reconocer elementos, condiciones o actos presentes en el entorno laboral que puedan generar daño a la salud de los trabajadores, comprometer su integridad física o afectar el entorno laboral.
        .tarjeta.BG01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img03.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 En el contexto de la SST, un peligro se define como una fuente, situación o acto con potencial de causar daño, ya sea en términos de lesiones o enfermedades, o en afectaciones a la propiedad, el ambiente de trabajo o ambos. La correcta identificación de estos peligros permite implementar estrategias de control eficaces.
        p.mb-0 Según la Guía Técnica Colombiana GTC 45 de 2012, los peligros se clasifican en las siguientes categorías:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img04.jpg' alt="Imagen decorativa")

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
        p.mb-0 #[b Físicos:] incluyen factores ambientales como ruido, vibraciones, temperaturas extremas, radiaciones, presiones anormales, entre otros.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
        p.mb-0 #[b Químicos:] se refiere a sustancias o productos que pueden causar efectos adversos por inhalación, absorción o ingestión, tales como gases, vapores, líquidos y polvos.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
        p.mb-0 #[b Biológicos:] comprende virus, bacterias, hongos, parásitos y demás microorganismos que puedan causar enfermedades.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img08.svg' alt="Imagen decorativa")
        p.mb-0 #[b Ergonómicos:] están relacionados con la interacción entre el trabajador, las herramientas y el entorno, incluyendo posturas forzadas, movimientos repetitivos, esfuerzos excesivos y estaciones de trabajo mal diseñadas.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img09.svg' alt="Imagen decorativa")
        p.mb-0 #[b Psicosociales:] asociados a factores como la carga laboral, el acoso, el estrés, el liderazgo inadecuado y la falta de apoyo social.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img10.svg' alt="Imagen decorativa")
        p.mb-0 #[b Mecánicos o de seguridad:] se vinculan a equipos o maquinarias en mal estado, herramientas defectuosas, superficies inestables, falta de protecciones, etc.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img11.svg' alt="Imagen decorativa")
        p.mb-0 #[b Fenómenos naturales:] como sismos, inundaciones, rayos, incendios forestales, que pueden poner en riesgo a las personas en ciertas zonas geográficas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Cada tipo de peligro requiere métodos específicos para su análisis y control, y su identificación es clave para el desarrollo de programas de intervención que salvaguarden la salud y bienestar de los trabajadores.
    
    .tarjeta.BG01.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src='@/assets/curso/tema1/img51.svg' alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              h4.TC3 Decreto Único Reglamentario del Sector Trabajo 1072 de 2015
              p.mb-0 Para profundizar este concepto en la normativa vigente, se recomienda consultar el Decreto Único Reglamentario del Sector Trabajo 1072 de 2015, actualizado en abril de 2016. Disponible en:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img12.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        p La identificación de peligros y la valoración de riesgos permite establecer medidas y actividades precisas para eliminar o minimizar los riesgos en el lugar de trabajo. Para ello, es necesario aplicar una metodología sistemática, que garantice un análisis integral y documentado.
        p Entre las metodologías más utilizadas se encuentran:
        .tarjeta.BG06.p-4
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Método INSHT (España):] emplea listas de chequeo para verificar deficiencias en los lugares de trabajo.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b BS 8800 (Reino Unido):] guía para sistemas de gestión en SST, basada en ISO 14001 y publicada por la British Standards Institution en 1996.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Método FINE:] método probabilístico que utiliza una fórmula matemática para calcular el grado de peligrosidad, considerando la probabilidad, las consecuencias y la exposición.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Para efectos prácticos, se recomienda emplear como referencia la metodología de la #[b GTC 45 de 2012], la cual proporciona directrices para la identificación de peligros y valoración de riesgos en las organizaciones, con la posibilidad de adaptarlas según las características propias de cada empresa.
        p Ahora bien, en este punto es importante #[b identificar los peligros asociados a condiciones de seguridad], los cuales se refieren a condiciones peligrosas derivadas del estado de equipos, objetos, instalaciones o locaciones, que, al entrar en contacto con las personas, pueden generar lesiones físicas o incluso la muerte, dependiendo del tiempo e intensidad del contacto.
        p.mb-0 Estos peligros incluyen:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img13.jpg' alt="Imagen decorativa")

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img14.svg' alt="Imagen decorativa")
        p.mb-0 #[b Locativos:] relacionados con el estado de paredes, pisos, techos, sistemas de almacenamiento y superficies de trabajo. Consecuencias: caídas, golpes y otros accidentes.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img15.svg' alt="Imagen decorativa")
        p.mb-0 #[b Mecánicos:] derivados del uso de herramientas, maquinaria, piezas móviles o materiales proyectados. Consecuencias: cortes, atrapamientos, aplastamientos, impactos, amputaciones, entre otros.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img16.svg' alt="Imagen decorativa")
        p.mb-0 #[b Eléctricos:] posibilidad de contacto directo o indirecto con corriente eléctrica. Consecuencias: electrocución, quemaduras, explosiones e incluso la muerte.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img17.svg' alt="Imagen decorativa")
        p.mb-0 #[b Tecnológicos:] incluyen fugas, derrames, explosiones e incendios. Consecuencias: intoxicaciones, quemaduras y pérdida de vidas.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img18.svg' alt="Imagen decorativa")
        p.mb-0 #[b Públicos:] hacen referencia a riesgos como robos, secuestros, atentados o delitos internos. Consecuencias: lesiones físicas, daños psicológicos e incluso fallecimientos.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img19.svg' alt="Imagen decorativa")
        p.mb-0 #[b Accidentes de tránsito:] ocurren durante desplazamientos laborales en vehículos de la empresa o contratados. Consecuencias: lesiones, pérdida de vidas, daños a terceros y secuelas físicas o psicológicas.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img20.svg' alt="Imagen decorativa")
        p.mb-0 #[b Trabajo en alturas:] actividades realizadas a más de 1.5 metros de altura o por debajo del nivel cero (pozos, tanques, excavaciones profundas). Consecuencias: caídas con resultados graves o fatales.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img21.svg' alt="Imagen decorativa")
        p.mb-0 #[b Trabajo en espacios confinados:] lugares con ingreso limitado, no diseñados para ocupación humana continua (tanques, ductos, silos). Consecuencias: dificultad de evacuación, falta de oxígeno, exposición a sustancias tóxicas.
      .tarjeta.BGIMG06.p-4
        .row.justify-content-center.mb-4
          .col-lg-5.col-7
            img(src='@/assets/curso/tema2/img22.svg' alt="Imagen decorativa")
        p.mb-0 #[b Fenómenos naturales:] eventos como terremotos, tsunamis, derrumbes, vendavales, granizadas y heladas. Consecuencias: daños estructurales, afectaciones a trabajadores y pérdida de activos.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Riesgos y medidas de intervención
    
    .row.justify-content-center.mb-5
      .col-lg-6.px-0.order-lg-1.order-2(data-aos="fade-right")
        .BG08.h-100.p-4
          .row.mb-4
            .col-lg-2.col-4
              img.w-75(src='@/assets/curso/tema2/img23.svg' alt="Imagen decorativa")
          p.mb-0 El riesgo en el contexto de la seguridad y salud en el trabajo se refiere a la probabilidad de que un peligro cause daño, lesión o enfermedad en el entorno laboral. Este riesgo está determinado por la exposición al peligro y la gravedad de las posibles consecuencias. Mientras que el peligro es la fuente que puede causar daño, el riesgo es la probabilidad de que ese daño ocurra. La gestión de riesgos implica evaluar y reducir la probabilidad de que se materialicen los peligros, así como mitigar la severidad de sus efectos.
      .col-lg-6.px-0.order-lg-2.order-1(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img24.jpg' alt="Imagen decorativa")

    p.mb-5 Los riesgos se clasifican según las fuentes de peligros presentes en el entorno laboral. Algunos de los principales tipos de riesgos incluyen:

    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-4(data-aos="fade-right")
        .tarjeta--boton.BGIMG07.h-100.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img25.svg', alt="Imagen decorativa")
            h4.text-center Riesgos físicos
            p.mb-0 Son aquellos derivados de factores ambientales, como ruido, vibraciones, temperaturas extremas, radiaciones, etc.
      .col-lg-3.col-6.mb-4(data-aos="flpi-right")
        .tarjeta--boton.BGIMG07.h-100.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img26.svg', alt="Imagen decorativa")
            h4.text-center Riesgos químicos
            p.mb-0 Provienen de la exposición a sustancias químicas peligrosas, como gases, vapores, líquidos, polvos, entre otros.
      .col-lg-3.col-6.mb-4(data-aos="flpi-left")
        .tarjeta--boton.BGIMG07.h-100.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img27.svg', alt="Imagen decorativa")
            h4.text-center Riesgos biológicos
            p.mb-0 Involucran la exposición a virus, bacterias, hongos y otros microorganismos que pueden causar enfermedades.
      .col-lg-3.col-6.mb-4(data-aos="fade-left")
        .tarjeta--boton.BGIMG07.h-100.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img28.svg', alt="Imagen decorativa")
            h4.text-center Riesgos ergonómicos
            p.mb-0 Están relacionados con posturas inadecuadas, movimientos repetitivos, esfuerzo físico excesivo, y otros factores que afectan la salud musculoesquelética del trabajador.
      .col-lg-3.col-6.mb-4(data-aos="fade-right")
        .tarjeta--boton.BGIMG07.h-100.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img29.svg', alt="Imagen decorativa")
            h4.text-center Riesgos psicosociales
            p.mb-0 Se derivan de factores como el estrés, la carga de trabajo, el acoso laboral, y las relaciones laborales inadecuadas.
      .col-lg-3.col-6.mb-4(data-aos="flip-right")
        .tarjeta--boton.BGIMG07.h-100.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img30.svg', alt="Imagen decorativa")
            h4.text-center Riesgos mecánicos o de seguridad
            p.mb-0 Relacionados con la exposición a maquinarias defectuosas, herramientas mal mantenidas, o condiciones inseguras en el lugar de trabajo.
      .col-lg-3.col-6.mb-4(data-aos="flip-left")
        .tarjeta--boton.BGIMG07.h-100.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img31.svg', alt="Imagen decorativa")
            h4.text-center Riesgos tecnológicos
            p.mb-0 Estos riesgos surgen por fallos en equipos o procesos tecnológicos, como fugas, incendios, o explosiones.
      .col-lg-3.col-6.mb-4(data-aos="fade-left")
        .tarjeta--boton.BGIMG07.h-100.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img32.svg', alt="Imagen decorativa")
            h4.text-center Riesgos naturales
            p.mb-0 Se derivan de fenómenos naturales como terremotos, tormentas, inundaciones, etc., que pueden afectar la seguridad de los trabajadores y las instalaciones.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Una vez que se han identificado los peligros y evaluado los riesgos, es crucial establecer medidas de intervención para eliminarlos o controlarlos. Estas acciones deben ser adoptadas según la jerarquía de control de riesgos, priorizando las medidas más efectivas.
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p Las medidas de intervención se dividen en las siguientes categorías:
        AcordionA(tipo="a" clase-tarjeta="tarjeta BG04" data-aos="zoom-in")
          .row.justify-content-center(titulo="Eliminación del peligro")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Consiste en suprimir completamente la fuente del riesgo. Es la medida más eficaz, aunque no siempre posible. Por ejemplo, eliminar el uso de una sustancia tóxica reemplazándola por otra segura.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img33.jpg' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Sustitución")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Se refiere al reemplazo de materiales, procesos o equipos peligrosos por otros que presenten menor riesgo. Un ejemplo es cambiar una máquina ruidosa por una de menor emisión sonora.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img34.jpg' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Controles de ingeniería")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Son modificaciones físicas al ambiente laboral, como instalar sistemas de ventilación, barreras de protección, encierros de maquinaria o aislamiento de fuentes peligrosas.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img35.jpg' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Controles administrativos")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Implican cambios en la organización del trabajo, como establecer pausas activas, rotación de personal, capacitación, señalización y procedimientos seguros.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img36.jpg' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Elementos de protección personal (EPP)")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Se usan cuando no es posible eliminar el peligro por otros medios. Incluyen cascos, guantes, gafas de seguridad, tapabocas, protectores auditivos, entre otros. Deben ser seleccionados adecuadamente y utilizados correctamente.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img37.jpg' alt="Imagen decorativa")

    p.mb-5 La efectividad de estas medidas depende de su correcta planificación, implementación, seguimiento y mejora continua, enmarcada dentro del SG-SST y en cumplimiento de la normativa nacional vigente.

    .tarjeta.BG01.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src='@/assets/curso/tema1/img51.svg' alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              h4.TC3 Guía para la identificación de peligros, valoración de riesgos y determinación de controles
              p.mb-0 Para mayor información sobre la identificación, evaluación de riesgos y medidas de intervención, se recomienda consultar la GTC 45 de 2012, disponible en el siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHG01.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .BGIMG01.px-md-5.px-4.mb-5
      separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Exposición
      
      p La exposición se refiere a la situación en la cual una persona entra en contacto con uno o varios peligros presentes en su entorno laboral, lo que puede generar un riesgo para su salud o seguridad. Comprender los niveles de exposición permite evaluar con mayor precisión la probabilidad de ocurrencia de un evento no deseado y, por tanto, tomar decisiones adecuadas para su control.
      p.mb-5 Según la Guía Técnica Colombiana GTC 45 (2012), la exposición puede clasificarse en:

      .row.justify-content-center.mb-5
        .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjeta.color-primario.h-100
            figure
              img(src='@/assets/curso/tema2/img38.png' alt="Imagen decorativa")
            .p-4
              p.mb-0 #[b 1. Continua:] la persona se encuentra expuesta sin interrupciones o de forma prolongada durante la jornada laboral. Este tipo de exposición representa un alto nivel de riesgo por su duración sostenida.
        .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flpi-right")
          .tarjeta.color-secundario.h-100
            figure
              img(src='@/assets/curso/tema2/img39.png' alt="Imagen decorativa")
            .p-4
              p.mb-0 #[b 2. Frecuente:] la exposición ocurre varias veces durante la jornada, pero en periodos cortos. Aunque menos intensa que la continua, sigue siendo significativa por su repetitividad.
        .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flpi-left")
          .tarjeta.color-primario.h-100
            figure
              img(src='@/assets/curso/tema2/img40.png' alt="Imagen decorativa")
            .p-4
              p.mb-0 #[b 3. Ocasional:] la persona entra en contacto con el peligro solo una o pocas veces en la jornada laboral, y por un tiempo breve. El riesgo es menor, pero no debe ignorarse.
        .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
          .tarjeta.color-secundario.h-100
            figure
              img(src='@/assets/curso/tema2/img41.png' alt="Imagen decorativa")
            .p-4
              p.mb-0 #[b 4. Esporádica:] la exposición se da de forma muy eventual o accidental, con baja frecuencia. Aun así, puede implicar riesgos importantes dependiendo de la naturaleza del peligro.

    p Determinar el tipo de exposición es esencial para evaluar el nivel de riesgo y definir la urgencia y tipo de medida de intervención que debe aplicarse. Esta información debe registrarse y actualizarse como parte del diagnóstico del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Actos y condiciones subestándar
    
    .row.justify-content-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img42.svg' alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 En el ámbito de la seguridad y salud en el trabajo, es fundamental identificar las causas que pueden generar accidentes o enfermedades laborales. Estas causas se clasifican en dos grandes categorías: los actos subestándar y las condiciones subestándar. Comprender estas diferencias permite a las organizaciones implementar medidas preventivas eficaces y reducir la ocurrencia de incidentes que afecten la integridad física, mental o social de los trabajadores. Tanto los actos como las condiciones subestándar son indicadores de fallas en la cultura preventiva de la empresa y deben ser intervenidos oportunamente dentro del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .BG06.p-4
          p #[b a) Acto subestándar:] es toda acción u omisión cometida por un trabajador que incrementa la probabilidad de ocurrencia de un accidente o enfermedad laboral. Generalmente, los actos subestándar son voluntarios o producto del desconocimiento, y reflejan comportamientos inseguros dentro del entorno de trabajo. Ejemplos de actos subestándar (NTC 3701):
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | No comunicar un peligro identificado.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Distraer la atención de un compañero durante una labor crítica.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Operar maquinaria sin la debida autorización.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Utilizar herramientas defectuosas o en mal estado.
          p #[b b) Condición subestándar:] es toda situación anómala en el entorno laboral que representa un riesgo potencial para la seguridad o salud del trabajador. Se relaciona principalmente con fallas en la infraestructura, maquinaria, equipos o ambiente de trabajo. Ejemplos de condiciones subestándar (NTC 3701):
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Máquinas sin mantenimiento preventivo o con sistemas de seguridad ausentes.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Instalaciones eléctricas defectuosas.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Iluminación inadecuada en áreas operativas.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Almacenamiento inadecuado de sustancias químicas.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img43.jpg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Estas situaciones deben ser identificadas a través de inspecciones periódicas, reportes de los trabajadores y diagnósticos técnicos, para implementar acciones correctivas que minimicen los riesgos.
      
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Enfermedad y accidente laboral
    
    p.mb-5 Uno de los objetivos principales del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) es prevenir la ocurrencia de enfermedades y accidentes laborales. Para ello, es necesario comprender las diferencias entre ambos conceptos, conocer su definición legal y entender las implicaciones que tienen para los trabajadores y las organizaciones. La correcta identificación y reporte de estos eventos permite a las empresas tomar decisiones acertadas en materia de prevención, rehabilitación y compensación, conforme a lo establecido en la legislación colombiana.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #B0EBD5; border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Enfermedad laboral
      
    p.mb-5 De acuerdo con el artículo 4 del Decreto 1295 de 1994 (modificado por el Decreto 1477 de 2014), una enfermedad laboral es aquella “contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ve obligado a laborar”. El Decreto 1477 de 2014 establece la tabla de enfermedades laborales reconocidas en Colombia, clasificadas según los factores de riesgo físicos, químicos, biológicos, psicosociales, entre otros. La inclusión en esta tabla es fundamental para que una enfermedad sea reconocida y cubierta por el sistema de riesgos laborales. A continuación, se presentan algunos ejemplos:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img44.svg' alt="Imagen decorativa")
          p.mb-0 Pérdida auditiva inducida por ruido continuo en ambientes industriales.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.color-secundario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img45.svg' alt="Imagen decorativa")
          p.mb-0 Dermatitis causada por contacto frecuente con sustancias químicas sin protección adecuada.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-acento-contenido.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img46.svg' alt="Imagen decorativa")
          p.mb-0 Trastornos musculoesqueléticos por movimientos repetitivos o posturas prolongadas.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #B0EBD5; border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Accidente de trabajo
    
    p.mb-5 Según el artículo 3 del Decreto 1295 de 1994, un accidente de trabajo es “todo suceso repentino que sobrevenga por causa o con ocasión del trabajo, y que produzca en el trabajador una lesión orgánica, una perturbación funcional, una invalidez o la muerte”. También se considera accidente de trabajo aquel que ocurre durante el traslado directo del trabajador entre su residencia y el lugar de trabajo. A continuación, se presentan algunos ejemplos:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img47.svg' alt="Imagen decorativa")
          p.mb-0 Un trabajador que sufre una caída al resbalar en una zona húmeda sin señalización.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.color-secundario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img48.svg' alt="Imagen decorativa")
          p.mb-0 Una lesión muscular ocasionada al levantar una carga pesada sin ayuda técnica.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-acento-contenido.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img49.svg' alt="Imagen decorativa")
          p.mb-0 Un accidente vial ocurrido mientras el trabajador se desplaza al trabajo en una ruta directa.

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img50.jpg' alt="Imagen decorativa")
      .col-lg-8.px-0(data-aos="fade-left")
        .BG07.h-100.p-4
          p Ambos eventos deben ser reportados oportunamente al empleador, al Sistema General de Riesgos Laborales y a la ARL correspondiente, para garantizar una atención adecuada, la investigación del suceso y la adopción de medidas preventivas y correctivas.
          p.mb-0 La Ley 1562 de 2012, por su parte, refuerza el enfoque preventivo del SG-SST y amplía el concepto de salud ocupacional, promoviendo entornos de trabajo seguros y saludables, e incluyendo el bienestar físico, mental y social del trabajador.

    .tarjeta.BG01.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src='@/assets/curso/tema1/img51.svg' alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              h4.TC3 Sistema de riesgos laborales
              p.mb-0 Para revisar este y otros conceptos en la normativa vigente consulte la Ley 1562 de 2012.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5 Para facilitar la comprensión de las diferencias y características entre enfermedad laboral y accidente de trabajo, a continuación, se presenta un cuadro comparativo que resume sus principales aspectos:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          i Cuadro comparativo entre enfermedad laboral vs. accidente de trabajo
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #3ACC97; width: 20%; font-size: 18px;") Criterio
                th(style="background-color: #3ACC97; width: 40%; font-size: 18px;") Enfermedad laboral
                th(style="background-color: #3ACC97; width: 40%; font-size: 18px;") Accidente de trabajo
            tbody
              tr(data-aos="fade-right")
                th(style="background-color: #F6F6F6;") Origen
                td(style="background-color: #F6F6F6;") Exposición prolongada a factores de riesgo inherentes al trabajo.
                td(style="background-color: #F6F6F6;") Evento repentino ocurrido por causa o con ocasión del trabajo.
              tr(data-aos="fade-right")
                th(style="background-color: #FFF;") Tiempo de manifestación
                td(style="background-color: #FFF;") Progresivo, puede tardar días, meses o años en aparecer.
                td(style="background-color: #FFF;") Inmediato o en corto plazo tras el evento.
              tr(data-aos="fade-right")
                th(style="background-color: #F6F6F6;") Ejemplos
                td(style="background-color: #F6F6F6;") Hipoacusia por ruido, lesiones músculo-esqueléticas, enfermedades respiratorias.
                td(style="background-color: #F6F6F6;") Caídas, golpes, cortaduras, electrocuciones.
              tr(data-aos="fade-right")
                th(style="background-color: #FFF;") Reconocimiento legal
                td(style="background-color: #FFF;") Requiere estar incluida en la tabla de enfermedades del Decreto 1477 de 2014.
                td(style="background-color: #FFF;") Se reconoce si ocurre en relación directa con el trabajo o en el trayecto laboral.
              tr(data-aos="fade-right")
                th(style="background-color: #F6F6F6;") Implicaciones
                td(style="background-color: #F6F6F6;") Requiere diagnóstico médico, reporte y validación por la ARL para reconocimiento.
                td(style="background-color: #F6F6F6;") Debe reportarse inmediatamente; puede requerir investigación del accidente.
              tr(data-aos="fade-right")
                th(style="background-color: #FFF;") Prevención
                td(style="background-color: #FFF;") Mediante controles a los factores de riesgo en el ambiente laboral.
                td(style="background-color: #FFF;") Mediante señalización, capacitación, controles técnicos y administrativos.
    
    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Condiciones de salud
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Las condiciones de salud hacen referencia al conjunto de factores fisiológicos, psicológicos, sociales y culturales que afectan el bienestar de los trabajadores y que permiten establecer un perfil general de la población laboral. Estos factores pueden ser identificados tanto a través de mediciones objetivas como por medio del autorreporte de los trabajadores.
        .tarjeta.BG01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img51.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0  Según la Ley 1562 de 2012, las condiciones de salud incluyen elementos como antecedentes médicos, presencia de enfermedades crónicas, condiciones mentales, hábitos de vida, entorno familiar y social, entre otros. Su análisis permite identificar tendencias de morbilidad y factores de riesgo prevalentes en un grupo de trabajo.
        p Evaluar las condiciones de salud es fundamental para:
        .tarjeta.BG06.p-4
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Diseñar e implementar programas de promoción de la salud y prevención de enfermedades.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Detectar riesgos específicos que puedan agravarse en ciertos puestos de trabajo.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Tomar decisiones informadas sobre adaptaciones laborales o reintegros.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              | Garantizar ambientes laborales saludables y equitativos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img52.jpg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 La información recopilada debe ser tratada bajo criterios éticos de confidencialidad, y su uso debe estar orientado a la mejora continua del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).
    
    separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.7 Estructuras organizacionales del SG-SST
    
    p.mb-5 El Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) requiere una estructura organizacional definida que garantice la planificación, ejecución, evaluación y mejora continua de las acciones preventivas dentro de una empresa. Esta estructura está compuesta por roles, responsabilidades y funciones específicas asignadas a diferentes actores que, en conjunto, velan por la protección y bienestar de los trabajadores. Su diseño depende del tamaño de la empresa, el nivel de riesgo y la normatividad vigente en Colombia.

    .BGIMG01.px-md-5.px-4.mb-5
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-3.col-6.px-0.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img53.png' alt="Imagen decorativa")
        .col-lg-7.px-0
          .BG06.h-100.p-4
            .h4 Comité Paritario de Seguridad y Salud en el Trabajo (COPASST)
            p.mb-0 Es un organismo de promoción y vigilancia encargado de velar por el cumplimiento de las normas y programas de seguridad y salud en el trabajo. Se conforma de manera paritaria entre representantes del empleador y de los trabajadores. Es obligatorio en empresas con más de 10 trabajadores.
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-3.col-6.px-0.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img54.png' alt="Imagen decorativa")
        .col-lg-7.px-0
          .BG06.h-100.p-4
            .h4 Vigía de Seguridad y Salud en el Trabajo
            p.mb-0 Aplica para empresas con menos de 10 trabajadores, donde no es obligatorio conformar un COPASST. El vigía cumple funciones similares en cuanto a la promoción de la seguridad y la identificación de riesgos.
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-3.col-6.px-0.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img55.png' alt="Imagen decorativa")
        .col-lg-7.px-0
          .BG06.h-100.p-4
            .h4 Responsable del SG-SST
            p.mb-0 Es la persona designada por la empresa para coordinar la implementación, mantenimiento y mejora del sistema. Debe contar con formación y experiencia en el tema, y su perfil está regulado por el Decreto 1072 de 2015 y la Resolución 0312 de 2019.
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-3.col-6.px-0.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img56.png' alt="Imagen decorativa")
        .col-lg-7.px-0
          .BG06.h-100.p-4
            .h4 Alta dirección
            p.mb-0 Tiene la responsabilidad de liderar, apoyar y proporcionar los recursos necesarios para el cumplimiento del SG-SST. Su compromiso se refleja en la definición de políticas, asignación de roles, y toma de decisiones informadas con base en los resultados del sistema.

    .BG01.mb-5(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-7.order-lg-1.order-2.px-0
          .p-4
            .row.mb-4
              .col-lg-2.col-4
                img(src='@/assets/curso/tema2/img57.svg' alt="Imagen decorativa")
            p El COPASST debe estar conformado por un número igual de representantes del empleador y de los trabajadores. Su propósito es hacer seguimiento a las condiciones de seguridad y salud en el trabajo, promover ambientes laborales saludables y canalizar las inquietudes de los trabajadores hacia la administración.
            p.mb-0 Según la normativa vigente, todas las empresas públicas o privadas con diez (10) o más trabajadores están obligadas a conformar este comité. En empresas con menos de diez trabajadores, se debe designar un vigía de seguridad y salud en el trabajo.
        .col-lg-5.col-10.order-lg-2.order-1.px-0.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img58.png' alt="Imagen decorativa")
        
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3.
          i Conformación del COPASST según el tamaño de la empresa
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #3ACC97; font-size: 18px;") Tipos de empresas
                th(style="background-color: #3ACC97; font-size: 18px;") Conformación del COPASST
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Menos de 10 trabajadores
                td(style="background-color: #F6F6F6;") 1 vigía
              tr(data-aos="fade-right")
                td(style="background-color: #FFF;") De 10 a 49 trabajadores
                td(style="background-color: #FFF;") 1 representante por parte
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") De 50 a 499 trabajadores
                td(style="background-color: #F6F6F6;") 2 representantes por parte
              tr(data-aos="fade-right")
                td(style="background-color: #FFF;") De 500 a 999 trabajadores
                td(style="background-color: #FFF;") 3 representantes por parte
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Más de 1000 trabajadores
                td(style="background-color: #F6F6F6;") 4 representantes por parte

    p.mb-5 Funciones principales del COPASST:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Proponer medidas y actividades para mantener y mejorar las condiciones de salud y seguridad en el trabajo.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-right")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Participar en la capacitación de trabajadores, supervisores y directivos en temas de salud ocupacional.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-left")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Vigilar el cumplimiento de las actividades en medicina, higiene y seguridad industrial, promoviendo la difusión de las normas y reglamentos.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Colaborar en el análisis de las causas de accidentes y enfermedades laborales, proponiendo medidas correctivas pertinentes.

    p.mb-5 Este comité está regulado por la Resolución 2013 de 1986 y el Decreto 1072 de 2015. Para más información, se pueden consultar las normas en los siguientes enlaces:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        a.anexo.h-100.mb-4(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=5411" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 Resolución 2013 de 1986 - Por la cual se reglamenta la organización y funcionamiento de los Comités de Medicina, Higiene y Seguridad Industrial en los lugares de trabajo.
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-left")
        a.anexo.h-100.mb-4(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 Decreto 1072 de 2015 - Decreto Único Reglamentario del Sector Trabajo.
    
    separador
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.8 Programas de higiene y seguridad en el trabajo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Los programas de higiene y seguridad en el trabajo son componentes esenciales dentro del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), diseñados para gestionar los riesgos identificados en cada actividad económica y proceso productivo. Su planificación se basa en los resultados de la identificación de peligros y la valoración de riesgos, y su implementación está liderada por el responsable del SG-SST, con el apoyo del Comité Paritario de Seguridad y Salud en el Trabajo (COPASST) y la alta dirección.
        .tarjeta.BG04.p-4.mb-4
          .row.justify-content-center
            .col-lg-1.col-2
              img(src='@/assets/curso/tema2/img59.svg' alt="Imagen decorativa")
            .col
              p.mb-0 Estos programas consisten en un conjunto de actividades sistemáticas, desarrolladas en un periodo de tiempo determinado, orientadas a prevenir la ocurrencia de accidentes laborales y enfermedades de origen ocupacional, mejorando así las condiciones de trabajo y promoviendo una cultura de prevención.
        p.mb-0 Programas fundamentales en el SG-SST:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img60.png' alt="Imagen decorativa")

    .BGIMG01.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img61.png' alt="Imagen decorativa")
        .col-lg-9(data-aos="fade-left")
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img62.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programa de elementos de protección personal (EPP)]
              p.mb-0 Garantiza la selección, dotación, uso adecuado y mantenimiento de los elementos de protección requeridos para cada actividad laboral.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img63.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programa de fomento de estilos de vida saludable]
              p.mb-0 Promueve hábitos que favorecen la salud física y mental de los trabajadores, como alimentación balanceada, actividad física y manejo del estrés.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img64.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programa de intervención del riesgo psicosocial]
              p.mb-0 Identifica, evalúa y mitiga factores que afectan el bienestar emocional y psicológico de los trabajadores, tales como la carga laboral, el acoso o el clima organizacional negativo.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img65.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programas de vigilancia epidemiológica]
              p.mb-0 Monitorean de forma permanente las condiciones de salud de los trabajadores para detectar, controlar y prevenir enfermedades relacionadas con el trabajo.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img66.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programa de mantenimiento preventivo y correctivo]
              p.mb-0 Asegura que las instalaciones, herramientas y equipos estén en condiciones óptimas para su uso seguro, evitando fallas que puedan generar riesgos.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img67.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programa de prevención, preparación y respuesta ante emergencias]
              p.mb-0 Establece los lineamientos y procedimientos para actuar ante situaciones de emergencia como incendios, terremotos, fugas químicas, entre otros.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img68.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programa de inducción, capacitación y entrenamiento]
              p.mb-0 Facilita el aprendizaje continuo en materia de seguridad y salud, fortaleciendo competencias y promoviendo la apropiación de prácticas seguras.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img69.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programa de saneamiento básico ambiental]
              p.mb-0 Controla aspectos como la limpieza, desinfección, manejo de residuos y condiciones higiénicas generales en el entorno laboral.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img70.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG02.px-1 Programa de auditoría]
              p.mb-0 Evalúa de manera periódica el cumplimiento y efectividad del SG-SST, proponiendo acciones correctivas y de mejora continua.

    p.mb-5 Otros programas complementarios según el contexto laboral:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.BG06.p-4
          ul.lista-ul--color
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Programa de uso seguro de herramientas de mano:] enseña prácticas seguras para la manipulación y mantenimiento de herramientas manuales, reduciendo riesgos de lesiones.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Programa para la prevención del riesgo eléctrico:] establece medidas preventivas para evitar accidentes por contacto eléctrico, cortocircuitos y sobrecargas.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Programa para la prevención de patologías comunes:] busca reducir enfermedades prevalentes como trastornos osteomusculares o enfermedades respiratorias, asociadas al tipo de labor.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Programa de rehabilitación de la salud de los trabajadores:] facilita la recuperación e inclusión laboral de trabajadores que han sufrido accidentes o enfermedades de origen laboral.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Programa de prevención y protección contra caídas:] define medidas para realizar trabajos en alturas de manera segura, reduciendo el riesgo de caídas graves.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Programa de capacitación para trabajo seguro en alturas:] forma al personal que ejecuta labores a más de 1.5 metros de altura, cumpliendo con los requisitos legales y técnicos establecidos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Cada uno de estos programas debe estar documentado, contar con responsables asignados, cronogramas definidos, recursos adecuados y mecanismos de seguimiento para garantizar su efectividad y cumplimiento de la normatividad vigente.

    separador
    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.9 Reglamentos de higiene, seguridad y salud en el trabajo

    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img71.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Los reglamentos de higiene, seguridad y salud en el trabajo son documentos normativos internos que definen las condiciones, normas y procedimientos que deben seguir tanto empleadores como trabajadores para garantizar un ambiente laboral seguro, saludable y conforme con la legislación vigente. Estos reglamentos son de obligatorio conocimiento y cumplimiento por parte de todos los integrantes de la organización.

    TabsC.color-acento-botones.mb-5(data-aos="zoom-out")
      .BGIMG02.p-4(titulo="a)	Reglamento interno de trabajo")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img72.png' alt="Imagen decorativa")
          .col-lg-7
            p.mb-0 Es un documento que contiene el conjunto de normas que regulan las relaciones laborales dentro de la empresa. Establece las condiciones a las que deben sujetarse empleador y trabajadores en la prestación del servicio, incluyendo derechos, deberes, sanciones y procedimientos disciplinarios. Este reglamento se elabora de acuerdo con lo dispuesto en el Código Sustantivo del Trabajo y debe ser aprobado por el Ministerio del Trabajo.
      .BGIMG02.p-4(titulo="b)	Reglamento de Higiene y Seguridad Industrial")
        .row.justify-content-center
          .col-lg
            p De acuerdo con el artículo 349 del Código Sustantivo del Trabajo, todo empleador que tenga a su servicio 10 o más trabajadores permanentes está obligado a elaborar un reglamento de higiene y seguridad industrial. Este documento tiene como finalidad prevenir accidentes y enfermedades laborales, estableciendo normas claras sobre el comportamiento esperado en materia de seguridad. El reglamento debe contemplar:
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fa-solid.fa-helmet-safety.TC2
                | Los peligros asociados a la actividad económica y los procesos de la empresa.
              li(style="margin-bottom: 2px")
                i.fa-solid.fa-helmet-safety.TC2
                | Las obligaciones del empleador y de los trabajadores en cuanto a la prevención de riesgos laborales.
              li(style="margin-bottom: 2px")
                i.fa-solid.fa-helmet-safety.TC2
                | La adopción de normas técnicas y legales vigentes en materia de salud ocupacional.
              li(style="margin-bottom: 2px")
                i.fa-solid.fa-helmet-safety.TC2
                | La implementación de programas de medicina preventiva, higiene industrial y seguridad laboral.
              li(style="margin-bottom: 2px")
                i.fa-solid.fa-helmet-safety.TC2
                | Las acciones necesarias para el cumplimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).

    p Ambos reglamentos deben ser revisados y actualizados de forma periódica, especialmente cuando se presenten cambios en los procesos productivos, en la normativa legal o en los riesgos identificados en el lugar de trabajo. Además, es responsabilidad del empleador garantizar su adecuada divulgación entre los trabajadores, mediante inducciones, capacitaciones o medios físicos y digitales accesibles.
    p El cumplimiento de estos reglamentos fortalece la cultura de autocuidado, promueve ambientes de trabajo más seguros y saludables, y contribuye al cumplimiento de la normativa laboral colombiana.

    separador
    #t_2_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.10 Políticas de seguridad y salud en el trabajo
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img73.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Las políticas de seguridad y salud en el trabajo son un conjunto de principios y directrices adoptadas por las empresas para promover y proteger la salud y bienestar de los trabajadores, asegurando un ambiente laboral seguro y saludable. Estas políticas deben ser claramente definidas, comunicadas a todos los niveles organizacionales y reflejar el compromiso de la empresa con la prevención de accidentes, enfermedades laborales y la mejora continua en los procesos de seguridad y salud en el trabajo.
    
    p.mb-5 Los objetivos de la política de seguridad y salud en el trabajo contienen:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.h-100
          figure
            img(src='@/assets/curso/tema2/img74.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 #[b Prevención de accidentes y enfermedades laborales:] la política debe enfocarse en identificar, evaluar y controlar los riesgos que puedan causar daño a la salud de los trabajadores, implementando medidas preventivas adecuadas.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.color-secundario.h-100
          figure
            img(src='@/assets/curso/tema2/img75.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 #[b Cumplimiento de la legislación vigente:] es fundamental que la política cumpla con las normativas nacionales e internacionales relacionadas con la seguridad y salud en el trabajo, como lo estipula la Ley 1562 de 2012 y los Decretos 1072 de 2015 y 1443 de 2014, que regulan la gestión del SG-SST.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.color-primario.h-100
          figure
            img(src='@/assets/curso/tema2/img76.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 #[b Promoción de la salud laboral:] además de prevenir accidentes, las políticas deben fomentar hábitos saludables entre los trabajadores, promoviendo el bienestar físico y mental dentro del ambiente laboral.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-secundario.h-100
          figure
            img(src='@/assets/curso/tema2/img77.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 #[b Participación activa de los trabajadores:] la política debe asegurar la participación activa de los trabajadores en la implementación y evaluación del SG-SST, ya que ellos son los que tienen el conocimiento directo sobre los riesgos presentes en sus actividades diarias.

    p.mb-5 Es importante identificar los componentes clave de una política de seguridad y salud en el trabajo:

    .BGM09.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          LineaTiempoD.color-acento-botones
            p(numero="A" titulo="Compromiso de la alta dirección") La dirección de la empresa debe mostrar su total compromiso con la implementación de las políticas de seguridad y salud, asignando recursos necesarios y liderando el cambio cultural dentro de la organización.
            p(numero="B" titulo="Identificación y evaluación de riesgos") La política debe establecer un proceso continuo de identificación, evaluación y control de los peligros presentes en el entorno laboral, asegurando que todas las áreas de trabajo estén evaluadas y se tomen medidas adecuadas para mitigar los riesgos.
            p(numero="C" titulo="Capacitación y entrenamiento") La formación continua en temas de seguridad y salud es crucial. Los trabajadores deben recibir capacitación periódica sobre los riesgos a los que están expuestos y sobre las mejores prácticas para prevenir accidentes y enfermedades.
            p(numero="D" titulo="Manejo de emergencias") La política debe incluir procedimientos claros para actuar en caso de emergencias laborales, tales como incendios, derrames químicos, accidentes graves, entre otros.
            p(numero="E" titulo="Monitoreo y mejora continua") Es esencial que la política de seguridad y salud en el trabajo incluya mecanismos de seguimiento y evaluación para medir su efectividad. Esto puede implicar auditorías periódicas, informes de accidentes, análisis de incidentes y la revisión de indicadores de salud laboral.
            p(numero="F" titulo="Bienestar psicológico") Considerando el impacto de factores psicosociales en la salud laboral, la política debe abordar aspectos como el estrés laboral, el acoso laboral, la carga emocional y la gestión del bienestar psicológico de los trabajadores.
        .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img78.jpg' alt="Imagen decorativa")

    p.mb-5 Los beneficios de implementar una política de seguridad y salud en el trabajo son:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img79.svg' alt="Imagen decorativa")
          p.mb-0 #[b Reducción de accidentes y enfermedades:] una correcta implementación de la política contribuye a la reducción significativa de accidentes de trabajo y enfermedades profesionales.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-right")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img80.svg' alt="Imagen decorativa")
          p.mb-0 #[b Mejora en la productividad:] un entorno de trabajo seguro y saludable mejora el rendimiento laboral, reduciendo el ausentismo y la rotación de personal.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-left")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img81.svg' alt="Imagen decorativa")
          p.mb-0 #[b Cumplimiento normativo:] cumplir con las normativas nacionales e internacionales evita sanciones y mejora la reputación de la empresa.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img82.svg' alt="Imagen decorativa")
          p.mb-0 #[b Bienestar general de los trabajadores:] los trabajadores que se sienten seguros y protegidos son más felices, lo que contribuye a un ambiente laboral positivo y una mayor satisfacción en el trabajo.

    p.mb-5 Las referencias normativas que se aplican actualmente son:

    .tarjeta--container.row.mb-4
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.p-4
          .row.mb-4
            .col-lg-5.col-6
              img(src='@/assets/curso/tema2/img83.png' alt="Imagen decorativa")
          p.mb-0 Ley 1562 de 2012: por la cual se modifican algunas disposiciones del sistema de riesgos laborales en Colombia.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.color-secundario.p-4
          .row.mb-4
            .col-lg-5.col-6
              img(src='@/assets/curso/tema2/img84.png' alt="Imagen decorativa")
          p.mb-0 Decreto 1072 de 2015: Decreto Único Reglamentario del Sector Trabajo, que establece las disposiciones sobre SG-SST.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-acento-contenido.p-4
          .row.mb-4
            .col-lg-5.col-6
              img(src='@/assets/curso/tema2/img85.png' alt="Imagen decorativa")
          p.mb-0 Guía Técnica Colombiana GTC 45 de 2012: directrices sobre la identificación y evaluación de riesgos en el lugar de trabajo.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
