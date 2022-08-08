import { defineStore } from 'pinia'
import axios from "axios";

export const usePatientStore = defineStore({
  id: 'patient',
  state: () => ({
    counter: 0,
    baseUrl: "http://localhost:3000"
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },
    axiosGetPatients() {
      return axios.get(
        `${this.baseUrl}/patients`
      );
    },
    axiosAddPatients(data) {
      return axios.post(
        `${this.baseUrl}/patients`, data
      );
    },
    axiosGetPatientById(id) {
      return axios.get(
        `${this.baseUrl}/patients/${id}`
      );
    },
    axiosEditPatient(id, data) {
      return axios.put(
        `${this.baseUrl}/patients/${id}`, data
      );
    },
    axiosDeletePatient(id) {
      return axios.delete(`${this.baseUrl}/patients/${id}`)
    }
  }
})
