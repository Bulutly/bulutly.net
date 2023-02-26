<template>
  <div><h1>service page</h1></div>
</template>
<script>
export default {
  setup() {
    const { $global } = useAppConfig();
    $global.headerClass = "service-page";
  },
};
</script>
