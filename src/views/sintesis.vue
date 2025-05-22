<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda los principios fundamentales del medio ambiente, la seguridad y la salud en el trabajo, integrando conceptos clave como los ecosistemas, los servicios ecosistémicos, el cambio climático, la huella ecológica y el marco normativo ambiental, con elementos esenciales del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), como la identificación de peligros, evaluación de riesgos, enfermedades laborales y políticas preventivas. Su propósito es proporcionar a los aprendices una comprensión integral de cómo las condiciones ambientales y laborales se relacionan entre sí, promoviendo entornos sostenibles, seguros y saludables que garanticen el bienestar individual y colectivo, así como el cumplimiento normativo en los diferentes contextos productivos. 

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta la relación entre los fundamentos del medio ambiente y la seguridad y salud en el trabajo. Describe cómo los componentes ambientales como los ecosistemas, los servicios ecosistémicos y el cambio climático se conectan con los elementos del SG-SST, incluyendo la identificación de peligros, los riesgos laborales y las medidas preventivas. La integración de estos aspectos permite una gestión integral orientada al bienestar, la sostenibilidad y el cumplimiento normativo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
