import { AbstractComponent } from "../framework/view/abstract-component.js";

function createApplicntsListComponentTemplate() {
    return (      
      `
        <div class="applicants-list">
            <h2>Список абитуриентов</h2>

        </div>    `
      );
}

export default class ApplicntsListComponent extends AbstractComponent {
  constructor() {
    super();
  }
  get template() {
    return createApplicntsListComponentTemplate();
  }

}