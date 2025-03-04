import { useContext, useState, useEffect } from 'react';
import './ContactForm.css';

// COMPONENTS 
import Button from '../Button/Button';

//CONTEXT   
import { AppContext } from '../../Contexts/appContext'

function ContactForm() {
    const appContext = useContext(AppContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isFormValid, setIsFormValid] = useState(false);

    // Função de validação de email
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validação do formulário
    useEffect(() => {
        const isValid = 
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            isValidEmail(formData.email) &&
            formData.message.trim() !== '';

        setIsFormValid(isValid);
    }, [formData]);

    // Atualiza os valores do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            alert('Formulário enviado com sucesso!');
            // Aqui você pode enviar os dados para uma API
        } else {
            alert('Preencha os campos corretamente!');
        }
    };

    return (
        <div className="contact-form d-flex fd-column al-center">
            <h2>{appContext.languages[appContext.language].contact.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex form-group">
                    <input 
                        className="form-input" 
                        type="text" 
                        id="name"
                        name="name"
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        value={formData.name} // Adicionado
                        onChange={handleChange}
                    />
                    <input 
                        className="form-input"
                        type="email" // Alterado para "email" para validação automática do HTML
                        id="email"
                        name="email"
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        value={formData.email} // Adicionado
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex form-group">
                    <textarea
                        className="form-input"
                        id="message"
                        name="message"
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        rows="4"
                        value={formData.message} // Adicionado
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="al-center d-flex jc-end form-group">
                    <Button type="submit" buttonStyle="secondary" disabled={!isFormValid}>
                        {appContext.languages[appContext.language].general.send}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
