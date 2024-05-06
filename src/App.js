import Header from "./components/Header";
import TimeArea from "./components/TimeArea";
import Paragraf from "./components/Paragraf";
import Footer from "./components/Footer";
import Course from "./components/Course";

export default function App() {
  return (
    <>
      <main className="p-12 bg-slate-300">
        <Header />
        <TimeArea />
        <Paragraf />
        <h2 className="text-lg px-4 font-bold text-slate-500">My Courses</h2>
        <ul>
          <Course name="JavaScript" duration="14 hrs" level="advanced" />
          <Course name="ReactJS" duration="10 hrs" level="basic" />
          <Course name="Rust Basic" duration="3 hrs" level="basic" />
          <Course name="NextJs Advanced" duration="26 hrs" level="advanced" />
          <Course name="HTML Basics" duration="7 hrs" level="elementary" />
        </ul>
        <Footer />
      </main>
    </>
  );
}
