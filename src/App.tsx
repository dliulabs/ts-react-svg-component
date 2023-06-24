import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

import "./styles.css";

function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
