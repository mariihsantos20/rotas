import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';

import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

export default function Header() {
    const navigate = useNavigate();

  
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/')
        },
        {
            label: 'Sobre',
            icon: 'pi pi-star',
            command: () => navigate('/About')
        },
        {
            label: 'Contato',
            icon: 'pi pi-envelope',
            command: () => navigate('/Contact')
        }
    ];

    
    const end = (
        <Button 
            label="Login"
            icon="pi pi-user-plus"
            className="p-button text-black-alpha-90"
            onClick={() => navigate('/login')}
        />
    );

    return (
        
        <div className="card flex bg-yellow-100">
            <Menubar
                model={items}
                end={end}
                className="text-black-alpha-90 flex justify-content-between align-items-center  w-full  h-10 border-y-2 border-gray-900 shadow-3 mt-5 p-3"
                style={{ backgroundColor: '#ec4899'}}
            />
        </div>
        
    );
}
