<template>
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      {{ title }}
    </v-card-title>

    <v-card-text>
      <v-form>
        <slot name="form-fields"></slot>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="danger"
        flat
        @click="$emit('close')"
      >
        Cancel
      </v-btn>
      <v-btn
        color="primary"
        flat
        @click=""
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
			fields: {
				type: Object,
				required: true
			},
			action: {
				type: String,
				default: ''
			},
			editState: {
				default: false
			}
    },
  }
</script>
