import Embolsadoras from './machineFields/Embolsadoras';
import Cosedora from './machineFields/Cosedora';
import Selladora from './machineFields/Selladora';
import TranspBolsasYCajas from './machineFields/TranspBolsasYCajas';
import TranspBigBag from './machineFields/TranspBigBag';
import TranspGranel from './machineFields/TranspGranel';
import Zarandas from './machineFields/Zarandas';
import Desterronadores from './machineFields/Desterronadores';
import Balanzas from './machineFields/Balanzas';
import BalanzasDeEjes from './machineFields/BalanzasDeEjes';
import PesajeContinuo from './machineFields/PesajeContinuo';

import { useState } from 'react';

const QuoteForm = ({ machineType, machineModel, onClose }) => {

    // Estado para datos generales
    const [generalData, setGeneralData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        city: '',
        contactTime: '9-12'
    });

    // Estado para datos específicos (manejado por el componente hijo)
    const [specificData, setSpecificData] = useState({});

    // Componente de campos específicos dinámico
    const getMachineFieldsComponent = () => {
        switch(machineType) {
        case 'embolsadoras':
            return <Embolsadoras onDataChange={setSpecificData} />;
        case 'cosedoras':
            return <Cosedora onDataChange={setSpecificData} />;
        case 'selladoras':
            return <Selladora onDataChange={setSpecificData} />;
        case 'bolsasycajas':
            return <TranspBolsasYCajas onDataChange={setSpecificData} />;
        case 'transpbigbag':
            return <TranspBigBag onDataChange={setSpecificData} />;
        case 'granel':
            return <TranspGranel onDataChange={setSpecificData} />;
        case 'zarandas':
            return <Zarandas onDataChange={setSpecificData} />;
        case 'desterronadores':
            return <Desterronadores onDataChange={setSpecificData} />;
        case 'balanzasejes':
            return <BalanzasDeEjes onDataChange={setSpecificData} />;
        case 'balanzas':
            return <Balanzas onDataChange={setSpecificData} />;
        case 'pesajecontinuo':
            return <PesajeContinuo onDataChange={setSpecificData} />;
        default:
            return "";
        }
    };

    // Formateo de datos para el backend
    const formatCustomerData = () => {
    return `Nombre: ${generalData.firstName} ${generalData.lastName}
            Email: ${generalData.email}
            Teléfono: ${generalData.phone}
            Empresa: ${generalData.company}
            País: ${generalData.country}
            Ciudad: ${generalData.city}
            Horario de contacto: ${generalData.contactTime}`;
    };

    // Envío al backend
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const payload = {
          CustomerData: formatCustomerData(),
          MachineData: `Tipo: ${machineType}\nModelo: ${machineModel}\n` + 
                      Object.entries(specificData)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join('\n')
        };

        const response = await fetch('/api/quotes/quick-quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          alert('Cotización enviada con éxito');
          onClose();
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar la cotización');
      }
    };

    return (
    <form onSubmit={handleSubmit} className="quote-form">
      <h2>Solicitar cotización: {machineModel}</h2>
      
      {/* Sección de datos generales */}
      <div className="form-section">
        <h3>Tus datos</h3>
        <input
          value={generalData.firstName}
          onChange={(e) => setGeneralData({...generalData, firstName: e.target.value})}
          placeholder="Nombre"
          required
        />
        <input
          value={generalData.lastName}
          onChange={(e) => setGeneralData({...generalData, lastName: e.target.value})}
          placeholder="Apellido"
          required
        />
        <input
          value={generalData.email}
          onChange={(e) => setGeneralData({...generalData, email: e.target.value})}
          placeholder="Email"
          required
        />
        <input
          value={generalData.phone}
          onChange={(e) => setGeneralData({...generalData, phone: e.target.value})}
          placeholder="Teléfono"
          required
        />
        <input
          value={generalData.company}
          onChange={(e) => setGeneralData({...generalData, company: e.target.value})}
          placeholder="Empresa"
          required
        />
        <input
          value={generalData.country}
          onChange={(e) => setGeneralData({...generalData, country: e.target.value})}
          placeholder="País"
          required
        />
        <input
          value={generalData.city}
          onChange={(e) => setGeneralData({...generalData, city: e.target.value})}
          placeholder="Ciudad"
          required
        />
        <input
          value={generalData.contactTime}
          onChange={(e) => setGeneralData({...generalData, contactTime: e.target.value})}
          placeholder="Horario de Contacto (inserte un rango horario)"
          required
        />
      </div>

      {/* Sección de datos específicos de máquina */}
      <div className="form-section">
        <h3>Especificaciones técnicas</h3>
        {getMachineFieldsComponent()}
      </div>

      <button type="submit">Solicitar cotización</button>
    </form>
  );
}

export default QuoteForm;