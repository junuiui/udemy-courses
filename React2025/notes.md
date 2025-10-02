React
===

## Hooks
### **useState**
- Syntax: `const [state, setState] = useState(initialState)`
  - state: 현재 상태 값
  - setState: 상태를 업데이트하는 함수
  - initialState: 초기 상태 값
- Usage
  ```
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(prev => prev + 1)}>증가 (함수형)</button>
      </div>
    );
  }
  ```

- **장점**
  - 간단하고 직관적
  - Component Redendering Trigger
  - Functional update 지원
- **단점**
  - Side Effect 처리 불가
  - 복잡한 상태 로직 관리 어려움
  - 여러 연관된 상태 관리 시 복잡함
  - 렌더링 간 값 유지가 어려움 (리렌더링 되면 다시 계산)

### **useEffect**
- Component에서 Side Effect를 처리하는 Hook. useState로는 할 수 없는 외부 세계와의 상호작용을 담당
- Syntax: 
  ```
  useEffect(() => {
    // 실행할 코드
    
    return () => {
      // cleanup 함수 (선택사항)
    };
  }, [dependencies]); // 의존성 배열
  ```
- Usage
  ```
  function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    // useState로는 불가능했던 API 호출을 처리
    useEffect(() => {
      fetch(`/api/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data));
      
      // cleanup: 컴포넌트 언마운트 시 실행
      return () => {
        console.log('cleanup');
      };
    }, [userId]); // userId 변경 시에만 재실행
    
    return <div>{user?.name}</div>;
  }
  ```

- **장점**
  - useState로 불가능한 사이드 이펙트 처리
  - cleanup 함수로 메모리 누수 방지
  - 의존성 배열로 실행 시점 제어
- **단점**
  - 의존성 배열 관리 복잡
  - 무한 루프 가능성
  - 렌더링마다 함수가 재생성됨 (성능 문제)
  - 비싼 계산을 매번 다시 함 (메모이제이션 필요)

### **useRef - useState의 "리렌더링 트리거" 단점 보완**
- Rerendering 을 유발하지 않고 값을 저장하거나, DOM 요소에 직접 접근할 수 있는 Hook. useState는 값이 바뀌면 항상 rerender하는데 때로는 rerender 없이 값만 저장하고 싶을 때 사용
- Syntax: 
  - `const ref = useRef(initialValue);` // ref.current로 값에 접근
- Usage
  ```
  function Timer() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null); // 리렌더링 없이 interval ID 저장
    
    const start = () => {
      // useState로 interval ID를 저장하면 매번 리렌더링됨 (비효율)
      intervalRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    };
    
    const stop = () => {
      clearInterval(intervalRef.current);
    };
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={start}>시작</button>
        <button onClick={stop}>정지</button>
      </div>
    );
  }

  // DOM 접근 예시
  function FocusInput() {
    const inputRef = useRef(null);
    
    const focusInput = () => {
      inputRef.current.focus(); // DOM 직접 조작
    };
    
    return (
      <>
        <input ref={inputRef} />
        <button onClick={focusInput}>포커스</button>
      </>
    );
  }
  ```
- **장점**
  - 리렌더링을 유발하지 않음
  - 렌더링 간 값 유지
  - DOM 직접 접근 가능
- **단점**
  - ref 변경은 화면에 반영 안 됨
  - React의 선언적 특성을 해침
  - 여전히 복잡한 상태 로직은 관리 어려움

### **useReducer - useState의 "복잡한 상태 로직" 단점 보완**
- Syntax: 
  ```
  const [state, dispatch] = useReducer(reducer, initialState);

  // reducer 함수
  function reducer(state, action) {
    switch (action.type) {
      case 'ACTION_TYPE':
        return newState;
      default:
        return state;
    }
  }
  ```
- Usage
  ```
  // useState로 관리하면 복잡한 경우
  function ComplexForm() {
    // 상태가 흩어져 있고 관리가 어려움
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = () => {
      setLoading(true);
      // ... 복잡한 로직
      setErrors({...});
      setLoading(false);
    };
  }

  // useReducer로 개선
  function reducer(state, action) {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
      case 'SET_ERROR':
        return { ...state, errors: { ...state.errors, ...action.errors } };
      case 'SET_LOADING':
        return { ...state, loading: action.loading };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }

  function BetterForm() {
    const [state, dispatch] = useReducer(reducer, {
      name: '',
      email: '',
      errors: {},
      loading: false
    });
    
    const handleSubmit = () => {
      dispatch({ type: 'SET_LOADING', loading: true });
      // ... 로직이 중앙화됨
      dispatch({ type: 'SET_ERROR', errors: {...} });
      dispatch({ type: 'SET_LOADING', loading: false });
    };
  }
  ```

- **장점**
  - 복잡한 상태 로직을 한 곳에서 관리
  - 예측 가능한 상태 변경
  - 테스트하기 쉬움
- **단점**
  - useState보다 코드가 많음
  - 간단한 상태에는 오버킬
  - 여전히 전역 상태 공유는 어려움

### **useContext - "Props Drilling" 문제 해결**
- 여러 컴포넌트에서 같은 데이터를 공유할 때, props를 여러 단계로 내려보내지 않고 바로 접근할 수 있게 해주는 Hook
- Syntax: 
  - `const value = useContext(MyContext);`
- Usage
  ```
  // Props Drilling 문제 (useState/useReducer의 한계)
  function App() {
    const [theme, setTheme] = useState('dark');
    return <Header theme={theme} setTheme={setTheme} />; // props 전달
  }

  function Header({ theme, setTheme }) {
    return <Nav theme={theme} setTheme={setTheme} />; // 또 전달
  }

  function Nav({ theme, setTheme }) {
    return <Button theme={theme} onClick={() => setTheme('light')} />; // 또 전달
  }

  // useContext로 해결
  const ThemeContext = createContext();

  function App() {
    const [theme, setTheme] = useState('dark');
    
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header /> {/* props 없이 */}
      </ThemeContext.Provider>
    );
  }

  function Nav() {
    const { theme, setTheme } = useContext(ThemeContext); // 바로 접근!
    return <button onClick={() => setTheme('light')}>{theme}</button>;
  }
  ```

- **장점**
  - Props drilling 해결
  - 전역 상태 공유 쉬움
  - 코드가 깔끔해짐
- **단점**
  - Context 변경 시 모든 consumer 리렌더링
  - 함수/객체를 전달하면 매번 새로 생성됨 (성능 문제)


### **useCallback - useContext/useEffect의 "불필요한 재생성" 문제 보완**
  - Syntax: 
    ```
    const memoizedCallback = useCallback(
      () => {
        // 함수 내용
      },
      [dependencies]
    );
    ```
  - Usage
    ```
    // 문제 상황: 매번 함수가 재생성됨
    function Parent() {
      const [count, setCount] = useState(0);
      
      // 렌더링마다 새로운 함수가 생성됨
      const handleClick = () => {
        console.log('clicked');
      };
      
      // Child가 React.memo로 감싸져 있어도 
      // handleClick이 매번 새로운 참조라서 리렌더링됨
      return <Child onClick={handleClick} />;
    }

    // useCallback으로 해결
    function Parent() {
      const [count, setCount] = useState(0);
      
      const handleClick = useCallback(() => {
        console.log('clicked');
      }, []); // 의존성이 없으면 한 번만 생성
      
      return <Child onClick={handleClick} />; // 같은 함수 참조 유지
    }
    ```

  - **장점**
    - 불필요한 함수 재생성 방지
    - 자식 컴포넌트 최적화 가능
  - **단점**
    - 메모리 사용
    - 코드 복잡도 증가
    - 값(배열, 객체)의 재생성 문제는 여전함

### **7. useMemo - "비싼 계산 재실행" 문제 보완**
  - Syntax: 
    ```
    const memoizedValue = useMemo(
      () => computeExpensiveValue(a, b),
      [a, b]
    );
    ```
  - Usage
    ```
    // 문제 상황: 매번 정렬 다시 실행
    function ProductList({ products, category }) {
      // 렌더링마다 정렬을 다시 함 (느림!)
      const sortedProducts = products
        .filter(p => p.category === category)
        .sort((a, b) => b.price - a.price);
      
      return <List items={sortedProducts} />;
    }

    // useMemo로 해결
    function ProductList({ products, category }) {
      const sortedProducts = useMemo(() => {
        console.log('정렬 실행!');
        return products
          .filter(p => p.category === category)
          .sort((a, b) => b.price - a.price);
      }, [products, category]); // 이것들이 변경될 때만 재계산
      
      return <List items={sortedProducts} />;
    }

    // 객체 참조 동일성 유지
    function Parent() {
      const [count, setCount] = useState(0);
      
      // 매번 새로운 객체 생성 (문제)
      const config = { option: 'value' };
      
      // useMemo로 같은 참조 유지 (해결)
      const memoConfig = useMemo(() => ({ option: 'value' }), []);
      
      return <Child config={memoConfig} />;
    }
    ```

  - **장점**
    - 비싼 계산 캐싱
    - 참조 동일성 유지
    - 성능 최적화
  - **단점**
    - 메모리 사용
    - 간단한 계산에는 오버헤드
    - 폼 상태 관리 같은 특수한 경우에는 부족함

## Hook의 진화
```
useState (기본 상태)
  ↓
  문제: 사이드 이펙트 처리 불가
  ↓
useEffect (사이드 이펙트 처리)
  ↓
  문제: 리렌더링마다 재생성, 리렌더링 없이 값 저장 불가
  ↓
useRef (리렌더링 없이 값 유지)
  ↓
  문제: 복잡한 상태 로직 관리 어려움
  ↓
useReducer (복잡한 상태 중앙화)
  ↓
  문제: Props drilling, 전역 상태 공유 어려움
  ↓
useContext (전역 상태 공유)
  ↓
  문제: 함수/값이 매번 재생성되어 성능 문제
  ↓
useCallback (함수 메모이제이션)
useMemo (값 메모이제이션)
  ↓
  문제: 폼 같은 특수한 케이스는 여전히 복잡
  ↓
useActionState (폼 특화)
```