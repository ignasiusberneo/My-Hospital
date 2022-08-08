<script>
import { usePatientStore } from "../stores/patient";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      patients: [],
    };
  },
  methods: {
    ...mapActions(usePatientStore, ["axiosGetPatients", "axiosDeletePatient"]),
    getPatients: async function () {
      try {
        const response = await this.axiosGetPatients();
        this.patients = response.data.result.data;
        console.log(this.patients);
      } catch (err) {
        console.log(err.response);
      }
    },
    seeDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    editPatient(id) {
      this.$router.push(`/edit/${id}`);
    },
    goToAddPage() {
        this.$router.push('/add')
    },
    deletePatient: async function(id) {
        try {
            await this.axiosDeletePatient(id)
            this.getPatients()
        } catch (error) {
            
        }
    }
  },
  created() {
    this.getPatients();
  },
};
</script>

<template>
  <button type="button" class="btn btn-info my-auto w-25" @click.prevent="goToAddPage()">Add Patient</button>
  <div class="row justify-content-center">
    <div class="col-auto">
      <table class="table table-bordered">
        <thead>
          <td>No</td>
          <td>Name</td>
          <td>NIK</td>
          <td>Actions</td>
        </thead>
        <tbody>
          <tr v-for="patient in patients">
            <td>{{ patient.id }}</td>
            <td>{{ patient.name }}</td>
            <td>{{ patient.nik }}</td>
            <td>
              <button type="button" class="btn btn-primary mx-1" @click.prevent="seeDetail(patient.id)">Detail</button>
              <button type="button" class="btn btn-secondary mx-1" @click.prevent="editPatient(patient.id)">Edit</button>
              <button type="button" class="btn btn-danger mx-1" @click.prevent="deletePatient(patient.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
