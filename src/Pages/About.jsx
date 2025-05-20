import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';
import { Image } from 'primereact/image';
import { Fieldset } from 'primereact/fieldset';

const About = () => {
    return (
        <div className="flex flex-column md:flex-row gap-3 p-4">
           
            <div className="flex-1 p-3 bg-indigo-300 border-b-8 border-black rounded-[5px_60px_60px_60px]">
               
                <div className="relative">
                    <div className="absolute top-0 left-0">
                        <Image src="/pin1.png" alt="Pin" width="60" />
                    </div>
                    <div className="absolute top-4 right-0">
                        <Image src="/coracaor.png" alt="Coração R" width="60" />
                    </div>
                </div>

               
                <div className="mt-6">
                    <Fieldset legend="Sobre mim">
                        <p className="m-2 text-center">
                            Oi! Eu sou Mariana Santos, formada em Ciências Econômicas pela Universidade Federal do Ceará e atualmente estudando Desenvolvimento Full Stack enquanto faço minha transição para o mundo da tecnologia. <br />
                            Já fui professora de Química e auxiliar de serviços educacionais - experiências que me ensinaram muito sobre ensinar, aprender e me adaptar a diferentes contextos.<br />
                            Sempre gostei de explorar ferramentas como Excel e Power BI, e foi essa curiosidade que me levou à programação. Desde então, venho descobrindo um mundo de possibilidades em desenvolvimento web, automação e design.<br />
                            Sou movida pela curiosidade e pela vontade de criar soluções úteis, acessíveis e que façam a diferença no dia a dia das pessoas.
                        </p>
                    </Fieldset>
                </div>

                
                <div className="mt-4">
                    <Fieldset legend="Skills">
                        <div className="flex flex-wrap justify-content-center gap-3">
                            <Image src="/html_4661326.png" alt="HTML" width="50" />
                            <Image src="/css_4661285.png" alt="CSS" width="50" />
                            <Image src="/java_4661331.png" alt="Java" width="50" />
                            <Image src="/react.png" alt="React" width="50" />
                            <Image src="/xls_10773132.png" alt="Excel" width="50" />
                            <Image src="/adobe-photoshop.png" alt="Photoshop" width="50" />
                        </div>
                    </Fieldset>
                </div>

               
                <div className="mt-4">
                    <Fieldset legend="Habilidades">
                        <div className="flex flex-wrap justify-content-center gap-3">
                            <Image src="/text-editor_4661403.png" alt="Editor" width="50" />
                            <Image src="/ui-design_4661407.png" alt="UI Design" width="50" />
                            <Image src="/project_4661365.png" alt="Gerenciamento de Projetos" width="50" />
                        </div>
                    </Fieldset>
                    <div className="flex justify-content-center mt-3">
                        <Image src="/coração1.png" alt="Coração" width="60" />
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default About;