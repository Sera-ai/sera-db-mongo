const mongoose = require("mongoose");
const { seraConnection } = require("./db.handler");

const dataSchema = new mongoose.Schema(
  {
    oas_spec: {
      required: false,
      type: mongoose.Types.ObjectId,
      ref: "oas_inventory",
    },
    frwd_config: {
      required: true,
      type: Object,
    },
    sera_dns: {
      required: false,
      type: mongoose.Types.ObjectId,
      ref: "sera_dns",
    },
    sera_config: {
      required: true,
      type: Object,
    },
    hostname: {
      required: true,
      type: String,
    },
    attributes: {
      required: true,
      type: Array
    }
  },
  { collection: "sera_hosts" }
);

module.exports = seraConnection.model("sera_hosts", dataSchema);
