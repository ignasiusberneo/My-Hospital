<script>
import { usePatientStore } from "../stores/patient";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      addData: {
        name: "",
        sex: "",
        religion: "",
        phone: "",
        address: "",
        nik: "",
      },
    };
  },
  methods: {
    ...mapActions(usePatientStore, ["axiosAddPatients"]),
    addPatient: async function () {
      try {
        const response = await this.axiosAddPatients(this.addData);
        this.$swal({
          icon: "success",
          text: response.data.status.message,
        });
        this.$router.push("/");
      } catch (error) {
        this.$swal({
          icon: "error",
          text: error.response.data.status.message,
        });
      }
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <form>
    <div class="form-group">
      <label>Name</label>
      <input v-model="addData.name" class="form-control" />
    </div>
    <div class="form-group">
      <label>Sex</label>
      <select
        v-model="addData.sex"
        class="form-control"
        id="exampleFormControlSelect1"
      >
        <option value="">--SELECT ONE--</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div class="form-group">
      <label>Religion</label>
      <input v-model="addData.religion" class="form-control" />
    </div>
    <div class="form-group">
      <label>Phone</label>
      <input
        v-model="addData.phone"
        class="form-control"
        placeholder="ex: 081211223344"
      />
    </div>
    <div class="form-group">
      <label>Address</label>
      <textarea
        v-model="addData.address"
        class="form-control"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group">
      <label>NIK</label>
      <input v-model="addData.nik" class="form-control" />
    </div>

    <button
      type="submit"
      class="btn btn-primary mx-1"
      @click.prevent="addPatient()"
    >
      Submit
    </button>
    <button
      type="submit"
      class="btn btn-secondary mx-1"
      @click.prevent="cancel()"
    >
      Cancel
    </button>
  </form>
</template>

<style scoped></style>
