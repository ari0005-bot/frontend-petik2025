import { useState } from "react";
import "./Counter.css";


const Counter = () => {
    const [angka, setangka] = useState(0);

    // const tambah = () => {
    //     setangka(angka + 1);
    // };

    // const kurang = () => {
    //     setangka(angka - 1);
    // };

    return(
        <>
        <div className="angka"><h2>{angka}</h2></div>
        <div className="conter">
            <button className="tambah" onClick={() => setangka(angka + 1)}>Tambah</button>
            <button className="kurang" onClick={() => setangka(angka - 1)}>Kurang</button>
        </div>
        </>
    )
}

export default Counter;