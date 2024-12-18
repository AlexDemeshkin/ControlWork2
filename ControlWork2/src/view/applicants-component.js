import { AbstractComponent } from "../framework/view/abstract-component.js";

function createApplicantsComponentTemplate() {
    return (      
      `
                    <li id="studentId">
                        
                    </li>
            `
      );
}

export default class ApplicantsComponent extends AbstractComponent {
  constructor() {
    super();
  }
  get template() {
    return createApplicantsComponentTemplate();
  }

}