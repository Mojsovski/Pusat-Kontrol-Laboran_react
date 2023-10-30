import { React, useState } from "react";
import Header from "../component/Header";
import OpenAI from "openai";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleApiKey = async () => {
    setLoading(true);
    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You will be given a block of text, and your task is to help briefly solve the problem of computer repair",
          },
          { role: "user", content: prompt },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0,
        max_tokens: 1000,
      });
      setResult(chatCompletion.choices[0].message.content);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-md-10">
            <div className="container text-center">
              <br />
              <div className="row align-items-start">
                <div className="col">
                  <h2>Asisten AI</h2>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center"></div>
            </div>
            <div className="d-flex">
              <div className="container mt-5">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7">
                    <div className="card">
                      <div className="card-body">
                        <div className="chat-input mt-3">
                          <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            type="text"
                            placeholder="Tulis pesanmu di sini"
                            className="form-control"
                            rows={4}
                          />
                          <div className="text-center">
                            <button
                              className="btn btn-primary mt-2"
                              onClick={handleApiKey}
                              style={{ width: 500 }}
                            >
                              Kirim Pertanyaan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-5">
                      <div className="card">
                        <div className="container mt-4">
                          <h3>Hasil :</h3>
                          {loading && (
                            <div className="container mt-5">
                              <p>Mohon tunggu sebentar</p>
                            </div>
                          )}
                          <p>{result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
