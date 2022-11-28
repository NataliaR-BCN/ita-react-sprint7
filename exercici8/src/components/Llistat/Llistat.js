import { FitxaProjecte, FilaFlex, Titol, Concepte } from "./Llistat.styles";
import servicesPortfolio from '../../data/services';

const Llistat = (props) => 

   <FitxaProjecte>

      <FilaFlex>
         <Titol><strong>{props.id}</strong></Titol> <Titol>Data: {props.data}</Titol>
      </FilaFlex>

      <FilaFlex><strong>&nbsp;Projecte: {props.nom}</strong></FilaFlex>
      <FilaFlex><strong>&nbsp;Client: {props.client}</strong></FilaFlex>

      <Concepte>Conceptes:</Concepte>
         
         {props.webPage && 
         <FilaFlex>&nbsp;&nbsp;{servicesPortfolio[0].description} de {props.numPages} {props.numPages === 1 ? "pàgina" : "pàgines"} en {props.numLangs} {props.numLangs === 1 ? "idioma" : "idiomes"}<span>{props.totalWebPrice}€</span></FilaFlex>}  
         
         {props.seoConsulting && <FilaFlex>&nbsp;&nbsp;{servicesPortfolio[1].description}<span>{servicesPortfolio[1].price}€</span></FilaFlex>}
         
         {props.googleAdsCampaign && <FilaFlex>&nbsp;&nbsp;{servicesPortfolio[2].description}<span>{servicesPortfolio[2].price}€</span></FilaFlex>}
         
      <FilaFlex>
         <Titol><strong>Total:</strong></Titol> <Titol><strong>{props.totalPrice}€</strong></Titol> 
      </FilaFlex>
  
   </FitxaProjecte>;

export default Llistat;