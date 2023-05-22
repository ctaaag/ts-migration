"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TodoList(_a) {
    var _newTarget = this && this instanceof TodoList ? this.constructor : void 0;
    var _this = this;
    var $listDiv = _a.$listDiv, state = _a.state, checkCompleted = _a.checkCompleted, removeTodo = _a.removeTodo;
    if (!_newTarget) {
        throw new Error('New 키워드를 추가해주세요');
    }
    this.state = state;
    this.checkCompleted = checkCompleted;
    this.removeTodo = removeTodo;
    this.render = function () {
        var loadingTemplate = "<div class=\"loading_overlay\">\n        <img src=\"../images/loading.gif\" alt=\"loading\" class=\"loading_img\"/>\n    </div>";
        var todoListTemplate = "\n    <ul>\n      ".concat(_this.state.data
            .map(function (item) {
            return "<li data-id=".concat(item._id, ">\n              <span class= \"todo_text ").concat(item.isCompleted ? 'todo_strike' : '', "\" >\n              ").concat(item.content, "</span>\n              <button type=\"button\" class=\"remove_btn\">\uC0AD\uC81C</button>\n            </li>");
        })
            .join(''), "\n    </ul>");
        $listDiv.innerHTML = _this.state.isLoading
            ? loadingTemplate
            : todoListTemplate;
    };
    $listDiv.addEventListener('click', function (e) {
        var clickTodoId = e.target.parentNode.dataset.id;
        if (e.target.classList.contains('todo_text')) {
            _this.checkCompleted(clickTodoId);
        }
        if (e.target.className === 'remove_btn') {
            _this.removeTodo(clickTodoId);
        }
    });
    this.setState = function (nextState) {
        _this.state = nextState;
        _this.render();
    };
    this.render();
}
exports.default = TodoList;
