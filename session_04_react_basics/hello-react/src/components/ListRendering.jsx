function ListRendering(){
    const product = [
        {id: 1, name: "Samsung", price: 15000000},
        {id: 2, name: "Iphone", price: 20000000},
        {id: 3, name: "Macbook", price: 30000000},
        {id: 4, name: "TV", price: 25000000},
        {id: 5, name: "Computer", price : 40000000}
    ]
    const FullPrice = product.reduce(
        (sum, item) => sum + item.price,
        0
    );
    return(
        <div style={{padding: "20px"}}>
            <h2>Products List</h2>
            <table style={{width : "100%", borderCollapse : "collapse"}}>
                <thead>
                    <tr style={{backgroundColor : "white"}}>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Id</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product, index) => (
                        <tr key={product.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.name}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px", color: product.price > 1000000 ? "red" : "white"}}>{product.price}</td>
                        </tr>
                    ))}
                        <tr>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}></td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Full Price</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{FullPrice}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
}



export default ListRendering;