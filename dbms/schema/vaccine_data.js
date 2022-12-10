
const mongoose = require("mongoose");


module.exports = mongoose.model("user", {
    id: { type: Number, require: true, default: 0 },
    gerai_id: { type: Number, require: true, default: 0 },
    jenis_vaksin_id: { type: Number, require: true, default: 0 },
    tanggal: { type: String, require: true, default: "" },
    nik: { type: String, require: true, default: "" },
    nama: { type: String, require: true, default: "" },
    tempat_lahir: { type: String, require: true, default: "" },
    tgl_lahir: { type: String, require: true, default: "" },
    alamat: { type: String, require: true, default: "" },
    jenis_kelamin: { type: String, require: true, default: "" },
    dosis: { type: String, require: true, default: "" },
    kipi: { type: String, require: true, default: "" },
    telepon: { type: String, require: true, default: "" },
    keterangan: { type: String, require: true, default: "" },
    created_at: { type: String, require: true, default: "" },
    updated_at: { type: String, require: true, default: "" },
    gerai_nama: { type: String, require: true, default: "" },
    kelurahan_nama: { type: String, require: true, default: "" },
    kecamatan_nama: { type: String, require: true, default: "" },
    kota_nama: { type: String, require: true, default: "" },
    jenis_vaksin_nama: { type: String, require: true, default: "" },
    action: { type: String, require: true, default: "" },
});
