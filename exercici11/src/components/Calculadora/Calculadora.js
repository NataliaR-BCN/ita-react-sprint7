import Panell from "../Panell/Panell";
import { CalculadoraDiv, NomApartat, FilaProjecte, LabelProjecte, InputProjecte, FilaBotons, BotoProjecte, BotoReset } from "./Calculadora.styles";


const Calculadora = (props) => 
 
    <CalculadoraDiv>
      
      <h2>Pressupost del projecte</h2>
      <NomApartat>Dades del projecte</NomApartat>
      <form>
        <FilaProjecte>
          <LabelProjecte htmlFor="projectName">Nom</LabelProjecte>
          <InputProjecte type="text"
            id="projectName"
            onChange={props.inputHandler}
            name="projectName"
            value={props.projectName}
          />
        </FilaProjecte>
        <FilaProjecte>
          <LabelProjecte htmlFor="clientName">Client</LabelProjecte>
          <InputProjecte
            type="text"
            id="clientName"
            onChange={props.inputHandler}
            name="clientName"
            value={props.clientName}
          />
        </FilaProjecte> 
       
        <NomApartat>Quin/s servei/s necessites?</NomApartat>
          <p><input
          type="checkbox"
          id="webPage"
          checked={props.webPageCheck}
          onChange={props.onChangeHandler}
          name="webPage"
        />
        <label htmlFor="webPage">Una pàgina web ({props.webPageCheck ? props.totalWebPrice : 530}€)</label>
        </p> 
        <div>
          {props.webPageCheck && <Panell handle={props.handlePanell}  
          numPagesValue={props.numPagesValuePanell} numLangsValue={props.numLangsValuePanell} 
          changeNumberDown={props.changeNumberDownPanell} changeNumberUp={props.changeNumberUpPanell} />}
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
        <p>Preu: <strong>{props.totalPrice}€</strong></p>
        <FilaBotons>
          <BotoProjecte type="button" onClick={props.generarBudget}>Genera pressupost</BotoProjecte>
          <BotoReset onClick={props.cleanData}>Neteja formulari</BotoReset>
        </FilaBotons>
      </form>
   </CalculadoraDiv>



export default Calculadora;
