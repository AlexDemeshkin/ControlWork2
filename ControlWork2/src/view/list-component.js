import { AbstractComponent } from "../framework/view/abstract-component.js";

function createListComponentTemplate() {
    return (      
      `
                <ul class="list">
                
                </ul>
            `
      );
}

export default class ListComponent extends AbstractComponent {
  constructor() {
    super();
  }
  get template() {
    return createListComponentTemplate();
  }

}