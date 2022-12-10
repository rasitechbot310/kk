
const express = require("express");
require("./dbms/connection.js");
const vaccineModel = require("./dbms/schema/vaccine_data.js");
const namaVaccine = require("./dbms/schema/name_vaccine.js");

// const port = 80;
const port = 3000;
const app = express();
var cors = require('cors')
const fs = require("fs")
app.use(cors());
const cp =      require( 'child_process' );
let ipCmd =     `ipconfig | findstr /R /C:"IPv4 Address"`;
let ip =        cp.execSync( ipCmd ).toString( );
let returnIp =  /IPv4 Address\./i.test( ip ) 
                   ? ip.match( /\.\s\.\s\.\s:\s([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/ )[1]
                   : 'facked';


const arrDataNama = JSON.parse(fs.readFileSync("./out.json"));
function cari(dataArr, Keyword, callback) {
    let values = [];
    function cariNama(dataArr, key, cb) {
        if (key.index < key.key.length) {
            values = [];
            for (let index = 0; index < dataArr.length; index++) {
                const element = dataArr[index];
                if(element[key.index] === key.key[key.index]) {
                    values.push(element);
                }
            };
            cariNama(values, { key: key.key, index: (key.index + 1) }, cb);
        } else {
            cb(values.reverse())
        }
    };
    function cariNamaCapital(dataArr, key, cb) {
        if (key.index < key.key.length) {
            values = [];
            for (let index = 0; index < dataArr.length; index++) {
                const element = dataArr[index];
                if(element[key.index].toLocaleUpperCase() === key.key[key.index].toLocaleUpperCase()) {
                    values.push(element);
                }
            };
            cariNama(values, { key: key.key, index: (key.index + 1) }, cb);
        } else {
            cb(values.reverse())
        }
    };
    cariNama(dataArr, {index: 0, key: Keyword}, respon => {
        if(respon.length > 0) {
            callback(respon);
        } else {
            cariNamaCapital(dataArr, {index: 0, key: Keyword}, res => {
                callback(res);
            })
        }
    });
};



// app.get(/\/q/, async (req, res) => {
//     console.log(Date.now())
//     try {
//         let timeStart = Date.now();
//         cari(arrDataNama, req.query.nama, (respon) => {
//             let responData = {
//                 responTime: ((Date.now() - timeStart) / 1000).toFixed(2),
//                 statusText: "Berhasil",
//                 data: respon
//             };
//             res.send(responData).end()
//         });
//     } catch (error) {
//         res.status(400)
//         res.send({
//             responTime: ((Date.now() - timeStart) / 1000).toFixed(2),
//             statusText: "Gagal",
//             data: error
//         });
//         res.end();
//     }
// });

app.get(/\/q/, async (req, res) => {
    let timeStart = Date.now();
    let namaQ = new RegExp(req.query.nama, "i");
    if(req.query.nama) {
        const dataNama = await namaVaccine.find({nama: namaQ }).limit(20);
        const respondata = { responTime: ((Date.now() - timeStart) / 1000).toFixed(2), data: dataNama };
        console.log(respondata.responTime);
        res.send(respondata).end();
    } else {
        res.end();
    }
});



app.get(/\//, async (req, res) => {
    let timeStart = Date.now();
    const namaQ = new RegExp(req.query.nama, "i");
    if(req.query.nama) {
        const data = await vaccineModel.find({nama: namaQ});
        let responData = {
            responseTime: ((Date.now() - timeStart) / 1000).toFixed(2),
            statusText: "Berhasil",
            data: data
        };
        res.status(200);
        res.send(responData);
        res.end();

        // vaccineModel.find({nama: req.query.nama}).then(data => {
        //     let responData = {
        //         responseTime: ((Date.now() - timeStart) / 1000).toFixed(2),
        //         statusText: "Berhasil",
        //         data: data
        //     };
        //     res.status(200);
        //     res.send(responData);
        //     res.end();
        // });
        
    } else {
        res.end();
    }
});







app.listen(port, e => {
    if(e) {
        console.error(e);
        return 0;
    };
    console.clear();
    console.log("Server Running on Port : " + port + '\n\nIp v4 : ' + returnIp + '\n\nSilahkan Buka cari.exe')
});
