<script>
import { mapActions, mapState } from "pinia";
import { usePatientStore } from "../stores/patient";
export default {
  data() {
    return {
      editPatientData: {
        id: "",
        name: "",
        sex: "",
        religion: "",
        phone: "",
        address: "",
        nik: ""
      },
    };
  },
  methods: {
    ...mapActions(usePatientStore, ["axiosGetPatientById", "axiosEditPatient"]),
    getPatientById: async function (id) {
      try {
        const response = await this.axiosGetPatientById(id);
        this.editPatientData = response.data.result.data;
      } catch (err) {}
    },
    editPatient: async function() {
          try {
            await this.axiosEditPatient(this.editPatientData.id, this.editPatientData)
            this.$router.push('/')
          } catch (error) {
            
          }
        },
        cancel() {
          this.$router.push('/')
        }
  },
  created() {
    this.getPatientById(this.$route.params.id);
  },
};
</script>

<template>
  <form>
    <div class="form-group">
      <label>Name</label>
      <input v-model="editPatientData.name" class="form-control"/>
    </div>
    <div class="form-group">
    <label>Sex</label>
    <select v-model="editPatientData.sex" class="form-control" id="exampleFormControlSelect1">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>
    <div class="form-group">
      <label>Religion</label>
      <input v-model="editPatientData.religion" class="form-control" />
    </div>
    <div class="form-group">
      <label>Phone</label>
      <input v-model="editPatientData.phone" class="form-control"/>
    </div>
    <div class="form-group">
      <label>Address</label>
      <textarea
        v-model="editPatientData.address"
        class="form-control"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group">
      <label>NIK</label>
      <input v-model="editPatientData.nik" class="form-control"/>
    </div>
    <button type="submit" class="btn btn-primary mx-1" @click.prevent="editPatient()">Edit</button>
  <button type="submit" class="btn btn-secondary mx-1" @click.prevent="cancel()">Cancel</button>
  </form>
</template>

<style scoped></style>
