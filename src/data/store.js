import { types } from 'sass'
import {reactive} from 'vue'

export const store = reactive({
  typeUrl: 'http://127.0.0.1:8000/api/types',
  restaurantUrl:'http://127.0.0.1:8000/api/restaurants',
  login: 'http://127.0.0.1:8000/login',
  register: 'http://127.0.0.1:8000/register',
  restaurants: [],
  types: [],
  queryParams:{},
  filterTypes:[],
})