import { apolloClient } from '@/apollo'
import gql from 'graphql-tag'
import { formatDate } from '../../utils/dateTools';

 const newOrdersQuery = gql`{
  shisha_order(where: {status: {_eq: "new"}}) {
    created_at
    modified_at
    id
    employee {
      first_name
    }
  }
}`

//const todoQuery = gql`{
//    todos(order_by: [{id: desc}]) {
//      id
//      text
//      is_completed
//    }
//}`

// const todoMutation = gql`
//   mutation insert_todos($text: String!) {
//     insert_todos(objects: [{text: $text}]) {
//       affected_rows
//       returning {
//         id
//         text
//         is_completed
//       }
//     }
// }`

// const todoUpdateMutation = gql`
//   mutation update_todos($todoId: Int!, $done: Boolean) {
//     update_todos(_set: {is_completed: $done}, where: {id: {_eq: $todoId}}) {
//       affected_rows
//       returning {
//         id
//         text
//         is_completed
//       }
//     }
// }`

// const todoUpdateToggleAllMutation = gql`
//   mutation update_todos($done: Boolean) {
//     update_todos(_set: {is_completed: $done}, where: {id: {_gt: 0}}) {
//       affected_rows
//     }
// }`

// const todoDeleteMutation = gql`
//   mutation delete_todos($todoId: Int!) {
//     delete_todos(where: {id: {_eq: $todoId}}) {
//       affected_rows
//     }
// }`

// const todoDeleteCompletedMutation = gql`
//   mutation delete_todos {
//     delete_todos(where: {is_completed: {_eq: true}}) {
//       affected_rows
//     }
// }`

// const STORAGE_KEY = 'vuetify-todos'

const state = {
  newOrders: []
}

const getters = {
  getNewOrders: (state) => state.newOrders
}

const mutations = {
  fetchNewOrders(state, newOrder) {
    state.newOrders = newOrder
  },
  //fetchTodos(state, todos) {
  //  state.todos = todos
  //}
  // addTodo (state, todo) {
  //   state.todos.unshift(todo)
  // },
  // removeTodo (state, todo) {
  //   state.todos.splice(state.todos.indexOf(todo), 1)
  // },
  // editTodo (state, { todo, text = todo.text, done = todo.is_completed }) {
  //   todo.text = text
  //   todo.is_completed = done
  // }
}




const actions = {
  async fetchNewOrders({ commit }) {
     const { data: { shisha_order } } = await apolloClient.query({query: newOrdersQuery})
     const formattedShishaOrder = shisha_order.map(order => {
       order.modified_at = formatDate(order.modified_at)
       order.created_at = formatDate( order.created_at)
       return order
     })
     commit('fetchNewOrders', formattedShishaOrder)
    //const arr = require('../../../data/newOrders.json')
    //commit('fetchNewOrders', arr)
  },
  //async fetchTodos({ commit }) {
  //  const { data } = await apolloClient.query({ query: todoQuery })
  //  commit('fetchTodos', data.todos)
  //}
  // async addTodo ({ commit }, text) {
  //   const { data } = await apolloClient.mutate({mutation: todoMutation, variables: {text: text}})
  //   console.log(data)
  //   if (data.insert_todos.affected_rows) {
  //     commit('addTodo', data.insert_todos.returning[0])
  //   }
  // },
  // async removeTodo ({ commit }, todo) {
  //   const { data } = await apolloClient.mutate({mutation: todoDeleteMutation, variables: {todoId: todo.id}})
  //   if (data.delete_todos.affected_rows) {
  //     commit('removeTodo', todo)
  //   }
  // },
  // async toggleTodo ({ commit }, todo) {
  //   const { data } = await apolloClient.mutate({mutation: todoUpdateMutation, variables: {todoId: todo.id, done: !todo.is_completed}})
  //   if (data.update_todos.affected_rows) {
  //     commit('editTodo', { todo, done: !todo.is_completed })
  //   }
  // },
  // editTodo ({ commit }, { todo, value }) {
  //   commit('editTodo', { todo, text: value })
  // },
  // async toggleAll ({ state, commit }, done) {
  //   const { data } = await apolloClient.mutate({mutation: todoUpdateToggleAllMutation, variables: {done: done}})
  //   if (data.update_todos.affected_rows) {
  //     state.todos.forEach((todo) => {
  //       commit('editTodo', { todo, done })
  //     })
  //   }
  // },
  // async clearCompleted ({ state, commit }) {
  //   const { data } = await apolloClient.mutate({mutation: todoDeleteCompletedMutation})
  //   if (data.delete_todos.affected_rows) {
  //     state.todos.filter(todo => todo.is_completed)
  //       .forEach(todo => {
  //         commit('removeTodo', todo)
  //       })
  //   }
  // }
}

//const plugins = [store => {
//  store.subscribe((mutation, { todos }) => {
//    // window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
//  })
//}]

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
  //plugins
}
