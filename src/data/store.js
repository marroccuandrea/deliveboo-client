import {reactive} from 'vue';

export const store = reactive ({
    apiRestaurants: 'http://127.0.0.1:8000/api/restaurants',
    apiTypes: 'http://127.0.0.1:8000/api/types',
    typesArray: [],
    restaurantsArray: []
})