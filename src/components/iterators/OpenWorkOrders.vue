<template>
  <v-container fluid grid-list-md>
    <v-layout row class="mb-4">
      <v-flex xs6>
        <h2 class="font-weight-thin ml-2">
          <v-icon>assignment</v-icon>
          Open Work Orders
        </h2>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs1 class="pt-0">
        <v-tooltip left>
          <v-btn
            slot="activator"
            @click="addWoDialog = true"
            left
            icon
            class="mt-0">
            <v-icon color="info">add_box</v-icon>
          </v-btn>
          <span>Add WO</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
    <v-data-iterator
      :items="workOrders"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        md3
        lg4
      >
        <v-card class="mb-4">
          <v-card-title>
            <h4>WRK-{{ props.item.id }}</h4>
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <v-icon slot="activator">more_horiz</v-icon>
              <v-list>
                <v-list-tile>
                  <v-list-tile-title>View</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Customer:</v-list-tile-content>
              <v-list-tile-content class="align-end grey--text lighten-1 font-weight-black">{{ props.item.customer }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Date:</v-list-tile-content>
              <v-list-tile-content class="align-end grey--text lighten-1 font-weight-black">{{ props.item.created_at }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Vehicle:</v-list-tile-content>
              <v-list-tile-content class="align-end grey--text lighten-1 font-weight-black">
                {{ props.item.year + ' ' + props.item.make + ' ' + props.item.model }}
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>

    <v-dialog v-model="addWoDialog" width="500" persistent>
      <work-order-form action="/work-orders/create" title="Add Work Order" @close="addWoDialog = false"></work-order-form>
    </v-dialog>

  </v-container>
</template>

<script>
  import WorkOrderForm from '@/components/forms/WorkOrderForm'

  export default {
    computed: {
      workOrders () {
        return this.$store.getters.workOrders;
      }
    },

    data: () => ({
      rowsPerPageItems: [3, 8, 12],
      pagination: {
        rowsPerPage: 3
      },
      addWoDialog: false
    }),

    components: {
      'work-order-form': WorkOrderForm
    }
  }
</script>
