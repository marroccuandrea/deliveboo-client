import { types } from 'sass'
import {reactive} from 'vue'

export const store = reactive({
  typeUrl: 'http://127.0.0.1:8000/api/types',
  restaurantUrl:'http://127.0.0.1:8000/api/restaurants',
  restaurants: [],
  types: [],
  queryParams:{},
  filterTypes:[],
})