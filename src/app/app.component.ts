import { Component, OnInit } from '@angular/core';
import { AssetsApi } from './service/assets-api';

/**
 * Есть input и assets-api сервис, у которого есть метод all, который
 * принимает searchString и возвращает список отфильтрованных строк.
 * (Имитирует запрос на сервер для поиска определённых объектов)
 *
 * Необходимо, реализовать функционал поиска:
 *  - Результат должен отображаться в секции search-results
 *    в реальном времени в процессе того как пользователь вводит поисковую строку
 *  - Реализвать "дебаунс" в 200ms, для сокращения запросов на сервер
 *  - Необходимо, чтоб если запрос ушёл на сервер, ещё не вернул ответ, а пользовватель
 *    начал вводить новое значение, предыдущий запрос должен быть отменён.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value!: '';
  data$: any;

  constructor(private api: AssetsApi) {}

  handleChange() {
    this.data$ = this.api.all(this.value);
  }
}
