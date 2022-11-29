import { Link } from 'react-router-dom';
import { WelcomeLayout, WelcomeContent, WelcomeDiv, WelcomeButton } from './Welcome.styles'; 

const Welcome = () => 
<WelcomeLayout>

<WelcomeContent>
<h1>Calculadora de pressupostos</h1>

<p>En aquesta pàgina podràs calcular el pressupost del teu projecte web de forma còmoda i fàcil. </p>
<p>
Només has de seleccionar els serveis necessaris i, en cas que es tracti d'una pàgina web, podràs indicar també el nombre de pàgines i d'idiomes que desitges.</p>

<h5>Web desenvolupada amb React</h5>
<WelcomeDiv>
    <Link to="/pressupost"><WelcomeButton type='button'>Calcula el pressupost</WelcomeButton></Link>
</WelcomeDiv>

</WelcomeContent>
</WelcomeLayout>

;

export default Welcome;