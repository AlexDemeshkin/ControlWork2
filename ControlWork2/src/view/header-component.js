import { AbstractComponent } from "../framework/view/abstract-component.js";

function createHeaderComponentTemplate() {
    return (      
      `
        <h1>Приемная комиссия</h1>
    `
      );
}

export default class HeaderComponent extends AbstractComponent {
  constructor() {
    super();
  }
  get template() {
    return createHeaderComponentTemplate();
  }

}