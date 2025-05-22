<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/intro/img01.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p El componente “Fundamentos de medio ambiente, seguridad y salud en el trabajo”, aborda de manera integral dos dimensiones fundamentales para el desarrollo sostenible: la protección del entorno natural y la garantía de condiciones laborales seguras y saludables. Desde la perspectiva ambiental, se analizan los componentes del medio ambiente, los servicios ecosistémicos, el cambio climático, la huella ecológica y el marco normativo que orienta la conservación en Colombia. Estos conocimientos permiten comprender cómo las actividades humanas, incluidas las laborales, impactan el equilibrio ecológico.
        .tarjeta.BG01.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/intro/img02.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 En cuanto a la seguridad y salud en el trabajo, se estudian los principios básicos del SG-SST, incluyendo la identificación de peligros, el análisis de riesgos, las condiciones de exposición, así como las políticas y programas que promueven ambientes laborales seguros. Esta articulación entre medio ambiente y trabajo fomenta una cultura de prevención, cumplimiento normativo y sostenibilidad organizacional.
    
    p.mb-5 Para ampliar la comprensión sobre la importancia de estos temas, se recomienda acceder al siguiente video.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/w9li7fouTM4?si=YQN5JGTYkigeI-3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
