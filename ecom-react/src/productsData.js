export const productData = [
    {
        id :1,
        name : "Camera",
        category :"tech",
        description :"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam asperiores sequi temporibus in exercitationem, maiores accusantium nesciunt atque quidem, et libero ratione placeat.",
        price : 200
    },    
    {
        id :2,
        name : "Laptop",
        category :"tech",
        description :"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam asperiores sequi temporibus in exercitationem, maiores accusantium nesciunt atque quidem, et libero ratione placeat.",
        price : 2500
    },  
    {
        id :3,
        name : "Chair",
        category :"furniture",
        description :"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam asperiores sequi temporibus in exercitationem, maiores accusantium nesciunt atque quidem, et libero ratione placeat.",
        price : 100
    },    
    {
        id :4,
        name : "Table",
        category :"furniture",
        description :"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam asperiores sequi temporibus in exercitationem, maiores accusantium nesciunt atque quidem, et libero ratione placeat.",
        price : 500
    },   
    {
        id :5,
        name : "Apple",
        category :"grocery",
        description :"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam asperiores sequi temporibus in exercitationem, maiores accusantium nesciunt atque quidem, et libero ratione placeat.",

        price : 34
    },    
    {
        id :6,
        name : "Diary of a wimpy Kid",
        category :"Books",
        description :"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam asperiores sequi temporibus in exercitationem, maiores accusantium nesciunt atque quidem, et libero ratione placeat.",

        price : 49
    },
    {
        id :7,
        name : "Cracking the coding Interview",
        category :"Books",
        description :"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam asperiores sequi temporibus in exercitationem, maiores accusantium nesciunt atque quidem, et libero ratione placeat.",
        price : 60
    },
    {
        id :8,
        name : "Headphones",
        category :"technology",
        description :"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam asperiores sequi temporibus in exercitationem, maiores accusantium nesciunt atque quidem, et libero ratione placeat.",
        price : 100
    },
]

export const getProductById= (id) =>{
    let product  = productData.find(p => p.id === id)
    if(product === undefined) {
        console.log("product does not exist")
        return undefined;
    }
    return product;
}