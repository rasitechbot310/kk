
const fs = require("fs");
const {chain}  = require('stream-chain');
const {parser} = require('stream-json');
const {pick}   = require('stream-json/filters/Pick');
const {ignore} = require('stream-json/filters/Ignore');
const {streamArray} = require('stream-json/streamers/StreamArray');


require("./dbms/connection.js");
const model = require("./dbms/schema/vaccine_data.js")


const pipeline = chain([
  fs.createReadStream('./data/vaccine_data.json'), // Ubah Path ke data big json kamu
  parser(),
  pick({filter: 'vaccine_data'}),
  streamArray(),
]);


function saveData() {
    let i = 0;
    pipeline.on('data', async (data) => {

        for (let index = 0; index < data.value.length; index++) {
            const element = data.value[index];
            i += 1;
            const a = await model.insertMany(
                {
                    id: element.id,
                    gerai_id: element.gerai_id,
                    jenis_vaksin_id: element.jenis_vaksin_id,
                    tanggal: element.tanggal,
                    nik: element.nik,
                    nama: element.nama,
                    tempat_lahir: element.tempat_lahir,
                    tgl_lahir: element.tgl_lahir,
                    alamat: element.alamat,
                    jenis_kelamin: element.jenis_kelamin,
                    dosis: element.dosis,
                    kipi: element.kipi,
                    telepon: element.telepon,
                    keterangan: element.keterangan,
                    created_at: element.created_at,
                    updated_at: element.updated_at,
                    gerai_nama: element.gerai_nama,
                    kelurahan_nama: element.kelurahan_nama,
                    kecamatan_nama: element.kecamatan_nama,
                    kota_nama: element.kota_nama,
                    jenis_vaksin_nama: element.jenis_vaksin_nama,
                    action: element.action,
                }
            );
            if(a && i > 10) {
                console.clear();
                console.log(i);
            }
        };

    });
    pipeline.on('end', () =>{
            console.log(`The accounting department has ${i} employees.`)
        }
    );
};

saveData()