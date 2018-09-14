<template>
  <v-container fluid>
    <v-layout row>
      <open-work-orders></open-work-orders>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row class="mt-4">
      <recent-invoices></recent-invoices>
    </v-layout>
  </v-container>

</template>

<script>
  import OpenWorkOrders from '@/components/iterators/OpenWorkOrders'
  import RecentInvoices from '@/components/iterators/RecentInvoices'

  export default{
    components: {
      'open-work-orders': OpenWorkOrders,
      'recent-invoices': RecentInvoices
    }
  }
</script>
