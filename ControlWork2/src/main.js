import HeaderComponent from "./view/header-component.js";
import StatisticsComponent from "./view/statistic-component.js";
import FormComponent from "./view/registration-form-component.js";
import FiltersComponent from "./view/filters-component.js";
import ApplicantsBoardPresenter from "./presenter/applicantsPresenter.js";
import ApplicantsModel from "./model/applicantsModel.js";
import { render } from "./framework/render.js";


const headerContainer = document.querySelector('.header')
const statisticsContainer = document.querySelector('.statistics')
const formContainer = document.querySelector('.registration')
const filtersContainer = document.querySelector('.filters')
const applicantsBoardContainer = document.querySelector('.applicants')
const applicantsModel = new ApplicantsModel();


const applicantsBoardPresenter = new ApplicantsBoardPresenter({
    boardContainer: applicantsBoardContainer,
    applicantsModel
})


const headerComponent = new HeaderComponent();
const statisticComponent = new StatisticsComponent()
const formComponent = new FormComponent()
const filtersComponent = new FiltersComponent()

render(headerComponent,headerContainer)
render(statisticComponent,statisticsContainer)
render(formComponent,formContainer)
render(filtersComponent,filtersContainer)

applicantsBoardPresenter.init()