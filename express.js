 let mensproducts = [];
 let womenproducts = [];
 let shoes = [];
 let express = require("express");
 let cors = require("cors");
 require('dotenv').config();

 let app = express();
 app.use(cors());
 app.use(express.json());

 app.get("/", (req, res) => {
    res.send("i love harshiniii");
 });

 app.get("/mens", async (req, res) => {
    try{
         const response = await fetch("https://api.reefapi.com/myntra/v1/search", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key":process.env.REEF_API_KEY
            },
            body: JSON.stringify({
                query:"mens wear",
                limit:50
            })
        }
    );
    if(!response.ok){
        return res.status(502).json({
            message:"honeypie"
        })
    }
    let data = await response.json();
    
    mensproducts = data.data.results;

    res.json(mensproducts);
    }catch(error){
        res.status(500).json({
            message:"harshiniii"
        });
    }
 });
  app.get("/mens/:id", (req, res) =>{
    let id = req.params.id;
   let product = mensproducts.find((item) => {
    return String(item.product_id) === String(id);
   });
   if(!product){
    return res.status(404).json({
     message:"harshini"
    });
   }
   res.json(product);
  });

  //womens
  app.get("/womens", async(req, res) => {
   try{
     let response = await fetch("https://api.reefapi.com/myntra/v1/search",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "x-api-key": process.env.REEF_API_KEY
        },
        body: JSON.stringify({
            query:"womens wear",
            limit:50
        })
    });
    let data = await response.json();
    womenproducts = data.data.results;
    res.json(womenproducts);
   }catch(error){
    res.status(500).json({
        message:"i love youh harshiii"
    })
   }
  });
  //womens-products-id
  app.get("/womens/:id", (req, res) => {
    let id = req.params.id;
    let products = womenproducts.find((item) => {
        return String(item.product_id) === String(id);
    });
    if(!products){
       return res.status(500).json({
            message:"i love harshii"
        });
    }
    res.json(products);
  });
  //shoes
  app.get("/shoes", async (req, res) => {
   try{
     let response = await fetch("https://api.reefapi.com/myntra/v1/search", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REEF_API_KEY
        },
        body: JSON.stringify({
            query:"shoes",
            limit:50
        })
    })
    let data = await response.json();
    shoes = data.data.results;
    res.json(shoes);
   }catch(error){
    res.status(500).json({
        message:"harsshini",
    });
}
  });
  //shoes-product-page
  app.get("/shoes/:id", (req, res) => {
    let id = req.params.id;
    let product = shoes.find((item) =>{
        return String(item.product_id) === String(id);
    });
     if(!product){
       return res.status(404).json({
            message:"i love harshii"
        });
    }
    res.json(product);
  });
   // port

   const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
    console.log(`server is at ${PORT}`);
 })