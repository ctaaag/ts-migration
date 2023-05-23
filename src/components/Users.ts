interface Users {
  $userDiv:any,
  userName:any,
  api:any,
  onClickUser:any
}

export default function Users({ $userDiv, userName, api, onClickUser }:Users) {
  this.userName = userName;
  this.api = api;
  this.users = [];
  this.onClickUser = onClickUser;

  this.getUsers = async () => {
    this.users = await this.api.getUsers();
    this.render();
  };

  this.render = () => {
    $userDiv.innerHTML = `
    <h1>${this.userName}'s Todo List</h1>
    <h2>유저목록</h2><ul class="todo-users">
      ${this.users.map((user:any) => `<li>${user}</li>`).join('')}
    </ul>`;
  };

  $userDiv.addEventListener('click', (event:any) => {
    if (event.target.closest('li')) {
      this.userName = event.target.closest('li').innerText;
      this.onClickUser(this.userName);
    }
  });

  this.setState = (nextData:any) => {
    this.users = nextData;
    this.getUsers();
  };
}
