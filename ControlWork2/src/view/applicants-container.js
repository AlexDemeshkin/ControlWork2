import { AbstractComponent } from "../framework/view/abstract-component.js";

function createApplicntsComponentTemplate() {
    return (      
      `
=
            <div id="applicants-container">

            </div>
  `
      );
}

export default class ApplicntsComponent extends AbstractComponent {
  constructor() {
    super();
  }
  get template() {
    return createApplicntsComponentTemplate();
  }

}