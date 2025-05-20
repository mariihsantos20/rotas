import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';
import { Image } from 'primereact/image';
import { useState } from 'react';
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const Contact = () => {
     const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const isValid = username.trim() && email.trim() && message.trim();

    const handleSubmit = () => {
        setSubmitted(true);
        if (isValid) {
            
            alert('Formulário enviado com sucesso!');
            setUsername('');
            setEmail('');
            setMessage('');
            setSubmitted(false);
        }
    };
    return (
          <section className="flex flex-col md:flex-row justify-center items-start pt-6 px-3 gap-6 flex-wrap">
            
            
            <div className="bg-pink-100 flex flex-col gap-4 w-full md:w-5/12 border-b-8 border-black rounded-[5px_60px_60px_60px] p-4 shadow-2">
                <div className="flex items-center gap-3">
                    <Image src='/telephone.png' alt="Telefone" width="40" />
                    <p className="text-lg md:text-xl">+55 (88) 98144-5267</p>
                </div>

                <div className="flex items-center gap-3">
                    <Image src="/mail.png" alt="Email" width="40" />
                    <p className="text-lg md:text-xl">mariihsantos20@gmail.com</p>
                </div>

                <div className="flex items-center gap-3">
                    <Image src="/github.png" alt="GitHub" width="40" />
                    <p className="text-lg md:text-xl">mariihsantos20</p>
                </div>

                <div className="flex items-center gap-3">
                    <Image src="/instagram.png" alt="Instagram" width="40" />
                    <p className="text-lg md:text-xl">@marisantos1920</p>
                </div>

                <div className="flex items-center gap-3">
                    <Image src="/linkedin.png" alt="LinkedIn" width="40" />
                    <p className="text-lg md:text-xl break-all">
                        https://www.linkedin.com/in/mariana-santos-2a3990235/
                    </p>
                </div>
            </div>

            {/* Bloco do formulário */}
            <div className="bg-pink-100 flex flex-col gap-4 w-full md:w-6/12 border-b-8 border-black rounded-[5px_60px_60px_60px] p-4 shadow-2">
                <h1 className="text-2xl font-semibold mb-2">Formulário de Contato</h1>

                <div className="flex flex-col mb-3">
                    <label htmlFor="username">Nome</label>
                    <InputText
                        id="username"
                        placeholder="Digite seu nome"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={submitted && !username ? 'p-invalid' : ''}
                    />
                    {submitted && !username && (
                        <Message severity="error" text="Nome é obrigatório" />
                    )}
                </div>

                <div className="flex flex-col mb-3">
                    <label htmlFor="email">Email</label>
                    <InputText
                        id="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={submitted && !email ? 'p-invalid' : ''}
                    />
                    {submitted && !email && (
                        <Message severity="error" text="Email é obrigatório" />
                    )}
                </div>

                <div className="flex flex-col mb-3">
                    <label htmlFor="message">Mensagem</label>
                    <InputTextarea
                        id="message"
                        placeholder="Digite sua mensagem"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className={submitted && !message ? 'p-invalid' : ''}
                    />
                    {submitted && !message && (
                        <Message severity="error" text="Mensagem é obrigatória" />
                    )}
                </div>

                <Button label="Enviar" onClick={handleSubmit} className="mt-2 w-full md:w-auto" />

                {submitted && isValid && (
                    <div className="mt-3">
                        <Message severity="success" text="Formulário enviado com sucesso!" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;