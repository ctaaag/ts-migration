"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validationCheck_1 = require("../utils/validationCheck");
function TodoInput(_a) {
    var _this = this;
    var $formDiv = _a.$formDiv, addTodo = _a.addTodo, customEvent = _a.customEvent;
    this.addTodo = addTodo;
    this.customEvent = customEvent;
    this.render = function () {
        $formDiv.innerHTML = "\n    <form>\n      <input type=\"text\" placeholder=\"\uD560 \uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.\" class=\"todo-input\"></input>\n      <button type=\"submit\">\uCD94\uAC00</button>\n      <button type=\"button\" class=\"removeAll-btn\">\uC804\uCCB4 \uC0AD\uC81C</button>\n    </form>\n  ";
    };
    this.render();
    this.input = document.querySelector('.todo-input');
    this.removeBtn = document.querySelector('.removeAll-btn');
    this.submitHandler = function (e) {
        e.preventDefault();
        var newData = _this.input.value;
        (0, validationCheck_1.checkTodoItem)(newData);
        _this.addTodo(newData);
        _this.input.value = '';
    };
    $formDiv.addEventListener('submit', function (e) {
        _this.submitHandler(e);
    });
    this.removeBtn.addEventListener('click', function () {
        window.dispatchEvent(_this.customEvent);
    });
}
exports.default = TodoInput;
