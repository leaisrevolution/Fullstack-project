### Atoms

- 상태의 단위
- Atom = 원자
- 최소한의 상태 집합만 담자 = todo atom + user atom
- Atom 하나에 앱에서 쓰는 모든 상태를 넣지 말자.
- 상태 데이터를 담고 있기 때문에 읽기/쓰기/구독이 가능
- Atom 값이 업데이트 되면 구독하고 있는 react 컴포넌트가 새로운 값을 반영하여 리렌더링 됨
- key : Atom과 Selector에서 관리하는 상태값을 구분하기 위한 값 (고유값, string),

### Selectors

- Atom 이나 다른 Selector를 입력으로 받아들이는 순수 함수
- 최소한의 상태 집합만 Atom에 담다보니 Atom으로 인해 파생되는 데이터는 명시한 함수를 통해 계산을 해야 함
- React 컴포넌트는 Selector를 Atom과 같이 구독할 수 있으므로 Selector가 변경되면 컴포넌트들 역시 다시 리렌더링 됨
- Selector 함수는 멱등해야 한다. (중요)
