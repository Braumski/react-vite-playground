
// Extracting data and displaying it with map();

export default function DataComponent(){
  const dessertsData = [
    {
      id: "1",
      title: "Cake",
      description: "Moist chocolate cake for any celebration",
      image: "product_a.jpg",
      price: "$29.99",
    },
    {
      id: "2",
      title: "Pie",
      description: "Apple pie with cinnamon",
      image: "product_b.jpg",
      price: "$49.99",
    },
    {
      id: "3",
      title: "Ice Cream",
      description: "Many flavor options, including vanilla and chocolate",
      image: "product_c.jpg",
      price: "$19.99",
    },
  ]

  const listItems = dessertsData.map(dessert => {
    return <li>{dessert.title} - {dessert.price}</li>
  })

  return(
    <ul>
      {listItems}
    </ul>
  )
}