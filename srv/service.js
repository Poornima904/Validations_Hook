const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    let { Customer } = this.entities;

    // Handler function for DELETE operation on the 'Customer' entity
    this.on('DELETE', Customer, async (req, next) => {
        try {
            const cust_id = req.data.cust_id; 
            if (cust_id == 2) {
               
                return next();
        
            } else {
                return req.error(400, "Deletion of this record is not allowed.");
            }
        } catch (error) {
            return req.error(500, error.message);
        }
    });


// FOR READ/GO BUTTON MANIPULATION--------------------------------------------
    this.before('READ', Customer, async (req,next) => {
        debugger  


    //     return next();
    //     // ((not working))
    //     // if(req[1].cust_address == 'shimoga'){   
    // //         return next();
    // //     // }else{
    // //     // return req.info("cust address is empty"); }
    });
   

   
   





    // Editing based on validations-----------------------------------------------------------------------------
    // this.on('EDIT', Customer, async (req,next) => {
    //     debugger
    //     const inputValue = req._params[0].cust_id;
    //     if (inputValue % 2 == 0) {
    //         debugger;
    //         return next();

    //     } else {
    //         console.log("Editing is only allowed if the input value is even.");
    //     }
    // });
    
   
   
});
