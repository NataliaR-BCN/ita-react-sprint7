import Panell from "../Panell/Panell";
import { CalculadoraDiv } from "./Calculadora.styles";


const Calculadora = (props) => 
 
    <CalculadoraDiv>
      
      <h2>Pressupost del projecte</h2>
      <p>Quin/s servei/s necessites?</p>
      <form>
          <p><input
          type="checkbox"
          id="webPage"
          checked={props.webPageCheck}
          onChange={props.onChangeHandler}
          name="webPage"
        />
        <label htmlFor="webPage">Una pàgina web (500€)</label>
        </p> 
        <div>
          {props.webPageCheck && <Panell handle={props.handlePanell}  
          numPagesValue={props.numPagesValuePanell} numLangsValue={props.numLangsValuePanell} 
          changeNumberDown={props.changeNumberDownPanell} changeNumberUp={props.changeNumberUpPanell}  />}
        </div>
        <p>
        <input
          type="checkbox"
          id="seoConsulting"
          checked={props.seoConsultingCheck}
          onChange={props.onChangeHandler}
          name="seoConsulting"
        />
        <label htmlFor="seoConsulting">Una consultoria SEO (300€)</label>
        </p> 
        <p>
        <input
          type="checkbox"
          id="googleAdsCampaign"
          checked={props.googleAdsCampaignCheck}
          onChange={props.onChangeHandler}
          name="googleAdsCampaign"
        />
        <label htmlFor="googleAdsCampaign">Una campanya de Google Ads (200€)</label>
        </p> 
      </form>
      <p>Preu: {props.totalPrice}€</p>
   </CalculadoraDiv>


export default Calculadora;
