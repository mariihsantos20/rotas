import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    
    const validUsers = {
        1: { password: 'senha123' },
        2: { password: '123456' }
    };

    const handleLogin = () => {
        setSubmitted(true);

        
        if (!userId || !password) return;

        const user = validUsers[userId];

        
        if (user && user.password === password) {
            navigate(`/user/${userId}`);
        } else {
            navigate('/notfound'); 
        }
    };

    return (
        <section className="flex justify-center items-center min-h-screen bg-pink-100 p-4">
            <div className="bg-white w-full max-w-md p-6 rounded-[5px_60px_60px_60px] border-b-8 border-black shadow-2 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-center mb-2">Login</h2>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="userId">ID do Usuário</label>
                    <InputText
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className={`w-full max-w-lg ${submitted && !userId ? 'p-invalid' : ''}`}
                        placeholder="Digite o ID (ex: 1 ou 2)"
                    />
                    {submitted && !userId && (
                        <Message severity="error" text="ID é obrigatório" />
                    )}
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="password">Senha</label>
                    <Password
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        toggleMask
                        feedback={false}
                        className={`w-full max-w-lg ${submitted && !password ? 'p-invalid' : ''}`}
                        placeholder="Digite sua senha"
                    />
                    {submitted && !password && (
                        <Message severity="error" text="Senha é obrigatória" />
                    )}
                </div>

                <Button label="Entrar" onClick={handleLogin} className="w-full mt-2" />
            </div>
        </section>
    );
};

export default Login;