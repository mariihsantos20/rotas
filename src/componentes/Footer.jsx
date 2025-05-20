import { Button } from 'primereact/button';
const Footer = () => {
    return ( 
    <>
    <footer>
      <div className="bg-indigo-300 md:h-full flex gap-3 flex-column shadow-1 ">
       <div className='flex gap-3 justify-content-center align-content-center mt-3'>
         <h1>Mariana Santos Portfólio</h1>
         </div>
        <div className='flex gap-3 justify-content-center align-content-center'><Button icon="pi pi-linkedin" rounded outlined
                        onClick={() => window.open('www.linkedin.com/in/mariana-santos-2a3990235', '_blank')}
                        className="bg-pink-100 hover:shadow-6"/>
        <Button icon="pi pi-instagram" rounded outlined
                        onClick={() => window.open('https://www.instagram.com/marisantos1920/', '_blank')}
                        className="bg-pink-100 hover:shadow-6"
                        /> 
        <Button icon="pi pi-facebook" rounded outlined
                        onClick={() => window.open('https://www.facebook.com/mariihsantos', '_blank')}
                        className="bg-pink-100 hover:shadow-6"/> 
                        <Button icon="pi pi-github" rounded outlined
                        onClick={() => window.open('https://github.com/mariihsantos20', '_blank')}
                        className="bg-pink-100 hover:shadow-6"/> 
                         </div>
        
                            <p className="flex justify-content-center align-content-center">&copy; 2025 Meu Portfólio</p>                   

      </div>
      
    
    </footer>
    </> );
}
 
export default Footer;