<script>
import { mapActions, mapState } from "pinia";
import { usePatientStore } from "../stores/patient";
export default {
  data() {
    return {
      patientDetail: {},
    };
  },
  methods: {
    ...mapActions(usePatientStore, ["axiosGetPatientById"]),
    getPatientById: async function (id) {
      try {
        const response = await this.axiosGetPatientById(id);
        this.patientDetail = response.data.result.data;
      } catch (err) {}
    },
    back() {
      this.$router.push("/");
    },
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
      <input v-model="patientDetail.name" class="form-control" readonly />
    </div>
    <div class="form-group">
      <label>Sex</label>
      <input v-model="patientDetail.sex" class="form-control" readonly />
    </div>
    <div class="form-group">
      <label>Religion</label>
      <input v-model="patientDetail.religion" class="form-control" readonly />
    </div>
    <div class="form-group">
      <label>Phone</label>
      <input v-model="patientDetail.phone" class="form-control" readonly />
    </div>
    <div class="form-group">
      <label>Address</label>
      <textarea
        v-model="patientDetail.address"
        class="form-control"
        rows="3"
        readonly
      ></textarea>
    </div>
    <div class="form-group">
      <label>NIK</label>
      <input v-model="patientDetail.nik" class="form-control" readonly />
    </div>
    <button
      type="submit"
      class="btn btn-secondary mx-1"
      @click.prevent="back()"
    >
      Back
    </button>
  </form>
</template>

<style scoped></style>
