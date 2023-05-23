interface TodoCount {
  $listDiv:any,
  state:any
}

export default function TodoCount({ $listDiv, state }:TodoCount) {
  this.state = state;

  this.setState = (nextState:any) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const totalTodo = this.state.data.length;
    const checkedTodo = this.state.data.filter(
      (item:any) => item.isCompleted
    ).length;

    $listDiv.innerHTML += this.state.isLoading
      ? ''
      : `
      <span class="todoCount">총 해야할 일: ${totalTodo}개 / 완료한 일: ${checkedTodo}개</span>
    `;
  };

  this.render();
}
