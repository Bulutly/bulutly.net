<template>
  <section class="pt-20 pb-25">
    <div class="container">
      <IndexFeaturesCards :data="cardData" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const cardData = ref<IFeatureCard[]>([
  {
    title: "What is an SSL certificate?",
    subtitle: {
      text: "SSL certificate",
      color: "#ee9823",
    },
    description:
      "  An SSL certificate acts as third-party verification for a website’s security. It verifies the strength of the Secure Socket Layer encryption used when a user connects to the site and connects that encryption to the organization or individual that owns and maintains the website. SSL certification and validation are a necessary piece of web security for any business that collects information from its users.  No matter what level of security you choose, your users will recognize that your site is safe, and that leads to greater trust in your brand online.",

    image: {
      path: "img/demo/ssl-link.png",
      backgroundColor: "transparent",
    },
  },
  {
    title: "Multi-Domain SSL",
    subtitle: {
      text: " every day, all the time",
      color: "#ff2934",
    },

    description:
      " Wildcard SSL certificates allow site owners to provide security for multiple subdomains on a single unique domain. A wildcard SSL certificate issued to *.domain.com can be used to secure hostnames such as.",
    image: {
      path: "img/demo/features/services-3.png",
      backgroundColor: "transparent",
    },
  },
  {
    title: "Secure certificates for better prices",
    subtitle: {
      text: " Super fast development",
      color: "#ee9823",
    },
    description:
      "Needing to purchase an SSL certificate should not mean breaking the bank. coodiv offers cheap, secure certificates with the  highest level of encryption available, in line with industry data protection standards. Why pay more when you really don’t have to? And because SSL certificate costs are low, you are free to spend your budget on other important areas, such as marketing or website development. Anyone with a website these days needs to purchase an SSL certificate. It’s no longer a nice-to-have security add-on but a must-have if you want your site to be considered trustworthy. Higher user awareness, web browser developers, and search engines are to thank for that.",
    image: {
      path: "img/demo/features/services.png",
      backgroundColor: "transparent",
    },
    button: {
      exist: false,
    },
  },
]);
</script>

<style></style>
