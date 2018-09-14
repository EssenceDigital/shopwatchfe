import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: [
      {
        id: 1,
        first: 'Jack',
        last: 'Jones'
      },
      {
        id: 2,
        first: 'Paul',
        last: 'Tim'
      },
      {
        id: 3,
        first: 'Cindy',
        last: 'Smith'
      },
      {
        id: 4,
        first: 'Hellen',
        last: 'Huck'
      },
      {
        id: 5,
        first: 'Rick',
        last: 'Ralph'
      }
    ],
    workOrders: [
      {
        id: '001',
        created_at: '09/04/2018',
        customer: 'Jack Jones',
        year: '1999',
        make: 'Honda',
        model: 'Civic EX',
        motor: '1.6L',
        vin: 'OTLDKPATUQMHDGEHD',
        mileage: '215468'
      },
      {
        id: '002',
        created_at: '09/02/2018',
        customer: 'Paul Tim',
        year: '2006',
        make: 'GMC',
        model: 'Sierra 1500',
        motor: '5.7L',
        vin: 'UJDSLIEUTJDTIOPELGH',
        mileage: '178963'
      },
      {
        id: '003',
        created_at: '09/01/2018',
        customer: 'Cindy Smith',
        year: '2005',
        make: 'Saturn',
        model: 'Ion',
        motor: '1.8L',
        vin: 'UITEODINHMDJCVWTK',
        mileage: '278412'
      },
      {
        id: '004',
        created_at: '09/01/2018',
        customer: 'Hellen Huck',
        year: '2012',
        make: 'Nissan',
        model: 'Pathfinder',
        motor: '4.0L',
        vin: 'EIUHGNALDITPDJGTE',
        mileage: '98563'
      },
      {
        id: '005',
        created_at: '09/04/2018',
        customer: 'Rick Ralph',
        year: '1995',
        make: 'Ford',
        model: 'Explorer',
        motor: '4.2L',
        vin: 'UYQHGKDLNVBGHTIEPG',
        mileage: '315879'
      }
    ],

    invoices: [
      {
        id: '001',
        customer: 'Rick Ralph',
        vehicle: '1995 Ford Explorer',
        date_created: '09/04/2018',
        grand_total: '$586.32'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    customers (state){
      return state.customers
    },
    workOrders (state){
      return state.workOrders
    },
    invoices (state){
      return state.invoices
    }
  }
})
