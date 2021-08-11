import Link from "next/link";
import Head from "next/head";

import { useState } from "react";

import InputBox from "../inputBox/inputBox";

//library for drag and drop
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function PlanetsImgGenerator() {
  const [planetNames, setPlanetNames] = useState("");
  const [planetDiv, setPlanetDiv] = useState(false);
  const [planetOrder, setPlanetOrder] = useState();

  function generatePlanets() {
    //convert input to array
    let wordArray = planetNames.split(", ");

    setPlanetOrder(wordArray);
    setPlanetDiv(true);
  }

  //change planets order after drag and drop
  function handleOnDragEnd(result) {
    const items = Array.from(planetOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPlanetOrder(items);
  }

  //generate HTML file to download
  function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).innerHTML;
    var link = document.createElement("a");
    mimeType = mimeType || "text/plain";

    link.setAttribute("download", filename);
    link.setAttribute(
      "href",
      "data:" + mimeType + ";charset=utf-8," + encodeURIComponent(elHtml)
    );
    link.click();
  }

  function download() {
    downloadInnerHtml(fileName, "main", "text/html");
  }

  var fileName = "Planets.html";

  return (
    <div className="flex  flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Generator</title>
      </Head>
      <Link href="/">
        <a className="text-gray-600 mt-6"> &larr; Back To Home</a>
      </Link>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-2xl font-bold">
          <a className="text-blue-600"> Solar System!</a>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <InputBox
            onChange={(e) => {
              setPlanetNames(e);
            }}
          />
          <button
            onClick={generatePlanets}
            className="bg-transparent  mt-6 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded"
          >
            Generate
          </button>
        </div>
        {planetDiv && (
          <button
            onClick={download}
            className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
          >
            DOWNLOAD
          </button>
        )}
        <div
          id="main"
          className="flex flex-col flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full"
        >
          {planetDiv && (
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="planets">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {planetOrder.map((name, index) => {
                      return (
                        <Draggable key={name} draggableId={name} index={index}>
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
                                <div className="relative">
                                  <img
                                    className="absolute top-0 left-0 w-full h-32 object-cover"
                                    src={`../img/${name}.jpeg`}
                                  />
                                </div>
                                <p className="text-3xl font-bold text-left p-10">
                                  {name}
                                </p>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>
      </main>

      <footer className="flex  items-center justify-center w-full h-24 border-t">
        <p> Powered by enzyme</p>
      </footer>
    </div>
  );
}
