import Box from "@mui/material/Box";
import Item from "./Item";

export default function YourProduct() {

  const cardData = [
    {
      "id": 1,
      "image": "https://ii1.pepperfry.com/media/catalog/product/c/o/1100x1210/combo-classic-xxxl-bean-bag---foot-stool-with-beans-in-black-colour-by-sattva-combo-classic-xxxl-bea-q5ulln.jpg",
      "title": "Bean Bag Premium, Leg rest & Cushion Combo",
      "price": "৳4500"
    },
    {
      "id": 2,
      "image": "https://5.imimg.com/data5/WE/EG/LZ/SELLER-1756364/polo-t-shirts-500x500.jpg",
      "title": "Trendy Stylish Men Cotton Round T-Shirt",
      "price": "৳600"
    },
    {
      "id": 3,
      "image": "https://ae01.alicdn.com/kf/HTB1KB3_b1GSBuNjSspbq6AiipXae/Top-Quality-brand-mens-casual-Shirts-long-Sleeve-100-Cotton-Men-Shirt-Slim-Fit-solid-Male.jpg",
      "title": "STYLISH new long sleeve shirt for man",
      "price": "৳600"
    },
    {
      "id": 4,
      "image": "https://ae01.alicdn.com/kf/H1f6e60d0eb7e4eb1877e529789cf29d7r/Marvel-Deadpool-3D-Printed-Men-Harajuku-Hoodie-Fashion-Spring-Cool-Children-Sweatshirt-Streetwear-Oversized-Women-Clothes.jpg_640x640.jpg",
      "title": "Preimum Quality Winter Hoodie For Men",
      "price": "৳800"
    },
    {
      "id": 3,
      "image": "https://buildingandinteriors.com/wp-content/uploads/2021/08/e9b86a374ae73f8b0615f999a4c1c46f.jpg",
      "title": "Premium quality bed",
      "price": "৳40000"
    },
    {
      "id": 4,
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/8/ES/CY/SD/39221816/img-20210722-wa0117-1000x1000.jpg",
      "title": "Premium quality bed",
      "price": "৳30000"
    },
    {
      "id": 1,
      "image": "https://hatil.com/sites/default/files/Sweetheart-177_0.jpg",
      "title": "Premium quality bed",
      "price": "৳50000"
    },
    {
      "id": 2,
      "image": "https://i.pinimg.com/originals/2f/4b/d9/2f4bd93e6785c4ffe4223917e8cb5d23.jpg",
      "title": "Premium quality bed",
      "price": "৳40000"
    },
    {
      "id": 3,
      "image": "https://buildingandinteriors.com/wp-content/uploads/2021/08/e9b86a374ae73f8b0615f999a4c1c46f.jpg",
      "title": "Premium quality bed",
      "price": "৳20000"
    },
    {
      "id": 4,
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/8/ES/CY/SD/39221816/img-20210722-wa0117-1000x1000.jpg",
      "title": "Premium quality bed",
      "price": "৳30000"
    },
    {
      "id": 3,
      "image": "https://buildingandinteriors.com/wp-content/uploads/2021/08/e9b86a374ae73f8b0615f999a4c1c46f.jpg",
      "title": "Premium quality bed",
      "price": "৳40000"
    },
    {
      "id": 4,
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/8/ES/CY/SD/39221816/img-20210722-wa0117-1000x1000.jpg",
      "title": "Premium quality bed",
      "price": "৳40000"
    },
    {
      "id": 3,
      "image": "https://buildingandinteriors.com/wp-content/uploads/2021/08/e9b86a374ae73f8b0615f999a4c1c46f.jpg",
      "title": "Premium quality bed",
      "price": "৳40000"
    },
    {
      "id": 4,
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/8/ES/CY/SD/39221816/img-20210722-wa0117-1000x1000.jpg",
      "title": "Premium quality bed",
      "price": "৳40000"
    },
  ]
  
  return (
    <Box sx={{display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center"}} >
      {cardData.map(card => (
          <Item key={card.id} card={card}>
          </Item>
        ))}
    </Box>
  );
}
