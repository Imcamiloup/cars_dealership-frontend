import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBackOrders } from "../Redux/backOrderSlice";

const  API_URL = import.meta.env.VITE_API_URL;

const useBackOrders = () => {
    const dispatch = useDispatch();
    const backOrders = useSelector((state) => state.backOrder.allBackOrders);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/backorders`)
        .then(console.log(API_URL))
        .then((response) => response.json())
        .then((data) => {
            dispatch(getAllBackOrders(data));
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return {backOrders, loading, error};
}

export default useBackOrders;