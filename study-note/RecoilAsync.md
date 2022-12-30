### Recoil 비동기 쿼리 핸들링

```js
const userTodoListQuery = selector ({
  key: 'userTodoLisk',
  get: async ({get} => {
    const response = await myDBQuery ({
      userId: get(currentUserIDState),
    });
    return response.data;
  })
})

function UserTodoList() {
  const todoList = useRecoilValue(userTodoListQuery);
  return <div>{todoList}</div>
}
```
