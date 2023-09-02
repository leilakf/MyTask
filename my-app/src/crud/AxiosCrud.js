import React, { useEffect, useState } from 'react';
import { getAllAsync } from '../services/TodoService';
import Paging from '../custom-components/Paging';
import AxiosForm from './AxiosForm';
import Loding from '../custom-components/Loding';

import '../index.css';

export const AxiosCrud = () => {
    const pageItemCount = 20; // Update pageItemCount to 20
    const [page, setPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [todos, setTodos] = useState([]);
    const [totalCount, setTotalCount] = useState();
    const [currentTodos, setCurrentTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const result = await getAllAsync();
                setTotalCount(result.length);
                setTodos(result);
                setLoading(false);

                setPage(Math.ceil(result.length / pageItemCount));
                setCurrentTodos(result.slice(0, pageItemCount));
            } catch (error) {
                console.error(error);
            }
        };
        loadTodos();
    }, []);

    const changePage = (i) => {
        setCurrentPage(i);
        const startItem = ((i - 1) * pageItemCount);
        setCurrentTodos(todos.slice(startItem, (pageItemCount * i)));
    };

    return (
        <div className="card">
            <div className="card-header">مدیریت داده های تودو لیست با axios</div>
            <div className="card-body">
                <div className="col">
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center"> {/* Add justify-content-center class */}
                            <Paging pageCount={page} currentPage={currentPage} changePage={changePage} />
                        </ul>
                    </nav>
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th scope="col">کد</th>
                                <th scope="col">عنوان</th>
                                <th scope="col">کاربر</th>
                                <th scope="col">انجام شده</th>
                                <th scope="col">توضیح</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <Loding />
                            ) : (
                                currentTodos.map((item) => (
                                    <tr key={item.id} className={item.completed ? 'completedRow' : ''}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.completed ? <span>✓</span> : <span>×</span>}</td>
                                        <td>-</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center"> {/* Add justify-content-center class */}
                            <Paging pageCount={page} currentPage={currentPage} changePage={changePage} />
                        </ul>
                    </nav>
                </div>

                <div className="row d-flex justify-content-center">
                    <AxiosForm  />
                </div>
            </div>
        </div>
    );
};
