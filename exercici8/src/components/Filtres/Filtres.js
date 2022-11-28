import { FilaFiltres, FilterButton } from "./Filtres.styles";


const Filtres = (props) =>

    <FilaFiltres>
        <FilterButton onClick={props.handleReiniciarOrdre} name="OrdreReiniciar">Ordre d'entrada</FilterButton>
        <FilterButton onClick={props.handleOrdreAlfabetic} name="OrdreAlfabetic">Ordre alfabètic</FilterButton>
        <FilterButton onClick={props.handleOrdreData} name="OrdreData">Ordre per data</FilterButton>    
    </FilaFiltres>

    


;


export default Filtres;