import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Management() {

    const navigate = useNavigate();

    return (
        <div>
            <h3>Management</h3>

            <button style={{ cursor: "pointer" }} onClick={() => navigate("/addItem")}>
                <img src="https://images.cdn3.stockunlimited.net/preview1300/add-item-button_1356373.jpg" alt="add item" width={"500px"} />
            </button>


            <button style={{ cursor: "pointer" }} onClick={() => navigate("/removeItem")}>
                <img src="https://thumbs.dreamstime.com/b/remove-item-web-button-icon-vector-illustration-isolated-white-background-remove-item-icon-web-button-119998000.jpg" alt="remove item" width={"500px"} />
            </button>

        </div>
    )
}
