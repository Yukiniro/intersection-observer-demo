import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const boxRef = useRef(null);
  const subcontentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
      },
      {
        root: boxRef.current,
        threshold: 1,
      }
    );

    const target = subcontentRef.current;
    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <div className="App">
      <h1>Intersection Observer Demo</h1>
      <div className="box" ref={boxRef}>
        <div className="content">
          <div className="subcontent" ref={subcontentRef}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
