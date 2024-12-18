import { AbstractComponent } from "../framework/view/abstract-component.js";

function createStatisticsComponentTemplate() {
    return (      
      `
        <div class="statistics">
            <h2>Статистика</h2>
            <div class="stats-block">
                <p>Всего абитуриентов: <span id="total-applicants">0</span></p>
            </div>
        </div>    `
      );
}

export default class StatisticsComponent extends AbstractComponent {
  constructor() {
    super();
  }
  get template() {
    return createStatisticsComponentTemplate();
  }

}