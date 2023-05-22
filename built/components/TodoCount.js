"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TodoCount(_a) {
    var _this = this;
    var $listDiv = _a.$listDiv, state = _a.state;
    this.state = state;
    this.setState = function (nextState) {
        _this.state = nextState;
        _this.render();
    };
    this.render = function () {
        var totalTodo = _this.state.data.length;
        var checkedTodo = _this.state.data.filter(function (item) { return item.isCompleted; }).length;
        $listDiv.innerHTML += _this.state.isLoading
            ? ''
            : "\n      <span class=\"todoCount\">\uCD1D \uD574\uC57C\uD560 \uC77C: ".concat(totalTodo, "\uAC1C / \uC644\uB8CC\uD55C \uC77C: ").concat(checkedTodo, "\uAC1C</span>\n    ");
    };
    this.render();
}
exports.default = TodoCount;
