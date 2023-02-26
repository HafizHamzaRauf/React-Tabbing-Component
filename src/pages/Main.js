import PrimaryHeading from "../components/PrimaryHeading";
import Section from "../components/Section";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/data";
function Main() {
  const arr = useSelector((state) => state.data.arr);
  const error = useSelector((state) => state.data.error);
  const isLoading = useSelector((state) => state.data.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const content = (
    <>
      <PrimaryHeading>Experience</PrimaryHeading>
      <Section></Section>
    </>
  );
  return (
    <main className="main">
      {error && !isLoading && <p>Something went wrong..</p>}
      {isLoading && !error && (
        <div className="centered">
          <div class="spinner"></div>
        </div>
      )}
      {arr.length > 0 && !isLoading && !error && content}
    </main>
  );
}

export default Main;
