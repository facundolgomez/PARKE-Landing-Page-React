import { useState } from 'react';

const QuoteForm = () => {

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
            return <EmbolsadorasFields onDataChange={setSpecificData} />;
        case 'envolvedoras':
            return <EnvolvedorasFields onDataChange={setSpecificData} />;
        default:
            return <DefaultMachineFields onDataChange={setSpecificData} />;
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
        {/* Resto de campos generales... */}
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