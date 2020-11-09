import React from 'react';
import { cekTahun, cekHari } from '../utils/waktu.js';

const Hello = () => {
    return (
        <>
            <p>Hello Guys</p>
            <p>Tahun saat ini : {cekTahun()} </p>
            <p>Hari ke-{cekHari()}</p>
        </>
    )
}

export default Hello;