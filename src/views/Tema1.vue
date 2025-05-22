<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de medio ambiente
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Incluso en zonas industrializadas y en valles de cemento, puede aparecer una flor silvestre en una grieta del asfalto o escucharse el canto de un pájaro entre el ruido de los automóviles. Estas presencias, aunque pequeñas, nos recuerdan nuestra esencia natural. A lo largo de la historia, el ser humano no solo ha dependido del aire, del agua, de los animales y paisajes, sino que ha intentado comprender su relación con el entorno. En este contexto, surgen una serie de conceptos clave que permiten comprender los fundamentos del medio ambiente.
        p #[mark.BG02.px-1 Ecología:] término acuñado por el zoólogo alemán Ernst Haeckel en 1870 (del griego oikos, casa, y logos, tratado), es la ciencia que estudia las relaciones recíprocas entre los organismos y su medio. Estas relaciones incluyen factores físicos (como la luz, la temperatura o el viento), químicos (como el oxígeno o el carbono) y biológicos, que interactúan constantemente en complejos sistemas interdependientes. (Arana, 1982).
        p.mb-0 #[mark.BG02.px-1 Biodiversidad:] se refiere a la variedad de organismos vivos en todos los niveles, incluyendo diversidad genética, de especies y de ecosistemas. Se estima que existen alrededor de 10 millones de especies en el planeta, de las cuales solo el 15 % han sido identificadas científicamente (Crisci, 2006). Colombia ocupa el segundo lugar mundial en biodiversidad de especies de vertebrados y plantas vasculares (Conabio, 2010), y cuenta con una gran riqueza en invertebrados y flora diversa.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img01.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          i Distribución del número total de especies registradas en Colombia
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img02.svg' alt="En la figura 1 se presenta la distribución del número total de especies registradas en Colombia por departamento. Se reportan 79.828 especies, con Antioquia como el departamento con mayor biodiversidad, concentrando el 27,2 % del total nacional.")
          figcaption Nota. <span style="font-weight: 400">Tomado de SiB  (2025).</span>

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img03.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p #[mark.BG02.px-1 Ambiente:] es un sistema dinámico y complejo, compuesto por elementos bióticos (vivos) y abióticos (inertes), así como por sus relaciones e interacciones. También incluye componentes inmateriales, como valores culturales o simbólicos. (Wilches-Chaux, 2013). El estudio del ambiente abarca tanto las leyes naturales que rigen los ecosistemas como las relaciones sociales humanas. Se suele clasificar en medio natural y medio social. (Guerrero, 2016).
        p #[mark.BG02.px-1 Ecosistema:] es un sistema formado por comunidades de seres vivos (biocenosis) y el entorno físico (biotopo) con el que interactúan. A través de los flujos de materia, energía e información, se establecen relaciones complejas que dan lugar al funcionamiento del ecosistema. (Guerrero, 2015).
        p.mb-0 #[mark.BG02.px-1 Desarrollo sostenible:] es el modelo que busca satisfacer las necesidades del presente sin comprometer las posibilidades de las generaciones futuras. Se basa en tres pilares: ambiental, social y económico. Este enfoque fue popularizado por el Informe Brundtland en 1987 y es la base de las agendas globales de sostenibilidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p #[mark.BG02.px-1 Huella ecológica:] es un indicador que permite calcular la demanda de recursos naturales que genera una persona, organización o país. Se expresa en hectáreas globales necesarias para producir los recursos consumidos y absorber los residuos generados. Ayuda a entender el impacto humano sobre la capacidad de regeneración del planeta.
        p #[mark.BG02.px-1 Cambio climático:] hace referencia a las variaciones significativas y persistentes en los patrones climáticos del planeta, atribuibles en gran medida a actividades humanas que generan gases de efecto invernadero. Estas alteraciones afectan los ecosistemas, la biodiversidad y las dinámicas socioeconómicas.
        p.mb-0 #[mark.BG02.px-1 Contaminación ambiental:] es la presencia o introducción de agentes contaminantes en el entorno natural que causan efectos adversos en el medio ambiente o en la salud humana. Puede ser química (metales pesados), física (ruido, radiación) o biológica (virus, bacterias).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img04.jpg' alt="Imagen decorativa")
      
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Componentes del medio ambiente
    
    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p El medio ambiente está conformado por un conjunto de elementos interrelacionados que constituyen el entorno natural y social en el que se desarrolla la vida. Estos componentes se agrupan en dos grandes categorías: naturales y sociales o antrópicos. Su interacción define las condiciones para la existencia de los seres vivos y determina el equilibrio ecológico.
        p.mb-0 Los principales componentes son:
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-sm-8.col-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img06.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-4
              span
                i.fas.fa-chevron-circle-up.fa-2x.TC1.me-3
                i.fas.fa-chevron-circle-down.fa-2x.TC1.me-3
              h4.mb-0 Bióticos
            p.text-center.mb-0 Incluyen todos los seres vivos, como plantas, animales, hongos, microorganismos y seres humanos. Estos organismos forman comunidades que interactúan entre sí y con su entorno, y se dividen en productores, consumidores y descomponedores.
      .col-xl-4.col-lg-6.col-sm-8.col-10.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img07.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-4
              span
                i.fas.fa-chevron-circle-up.fa-2x.TC1.me-3
                i.fas.fa-chevron-circle-down.fa-2x.TC1.me-3
              h4.mb-0 Abióticos
            p.text-center.mb-0 Comprenden los factores físicos y químicos no vivos, como el aire, el agua, el suelo, la luz solar, la temperatura y los minerales. Estos elementos influyen en el desarrollo y distribución de los seres vivos.
      .col-xl-4.col-lg-6.col-sm-8.col-10.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img08.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.BG03.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-4
              span
                i.fas.fa-chevron-circle-up.fa-2x.TC1.me-3
                i.fas.fa-chevron-circle-down.fa-2x.TC1.me-3
              h4.mb-0 Socioeconómicos
            p.text-center.mb-0 Están representados por las actividades humanas, como la producción, el consumo, la urbanización, la tecnología, la cultura y las políticas públicas. Estos componentes modifican directa o indirectamente el entorno natural, generando impactos positivos o negativos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Comprender los componentes del medio ambiente es fundamental para analizar cómo las acciones humanas afectan los ecosistemas y para proponer estrategias de manejo sostenible que garanticen la conservación de los recursos naturales y la calidad de vida.

    .BGIMG01.px-md-5.px-4.mb-5
      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Ecosistemas
    
      p Un ecosistema es un sistema natural conformado por una comunidad de organismos vivos (factores bióticos) que interactúan entre sí y con su entorno físico (factores abióticos), como el clima, el suelo, el agua y la luz solar. Estas interacciones permiten el flujo de energía y el ciclo de los nutrientes, manteniendo el equilibrio y la dinámica del sistema.
      p.mb-5 Los ecosistemas pueden clasificarse según su ubicación y características principales:
      .tarjeta--container.row.justify-content-center
        .col-lg-5.px-0.tarjeta.color-primario(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img09.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 #[strong Ecosistemas terrestres:] se desarrollan sobre la superficie del suelo y varían de acuerdo con el clima y la vegetación dominante. Incluyen bosques, selvas, desiertos, sabanas, páramos y tundras.
        .col-lg-5.px-0.tarjeta.color-secundario(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/img10.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 #[strong Ecosistemas acuáticos:] se encuentran en cuerpos de agua y se dividen en ecosistemas de agua dulce (ríos, lagos y humedales) y marinos (océanos, mares, arrecifes de coral y estuarios).

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img11.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Cada ecosistema posee una estructura (organización de los componentes) y una función (procesos ecológicos que permiten su funcionamiento), como la fotosíntesis, la depredación, la polinización, la descomposición y la regulación del clima.
        .tarjeta.BG01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img12.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Los ecosistemas pueden ser naturales, cuando no han sido alterados significativamente por la actividad humana, o humanizados o transformados, cuando han sido modificados para el desarrollo de actividades como la agricultura, la urbanización o la industria.
        p.mb-0 La conservación de los ecosistemas es esencial para garantizar la provisión de servicios ecosistémicos, como el suministro de agua y alimentos, la regulación del clima y la protección de la biodiversidad.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Servicios ecosistémicos
    
    p Según la Evaluación de los Ecosistemas del Milenio (2005), los servicios ecosistémicos son los beneficios que las personas obtienen de los ecosistemas, tanto de manera directa como indirecta. Estos servicios son fundamentales para sostener la vida en el planeta, ya que proporcionan los elementos esenciales para la salud, el bienestar, la economía y la cultura humana. Cuidar los ecosistemas y el capital natural que los sustenta es crucial para garantizar estos beneficios en el presente y en el futuro.
    p.mb-5 Los servicios ecosistémicos se clasifican en cuatro categorías principales:

    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta BG04" data-aos="zoom-in")
          .row.justify-content-center.align-items-center(titulo="1. Servicios de aprovisionamiento")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Son los productos obtenidos directamente de la naturaleza, como alimentos, agua dulce, leña, fibras, plantas medicinales y materiales de construcción. En Colombia, por ejemplo, los ecosistemas de páramo suministran agua potable a millones de personas.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img13.png' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center(titulo="2. Servicios de regulación")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Son los beneficios que se derivan de la capacidad de los ecosistemas para regular procesos naturales. Incluyen la regulación del clima, la calidad del aire, el control de enfermedades, la polinización, la fertilidad de los suelos y el control de inundaciones. Un ejemplo es la capacidad de los humedales para filtrar contaminantes y regular el flujo de agua.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img14.png' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center(titulo="3. Servicios culturales")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Son los valores no materiales que los ecosistemas brindan a las sociedades, como la recreación, el ecoturismo, la identidad cultural, la espiritualidad y el valor estético. En Colombia, muchos territorios indígenas consideran ciertos paisajes y especies como sagrados, lo cual refuerza el vínculo cultural con la naturaleza.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img15.png' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center(titulo="4. Servicios de soporte o sostenimiento")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Son aquellos procesos ecológicos fundamentales que permiten que los demás servicios existan. Incluyen el ciclo de los nutrientes, la formación de suelos, la fotosíntesis y la reproducción de especies. Aunque no se usan directamente, son esenciales para mantener el funcionamiento de los ecosistemas.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img16.png' alt="Imagen decorativa")

    .cajon.color-primario.p-4.mb-4
      p Colombia, como uno de los países más biodiversos del mundo, depende intensamente de los servicios ecosistémicos. Su agricultura, turismo, seguridad hídrica y diversidad cultural están íntimamente ligados a estos servicios. Sin embargo, la presión sobre los ecosistemas ha generado pérdida de servicios críticos, especialmente en regiones afectadas por deforestación, minería y cambio climático.
      p.mb-0 Promover la valoración, conservación y uso sostenible de los servicios ecosistémicos es clave para lograr un desarrollo sostenible en el país.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Transformación de los ecosistemas y cambio ambiental global
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Los ecosistemas naturales han sido profundamente transformados por las actividades humanas, especialmente durante los últimos siglos. La urbanización, la agricultura intensiva, la minería, la deforestación, el uso de combustibles fósiles y la industrialización han generado cambios irreversibles en los sistemas ecológicos del planeta. Estas transformaciones han reducido la capacidad de los ecosistemas para proveer servicios esenciales y han alterado los equilibrios que sostienen la vida.
        .row.justify-content-center.align-items-center
          .col-lg-1.col-2.px-0.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
          .col-lg-11
            p.mb-0 Una manera de comprender esta transformación es comparar las características de un ecosistema natural con un sistema humano simplificado, como se muestra a continuación:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img17.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          i Comparación entre un ecosistema natural y un sistema humano simplificado
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #3ACC97; width: 20%; font-size: 18px;") Características
                th(style="background-color: #3ACC97; width: 40%; font-size: 18px;") Ecosistema natural (bosque, pantano, pradera)
                th(style="background-color: #3ACC97; width: 40%; font-size: 18px;") Sistema humano simplificado (ciudad, fábrica, monocultivo)
            tbody
              tr(data-aos="fade-right")
                th(style="background-color: #F6F6F6;") Energía
                td(style="background-color: #F6F6F6;") Captura, convierte y almacena energía solar.
                td(style="background-color: #F6F6F6;") Consume energía de fuentes fósiles y nucleares.
              tr(data-aos="fade-right")
                th(style="background-color: #FFF;") Gases atmosféricos
                td(style="background-color: #FFF;") Produce oxígeno y captura dióxido de carbono.
                td(style="background-color: #FFF;") Produce dióxido de carbono al quemar combustibles.
              tr(data-aos="fade-right")
                th(style="background-color: #F6F6F6;") Suelo
                td(style="background-color: #F6F6F6;") Crea y conserva suelo fértil.
                td(style="background-color: #F6F6F6;") Agota o recubre el suelo fértil.
              tr(data-aos="fade-right")
                th(style="background-color: #FFF;") Agua
                td(style="background-color: #FFF;") Almacena, purifica y libera el agua gradualmente.
                td(style="background-color: #FFF;") Contamina y drena el agua rápidamente.
              tr(data-aos="fade-right")
                th(style="background-color: #F6F6F6;") Hábitat
                td(style="background-color: #F6F6F6;") Proporciona espacios para la vida silvestre.
                td(style="background-color: #F6F6F6;") Destruye o fragmenta hábitats naturales.
              tr(data-aos="fade-right")
                th(style="background-color: #FFF;") Desechos
                td(style="background-color: #FFF;") Filtra contaminantes y recicla nutrientes.
                td(style="background-color: #FFF;") Genera residuos que requieren tratamiento.
              tr(data-aos="fade-right")
                th(style="background-color: #F6F6F6;") Mantenimiento
                td(style="background-color: #F6F6F6;") Se autorregula y se renueva naturalmente.
                td(style="background-color: #F6F6F6;") Requiere intervención humana constante.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Estas modificaciones han contribuido al cambio ambiental global, un fenómeno caracterizado por alteraciones a gran escala en el clima, la biodiversidad, los ciclos del agua, la atmósfera y los suelos. Entre los principales impulsores del cambio global se encuentran:
        .row
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-4.px-0.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema1/img18.svg' alt="Imagen decorativa")
                .col-lg-10
                  p.mb-0 El cambio climático, causado por el aumento de gases de efecto invernadero.
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-4.px-0.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema1/img19.svg' alt="Imagen decorativa")
                .col-lg-10
                  p.mb-0 La pérdida de biodiversidad, resultado de la destrucción y fragmentación de hábitats.
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-4.px-0.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema1/img20.svg' alt="Imagen decorativa")
                .col-lg-10
                  p.pt-lg-4.mb-0 La contaminación del aire, agua y suelo.
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-4.px-0.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema1/img21.svg' alt="Imagen decorativa")
                .col-lg-10
                  p.mb-0 La sobreexplotación de recursos naturales.
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-4.px-0.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema1/img22.svg' alt="Imagen decorativa")
                .col-lg-10
                  p.mb-0 La introducción de especies invasoras.
        p Colombia, como uno de los países megadiversos, está especialmente expuesto a los efectos del cambio ambiental global. La transformación de sus ecosistemas, especialmente en la Amazonía, los páramos y las zonas costeras, amenaza no solo la biodiversidad, sino también la seguridad hídrica, alimentaria y climática de su población.
        .row.justify-content-center.align-items-center
          .col-lg-1.col-2.px-0.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
          .col-lg-11
            p.mb-0 Frente a este panorama, es urgente promover políticas y acciones orientadas a la conservación, restauración y uso sostenible de los ecosistemas, integrando la perspectiva ambiental en todas las actividades humanas.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img23.png' alt="Imagen decorativa")

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Impacto en los ecosistemas terrestres en Colombia
    
    p.mb-5 Colombia, por su riqueza biológica y variedad de ecosistemas, ha experimentado transformaciones profundas en sus ecosistemas terrestres debido a múltiples actividades humanas y al cambio climático. A continuación, se presentan algunos de los impactos más significativos observados en las últimas décadas:

    TabsC.color-acento-botones.mb-5(data-aos="zoom-out")
      .BGIMG02.p-4(titulo="Pérdida de páramos (1985 - 2005)")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img24.png' alt="Imagen decorativa")
          .col-lg-6
            p.mb-0 Durante este periodo, la tasa anual de pérdida de los ecosistemas de páramo en Colombia alcanzó el 17 %, una cifra alarmante considerando que estos ecosistemas son vitales para la regulación hídrica del país, la conservación de biodiversidad y el almacenamiento de carbono.
      .BGIMG02.p-4(titulo="Reducción de sabanas naturales (1987 - 2007)")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img24.png' alt="Imagen decorativa")
          .col-lg-6
            p.mb-0 En tan solo 20 años, la extensión de sabanas inundables, arenosas y altas disminuyó de 11.401 km² a 9.283 km², es decir, una reducción del 18,5 %. Este cambio ha sido impulsado principalmente por la conversión de tierras para actividades agrícolas, ganaderas y de infraestructura, alterando el equilibrio ecológico de estas regiones.
      .BGIMG02.p-4(titulo="Retroceso glaciar (1980 - 2010)")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img24.png' alt="Imagen decorativa")
          .col-lg-6
            p.mb-0 Las seis principales superficies glaciares del país "Sierra Nevada de Santa Marta, Sierra Nevada del Cocuy, y los volcanes-nevados del Ruiz, Santa Isabel, Tolima y Huila", han perdido en promedio un 57 % de su cobertura. Este fenómeno no solo evidencia el calentamiento global, sino que también amenaza el abastecimiento de agua para millones de personas.
      .BGIMG02.p-4(titulo="Proyección para 2032")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img24.png' alt="Imagen decorativa")
          .col-lg-6
            p.mb-0 Según WWF (2017), de mantenerse las tendencias actuales de calentamiento, los picos nevados podrían desaparecer completamente del paisaje colombiano en menos de una década, marcando un hito irreversible en la transformación del ecosistema andino y generando impactos hídricos, climáticos y culturales.

    p Estos datos reflejan una transformación profunda de los ecosistemas terrestres colombianos, impulsada por factores antrópicos como la deforestación, la expansión agrícola y urbana, así como por el cambio climático global. La urgencia de implementar estrategias de conservación, restauración y adaptación es cada vez mayor para asegurar la resiliencia ecológica del país.

    .BGM05.px-md-5.px-4.mb-5
      separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 La huella ecológica
      
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img28.jpg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          p La huella ecológica es un indicador ambiental que permite medir el impacto de las actividades humanas sobre el planeta. Representa la cantidad de recursos naturales que se requieren para sostener un determinado estilo de vida, teniendo en cuenta el consumo de bienes y servicios, así como la generación de residuos. Su unidad de medida son las hectáreas globales (hag), es decir, áreas con productividad promedio mundial capaces de generar recursos y absorber desechos.
          .tarjeta.BG01.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2.col-4.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img29.svg' alt="Imagen decorativa")
              .col-lg-10
                p.mb-0 Este indicador compara la demanda humana de recursos con la capacidad del planeta (biocapacidad) para regenerarlos. En ese sentido, cuanto mayor sea la huella ecológica de un individuo, comunidad o país, mayor será la presión ejercida sobre los ecosistemas, y menor la capacidad del entorno para mantenerse en equilibrio.

      p.mb-0 Las principales categorías de análisis de la huella ecológica son:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .tarjeta.BGIMG03
        figure
          img(src='@/assets/curso/tema1/img30.png' alt="Imagen decorativa")
        .p-4
          p.mb-0 #[b Producción de alimentos:] superficie agrícola necesaria para cultivar los alimentos consumidos por la población y para alimentar el ganado.
      .tarjeta.BGIMG03
        figure
          img(src='@/assets/curso/tema1/img31.png' alt="Imagen decorativa")
        .p-4
          p.mb-0 #[b Tierra de pastoreo:] área destinada a la producción de carne, productos lácteos, cuero y otros derivados animales.
      .tarjeta.BGIMG03
        figure
          img(src='@/assets/curso/tema1/img32.png' alt="Imagen decorativa")
        .p-4
          p.mb-0 #[b Pesca:] ecosistemas acuáticos utilizados para la pesca y acuicultura sostenida.
      .tarjeta.BGIMG03
        figure
          img(src='@/assets/curso/tema1/img33.png' alt="Imagen decorativa")
        .p-4
          p.mb-0 #[b Bosques productivos:] territorios necesarios para la obtención de madera, leña, papel y otros productos forestales.
      .tarjeta.BGIMG03
        figure
          img(src='@/assets/curso/tema1/img34.png' alt="Imagen decorativa")
        .p-4
          p.mb-0 #[b Infraestructura:] áreas ocupadas por ciudades, carreteras, construcciones industriales y otros elementos del entorno urbano.
      .tarjeta.BGIMG03
        figure
          img(src='@/assets/curso/tema1/img35.png' alt="Imagen decorativa")
        .p-4
          p.mb-0 #[b Huella de carbono:] representa la cantidad de bosques necesarios para absorber las emisiones de dióxido de carbono producto de la quema de combustibles fósiles, incendios forestales y actividades humanas relacionadas.

    p A nivel mundial, la huella ecológica está estrechamente relacionada con el consumo per cápita y el crecimiento poblacional. Algunos países presentan una biocapacidad superior a su demanda, lo que les permite sostener su desarrollo con menor presión ecológica. En cambio, aquellos con una huella mayor que su biocapacidad enfrentan un déficit ecológico, es decir, consumen más recursos de los que su territorio puede regenerar.
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img36.svg' alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Por ello, resulta clave promover estilos de vida sostenibles, fortalecer la educación ambiental y adoptar políticas que reduzcan la presión sobre los ecosistemas. Como afirma la WWF (2017), “cuanto mejor calificado esté un país en biocapacidad, mayor será su posibilidad de proveer servicios ecosistémicos; en la medida en que aumente la huella ecológica, este potencial se reduce”.

    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Cambio climático y sus efectos en Colombia
    
    p.mb-5 El cambio climático se refiere a las variaciones significativas y duraderas en los patrones del clima global, atribuidas principalmente al aumento de las concentraciones de gases de efecto invernadero (GEI) en la atmósfera, derivados de actividades humanas como la quema de combustibles fósiles, la deforestación y la agricultura intensiva.

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img37.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p En Colombia, los efectos del cambio climático ya son visibles y afectan tanto los ecosistemas como la calidad de vida de las comunidades. Entre los principales impactos se destacan:
        .BG06.p-4
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Aumento de la temperatura media:] se han registrado incrementos sostenidos que alteran los ciclos hidrológicos, reducen la disponibilidad de agua y afectan la biodiversidad.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Pérdida de glaciares:] los seis principales glaciares del país han retrocedido drásticamente, y se estima que para 2032 podrían desaparecer completamente, afectando las fuentes hídricas que abastecen a millones de personas.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Eventos extremos:] se han intensificado fenómenos como lluvias torrenciales, sequías prolongadas, inundaciones y deslizamientos de tierra, afectando especialmente a comunidades rurales y zonas costeras.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Afectación a la producción agrícola:] el cambio en los patrones de lluvia y temperatura impacta la seguridad alimentaria, reduciendo la productividad de cultivos sensibles como el café, el arroz y el maíz.
            li(style="margin-bottom: 2px")
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 #[b Riesgos para la salud humana:] el aumento de temperaturas y la variabilidad climática favorecen la expansión de enfermedades como el dengue, el zika y la malaria.

    .BGM07.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-2.col-4.px-0.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img38.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          p.mb-0 Colombia, como país megadiverso, enfrenta el reto de adaptarse al cambio climático protegiendo su riqueza natural y fortaleciendo estrategias de mitigación que reduzcan las emisiones de GEI. Esto incluye la promoción de energías limpias, la restauración de ecosistemas estratégicos y la educación ambiental para la acción colectiva.

    separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.8 Marco normativo ambiental en Colombia
    
    p.mb-5 El marco normativo ambiental en Colombia está conformado por un conjunto de leyes, decretos y normas que orientan la protección, conservación y uso sostenible de los recursos naturales. Este marco regula las acciones de los sectores públicos y privados para mitigar el impacto ambiental y promover el desarrollo sostenible.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #B0EBD5; border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Entre los instrumentos legales más relevantes se encuentran

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Ley 99 de 1993, que establece el Ministerio de Ambiente y organiza el Sistema Nacional Ambiental (SINA), definiendo los principios rectores de la gestión ambiental en el país.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flpi-right")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Ley 23 de 1973, considerada la Ley de Recursos Naturales Renovables, que regula el uso, manejo y conservación de estos recursos.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flpi-left")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Ley 70 de 1993, que reconoce los derechos colectivos de las comunidades afrocolombianas sobre el manejo de sus territorios y recursos naturales.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Ley 165 de 1994, que ratifica el Convenio sobre la Diversidad Biológica, comprometiendo al país con la conservación y uso sostenible de la biodiversidad.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Ley 1523 de 2012, que establece la política nacional de gestión del riesgo de desastres.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-right")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Ley 1715 de 2014, que promueve el uso de fuentes no convencionales de energía renovable en el sistema energético nacional.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="flip-left")
        .tarjeta.BGIMG04.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          p.mb-0 Decreto 1076 de 2015, que compila la normativa ambiental vigente en un solo cuerpo normativo.
      .col-lg-3.col-sm-6.col-10.mb-4(data-aos="fade-left")
        figure.h-100
          img(src='@/assets/curso/tema1/img39.svg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #B0EBD5; border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Normas técnicas internacionales complementarias

    p.mb-5 Además de las disposiciones legales, Colombia fomenta la implementación de normas técnicas internacionales que permiten una gestión ambiental más eficaz dentro de las organizaciones. Entre las más destacadas se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema1/img40.svg' alt="Imagen decorativa")
          p.mb-0 ISO 14001, estándar internacional para Sistemas de Gestión Ambiental (SGA), que ayuda a las organizaciones a mejorar su desempeño ambiental, cumplir con la normatividad, prevenir la contaminación y promover una cultura de sostenibilidad.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.color-secundario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema1/img41.svg' alt="Imagen decorativa")
          p.mb-0 ISO 14064, que proporciona herramientas para cuantificar, monitorear y reportar emisiones y remociones de gases de efecto invernadero, permitiendo establecer estrategias frente al cambio climático.
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-acento-contenido.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema1/img42.svg' alt="Imagen decorativa")
          p.mb-0 ISO 50001, norma sobre Sistemas de Gestión de la Energía, que contribuye a mejorar la eficiencia energética, reducir los costos y disminuir las emisiones de gases contaminantes.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 La integración de estas normas en los procesos productivos y administrativos de las empresas e instituciones públicas fortalece el cumplimiento de la legislación ambiental colombiana y potencia el compromiso con los Objetivos de Desarrollo Sostenible (ODS).

    separador
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.9 Conservación del medio ambiente
    
    p.mb-5 La conservación del medio ambiente es un concepto integral que busca proteger y preservar los recursos naturales y los ecosistemas para garantizar su disponibilidad para las futuras generaciones. Es una necesidad global, dada la creciente presión sobre los recursos naturales debido al crecimiento de la población, el desarrollo urbano y la actividad industrial. La conservación del medio ambiente abarca una variedad de prácticas y estrategias orientadas a mantener la biodiversidad, reducir la contaminación, mitigar el cambio climático y promover el uso sostenible de los recursos naturales. A continuación, se presentan algunas prácticas:

    .BGIMG05.px-md-5.px-4.py-4.mb-5(data-aos="zoom-in")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center(titulo="Protección de los ecosistemas")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Es esencial para mantener el equilibrio natural y garantizar la supervivencia de diversas especies. Los ecosistemas, como los bosques, los océanos, los humedales y las zonas de montaña, son esenciales no solo para la vida silvestre, sino también para los seres humanos, ya que proporcionan servicios ecosistémicos vitales, como la purificación del aire y del agua, la regulación del clima y la fertilidad del suelo. La deforestación, la sobreexplotación de los recursos naturales y la urbanización desmedida amenazan estos ecosistemas, por lo que es fundamental implementar estrategias de protección, como la creación de áreas protegidas, parques nacionales y reservas naturales.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img43.png' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Sostenibilidad de los recursos naturales")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 El uso sostenible de los recursos naturales implica gestionarlos de manera que se pueda satisfacer las necesidades actuales sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas. Esto incluye prácticas como la agricultura sostenible, la pesca responsable, la reforestación y el uso eficiente de los recursos hídricos y energéticos. El concepto de desarrollo sostenible, en el que se equilibran las necesidades económicas, sociales y ambientales, es clave para garantizar la conservación de los recursos naturales a largo plazo.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img44.png' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Reducción de la contaminación")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 La contaminación del aire, el agua y el suelo es una de las principales amenazas para el medio ambiente y la salud humana. El vertido de productos químicos tóxicos, la acumulación de desechos plásticos y la emisión de gases contaminantes afectan gravemente los ecosistemas y contribuyen al cambio climático. Las políticas públicas y las prácticas empresariales deben centrarse en la reducción de la contaminación a través de tecnologías limpias, el reciclaje, la reutilización de materiales y el tratamiento adecuado de los residuos industriales y urbanos. Además, es fundamental promover una conciencia ambiental entre la población para que cada individuo se responsabilice de sus acciones en relación con la generación de residuos y la contaminación.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img45.png' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Cambio climático y mitigación")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Es uno de los mayores retos ambientales del siglo XXI, impulsado principalmente por las actividades humanas, como la quema de combustibles fósiles y la deforestación. Este fenómeno está provocando alteraciones en los patrones climáticos, el aumento del nivel del mar y fenómenos meteorológicos extremos. La mitigación del cambio climático requiere la adopción de políticas que reduzcan las emisiones de gases de efecto invernadero, como la transición hacia fuentes de energía renovables, la promoción de la eficiencia energética y la reforestación. Además, es crucial la adaptación a los efectos inevitables del cambio climático, a través de la construcción de infraestructuras resilientes y el fortalecimiento de los sistemas de salud y la agricultura.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img46.png' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Educación y sensibilización ambiental")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 La educación ambiental es una herramienta poderosa para fomentar una cultura de conservación. Mediante la sensibilización y el aprendizaje sobre los problemas ambientales, se puede cambiar la actitud de las personas hacia el uso responsable de los recursos naturales. Programas educativos en escuelas, universidades y comunidades, junto con campañas de sensibilización, son esenciales para involucrar a la ciudadanía en la protección del medio ambiente. El cambio de comportamiento hacia prácticas más sostenibles, como la reducción del consumo de agua y energía, el uso de transporte público y el reciclaje, es fundamental para lograr avances en la conservación del medio ambiente.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img47.png' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Innovación y tecnología para la conservación")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Juega un papel crucial en la conservación del medio ambiente. Desde la implementación de energías renovables, como la solar y la eólica, hasta el desarrollo de tecnologías para la captura de carbono, la investigación y el uso de nuevas tecnologías pueden ayudar a mitigar los impactos negativos sobre el medio ambiente. La biotecnología, la nanotecnología y los sistemas inteligentes también tienen el potencial de mejorar la eficiencia en el uso de recursos y reducir los residuos. Además, el desarrollo de sistemas de monitoreo ambiental mediante satélites y sensores puede mejorar la capacidad de respuesta ante desastres naturales y ayudar en la gestión sostenible de los recursos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img48.png' alt="Imagen decorativa")
          .row.justify-content-center(titulo="Responsabilidad global y local")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 La conservación del medio ambiente es una responsabilidad compartida a nivel global y local. Si bien los problemas ambientales tienen un carácter mundial, como el cambio climático y la pérdida de biodiversidad, las soluciones deben ser adaptadas a contextos locales. Cada región del mundo enfrenta desafíos ambientales específicos y requiere enfoques y soluciones apropiadas para su situación. Los esfuerzos de conservación deben incluir tanto políticas globales, como el Acuerdo de París sobre el cambio climático, como acciones locales, como la gestión de áreas naturales protegidas y la promoción de prácticas sostenibles en las comunidades.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img49.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img50.jpg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 La conservación del medio ambiente es un compromiso colectivo que implica un cambio en los hábitos de consumo, el desarrollo de políticas sostenibles y el fomento de la educación ambiental. Para lograr un futuro sostenible, es fundamental actuar con responsabilidad, promover la cooperación internacional y adoptar prácticas que favorezcan el equilibrio entre el desarrollo humano y la preservación de la naturaleza. La acción consciente y la toma de decisiones informadas son claves para lograr una mejor calidad de vida para todos y preservar la riqueza natural de nuestro planeta.

    .tarjeta.BG01.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src='@/assets/curso/tema1/img51.svg' alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              h4.TC3 Aplicar práctica de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente
              p.mb-0 Para profundizar este y otros conceptos haga lectura del siguiente documento.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Medio_ambiente.pptx')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
// eslint-disable-next-line prettier/prettier
export default {
  name: 'Tema1',
  components: {},
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
