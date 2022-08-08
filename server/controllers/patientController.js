const { Patient } = require("../models/index");

class PatientController {
  static async getPatients(req, res) {
    try {
      const response = await Patient.findAll();
      res.status(200).json({
        status: {
          code: 200,
          response: "success",
          message: "Get patients data success",
        },
        result: {
          data: response,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: {
          code: 500,
          response: "error",
          message: "Internal server error",
        },
        result: {},
      });
    }
  }

  static async getPatientById(req, res) {
    try {
      const { id } = req.params;
      const response = await Patient.findOne({
        where: {
          id,
        },
      });
      if (!response) {
        throw { name: "NOT_FOUND" };
      }
      res.status(200).json({
        status: {
          code: 200,
          response: "success",
          message: "Get patient data success",
        },
        result: {
          data: response,
        },
      });
    } catch (error) {
      if (error.name === "NOT_FOUND") {
        res.status(404).json({
          status: {
            code: 404,
            response: "error",
            message: "Patient data not found",
          },
          result: {},
        });
      } else {
        res.status(500).json({
          status: {
            code: 500,
            response: "error",
            message: "Internal server error",
          },
          result: {},
        });
      }
    }
  }

  static async addPatient(req, res) {
    try {
      const { name, sex, religion, phone, address, nik } = req.body;
      await Patient.create({
        name,
        sex,
        religion,
        phone,
        address,
        nik,
      });
      res.status(201).json({
        status: {
          code: 201,
          response: "success",
          message: "Add patient success",
        },
        result: {},
      });
    } catch (error) {
      if (
        error.name === "SequelizeValidationError" ||
        "SequelizeUniqueConstraintError"
      ) {
        res.status(400).json({
          status: {
            code: 400,
            response: "failed",
            message: error.errors[0].message,
          },
          result: {},
        });
      } else {
        res.status(500).json({
          status: {
            code: 500,
            response: "error",
            message: "Internal server error",
          },
          result: {},
        });
      }
    }
  }

  static async updatePatient(req, res) {
    try {
      const { id } = req.params;
      const { name, sex, religion, phone, address, nik } = req.body;

      const response = await Patient.findOne({
        where: {
          id,
        },
      });

      if (!response) {
        throw { name: "NOT_FOUND" };
      }

      await Patient.update(
        {
          name,
          sex,
          religion,
          phone,
          address,
          nik,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(201).json({
        status: {
            code: 201,
            response: "success",
            message: "Update patient success",
          },
          result: {},
      })
    } catch (error) {
      if (error.name === "NOT FOUND") {
        res.status(404).json({
          status: {
            code: 404,
            response: "error",
            message: "Patient data not found",
          },
          result: {},
        });
      } else if (
        error.name === "SequelizeValidationError" ||
        "SequelizeUniqueConstraintError"
      ) {
        res.status(400).json({
          status: {
            code: 400,
            response: "failed",
            message: error.errors[0].message,
          },
          result: {},
        });
      } else {
        res.status(500).json({
          status: {
            code: 500,
            response: "error",
            message: "Internal server error",
          },
          result: {},
        });
      }
    }
  }

  static async deletePatient(req, res) {
    try {
      const { id } = req.params;

      const response = await Patient.findOne({
        where: {
          id,
        },
      });

      if (!response) {
        throw { name: "NOT_FOUND" };
      }

      await Patient.destroy({
        where: {
          id,
        },
      });

      res.status(201).json({
        status: {
          code: 201,
          response: "success",
          message: "Delete patient success",
        },
        result: {},
      });
    } catch (error) {
      if (error.name === "NOT FOUND") {
        res.status(404).json({
          status: {
            code: 404,
            response: "error",
            message: "Patient data not found",
          },
          result: {},
        });
      } else {
        res.status(500).json({
          status: {
            code: 500,
            response: "error",
            message: "Internal server error",
          },
          result: {},
        });
      }
    }
  }
}

module.exports = PatientController;
