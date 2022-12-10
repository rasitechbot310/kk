const nameModel = require("./dbms/schema/name_vaccine.js");
const data = JSON.parse(fs.readFileSync("./out.json"));

(async () => {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.clear();
        await nameModel.insertMany({nama: element}, {ordered: true});
        console.log(index);
    }
})();

