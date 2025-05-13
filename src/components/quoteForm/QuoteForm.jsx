import { useState } from 'react';

const QuoteForm = () => {

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

    return(
        <>
        </>
    )
}

export default QuoteForm;