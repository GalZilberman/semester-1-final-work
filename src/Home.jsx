import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home() {


  const navigate = useNavigate();


  return (
    <div>
      <h3>Home</h3>

      <button style={{ cursor: "pointer", padding: "0px" }} onClick={() => navigate("/TshirtList")}>

        <img src="https://www.mesinio.co.il/wp-content/uploads/2021/04/dsquared-t-shirt-white-25355-01-dl.jpg" alt="add item" width={"400px"} style={{ padding: "0px" }} />
      </button>

      <button style={{ cursor: "pointer", padding: "0px" }} onClick={() => navigate("/SweatpantsList")}>

        <img src="https://cf.shopee.co.id/file/9e5cd3093354ceb8375707c663aa8c4c" alt="add item" width={"400px"} style={{ padding: "0px" }} />
      </button>

      <button style={{ cursor: "pointer", padding: "0px" }} onClick={() => navigate("/HatsList")}>

        <img src="https://contents.mediadecathlon.com/p1793800/k$b04c0d746384fc2cb42f4830683f2379/travel-trekking-cap-travel-100-light-grey.jpg?format=auto&quality=40&f=800x800" alt="add item" width={"400px"} style={{ padding: "0px" }} />
      </button>

    </div>
  )
}
