import React, { useState } from "react";
import Pagination from 'react-bootstrap/Pagination';

import "./styles.css";

const HistoryOrder = () => {
    const [pages, setPages] = useState([1, 2, 3, 4, 5, 6]);
    const totalPage = 10;
    const next = () => {
        if (pages[5] < totalPage) {
            setPages([...pages.map(item => (item + 5))]);
            console.log(pages)
        }
    }

    const pre = () => {
        if (pages[0] > 1)
            setPages(pages => pages.map(item => (item - 5)));
    }
    return (
        <diV>
            <div className="container_custom_table">
                <table class="custom_table table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">thoi gian</th>
                            <th scope="col">nguoi dat hang</th>
                            <th scope="col">tong tien</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <Pagination>
                    <Pagination.Prev onClick={pre} />
                    {pages.map(index => index > 0 && index < totalPage && <Pagination.Item>{index}</Pagination.Item>
                    )}
                    <Pagination.Next onClick={next} />
                </Pagination>
            </div>
        </diV>

    )
}

export default HistoryOrder;