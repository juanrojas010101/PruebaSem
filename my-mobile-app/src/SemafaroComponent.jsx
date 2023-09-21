import React, { useState, useEffect } from 'react';
import './SemafaroComponent.css';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // solicitud GET a tu API para obtener los datos procesados de los ENFs
    fetch('https://script.google.com/macros/s/AKfycbyiiOI1P65sV6-0RKSVGHKdvNbevynjai6G0hZe1X3qha8z_nijFkakys_8vqJ4Vglmzw/exec')
      .then(response => response.json())
      .then(data => {
        setData(data); // Almacena los datos en el estado
      })
      .catch(error => console.error(error));
  }, []);
  
  return (
    <div className="App">
      <h1>Tabla de ENFs</h1>
      <table>
        <thead>
          <tr>
            <th>ENF</th>
            <th>Directo Nacional</th>
            <th>Fruta Nacional</th>
            <th>Descarte Lavado</th>
            <th>Descarte Encerado</th>
            <th>Semáforo</th>
            <th>Hora de Vaciamiento</th>
          </tr>
        </thead>
        <tbody>
          {data.map(enf => (
            <tr key={enf.ENF}>
              <td>{enf.ENF}</td>
              <td>{enf.directoNacional}</td>
              <td>{enf.frutaNacional}</td>
              <td>{enf.descarteLavado.descarteGeneral}</td>
              <td>{enf.descarteEncerado.descarteGeneral}</td>
              <td style={{ color: enf.semaforo === 'Verde' ? 'green' : 'red' }}>
                {enf.semaforo}
              </td>
              <td>{enf.horaVaciado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
