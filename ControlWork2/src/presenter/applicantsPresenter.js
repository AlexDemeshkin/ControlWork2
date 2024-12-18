import ApplicntsListComponent from "../view/applicants-list-component.js";
import ApplicntsContainerComponent from "../view/applicants-container.js";
import ListComponent from "../view/list-component.js";
import ApplicantsComponent from "../view/applicants-component.js";
import { render } from "../framework/render.js";



export default class ApplicantsBoardPresenter {
    #boardContainer=null;
    #applicntsBoardComponent;
    #applicntsModel = null;

    constructor({boardContainer, applicntsModel}) {
        this.#boardContainer = boardContainer;
        this.#applicntsModel = applicntsModel;
      }

   init(){
    this.#renderBoard();
   }   

   #renderBoard(){
    this.#applicntsBoardComponent = new ApplicntsListComponent()
    render(this.#applicntsBoardComponent,this.#boardContainer )
    this.#renderContainer()
   }

   #renderContainer(){
    this.applicntsContainerComponent = new ApplicntsContainerComponent()
    render(this.applicntsContainerComponent,this.#applicntsBoardComponent.element)
    this.#renderList()
   }

   #renderList(){
    this.listComponent = new ListComponent();
    render(this.listComponent,this.applicntsContainerComponent.element)
    this.#renderApplicants()
   }

   #renderApplicants() {
    const applicantsComponent = new ApplicantsComponent()
    render(applicantsComponent, this.listComponent.element)
  }
  
}
