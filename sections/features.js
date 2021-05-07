/* This example requires Tailwind CSS v2.0+ */
import { CameraIcon, SparklesIcon } from "@heroicons/react/outline";

export default function Features() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 flex flex-col justify-center">
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              <CameraIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Erlebe deine Umwelt wie nie zuvor
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                SAVEDiversity macht häufig Übersehenes sichtbar: Lerne
                interaktiv mehr über deine Umgebung, indem du spielerisch die
                Tier- und Pflanzenwelt um dich herum entdeckst!
              </p>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            {/* <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/demo.png"
                alt="Inbox user interface"
              />
            </div> */}
            <img
              src="/images/demo.png"
              className="h-full object-contain mx-auto"
              alt="Screenshot der App"
            ></img>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Übernimm Verantwortung für vom Aussterben bedrohte Arten
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  SAVEDiversity erklärt spielerisch Zusammenhänge innerhalb
                  gefährdeter Ökosysteme und vermittelt anhand Missionen rund um
                  gefährdete Tierarten anschaulich Nahrungsketten und
                  Lebensräume.
                </p>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Dass wir uns mitten in einem Massenaussterben
                        befinden, ist nur wenigen bewusst. Der Grund dafür sind
                        wir Menschen, durch Landnutzungsänderungen, Wilderei,
                        Klimawandel, Umweltverschmutzung und der Einschleppung
                        invasiver Arten. Wenn aber vom Verlust der Arten
                        gesprochen wird, denkt man eher an den Verlust des
                        Regenwaldes oder das Aussterben der Arktisbewohner, aber
                        selten an den Artenrückgang vor der Haustür.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="/images/team-anne.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Anne Lewerentz, Promotionsstudentin an der
                          Julius-Maximilians-Universität Würzburg
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            {/* <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full"
                src="images/demo2.png"
                alt="Customer profile user interface"
              />
            </div> */}
            <img
              src="images/demo2.png"
              className="h-full object-contain mx-auto"
              alt="Screenshot der App"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
