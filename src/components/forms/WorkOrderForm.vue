<template>
  <base-form
    @close="$emit('close')"
    :title="title"
    :action="action"
    :editState="editState"

  >
    <v-layout row slot="form-fields">
        <!-- Vehicle select -->
        <v-combobox
          box
          :search-input.sync="search"
          v-model="vehicle"
          :items="vehicles"
          label="Start typing vehicle VIN..."
        ></v-combobox>
    </v-layout>
  </base-form>
</template>

<script>
  import BaseForm from '@/components/forms/_BaseForm'

  export default {
    props: ['title', 'action', 'editState'],

    data: () => ({
      search: '',
      vehicle: '',
      vehicles: []
    }),

    watch: {
      search (v){
        if(v){
          if(v.length > 5){
            //
            // Poplate this.vehicles with results from API
            //
          }
        }
      }

    },

    components: {
      'base-form': BaseForm
    },

    methods: {
      searchCustomers (v){
        console.log(v + ' search')
      }
    }
  }
</script>
