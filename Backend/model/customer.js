
// const customers = [
//     {
//         custId: Number = 1, 
//         custName: string = "Sam Doe",
//         zip: string = "V5K0A1",
//         city: string = 'Vancouver',
//         state: string = 'BC',
//         country: string = 'CA'
//     },
//     {
//         custId: Number = 2, 
//         custName: string = "Jesica Chole",
//         Address: string = "M4C1C4",
//         city: 'Toronto',
//         state: 'ON',
//         country: 'CA'
//     },
//     {
//         custId: Number = 3, 
//         custName: string = "Yoho Robinson",
//         Address: string = "G1B0C3",
//         city: 'Quebec',
//         state: 'QC',
//         country: 'CA'
//     },
//     {
//         custId: Number = 4, 
//         custName: string = "Xu Young",
//         Address: string = "B3H0A6",
//         city: 'HALIFAX',
//         state: 'NS',
//         country: 'CA'
//     }
// ]

const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    _id: Number, 
    custName: String,
    zip: String,
    city: String,
    state: String,
    country: String
});

module.exports = mongoose.model('customer', customerSchema);