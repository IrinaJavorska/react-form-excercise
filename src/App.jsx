import { useState, useEffect } from "react";
import "./App.css";
import Select from "./components/Select";
import Range from "./components/Range";
import NumImp from "./components/NumImp";
import TextArea from "./components/TextArea";
import Button from "./components/Button";
import File from "./components/File";
import RbGroup from "./components/RbGroup";
import ChbGroup from "./components/ChbGroup";
import Clock from "./components/Clock";
import ProgressBar from "./components/ProgressBar";
import TextBox from "./components/TextBox";
import saveText from "./functions/saveText";
import validateFloat from "./functions/validateFloatNumber";

function App() {
  const [mem1, setMem1] = useState("");
  const [flavour, setFlavour] = useState("vanilková");
  const [extras, setExtras] = useState([]);
  const [scoops, setScoops] = useState(1);
  const [variant, setVariant] = useState("smetanová");
  const [space, setSpace] = useState(50);
  const initialCountDown = 10;
  const [countDown, setCountDown] = useState(initialCountDown);
  const [mem2, setMem2] = useState("");
  const [addResult, setAddResult] = useState("");
  const [text, setText] = useState("");
  useEffect(() => { getMem1() }, []);

  const getMem1 = () => {
    let temp = prompt("Zadejte prvního člena součtu.");
    while (!validateFloat(temp)) {
      temp = prompt("Zadejte prvního člena součtu správně, musí jít o číselnou hodnotu.");
    }
    setMem1(temp);
  }

  const retrieveData = (data, source) => {
    switch (source) {
      case "rb-flavour": {
        setFlavour(data);
        break;
      }
      case "chb-extras": {
        setExtras(data);
        break;
      }
      case "num-scoops": {
        if (data > 0 && data < 5) setScoops(data);
        break;
      }
      case "sel-variant": {
        setVariant(data);
        break;
      }
      case "rng-space": {
        setSpace(data);
        break;
      }
      case "tbx-mem1": {
        setMem1(data);
        break;
      }
      case "tbx-mem2": {
        setMem2(data);
        break;
      }
      case "txa-text": {
        setText(data);
        break;
      }
      case "file-load": {
        setText(data);
        break;
      }
      default:
        break;
    }
  };

  const retrieveEvent = (source) => {
    switch (source) {
      case "btn-add": {
        addFunc();
        break;
      }
      case "btn-download": {
        saveText(text);
        break;
      }
      default:
        break;
    }
  };

  const addFunc = () => {
    if (validateFloat(mem1) && validateFloat(mem2)) {
      const sum = parseFloat(mem1) + parseFloat(mem2); // Převést řetězce na čísla a vypočítat součet
      setAddResult(sum.toString()); // Aktualizovat stav `addResult` s výsledkem
    } else {
      setAddResult("Zadejte validní sčítance a zmáčkněte tlačítko výpočtu.");
    }
  }  

  useEffect(() => {
    if (countDown > 0) {
      const timer = setInterval(
        () => {
          setCountDown((prev) => prev - 1)
        }, 1000
      );
      return () => clearInterval(timer);
    }
  }, [countDown]);
  
  const progress = countDown > 0 ? ((initialCountDown - countDown) / initialCountDown) * 100 : 100;

  return (
    <div className="bg-info-subtle vw-100 vh-100">
      <div className="container bg-warning-subtle">
        <div className="row p-4">
          <div className="col-6">
            <div className="my-2">
              {flavour} {(extras.length > 0) && extras.map((item, index) => <span key={index}>{item} </span>)}{scoops} kopečky {variant}
            </div>
            <div className="my-4">
              <RbGroup
                label="příchuť zmrzliny"
                id="rb-flavour"
                dataIn={[
                  { label: "vanilková", value: "vanilková" },
                  { label: "čokoládová", value: "čokoládová" },
                  { label: "míchaná", value: "míchaná" }
                ]}
                retrieveData={retrieveData}
                selectedValue={flavour}
              />
            </div>
            <div className="my-4">
              <ChbGroup
                label="Něco navrch?"
                id="chb-extras"
                dataIn={[
                  { label: "kousky oříšků", value: "s kousky oříšků" },
                  { label: "čoko hoblinky", value: "s čoko hoblinkami" },
                  { label: "karamelové křupinky", value: "s karamelovými křupinkami" }
                ]}
                retrieveData={retrieveData}
                selectedValue={extras}
              />
            </div>
            <div className="my-4">
              <NumImp
                label="Počet kopečků (max. 4)"
                retrieveData={retrieveData}
                dataIn={scoops}
                id="num-scoops"
              />
            </div>
            <div className="my-4">
              <Select
                id="sel-variant"
                label="Vyberte druh zmrzliny"
                retrieveData={retrieveData}
                selectedValue={variant}
                dataIn={["smetanová", "jogurtová", "nízkotučná"]}
              />
            </div>
            <div className="my-4">
              <Range
                id="rng-space"
                label="Místo na disku"
                min={0}
                max={100}
                dataIn={space}
                retrieveData={retrieveData}
              />
            </div>
            <div className="my-4">
              <Clock />, zbývá {space}% místa na disku
            </div>
          </div>
          <div className="col-6">
            <div className="my-4">
              <ProgressBar id="pb-countdown" value={progress} />
            </div>
            <div className="my-4">
              Instalace probíhá, čekejte {countDown} sekund
            </div>
            <div className="my-4 row">
              <div className="col-6">
                <TextBox id="tbx-mem1" label="sčítanec 1" dataIn={mem1} retrieveData={retrieveData} />
              </div>
              <div className="col-6">
                <TextBox id="tbx-mem2" label="sčítanec 2" dataIn={mem2} retrieveData={retrieveData} />
              </div>
            </div>
            <div className="my-4 row">
              <div className="col-6">
                <Button label="Vypočítej součet" id="btn-add" retrieveEvent={retrieveEvent} />
              </div>
              <div className="col-6">
                <strong>{addResult}</strong>
              </div>
            </div>
            <div className="my-4">
              <TextArea
                id="txa-text"
                label="Operace s textem"
                dataIn={text}
                retrieveData={retrieveData}
                height={150}
              />
            </div>
            <div className="row my-4">
              <div className="col-6">
                <File
                  id="file-load"
                  label="Načti text ze souboru"
                  retrieveData={retrieveData}
                />
              </div>
              <div className="col-6">
                <Button
                  id="btn-download"
                  label="Stáhni soubor s textem"
                  retrieveEvent={retrieveEvent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
