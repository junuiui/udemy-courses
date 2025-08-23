Refs & Portals (Advanced DOM Access & Value Management)
===
- Accessing DOM Elements with Refs
- Managing Values with Refs
- Exposing API Functions from Components
- Detaching DOM Rendering from JSX Structure with Portals

## Ref vs State
| 특징          | **Ref**                                                        | **State**                                |
| ----------- | -------------------------------------------------------------- | ---------------------------------------- |
| 값 변경 시 리렌더링 | ❌ 리렌더링 안 함                                                     | ✅ 리렌더링 됨                                 |
| 사용 목적       | DOM 접근, 값 저장소, imperative handle                               | UI 업데이트, 데이터 상태 관리                       |
| 초기화 방식      | `useRef(initialValue)`                                         | `useState(initialValue)`                 |
| 대표 사용 사례    | - DOM 요소 제어<br/>- setTimeout / setInterval ID 저장<br/>- 이전 값 추적 | - 입력값 관리<br/>- 컴포넌트 표시 여부<br/>- UI 상태 반영 |
| When to use | Should be used for values that are directly reflected in the UI | direct DOM access (-> great for reading values or accessing certain browser APIs)
| when to NOT use | should not be used for "behind the scenes" values that have no direct UI impact" | ...

