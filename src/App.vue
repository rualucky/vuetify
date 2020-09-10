<template>
  <v-app>
    <div style="height: 100%" v-if="loading">
      <v-progress-linear active indeterminate absolute top color="deep-purple accent-4"></v-progress-linear>
      <div class="d-flex justify-center align-center" style="height: 100%">
        <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
      </div>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    loading: false,
  }),
  created() {
    console.log('********', this.$route)
    const { name } = this.$route
    this.loading = !name
    setTimeout(() => {
      this.routeToLoginPage()
      this.loading = false
    }, 5000)
  },
  methods: {
    routeToLoginPage() {
      this.$router.push('/login').catch(() => {})
    },
  },
}
</script>
