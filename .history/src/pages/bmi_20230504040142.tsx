import { valueGetters } from "@mantine/core/lib/Box/style-system-props/value-getters/value-getters";
import { NextPage } from "next";
import { Container } from "postcss";
import { allowedNodeEnvironmentFlags } from "process";
import { useState } from "react";

const Home: NextPage = () => {
  //ReactHooks　状態を決める　初期値0 不要？
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState<number>();

  const getBMI = () => {
    //return weight / (height/100 **2)

    const heightInMeter = height / 100;
    const bmi: number = weight / heightInMeter ** 2;
    setBmi(Number(bmi.toFixed(2)));
  };

  return (
    <main className="container mx-auto">
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
        <div className="w-96 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold">BMI Calculator</h2>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700">
              体重 (kg)
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              className="mt-2 w-full rounded border border-gray-300 p-2"
              //入力が変化したら状態に反映させる
              onChange={(event) => setWeight(event.target.valueAsNumber)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="height" className="block text-gray-700">
              身長 (cm)
            </label>
            <input
              id="height"
              type="number"
              value={height}
              className="mt-2 w-full rounded border border-gray-300 p-2"
              //入力が変化したら状態に反映させる
              onChange={(event) => setHeight(event.target.valueAsNumber)}
            />
          </div>
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={getBMI} //event
          >
            BMI を計算する
          </button>

          <div>{bmi}</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
